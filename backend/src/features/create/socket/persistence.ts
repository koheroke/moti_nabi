import { Server, Socket } from "socket.io";
import { useCreateWork } from "../createWork";
const createWork = useCreateWork()
export const setupPersistenceSocket = (io: Server, socket: Socket) => {
  socket.on("work:save", (data: { id: string, data: string }) => {
    createWork.editWork(data.id, data.data)
  });
}