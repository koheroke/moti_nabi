const socket = new WebSocket('ws://localhost:3080');
import type { alterationToken } from "../composables/applyCreateAction";
import { useApplyCreateAction } from "../composables/applyCreateAction";
const applyCreateAction = useApplyCreateAction()

export type server_alterationTokenType = "set" | "delete" | "arrayPush" | "arrayRemove" | "addMap" | "mapPush" | "mapRemove" | "objectPush" | "objectRemove";
export type server_alterationToken = {
  id: string;
  workId: string;
  userId: string;
  type: server_alterationTokenType;
  path: string[];
  beforeValue?: unknown;
  value: any
  createdAt: number;
};
export interface editWorkToken {
  workId: string,
  tokens: server_alterationToken[]
}

export const useSocketApi = () => { //DB保存

  const sendDb = (token: { id: string, data: editWorkToken }) => {
    socket.send(
      JSON.stringify({
        event: "work:save",
        payload: {
          ...token
        },
      })
    );
  };

  const sendAlteration = (token: server_alterationToken) => { //共同編集
    socket.send(
      JSON.stringify({
        event: "work:alteration",
        payload: JSON.stringify(token),
      })
    );
  };
  return { sendAlteration, sendDb }
}
//共同編集はトークンを送って DB保存は差分を送る

socket.onmessage = (message) => {
  const data = JSON.parse(message.data);

  switch (data.event) {
    case "work:alteration":
      const token = JSON.parse(data.payload) as alterationToken
      applyCreateAction.alterationData(
        token
      );
      break;

    case "work:userJoin":
      console.log("join");
      break;

    case "work:userLeave":
      console.log("leave");
      break;

    default:
      console.warn("unknown event", data.event);
  }
};




// export type server_alterationTokenType = "set" | "delete" | "arrayPush" | "arrayRemove";
// export type server_alterationToken = {
//   id: string;
//   workId: string;
//   userId: string;
//   type: server_alterationTokenType;
//   path: string[];
//   beforeValue?: unknown;
//   value: any
//   createdAt: number;
// };
// export interface editWorkToken {
//   workId: string,
//   tokens: server_alterationToken[]
// }

// export const useSocketApi = () => { //DB保存

// }


