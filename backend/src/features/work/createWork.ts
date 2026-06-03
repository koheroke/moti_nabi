import { prisma } from "@/lib/prisma/prisma"
import { Work } from "@/generated/prisma/client"
import { editWorkPackageApi, editWorkToken } from "@/features/work/types"


const workData = new Map()

const useWork = () => {
  const createNewWork = async (userId: string) => {

    const work = await prisma.work.create({
      data: {
        name: "新しいリスト",
        thumbnailUrl: null,
        data: "",
        public: false,
        likes: 0,
        tags: [],
        copies: 0,
        members: {
          create: {
            userId: userId,
            role: "owner",
          },
        },
      }
    })
    workData.set(work.id, work)
    return { workName: work.name, workId: work.id }
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

      switch (token.type) {
        case "set":
          data[lastKey] = token.value;
          break;

        case "delete":
          delete data[lastKey];
          break;

        case "arrayPush":
          if (!Array.isArray(data[lastKey])) data[lastKey] = [];
          data[lastKey].push(token.value);
          break;

        case "arrayRemove":
          if (!Array.isArray(data[lastKey])) return;
          data[lastKey] = data[lastKey].filter(
            (item: any) => item.id !== (token.value as any).id
          );
          break;

        case "addMap":
          if (!(data[lastKey] instanceof Map)) {
            data[lastKey] = new Map<string, any>();
          }
          data[lastKey].set(token.value.id, token.value);
          break;

        case "mapPush":
          if (!(data[lastKey] instanceof Map)) {
            data[lastKey] = new Map<string, any>();
          }
          data[lastKey].set(token.value.id, token.value);
          break;

        case "mapRemove":
          if (!(data[lastKey] instanceof Map)) return;
          data[lastKey].delete(token.value.id);
          break;

        case "objectPush":
          if (
            typeof data[lastKey] !== "object" ||
            data[lastKey] === null ||
            Array.isArray(data[lastKey])
          ) {
            data[lastKey] = {};
          }
          data[lastKey][token.value.id] = token.value;
          break;

        case "objectRemove":
          if (
            typeof data[lastKey] !== "object" ||
            data[lastKey] === null ||
            Array.isArray(data[lastKey])
          ) return;
          delete data[lastKey][token.value.id];
          break;

        default: {
          const _exhaustiveCheck: never = token.type;
          return _exhaustiveCheck;
        }
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


  const getWorkPackage = async () => {
    const works = await prisma.work.findMany({
      where: {
        public: true,
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
    return thumbnail
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
    , getWorkPackage
  }
}

export { useWork };

