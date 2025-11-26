import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const server = http.createServer(app);

const io = new Server(Server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected ", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected ", socket.id);
  });
});

export { io, app, server };
