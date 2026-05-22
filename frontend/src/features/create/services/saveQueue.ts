import type { alterationToken } from "../composables/applyCreateAction"


export const useSaveQueue = () => {
  const queue: alterationToken[] = []
  const push = (token: alterationToken) => {
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