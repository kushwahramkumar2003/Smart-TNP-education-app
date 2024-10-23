// src/components/Video.tsx
import React, { useState, useEffect, useRef } from "react";
// import socket from "../../../lib/socket.ts";

interface VideoProps {
  meetingId: string | null;
  isHost: boolean;
}

const Video: React.FC<VideoProps> = ({ meetingId, isHost }) => {
  const [isConnected, _setIsConnected] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    if (!meetingId) return;

    const handleIceCandidate = (event: RTCPeerConnectionIceEvent) => {
      if (event.candidate) {
        // socket.emit("signal", {
        //   meetingId,
        //   type: "candidate",
        //   candidate: event.candidate,
        // });
      }
    };

    const handleTrack = (event: RTCTrackEvent) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    const createPeerConnection = () => {
      peerConnection.current = new RTCPeerConnection();

      peerConnection.current.onicecandidate = handleIceCandidate;
      peerConnection.current.ontrack = handleTrack;

      // socket.on("signal", async (data) => {
      //   if (peerConnection.current) {
      //     if (data.type === "offer") {
      //       await peerConnection.current.setRemoteDescription(
      //         new RTCSessionDescription(data),
      //       );
      //       const answer = await peerConnection.current.createAnswer();
      //       await peerConnection.current.setLocalDescription(answer);
      //       // socket.emit("signal", { meetingId, type: "answer", answer });
      //     } else if (data.type === "answer") {
      //       await peerConnection.current.setRemoteDescription(
      //         new RTCSessionDescription(data),
      //       );
      //     } else if (data.type === "candidate") {
      //       await peerConnection.current.addIceCandidate(
      //         new RTCIceCandidate(data.candidate),
      //       );
      //     }
      //   }
      // });
    };

    createPeerConnection();

    // return () => {
    //   socket.emit("leaveRoom");
    //   peerConnection.current?.close();
    // };
  }, [meetingId]);

  const startLocalStream = async () => {
    const constraints = { video: true, audio: true };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      if (peerConnection.current) {
        stream
          .getTracks()
          .forEach((track) => peerConnection.current?.addTrack(track, stream));
      }
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const handleJoin = () => {
    if (meetingId) {
      // socket.emit("joinRoom", { meetingId });
      // setIsConnected(true);
      // if (isHost) {
      //   startLocalStream();
      // }
    }
  };

  const handleStartVideo = () => {
    startLocalStream();
  };

  const handleStopVideo = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const tracks = (
        localVideoRef.current.srcObject as MediaStream
      ).getTracks();
      tracks.forEach((track) => track.stop());
      localVideoRef.current.srcObject = null;
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      {!isConnected && (
        <div className="mb-4">
          <button
            onClick={handleJoin}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Join Video Call
          </button>
        </div>
      )}
      <div className="flex space-x-4">
        <video
          ref={localVideoRef}
          autoPlay
          muted
          className="w-1/2 border border-gray-300 rounded"
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          className="w-1/2 border border-gray-300 rounded"
        />
      </div>
      {isHost && isConnected && (
        <div className="mt-4">
          <button
            onClick={handleStartVideo}
            className="bg-green-500 text-white py-2 px-4 rounded mr-2"
          >
            Start Video
          </button>
          <button
            onClick={handleStopVideo}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Stop Video
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
