import "@livekit/components-styles";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  VideoConference,
  useTracks, FocusLayout,
} from "@livekit/components-react";
import axios from "axios";
import React, {  useState } from "react";

const serverUrl = "wss://smart-tnp-app-6ygycraq.livekit.cloud";

const ClassSchedule: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [meetingId, setMeetingId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [isHost, setIsHost] = useState<boolean>(false);

  const handleStartMeeting = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/start-meeting",
        {
          userName,
        },
      );
      setMeetingId(response.data.meetingId);
      setToken(response.data.token);
      setIsHost(true);
    } catch (error) {
      console.error("Error starting meeting:", error);
    }
  };

  const handleJoinMeeting = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/join",
        {
          roomName: meetingId,
          userName,
        },
      );
      setToken(response.data.token);
    } catch (error) {
      console.error("Error joining meeting:", error);
    }
  };

  if (!token) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleStartMeeting}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Start Meeting
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Meeting ID"
            value={meetingId || ""}
            onChange={(e) => setMeetingId(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <button
            onClick={handleJoinMeeting}
            className="bg-green-500 text-white p-2 rounded"
          >
            Join Meeting
          </button>
        </div>
      </div>
    );
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={serverUrl}
      data-lk-theme="default"
      style={{ height: "100vh" }}
    >
      <MyVideoConference />
      {/*<FocusLayout/>*/}
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
};

function MyVideoConference() {
  const tracks = useTracks([
    { source: "camera", withPlaceholder: true },
    { source: "screen_share", withPlaceholder: false },
    {
      source:Track.Source.Camera,withPlaceholder: true,
    }
  ]);

  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      <ParticipantTile />
    </GridLayout>
  );
}

export default ClassSchedule;
