import { prisma } from "@/lib/prisma/prisma"
import { Work } from "@/generated/prisma/client"
import { createApi, editWorkPackageApi, editWorkToken } from "@/features/create/types"


const workData = new Map()

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
    workData.set(work.id, work)
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



  const editWork = async (workId: string, token: editWorkToken) => {
    let this_work = workData.get(workId)
    if (!this_work) {
      const work = await getWork(workId)
      if (!work) return
      workData.set(work.id, work)
      this_work = work
    }

    token.tokens.forEach((token) => {
      let data: any = this_work.data;
      for (let i = 0; i < token.path.length - 1; i++) {
        data = data[token.path[i]];
      }
      const lastKey = token.path[token.path.length - 1];
      if (token.type === "set") {
        data[lastKey] = token.value;
      } else if (token.type === "delete") {
        delete data[lastKey];
      } else if (token.type === "arrayPush") {
        if (!Array.isArray(data[lastKey])) return;
        data[lastKey].push(token.value);
      } else if (token.type === "arrayRemove") {
        if (!Array.isArray(data[lastKey])) return;
        data[lastKey] = data[lastKey].filter(
          (item: any) => item.id !== (token.value as any).id
        );
      }
    });
    const work = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        data: this_work.data,
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

