import { Server, Socket } from "socket.io";
import { useSaveQueue } from "../saveQueue";
import { type alterationToken, type server_alterationToken } from "../saveQueue";
const saveQueue = useSaveQueue()
export const setupCollaborationSocket = (io: Server, socket: Socket) => {
  socket.on("work:alteration", (token: { alterationToken: alterationToken, sendDbToken: server_alterationToken }) => {
    const workId = socket.data.workId
    if (workId == undefined) return
    saveQueue.push(workId, token)
    io.to(workId).emit("work:alteration", token.alterationToken);
  });

  socket.on("work:kick", (token: { workId: string, kickedUserId: string }) => {
    const workId = socket.data.workId
    if (workId == undefined) return
    socket.to(workId).emit("work:kicked", token.kickedUserId);
  });


  socket.on("joinRoom", (workId: string, callback) => {
    //console.log("joinRoom", workId)
    socket.data.workId = workId
    socket.join(workId);
    const queue = saveQueue.getQueue(workId)
    const alterationTokens = queue.map((token) => token.alterationToken)
    return callback({ alterationTokens: alterationTokens });
  });
}