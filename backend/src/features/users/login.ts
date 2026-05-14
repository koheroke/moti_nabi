import { setCookie } from "hono/cookie";
import type { Context } from "hono"
import { sign } from 'hono/jwt'


export type loginInput = {
  email: string
  password: string
}
export const useLogin = () => {
  const login = async (user: loginInput, c: Context) => {
    //emailを使ってDBを探索
    const loginBool = true    //passwardを取り出して照合
    const userId = 1  //userId を取り出す
    const token = await sign(
      {
        userId: userId,
        email: user.email,
      },
      process.env.JWT_SECRET!
    )
    setCookie(c, "login_retention", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return { login: loginBool }
  }
  return { login }
}