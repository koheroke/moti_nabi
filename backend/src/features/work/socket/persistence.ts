import { Server, Socket } from "socket.io";
import { useWork } from "../createWork";
import { editWorkToken } from "@/features/work/types"

const createWork = useWork()
export const setupPersistenceSocket = (io: Server, socket: Socket) => {
  socket.on("work:save", (data: { id: string, token: editWorkToken }) => {
    createWork.editWork(data.id, data.token)
  });
}