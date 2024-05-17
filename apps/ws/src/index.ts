import express from "express";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import initializeSocket from "./lib/socket";

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

initializeSocket(io);

app.get("/", (req, res) => {
  res.send("WebRTC Video Call Backend");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
