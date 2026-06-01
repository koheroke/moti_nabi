import type { Server as HttpServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { registerSocketEvents } from "@/features/create/socket/index"
export const useSocket = (server: HttpServer) => {
  const io = new SocketIOServer(server);
  io.on("connection", (socket) => {
    registerSocketEvents(io, socket);
  });
};