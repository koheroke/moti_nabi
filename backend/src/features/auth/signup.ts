import { prisma } from "@/lib/prisma/prisma"
import argon2 from "argon2";
import type { User } from "@/generated/prisma/client";
export type SignupInput = {
  name: string
  email: string
  password: string
  recaptchaToken: string
}
export const usesignup = () => {
  const singup = async (user: SignupInput) => {
    const passwordhash = await argon2.hash(user.password);
    let users: User = {} as User
    try {
      users = await prisma.user.create({
        data: {
          email: user.email,
          passwordHash: passwordhash,
          name: user.name,
          followUserIds: [],
          bookmarkWorkIds: [],
          createdAt: new Date(),
          updatedAt: new Date(),
          twoFactorSecret: null,
          iconUrl: null,
        }
      })
    } catch (e) {
      return { userId: null, res: "users", }
    } finally {
      return { userId: users.id, res: "users", }
    }
  }
  return { singup }
}

