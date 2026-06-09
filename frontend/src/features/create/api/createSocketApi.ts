import { type alterationToken } from "../composables/applyCreateAction";
import { useApplyCreateAction } from "../composables/applyCreateAction";
import { useCreateStore } from "../store/createStore"
import { io } from "socket.io-client";
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

  const sendAlteration = (token: { alterationToken: alterationToken, sendDbToken: server_alterationToken }) => {
    console.log("sendAlteration", token)
    socket.emit("work:alteration", token);
  };

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
  return { sendAlteration, joinWorkRoom };
};


export const getAlteration = () => {
  const applyCreateAction = useApplyCreateAction()
  socket.on("work:alteration", (token: alterationToken) => {
    if (!applyCreateAction) return
    applyCreateAction.alterationData(token, true);
  });
  socket.on("work:userJoin", () => {
    console.log("join");
  });
  socket.on("work:userLeave", () => {
    console.log("leave");
  })
};