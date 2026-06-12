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

  const verificationSessionToken = async (c: Context, token: string) => {
    const payload = await verify(token, env.JWT_SECRET, "HS256")
    if (!payload.userId) return false
    try {
      const userResponse = await prisma.user.findFirst({
        where: {
          id: payload.userId,
        },
        select: {
          id: true,
          email: true,
          auth: {
            select: {
              secoundfaEnabled: true,
            },
          },
          profile: {
            select: {
              name: true,
              iconUrl: true,
            },
          },
        },
      });
      if (userResponse == undefined || userResponse == null) {
        discardToken(c)
        return undefined
      };
      return {
        userId: userResponse?.id,
        authData: { email: userResponse?.email },
        iconUrl: userResponse?.profile?.iconUrl ?? "",
        name: userResponse?.profile?.name ?? "",
        secoundfaEnabled: userResponse?.auth?.secoundfaEnabled ?? false
      }
    } catch {
      return undefined
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