import type { Router } from "vue-router"
import type { Pinia } from "pinia"
import { useUserAuthStore } from "@/store/user/userAuthStore"
import { useDialogStore } from "@/store/feedback/dialogStore"
const auths = ['login', 'signup', '2fa', 'forgotPassward', 'session', 'googleCallback', 'entry', '/session']
export const useRouterBlock = (router: Router, pinia: Pinia) => {
  router.beforeEach((to) => {
    const userAuthStore = useUserAuthStore(pinia)
    const dialogStore = useDialogStore(pinia)
    const path = to.name ? to.name as string : ""
    //console.log(path)
    if (!auths.includes(path)) {
      if (
        userAuthStore.isAuthenticatedGetter == false &&
        userAuthStore.isTempAuthenticatedGetter == false
      ) {
        //console.log("login")
        router.push("/login")
      }
    }
    if (to.name == "create" || to.name == "user") {
      //console.log("userAuthStore.isAuthenticatedGetter", userAuthStore.isAuthenticatedGetter)
      //console.log("userAuthStore.isTempAuthenticatedGetter", userAuthStore.isTempAuthenticatedGetter)
      if (
        userAuthStore.isAuthenticatedGetter &&
        !userAuthStore.isTempAuthenticatedGetter
      ) {
        dialogStore.showDialog(
          "2段階認証を行いますか",
          "この機能の使用には2段階認証が必要です",
          () => {
            router.push("/2fa")
          },
        )
        return false
      }
    }

    return true
  })
}