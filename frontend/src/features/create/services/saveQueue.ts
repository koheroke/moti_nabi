import type { server_alterationToken, server_alterationTokenType } from "../api/createSocketApi"
import type { alterationType } from "../composables/applyCreateAction"
import { useSocketApi } from "../api/createSocketApi"
import { useAlertStore } from "@/store/feedback/alertStore"
// const alertStore = useAlertStore()
// const socketApi = useSocketApi()

// import { useCreateStore } from "../store/createStore"
// const createStore = useCreateStore()

// export const useSaveQueue = () => {
//   if (createStore.workIdGetter == null) return
//   const queue: server_alterationToken[] = []
//   const push = (token: {
//     user: string, alterationType: alterationType, token: {
//       type: server_alterationTokenType,
//       path: string[],
//       value: any
//     }
//   }) => {
//     const pushDBtoken: server_alterationToken = {
//       id: `id_${queue.length}`,
//       type: token.token.type,
//       beforeValue: null,
//       value: token.token.value,
//       createdAt: Date.now(),
//       path: token.token.path
//     }
//     if (queue.length == 0) {
//       setTimer()
//     }
//     queue.push(pushDBtoken)
//   }
//   const pop = async () => {
//     const res = await socketApi.sendDb(queue)
//     if (res.success == true) {
//       queue.length = 0
//     } else {
//       alertStore.showAlert("保存に失敗しました", true)
//     }
//   }
//   const deleteQueue = () => {
//     queue.length = 0
//   }
//   const setTimer = () => {
//     setTimeout(() => {
//       pop()
//     }, 3000)
//   }
//   return {
//     push, pop, deleteQueue
//   }
// }