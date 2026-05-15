import { getCookie } from "hono/cookie";
import type { Context } from "hono"

export const useSession = () => {

  const loginSession = async (c: Context) => {
    const cookie = await getCookie(c, "login_retention")
    if (!cookie) {
      return undefined
    }
    return cookie
  }

  return { loginSession }
}