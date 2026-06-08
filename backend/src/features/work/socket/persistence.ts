import { Server, Socket } from "socket.io";
import { useWork } from "../createWork";


const createWork = useWork()
export const setupPersistenceSocket = (io: Server, socket: Socket) => {

  socket.on('work/join', (workId: string) => {
    socket.join(workId);
  });
  socket.on("work:save", async (data: string, callback) => {
    const queue = JSON.parse(data)
    await createWork.editWork(queue.workId, queue.data)
    try {
      console.log("savqueuee", queue)
      await createWork.editWork(queue.workId, queue.data)
      callback({
        success: true
      })
    } catch (error) {
      callback({
        success: false,
        error: String(error)
      })
    }
  });
}