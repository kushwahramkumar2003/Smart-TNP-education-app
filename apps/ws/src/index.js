import express from "express";
import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import dotenv from "dotenv";
import cors from "cors";
import { randomUUID } from "crypto";
import prisma from "./prisma.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const livekitHost = process.env.LIVEKIT_URL;
const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;

const roomService = new RoomServiceClient(livekitHost, apiKey, apiSecret);

app.post("/api/v1/start-meeting", async (req, res) => {
  const { liveClassName, hostedBy } = req.body;

  // Input validation
  if (!liveClassName || !hostedBy) {
    return res
      .status(400)
      .json({ error: "liveClassName and hostedBy are required" });
  }

  try {
    const meetingId = randomUUID();

    // Create access token for the meeting
    const at = new AccessToken(apiKey, apiSecret, {
      identity: hostedBy,
    });
    at.addGrant({ roomCreate: true, roomJoin: true, room: meetingId });

    const token = await at.toJwt();

    // Create a new LiveClass entry in the database
    const newLiveClass = await prisma.liveClass.create({
      data: {
        id: meetingId, // Make sure the Prisma model id matches the meetingId
        className: liveClassName,
        hostedBy,
        token,
      },
    });

    res.json({ meetingId, token, liveClassName });
  } catch (error) {
    console.error("Error starting meeting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/v1/join", async (req, res) => {
  const { roomName, userName } = req.body;
  const at = new AccessToken(apiKey, apiSecret, {
    identity: userName || "user3",
  });
  at.addGrant({ roomJoin: true, room: roomName });

  const token = await at.toJwt();
  res.json({ token });
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
