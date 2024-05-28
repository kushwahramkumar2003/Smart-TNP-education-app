import asynchHandler from "../utils/asynchHandler";
import { randomUUID } from "node:crypto";
import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import config from "../config";

const roomService = new RoomServiceClient(
  config.LIVEKIT_URL,
  config.LIVEKIT_API_KEY,
  config.LIVEKIT_API_SECRET,
);
export const startNewMeeting = asynchHandler(
  async (req, res) => {
    //@ts-ignore
    const user = req?.user;
    // const { userName } = req.body;
    const userName = user.name;
    const meetingId = randomUUID();
    const at = new AccessToken(
      config.LIVEKIT_API_KEY,
      config.LIVEKIT_API_SECRET,
      {
        identity: userName || "",
      },
    );
    at.addGrant({ roomCreate: true, roomJoin: true, room: meetingId });

    const token = await at.toJwt();
    console.log("mettingId", meetingId);
    res.json({ meetingId, token });
  },
);

export const joinToMeeting = asynchHandler(
  async (req, res) => {
    const { roomName } = req.body;
    //@ts-ignore
    const user = req?.user ;
    // const { userName } = req.body;
    const userName = user.name;
    const at = new AccessToken(
      config.LIVEKIT_API_KEY,
      config.LIVEKIT_API_SECRET,
      {
        identity: userName || "user...",
      },
    );
    at.addGrant({ roomJoin: true, room: roomName });

    const token = await at.toJwt();
    res.json({ token });
  },
);
