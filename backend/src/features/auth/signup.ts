import { prisma } from "@/lib/prisma/prisma"
import argon2 from "argon2";
import { sign } from "hono/jwt"
import { setCookie } from "hono/cookie"
import { env } from "@/constants/env/env"
import type { Context } from "hono"
import { useSession } from "./session";
const this_session = useSession()
export type SignupInput = {
  name: string
  email: string
  password: string
  recaptchaToken: string
}
export const usesignup = () => {
  const singup = async (user: SignupInput, c: Context) => {
    const passwordhash = await argon2.hash(user.password);
    const snsAccounts = [
      { type: "x", link: "" },
      { type: "facebook", link: "" },
      { type: "instagram", link: "" },
    ]
    try {
      const users = await prisma.user.create({
        data: {
          email: user.email,
          profile: {
            create: {
              name: user.name,
              iconUrl: "/images/user/defaultIcon.png",
              bio: "自己紹介",
              snsAccounts: snsAccounts
            },
          },
          auth: {
            create: {
              passwordHash: passwordhash,
            },
          },
        },
        include: {
          profile: true,
          auth: true,
        },
      });


      const token = await sign(
        {
          userId: users.id,
          email: user.email,
          iconUrl: users.profile?.iconUrl ?? "",
        },
        env.JWT_SECRET
      )
      this_session.setLoginSession(c, token)
      return { userId: users.id, res: "users", }
    } catch (e) {
      return { userId: null, res: "error", }
    }
  }
  return { singup }
}

