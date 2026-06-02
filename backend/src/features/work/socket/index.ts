import { Server, Socket } from "socket.io";
import { setupCollaborationSocket } from "./collaboration";
import { setupPersistenceSocket } from "./persistence";

export const registerSocketEvents = (
  io: Server,
  socket: Socket
) => {

  setupCollaborationSocket(io, socket);
  setupPersistenceSocket(io, socket);
};