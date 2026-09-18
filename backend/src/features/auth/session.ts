import { deleteCookie, getCookie } from "hono/cookie";
import type { Context } from "hono"
import { setCookie } from "hono/cookie"
import { env } from "@/constants/env/env"
import { verify } from "hono/jwt"
import { prisma } from "@/lib/prisma/prisma"
import { sign } from "hono/jwt"
export type sessionNames = "auth_token" | "provisional_auth_token"

export const useSession = () => {
  const getLoginSession = async (c: Context) => {
    let token = getCookie(c, "auth_token")
    let tokenName: sessionNames = "auth_token"
    if (!token) {
      const provisionalToken = getCookie(c, "provisional_auth_token")
      if (!provisionalToken) {
        return undefined
      }
      token = provisionalToken
      tokenName = "provisional_auth_token"
    }
    const userData = verificationSessionToken(c, token, tokenName)
    if (!userData) {
      return undefined
    }
    return userData
  }


  const verificationSessionToken = async (c: Context, token: string, tokenName: sessionNames) => {
    try {
      const payload = await verify(token, env.JWT_SECRET, "HS256")

      if (!payload.sub || typeof payload.sub !== "string" || !payload.exp) {
        return undefined
      }
      if (payload.exp > Date.now()) {
        discardToken(c, tokenName)
        return undefined
      }


      const userResponse = await prisma.user.findUnique({
        where: {
          id: payload.sub,
        },
        select: {
          id: true,
          tutorialProgress: true,
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
      })

      if (!userResponse) {
        discardToken(c, tokenName)
        return undefined
      }

      return {
        userId: userResponse.id,
        authData: {
          email: userResponse.email,
        },
        iconUrl: userResponse.profile?.iconUrl ?? "",
        name: userResponse.profile?.name ?? "",
        secoundfaEnabled: tokenName == "auth_token" ? true : false,
        tutorialProgress: userResponse.tutorialProgress,
      }
    } catch {
      discardToken(c, "auth_token")
      return undefined
    }
  }

  const discardToken = (c: Context, tokenName: sessionNames) => {
    try {
      console.log("deleteCookie")
      deleteCookie(c, tokenName)
      return "success"
    } catch {
      return "error"
    }
  }


  const setLoginSession = async (c: Context, userId: string, role: string) => {
    const now = Math.floor(Date.now() / 1000)
    console.log("userId", userId, "role", role)
    const timer = 60 * 60 * 24 * 30
    const payload = {
      sub: userId,
      role,
      iat: now,
      exp: now + timer
    }
    const token = await sign(payload, env.JWT_SECRET)
    console.log("timer:", timer)
    console.log("token length:", token.length)
    setCookie(c, "auth_token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: timer,
      path: "/",
    })
  }

  const verificationLoginToken = async (c: Context, userId: string) => {
    const token = getCookie(c, "auth_token")
    if (!token) {
      return false;
    }
    const payload = await verify(token, env.JWT_SECRET, "HS256")
    if (!payload.sub) return false;
    if (userId != payload.sub) return false;
    return {
      sub: payload.sub,
      iat: payload.iat,
      exp: payload.exp,
      role: payload.role
    }
  }
  const verificationProvisionalLoginToken = async (c: Context, userId: string) => {
    const token = getCookie(c, "provisional_auth_token")
    if (!token) {
      return false;
    }
    const payload = await verify(token, env.JWT_SECRET, "HS256")
    if (!payload.sub) return false;
    if (userId != payload.sub) return false;
    return {
      sub: payload.sub,
      iat: payload.iat,
      exp: payload.exp,
      role: payload.role
    }
  }

  const setProvisionalSession = async (c: Context, userId: string, role: string) => {
    const now = Math.floor(Date.now() / 1000)
    const timer = 60 * 60 * 24 * 7
    const payload = {
      sub: userId,
      role,
      iat: now,
      exp: now + timer
    }
    const token = await sign(payload, env.JWT_SECRET)
    setCookie(c, "provisional_auth_token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: timer,
      path: "/",
    })
  }




  return { verificationLoginToken, verificationSessionToken, getLoginSession, setLoginSession, discardToken, setProvisionalSession, verificationProvisionalLoginToken }
}