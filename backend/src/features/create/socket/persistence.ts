import { Server, Socket } from "socket.io";
import { useCreateWork } from "../createWork";
import { editWorkToken } from "@/features/create/types"

const createWork = useCreateWork()
export const setupPersistenceSocket = (io: Server, socket: Socket) => {
  socket.on("work:save", (data: { id: string, token: editWorkToken }) => {
    createWork.editWork(data.id, data.token)
  });
}