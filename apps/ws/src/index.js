import express from "express";
import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import dotenv from "dotenv";
import cors from "cors";
import { randomUUID } from "crypto";

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
  const { userName } = req.body;
  const meetingId = randomUUID();
  const at = new AccessToken(apiKey, apiSecret, {
    identity: userName,
  });
  at.addGrant({ roomCreate: true, roomJoin: true, room: meetingId });

  const token = await at.toJwt();
  console.log("mettingId", meetingId);
  res.json({ meetingId, token });
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

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
