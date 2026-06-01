import { prisma } from "@/lib/prisma/prisma"
export const useUserWork = () => {
  const editUserPage = (userid: string, data: string) => {
    const editData = JSON.parse(data)
    prisma.user.update({
      where: {
        id: userid,
      },
      data: {
        ...editData
      },
    });
  }
  return { editUserPage }
}