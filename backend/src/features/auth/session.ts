import { deleteCookie, getCookie } from "hono/cookie";
import type { Context } from "hono"
import { setCookie } from "hono/cookie"
import { env } from "@/constants/env/env"
import { verify } from "hono/jwt"
import { prisma } from "@/lib/prisma/prisma"

export const useSession = () => {
  const getLoginSession = async (c: Context) => {
    const cookie = getCookie(c, "auth_token")
    console.log("cookie", cookie)
    if (!cookie) {
      return undefined
    }
    return cookie
  }

  const verificationSessionToken = async (token: string) => {
    const payload = await verify(token, env.JWT_SECRET, "HS256")
    console.log("userRse===", payload)
    if (!payload.userId) return false
    try {
      const userResponse = await prisma.user.findFirst({
        where: {
          id: payload.userId,
        },
        select: {
          id: true,
          email: true,
          profile: {
            select: {
              name: true,
              iconUrl: true,
            },
          },
        },
      });
      if (userResponse == undefined || userResponse == null) return;
      return {
        userId: userResponse?.id, authData: { email: userResponse?.email }, userIconData: { iconUrl: userResponse?.profile?.iconUrl ?? "", name: userResponse?.profile?.name ?? "" }
      }
    } catch {
      return false
    }
  }

  const discardToken = (c: Context) => {
    try {
      deleteCookie(c, "auth_token")
      return "success"
    } catch {
      return "error"
    }
  }


  const setLoginSession = async (c: Context, token: string) => {
    setCookie(c, "auth_token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })
  }
  return { verificationSessionToken, getLoginSession, setLoginSession, discardToken }
}