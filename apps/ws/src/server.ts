import express from "express";
import http from "http";
import { Server } from "socket.io";
import { createClient } from "redis";
import config from "./config";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const client = createClient({
  password: config.REDIS_PASSWORD,
  socket: {
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT) || 6379,
  },
});

interface Room {
  host: string | null;
  clients: string[];
}

const rooms: Record<string, Room> = {};

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  socket.on("startStream", (callback) => {
    const meetingId = Math.random().toString(36).substr(2, 9);
    rooms[meetingId] = { host: socket.id, clients: [] };
    socket.join(meetingId);
    callback(meetingId);
  });

  socket.on("joinRoom", ({ meetingId }) => {
    const room = rooms[meetingId];
    if (room) {
      if (!room.host) {
        room.host = socket.id;
      } else {
        room.clients.push(socket.id);
      }
      socket.join(meetingId);
      socket.emit("joinedRoom", { host: room.host === socket.id });
      io.to(meetingId).emit("updateClients", room.clients);
    } else {
      socket.emit("error", "Invalid meeting ID");
    }
  });

  socket.on("signal", ({ meetingId, data }) => {
    socket.to(meetingId).emit("signal", data);
  });

  socket.on("message", ({ meetingId, message }) => {
    io.to(meetingId).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
    for (const meetingId in rooms) {
      const room = rooms[meetingId];
      if (room.host === socket.id) {
        room.host = null;
        io.to(meetingId).emit("hostDisconnected");
      } else {
        const clientIndex = room.clients.indexOf(socket.id);
        if (clientIndex !== -1) {
          room.clients.splice(clientIndex, 1);
        }
      }
      io.to(meetingId).emit("updateClients", room.clients);
    }
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
