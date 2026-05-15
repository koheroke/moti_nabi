import { setCookie } from "hono/cookie"
import type { Context } from "hono"
import { sign } from "hono/jwt"
import { env } from "@/constants/env/env"
import { DBdriver } from "../drivers/DBdriver"
import { jwtDecode } from "jwt-decode";


export type User = {
  id: number
  name: string
  email: string
  role?: string
}


if (!env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set")
}

export type LoginInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const login = async (user: LoginInput, c: Context): Promise<User | null> => {
    // TODO: emailを使ってDBを検索
    // TODO: passwordを照合
    const this_user = DBdriver.getUserToDB(user.email)
    const loginBool = true
    //テスト用

    const userId = 1

    if (!loginBool) {
      return null
    }

    const token = await sign(
      {
        userId,
        email: user.email,
      },
      env.JWT_SECRET
    )

    setCookie(c, "auth_token", token, {
      httpOnly: true,
      secure: true,
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

    const tokenData = await tokenRes.json();
    const payload = jwtDecode<{
      email: string;
    }>(tokenData.id_token);

    //テスト用
    const this_user = await DBdriver.getUserToDB(payload.email)
    const loginBool = true
    //用
    const token = await sign(
      {
        id: this_user.id,
        email: this_user.email,
      },
      env.JWT_SECRET
    )
    setCookie(c, "auth_token", token, {
      httpOnly: true,
      secure: true,
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