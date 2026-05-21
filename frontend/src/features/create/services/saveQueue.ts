import type { addPreviewItemToken } from "../composables/useCreateWork"

export type queueTokens = addPreviewItemToken
export const useSaveQueue = () => {
  const queue: queueTokens[] = []
  const push = (token: queueTokens) => {
    if (queue.length == 0) {
      setTimer()
    }
    queue.push(token)
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