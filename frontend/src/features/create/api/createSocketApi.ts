import { type alterationToken } from "../composables/applyCreateAction";
import { useApplyCreateAction } from "../composables/applyCreateAction";
import { useCreateStore } from "../store/createStore"

import { io } from "socket.io-client";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const createStore = useCreateStore()
const socket = io(apiUrl);


export type server_alterationTokenType = "set" | "delete" | "arrayPush" | "arrayRemove" | "objectPush" | "objectRemove";
export type server_alterationToken = {
  id: string;
  type: server_alterationTokenType;
  beforeValue?: unknown;
  value: any
  createdAt: number;
  path: string[];
};

export const useSocketApi = () => {
  const sendDb = (data: server_alterationToken[]): Promise<{ success: boolean, error?: string }> => {
    if (!createStore.workIdGetter || data.length == 0) { success: false };
    const queue = JSON.stringify({
      workId: createStore.workIdGetter,
      data,
    })
    return new Promise((resolve) => {
      socket.emit("work:save", queue, (response: { success: boolean, error?: string }) => {
        resolve(response)
      })
    })
  };

  const sendAlteration = (token: server_alterationToken) => {
    socket.emit("work:alteration", token);
  };
  return { sendAlteration, sendDb };
};


export const getAlteration = () => {
  const applyCreateAction = useApplyCreateAction()
  socket.on("work:alteration", (token: alterationToken) => {
    if (!applyCreateAction) return
    applyCreateAction.alterationData(token);
  });
  socket.on("work:userJoin", () => {
    console.log("join");
  });
  socket.on("work:userLeave", () => {
    console.log("leave");
  })
};