const socket = new WebSocket('ws://localhost:3080');
import type { queueTokens } from "../services/saveQueue";
export const useSocketApi = () => {
  const sendAlteration = (alterationQueue: queueTokens) => {
    const data = JSON.stringify(alterationQueue)
    socket.send(data);
  };
  return { sendAlteration }
}
