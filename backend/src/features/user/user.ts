import { prisma } from "@/lib/prisma/prisma";
import { Prisma } from "@/generated/prisma/client";
import { type RequireAtLeastOne } from "@/types/atLeastOne";
import argon2 from "argon2";
import { useSession } from "../auth/session";
import type { Context } from "hono"
const this_session = useSession()

export interface edit {
  name: string
  iconUrl: string
  bio: string
  snsAccounts: { type: string, link: string }[]
  followUserIds: string[]
  bookmarkWorkIds: string[]
}
type editdata = RequireAtLeastOne<edit>


export const useUser = () => {

  const finishTutorial = async (tutorialId: string, userId: string) => {

    console.log("tutorialId", tutorialId)
    if (!tutorialId || !userId) return;
    const userInfo = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        tutorialProgress: true,
      }
    })
    if (!userInfo) return;
    const newTutorialProgress =
      (userInfo?.tutorialProgress as Record<string, boolean>) ?? {};
    newTutorialProgress[tutorialId] = true
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        tutorialProgress: newTutorialProgress
      }
    })
  }

  const deleteUser = async (c: Context, userId: string, password: string) => {
    //console.log("deleteUser", userId)
    //console.log("password", password)
    const user = await prisma.userAuth.findFirst({

      select: {
        passwordHash: true,
      }
    }
    )
    const hash = user?.passwordHash
    //console.log("hash", hash)
    if (!hash) {
      return { success: false }
    }
    const this_password = await argon2.verify(hash, password);
    //console.log("this_password", this_password)
    if (!this_password) {
      return { success: false }
    }
    this_session.discardToken(c)

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return { success: true }
  }

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
    //console.log("userid", userid)
    const userResponse = await prisma.userProfile.findUnique({
      where: {
        userId: userid
      },
    });
    //console.log("userResponse", userResponse)
    return userResponse
  }



  return { setProfileEdit, getProfile, deleteUser, finishTutorial }




}