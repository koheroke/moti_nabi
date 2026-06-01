import { Server, Socket } from "socket.io";
export const setupCollaborationSocket = (io: Server, socket: Socket) => {
  socket.on("work:alteration", (token: string) => {
    socket.emit("work:alteration", token);
  });
}