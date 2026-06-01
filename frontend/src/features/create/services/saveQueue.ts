import type { server_alterationToken, server_alterationTokenType } from "../api/createSocketApi"
import type { alterationToken, alterationType } from "../composables/applyCreateAction"

import { useCreateStore } from "../store/createStore"
const createStore = useCreateStore()
const tokenMap = {
  previewItems_additem: {
    path: [],
    type: "arrayPush",
  },

  previewItems_addcount: {
    path: [],
    type: "set",
  },

  itemlistItems_bookmark: {
    path: [],
    type: "arrayPush",
  },

  previewItems_delete: {
    path: [],
    type: "arrayRemove",
  },

  itemlistItems_additem: {
    path: [],
    type: "set",
  },

  previewCases_addCase: {
    path: [],
    type: "set",
  },

  previewCases_deleteCase: {
    path: [],
    type: "delete",
  },

  "confirmed-resizePocket": {
    path: [],
    type: "set",
  },
} satisfies Record<alterationType, { path: string[]; type: server_alterationTokenType }>;


export const useSaveQueue = () => {
  if (!createStore.workIdGetter == null) return
  const queue: server_alterationToken[] = []
  const push = (token: { user: string, alterationType: alterationType, token: any }) => {
    const pushDBtoken: server_alterationToken = {
      id: `id_${queue.length}`,
      workId: createStore.workIdGetter as string,
      userId: token.user,
      type: tokenMap[token.alterationType].type,
      path: tokenMap[token.alterationType].path,
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