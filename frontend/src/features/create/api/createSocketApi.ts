const socket = new WebSocket('ws://localhost:3080');
import type { alterationToken } from "../composables/applyCreateAction";
import { useUserStore } from "@/store/user/userStore";
import { useApplyCreateAction } from "../composables/applyCreateAction";
const applyCreateAction = useApplyCreateAction()
const userStore = useUserStore()
type soketType = "alteration"
type data = alterationToken
interface socketToken { data: data, type: soketType }
export const useSocketApi = () => {
  const sendAlteration = (alterationQueue: alterationToken) => {
    const data = { data: alterationQueue, type: "alteration" }
    socket.send(JSON.stringify(data));
  };
  return { sendAlteration }
}


socket.onmessage = (event) => {
  const parsedData = JSON.parse(event.data) as socketToken
  switch (parsedData.type) {
    case "alteration":
      onAlterationToken(parsedData)
      break;
  }
}

const onAlterationToken = (parsedData: socketToken) => {
  if (parsedData.data.user != userStore.userId) {
    applyCreateAction.alterationData(parsedData.data)
  }
}