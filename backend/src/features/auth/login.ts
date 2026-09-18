import type { Context } from "hono"
import { env } from "@/constants/env/env"
import { jwtDecode } from "jwt-decode";
import { prisma } from "@/lib/prisma/prisma"
import argon2 from "argon2";
import { useSession } from '@/features/auth/session';

const this_session = useSession()



if (!env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set")
}

export type LoginInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const login = async (user: LoginInput, c: Context) => {
    //console.log(user)
    const userResponse = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
      include: {
        auth: {
          select: {
            passwordHash: true,
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


    if (!userResponse) return null
    const hash = userResponse.auth?.passwordHash
    if (!hash) return null
    const passward = await argon2.verify(hash, user.password);
    if (!passward) return null
    const this_user = userResponse
    const userId = this_user.id


    await this_session.setProvisionalSession(c, userId, "user")

    return {
      userData: {
        userId: userResponse?.id,
        authData: { email: userResponse?.email },
        iconUrl: userResponse?.profile?.iconUrl ?? "",
        name: userResponse?.profile?.name ?? "",
        secoundfaEnabled: userResponse?.auth?.secoundfaEnabled ?? false,
        tutorialProgress: userResponse?.tutorialProgress
      }
    }
  }
  return { login }
}



export const useGoogleLogin = () => {

  const login = (c: Context) => {
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      new URLSearchParams({
        client_id: env.GOOGLE_CLIENT_ID,
        redirect_uri: "http://localhost:3000/auth/google/callback",
        response_type: "code",
        scope: "openid email profile",
      });
    return c.redirect(url);
  };



  const callback = async (c: Context) => {
    const code = c.req.query("code");
    //console.log("code", code)

    if (!code) {
      return { error: "codeNotFount" }
    }

    const tokenRes = await fetch(
      "https://oauth2.googleapis.com/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          code,
          client_id: env.GOOGLE_CLIENT_ID,
          client_secret: env.GOOGLE_CECRET,
          redirect_uri: "http://localhost:3000/auth/google/callback",
          grant_type: "authorization_code",
        }),
      }
    );
    if (!tokenRes.ok) {
      const error = await tokenRes.text();
      return { error: "tokenNotFount" }
    }

    const tokenData = await tokenRes.json();
    const payload = jwtDecode<{
      email: string;
      sub: string
    }>(tokenData.id_token);

    const email = payload.email;
    const sub = payload.sub
    let account

    if (!account) {
      const userResponse = await prisma.user.findFirst({
        where: {
          email: email
        },
        select: {
          id: true
        }
      });
      if (!userResponse) return { error: "userNotFount" }

      account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: "google",
            providerAccountId: sub,
          },
        },
        select: {
          userId: true,
        }
      });
      if (!account) {
        account = await prisma.account.create({
          data: {
            userId: userResponse.id,
            provider: "google",
            providerAccountId: sub,
          },
        });
      }
    }
    await this_session.setProvisionalSession(c, account.userId, "user")
    return { error: "nonerror" }
  };
  return {
    login,
    callback,
  };
};