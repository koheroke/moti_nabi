
export type alterationType = "previewItems_additem"
  | "previewItems_addcount"
  | "itemlistItems_bookmark"
  | "previewItems_delete"
  | "itemlistItems_additem"
  | "previewCases_addCase"
  | "previewCases_deleteCase"
  | "confirmed_resizePocket"
  | "confirmed_removePocket"
  | "pocket_hardDelete"
  | "pocket_LogicalDelete"
  | "case_hardDelete"
  | "case_logicalDelete"
  | "pocket_logicalDelete"
  | "preview_addTemplate"



export interface alterationToken {
  token: any
  alterationType: alterationType
  user: string
}

export type server_alterationTokenType = "move" | "set" | "delete" | "arrayPush" | "arrayRemove" | "objectPush" | "objectRemove";
export type server_alterationToken = {
  type: server_alterationTokenType;
  value: any
  createdAt: number;
  path: string[];
  thumbnailEdit: boolean;
};

interface pendingTokenType {
  sendDbToken: server_alterationToken,
  alterationToken: alterationToken
}
import { useWork } from "./work";
const usework = useWork()

export const useSaveQueue = () => {
  const queues = new Map<string, pendingTokenType[]>()
  const timers = new Map<string, ReturnType<typeof setTimeout>>()

  const getQueue = (workId: string) => {
    //console.log("queues", queues)
    //console.log("timers", timers)
    if (!queues.has(workId)) {
      queues.set(workId, [])
    }

    return queues.get(workId)!
  }

  const push = (workId: string, token: pendingTokenType) => {
    const queue = getQueue(workId)

    queue.push(token)

    if (!timers.has(workId)) {
      setTimer(workId)
    }
  }

  const pop = async (workId: string) => {
    const queue = getQueue(workId)
    if (queue.length === 0) return

    const dbTokens = queue.map((token) => token.sendDbToken)

    const res = await usework.editWork(workId, dbTokens)

    if (res?.success === true) {
      queue.length = 0
      timers.delete(workId)
    }
  }

  const setTimer = (workId: string) => {
    const timer = setTimeout(() => {
      pop(workId)
    }, 3000)

    timers.set(workId, timer)
  }

  const deleteQueue = (workId: string) => {
    queues.delete(workId)

    const timer = timers.get(workId)
    if (timer) clearTimeout(timer)

    timers.delete(workId)
  }

  return {
    push,
    pop,
    getQueue,
    deleteQueue,
  }
}