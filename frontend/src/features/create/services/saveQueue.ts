import type { server_alterationToken, server_alterationTokenType } from "../api/createSocketApi"
import type { alterationToken, alterationType } from "../composables/applyCreateAction"

import { useCreateStore } from "../store/createStore"
const createStore = useCreateStore()


export const useSaveQueue = () => {
  if (!createStore.workIdGetter == null) return
  const queue: server_alterationToken[] = []
  const push = (token: {
    user: string, alterationType: alterationType, token: {
      type: server_alterationTokenType,
      path: string[],
      value: any
    }
  }) => {
    const pushDBtoken: server_alterationToken = {
      id: `id_${queue.length}`,
      workId: createStore.workIdGetter as string,
      userId: token.user,
      type: token.token.type,
      path: token.token.path,
      beforeValue: null,
      value: token.token,
      createdAt: Date.now()
    }
    if (queue.length == 0) {
      setTimer()
    }
    queue.push(pushDBtoken)
  }
  const pop = () => {
    queue.length = 0;

  }
  const setTimer = () => {
    setTimeout(() => {
      pop()
    }, 3000)
  }
  return {
    push, pop
  }
}