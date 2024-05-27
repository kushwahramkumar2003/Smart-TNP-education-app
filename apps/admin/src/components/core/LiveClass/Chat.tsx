// src/components/Chat.tsx
import React, { useState, useEffect } from "react";
import socket from "../../../lib/socket.ts";

interface ChatProps {
  meetingId: string | null;
}

const Chat: React.FC<ChatProps> = ({ meetingId }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    socket.on("message", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && meetingId) {
      socket.emit("message", { meetingId, message });
      setMessage("");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded">
      <div className="max-h-48 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white p-2 rounded mb-2 shadow">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
