import { prisma } from "@/lib/prisma/prisma";
import { Prisma } from "@/generated/prisma/client";
import { type RequireAtLeastOne } from "@/types/atLeastOne";
import { error } from "node:console";


export interface edit {
  name: string
  iconUrl: string
  bio: string
  snsAccounts: { type: string, link: string }[]
  followUserIds: string[]
  bookmarkWorkIds: string[]
}
type editdata = RequireAtLeastOne<edit>

export const useUserWork = () => {
  const setProfileEdit = async (userId: string, data: editdata) => {
    try {
      await prisma.userProfile.update({
        where: {
          userId: userId,
        },
        data: {
          ...data,
          snsAccounts:
            data.snsAccounts === null
              ? Prisma.JsonNull
              : (data.snsAccounts as Prisma.InputJsonValue),
        },
      });
      return "success"
    }
    catch {
      return "error"
    }
  }

  const getProfile = async (userid: string) => {
    const userResponse = await prisma.userProfile.findFirst({
      where: {
        userId: userid
      },
    });
    console.log("userResponse", userResponse)
    return userResponse
  }
  return { setProfileEdit, getProfile }

}