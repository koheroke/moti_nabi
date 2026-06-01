import { prisma } from "@/lib/prisma/prisma"
import { Work, SiteMember } from "@/generated/prisma/client"
import { RequireAtLeastOne } from "@/types/atLeastOne"



type editWorkPackageApi = RequireAtLeastOne<{
  name?: String,
  thumbnailUrl?: String,
  data?: String,
  public?: Boolean,
  likes?: number,
  tags?: String[],
  copies?: number,
  members?: SiteMember[]
}>


interface createApi {
  name: string
  userId: string
}
const useCreateWork = () => {
  const createNewWork = async (createApi: createApi) => {
    const work = await prisma.work.create({
      data: {
        name: createApi.name,
        thumbnailUrl: null,
        data: "",
        public: false,
        likes: 0,
        tags: [],
        copies: 0,
        members: {
          create: {
            userId: createApi.userId,
            role: "owner",
          },
        },
      }
    })
    return work.id
  }

  const getWork = async (workId: string) => {
    const work = await prisma.work.findUnique({
      where: {
        id: workId,
      },
    });
    return work
  }

  const editWorkPackage = async (workId: string, editData: editWorkPackageApi) => {
    const work = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        ...editData
      },
    });
    return work
  }
  const editWork = async (workId: string, data: string) => {
    const work = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        data,
      },
    });
    return work
  }

  const getUserworkPackage = async (userId: string, publicDisplay: boolean) => {
    const works: Work[] | null = await prisma.work.findMany({
      where: {
        members: {
          some: {
            userId,
            role: "owner",
          },
        },
      },
    });
    if (!works) return

    const thumbnail = works.map((work) => {
      return {
        id: work.id,
        thumbnailUrl: work.thumbnailUrl,
        name: work.name,
        public: work.public,
        likes: work.likes,
        tags: work.tags,
        copies: work.copies,
      };
    });

    if (publicDisplay) {
      return thumbnail.filter((work) => work.public)
    }
    return thumbnail
  }
  return {
    createNewWork, getUserworkPackage, getWork, editWorkPackage, editWork
  }
}

export { useCreateWork };

