import { Server as SocketIOServer, Socket } from "socket.io";
import redisClient from "./redisClient";

interface CustomSocket extends Socket {
  roomId?: string;
}

const initializeSocket = (io: SocketIOServer) => {
  io.on("connection", (socket: CustomSocket) => {
    console.log("New client connected");

    socket.on("joinRoom", (roomId: string) => {
      socket.join(roomId);
      socket.roomId = roomId;
      console.log(`Client joined room: ${roomId}`);
    });

    socket.on("leaveRoom", () => {
      if (socket.roomId) {
        socket.leave(socket.roomId);
        console.log(`Client left room: ${socket.roomId}`);
        socket.roomId = undefined;
      }
    });

    socket.on("signal", (data) => {
      const { roomId, signalData } = data;
      io.to(roomId).emit("signal", signalData);
    });

    socket.on("message", (data) => {
      const { roomId, message } = data;
      redisClient.publish(roomId, message);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
      if (socket.roomId) {
        socket.leave(socket.roomId);
      }
    });
  });

  redisClient.subscribe("chat", (err, count) => {
    if (err) {
      //@ts-ignore
      console.error("Failed to subscribe: %s", err.message);
    } else {
      console.log(
        `Subscribed successfully! This client is currently subscribed to ${count} channels.`,
      );
    }
  });

  redisClient.on("message", (channel, message) => {
    const parsedMessage = JSON.parse(message);
    io.to(parsedMessage.roomId).emit("message", parsedMessage);
  });
};

export default initializeSocket;
