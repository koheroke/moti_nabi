import { type alterationToken } from "../composables/applyCreateAction";
import { useApplyCreateAction } from "../composables/applyCreateAction";
import { useCreateStore } from "../store/createStore"
import { io } from "socket.io-client";
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthstore = useUserAuthStore()
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const createStore = useCreateStore()
const socket = io(apiUrl);


export type server_alterationTokenType = "set" | "delete" | "arrayPush" | "arrayRemove" | "objectPush" | "objectRemove";
export type server_alterationToken = {
  type: server_alterationTokenType;
  value: any
  createdAt: number;
  path: string[];
};

export const useSocketApi = () => {
  socket.off("work:kicked");
  const sendAlteration = (token: { alterationToken: alterationToken, sendDbToken: server_alterationToken }) => {
    //console.log("sendAlteration", token)
    socket.emit("work:alteration", token);
  };
  const leaveRoom = () => {
    const workId = createStore.workIdGetter
    if (!workId) return
    socket.emit("leaveRoom", workId)
  }
  const kick = (kickedUserId: string) => {
    const workId = createStore.workIdGetter
    if (!workId) return
    socket.emit("work:kick", { workId: workId, kickedUserId: kickedUserId }
    )
  }
  const joinWorkRoom = (): Promise<alterationToken[]> | null => {
    const workId = createStore.workIdGetter
    if (!workId) return null
    getAlteration()
    return new Promise((resolve) => {
      socket.emit("joinRoom", workId, (response: { alterationTokens: alterationToken[] }) => {
        resolve(response.alterationTokens)
      })
    })
  }
  return { sendAlteration, joinWorkRoom, leaveRoom, kick };
};


export const getAlteration = () => {
  const applyCreateAction = useApplyCreateAction()
  socket.on("work:alteration", (token: alterationToken) => {
    if (!applyCreateAction) return
    applyCreateAction.alterationData(token, true);
  });
  socket.on("work:userJoin", () => {
    //console.log("join");
  });
  socket.on("work:userLeave", () => {
    //console.log("leave");
  })
  socket.on("work:kicked", (kickedUserId: string) => {
    if (kickedUserId == userAuthstore.userIdGetter) {
      applyCreateAction.kicked()
    }
  })
};