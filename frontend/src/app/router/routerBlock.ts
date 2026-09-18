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
        const blockPaths = ["create", "home", "gallery", "detail", "user"];
        if (blockPaths.includes(path)) {
          return {
            path: "/session",
            query: {
              redirect: to.fullPath,
            },
          };
        }
      }
    }

    return true
  })
}


