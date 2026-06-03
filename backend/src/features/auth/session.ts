import { getCookie } from "hono/cookie";
import type { Context } from "hono"
import { setCookie } from "hono/cookie"
import { env } from "@/constants/env/env"
export const useSession = () => {

  const getLoginSession = async (c: Context) => {
    const cookie = getCookie(c, "login_retention")
    console.log("cookie", cookie)
    if (!cookie) {
      return undefined
    }
    return cookie
  }


  const setLoginSession = async (c: Context, token: string) => {
    setCookie(c, "login_retention", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })
  }
  return { getLoginSession, setLoginSession }
}