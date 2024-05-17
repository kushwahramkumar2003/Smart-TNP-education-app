import { createClient } from "redis";
import config from "../config";

const client = createClient({
  password: config.REDIS_PASSWORD,
  socket: {
    host: config.REDIS_HOST,
    port: Number(config.REDIS_PORT) || 6379,
  },
});

client.on("error", (err) => {
  console.error("Redis client not connected to the server:", err);
});

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.connect();

export default client;
