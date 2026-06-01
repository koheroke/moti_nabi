import { prisma } from "@/lib/prisma/prisma"

export type SignupInput = {
  name: string
  email: string
  password: string
  recaptchaToken: string
}
export const usesignup = () => {
  const singup = async (user: SignupInput) => {
    const users = await prisma.user.create({
      data: {
        email: user.email,
        passwordHash: user.password,
        name: user.name,
        followUserIds: [],
        bookmarkWorkIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        twoFactorSecret: null,
        iconUrl: null,
      }
    })
    return { userId: users.id, res: "users", }
  }
  return { singup }
}

