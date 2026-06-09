import { prisma } from "@/lib/prisma/prisma"
import { editWorkPackageApi } from "@/features/work/types"
import { type server_alterationToken } from "./saveQueue"



const workData = new Map()

const useWork = () => {
  const createNewWork = async (userId: string) => {
    console.log("userId", userId)
    if (!userId) return "error"

    const newWork = JSON.stringify({
      "itemListDatas": {
        "addedItems": {},
        "bookmarks": [],
        "addItemCounter": 0,
      },
      "previewDatas": {
        mainLuggage: {},
        "addItemCounter": 0
      }
    });

    const work = await prisma.work.create({
      data: {
        name: "新しいリスト",
        thumbnailUrl: null,
        data: newWork,
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
      },
      select: {
        id: true,
        name: true,
        data: true
      }
    })

    return { workName: work.name, workId: work.id, data: work.data }
  }

  const getWorkPreview = async (workId: string) => {
    const work = await prisma.work.findUnique({
      where: {
        id: workId,
      },
      select: {
        data: true,
        id: true
      }
    });
    return work
  }

  const addMenber = async (token: { workId: string, role: string, userId: string }) => {
    type Role = "owner" | "editor" | "viewer"
    try {
      await prisma.work.update({
        where: {
          id: token.workId,
        },
        data: {
          members: {
            create: {
              role: token.role as Role,
              userId: token.userId,
            },
          },
        },
      });
      return "success"
    } catch {
      return "error"
    }
  }

  const deleteMenber = async (token: { workId: string, userId: string }) => {
    try {
      await prisma.siteMember.delete({
        where: {
          workId_userId: {
            workId: token.workId,
            userId: token.userId,
          },
        },
      });
      return "success"
    } catch {
      return "error"
    }
  }

  const getWork = async (workId: string) => {
    const work = await prisma.work.findUnique({
      where: {
        id: workId,
      },
      select: {
        data: true,
        id: true,
        name: true,
        members: {
          select: {
            role: true,
            userId: true
          },
        },
      }
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


  const editWork = async (workId: string, editDataToken: server_alterationToken[]) => {
    console.log("editDataTokens", editDataToken);
    let this_work = workData.get(workId);
    if (!this_work) {
      const work = await getWork(workId);
      if (!work) return;
      work.data = JSON.parse(work.data);
      workData.set(workId, work);
      this_work = work;
    }

    editDataToken.forEach((token) => {
      const path = [...token.path];
      const lastKey = path.pop();
      let parent: any = this_work.data;
      path.forEach((key) => {
        if (key == undefined) return;
        if (parent[key] == undefined) {
          parent[key] = {};
        }
        parent = parent[key];
      });

      switch (token.type) {
        case "set":
          console.log("token.value", token.value)
          console.log(lastKey)
          console.log(parent)
          if (lastKey == null) return;
          parent[lastKey] = token.value;
          break;

        case "delete":
          if (lastKey == null) return;
          delete parent[lastKey];
          break;

        case "arrayPush":
          if (lastKey == null) return;

          if (!Array.isArray(parent[lastKey])) {
            parent[lastKey] = [];
          }

          parent[lastKey].push(token.value);
          break;

        case "arrayRemove":
          if (lastKey == null) return;
          if (!Array.isArray(parent[lastKey])) return;

          parent[lastKey] = parent[lastKey].filter(
            (item: any) => item.id !== token.value.id
          );
          break;

        case "objectPush":
          if (lastKey == null) return;

          if (
            typeof parent[lastKey] !== "object" ||
            parent[lastKey] === null ||
            Array.isArray(parent[lastKey])
          ) {
            parent[lastKey] = {};
          }

          parent[lastKey][token.value.id] = token.value;
          break;

        case "objectRemove":
          if (lastKey == null) return;
          console.log("lastKey", lastKey)
          console.log("token.value.id", token.value.id)
          console.log("parent[lastKey]", parent)

          if (
            typeof parent[lastKey] !== "object" ||
            parent[lastKey] === null ||
            Array.isArray(parent[lastKey])
          ) {
            return;
          }

          delete parent[lastKey][token.value.id];
          break;

        default: {
          const _exhaustiveCheck: never = token.type;
          return _exhaustiveCheck;
        }
      }
    });
    const jsonData = JSON.stringify(this_work.data);
    console.log("jsonData", jsonData)
    const work = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        data: jsonData,
      },
    });

    return { success: true };
  };

  const getWorkPackages = async () => {

    const packages = await prisma.work.findMany({
      where: {
        public: true
      },
      select: {
        id: true,
        name: true,
        thumbnailUrl: true,
        public: true,
        likes: true,
        tags: true,
        copies: true,
        createdAt: true,
      },
      orderBy: { likes: "desc", },
    });
    return packages
  }

  const getUserWorkPackages = async (userId: string) => {
    const packages = await prisma.work.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        thumbnailUrl: true,
        public: true,
        likes: true,
        tags: true,
        copies: true,
        createdAt: true,
      },
    });

    return packages
  }
  return {
    createNewWork, getWork, editWorkPackage, editWork
    , getWorkPackages, getUserWorkPackages
    , getWorkPreview, addMenber, deleteMenber
  }
}

export { useWork };

