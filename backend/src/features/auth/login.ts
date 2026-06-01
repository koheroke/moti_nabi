import { setCookie } from "hono/cookie"
import type { Context } from "hono"
import { sign } from "hono/jwt"
import { env } from "@/constants/env/env"
import { jwtDecode } from "jwt-decode";
import { prisma } from "@/lib/prisma/prisma"
import { User } from "@/lib/prisma/prismaType"




if (!env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set")
}

export type LoginInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const login = async (user: LoginInput, c: Context): Promise<User | string> => {
    const userResponse = await prisma.user.findFirst({
      where: {
        email: user.email
      }
    });
    if (!userResponse) return "notfoundUser"
    const this_user = userResponse.passwordHash == user.password ? userResponse : null
    if (!this_user) return "notdifferentPassward"
    const userId = this_user.id
    const token = await sign(
      {
        userId,
        email: user.email,
      },
      env.JWT_SECRET
    )

    setCookie(c, "auth_token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })

    return this_user
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

    if (!code) {
      return c.json(
        { error: "code not found" },
        400
      );
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
          redirect_uri:
            "http://localhost:3000/auth/google/callback",
          grant_type: "authorization_code",
        }),
      }
    );
    if (!tokenRes.ok) {
      const error = await tokenRes.text();
      return c.json({ error: "token exchange failed", detail: error }, 400);
    }

    const tokenData = await tokenRes.json();

    const payload = jwtDecode<{
      email: string;
      sub: string
    }>(tokenData.id_token);

    const email = payload.email;
    const sub = payload.sub


    let account = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider: "google",
          providerAccountId: sub,
        },
      },
    })

    if (!account) {
      const userResponse = await prisma.user.findFirst({
        where: {
          email: email
        }
      });
      if (!userResponse) return c.json({ error: "token exchange failed", detail: "userNotFound" }, 400);

      account = await prisma.account.create({
        data: {
          userId: userResponse?.id,
          provider: "google",
          providerAccountId: sub,
        },
      })
    }


    const token = await sign(
      {
        id: account.userId,
        email: email,
      },
      env.JWT_SECRET
    )

    setCookie(c, "auth_token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })
  };
  return {
    login,
    callback,
  };
};