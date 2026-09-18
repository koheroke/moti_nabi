import { prisma } from "@/lib/prisma/prisma"
import { type server_alterationToken } from "./saveQueue"
import { publichTokenType } from "./types/index"
import { templateData } from "./template"
import jsonCases from "./jsonData/case/case.json";
const cases: Record<string, any> = jsonCases

const workData = new Map()
export type setValue = "like" | "commit"
export type caseIds = "NormalSuitcase" | "HardSuitcase"
const useWork = () => {

  const createNewWork = async (userId: string) => {
    if (!userId) return "error"
    const defaultName = "新しいリスト"
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

    const userWorks = await prisma.work.findMany({
      where: {
        members: {
          some: {
            userId,
            role: "owner",
          }
        }
      },
      select: {
        name: true
      }
    })
    let count: any = 0;
    if (userWorks.length > 10) {
      return undefined;
    }
    userWorks.forEach((work) => {
      if (work.name.includes(defaultName)) {
        count++
      }
    })
    if (count == 0) {
      count = ""
    }

    console.log("count", count)

    console.log("defaultName", defaultName)
    const work = await prisma.work.create({
      data: {
        name: `${defaultName}${count}`,
        thumbnailJson: "{}",
        data: newWork,
        public: false,
        likes: 0,
        tags: [],
        bio: "",
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

  const getStaticCases = (caseIds?: caseIds[]) => {
    if (!caseIds) {
      return cases;
    }
    return Object.fromEntries(
      caseIds.map((id) => [id, cases[id]])
    );
  }

  const getTemplateThumbnails = () => {
    return templateData.thumbnails
  }
  const getTemplate = (id: string) => {
    const data = templateData.templates[id]

    //console.log("data", templateData.templates[id])
    if (data) {
      return data
    }
    return "none"
  }
  const getWorkDetail = async (workId: string, userId: string) => {
    const work = await prisma.work.findFirst({
      where: {
        id: workId,
      },
      select: {
        data: true,
        id: true,
        name: true,
        bio: true,
        likes: true,
        tags: true,
        createdAt: true,
        likedUsers: {
          where: {
            userId,
          },
          select: {
            userId: true,
          },
        },

        members: {
          select: {
            role: true,
            userId: true,
            user: {
              select: {
                profile: {
                  select: {
                    id: true,
                    userId: true,
                    iconUrl: true,
                    name: true
                  }
                }
              }
            }
          },
        },
      }
    });
    if (!work) return;
    const { likedUsers, ...workData } = work
    const res = { ...workData, userLike: likedUsers.length == 0 ? false : true }
    return res
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

  const setLike = async (workId: string, userId: string) => {
    console.log("setLike", "workId", workId, "userId", userId)
    const like = await prisma.workLike.findUnique({
      where: {
        userId_workId: {
          userId,
          workId,
        },
      },
    });


    if (like) {
      await prisma.$transaction(async (tx) => {
        await tx.workLike.delete({
          where: {
            userId_workId: {
              userId,
              workId,
            },
          },
        });

        await tx.work.update({
          where: { id: workId },
          data: {
            likes: {
              decrement: 1,
            },
          },
        });
      });

    } else {
      await prisma.$transaction(async (tx) => {
        await tx.workLike.create({
          data: {
            userId,
            workId,
          },
        });

        await tx.work.update({
          where: { id: workId },
          data: {
            likes: {
              increment: 1,
            },
          },
        });
      });
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
        bio: true,
        thumbnailJson: true,
        tags: true,
        public: true,
        members: {
          select: {
            role: true,
            userId: true
          },
        },
      }
    });


    if (!work) return



    await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        lastAccessAt: new Date(),
      },
    });
    if (work)
      return work
  }




  const editWork = async (workId: string, editDataToken: server_alterationToken[]) => {
    let this_work = workData.get(workId);
    if (!this_work) {
      const work = await getWork(workId);
      if (!work) return;
      work.data = JSON.parse(work.data);
      work.thumbnailJson = JSON.parse(work.thumbnailJson);
      workData.set(workId, work);
      this_work = work;
    }


    editDataToken.forEach((token) => {


      const thumbnailValue = token.thumbnailValue ? token.thumbnailValue : token.value;
      const getPoint = (thisPath: string[]) => {

        const path = [...thisPath];
        const thumbnailPath = thisPath.slice(2);

        const lastKey = path.pop();
        const thumbnailLastKey = thumbnailPath.pop();

        let parent: any = this_work.data;
        let thumbnailData: any = this_work.thumbnailJson;

        for (const key of path) {
          if (parent[key] === undefined) {
            parent[key] = {};
          }

          parent = parent[key];
        }

        if (token.thumbnailEdit) {
          for (const key of thumbnailPath) {
            if (thumbnailData[key] === undefined) {
              thumbnailData[key] = {};
            }

            thumbnailData = thumbnailData[key];
          }
        }

        return {
          lastKey,
          thumbnailLastKey,
          parent,
          thumbnailData,
        };
      };

      const res = getPoint(token.path)
      const { lastKey, thumbnailLastKey, parent, thumbnailData } = res
      //console.log("token", token)
      switch (token.type) {
        case "set":
          if (lastKey == null) return;
          parent[lastKey] = token.value;
          if (token.thumbnailEdit) {
            if (thumbnailLastKey) {
              thumbnailData[thumbnailLastKey] = thumbnailValue
            }
          }
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
            if (token.thumbnailEdit) {

              thumbnailData[lastKey] = {}
            }
          } else {
            //console.log("parent", parent)
            parent[lastKey][token.value.id] = token.value;
            if (token.thumbnailEdit) {
              if (thumbnailLastKey) {
                thumbnailData[thumbnailLastKey][token.value.id] = thumbnailValue
              } else {
                thumbnailData[token.value.id] = thumbnailValue
              }
            }
          }
          break;

        case "objectRemove":
          if (lastKey == null) return;

          if (
            typeof parent[lastKey] !== "object" ||
            parent[lastKey] === null ||
            Array.isArray(parent[lastKey])
          ) {
            return;
          }
          delete parent[lastKey][token.value.id];
          if (token.thumbnailEdit) {
            if (thumbnailLastKey) {
              delete thumbnailData[thumbnailLastKey][token.value.id];
            } else {
              delete thumbnailData[token.value.id];
            }
          }

          break;

        case 'move':
          const { beforePath, reValue } = token.value
          const res = getPoint(beforePath)
          const { lastKey: this_lastKey, thumbnailLastKey: this_thumbnailLastKey, parent: this_parent, thumbnailData: this_thumbnailData } = res
          if (!this_lastKey || !lastKey) return;
          const moveData = this_parent[this_lastKey]
          const editData = { ...moveData, ...reValue }
          parent[lastKey] = editData;


          if (token.thumbnailEdit) {
            if (!this_thumbnailLastKey || !this_thumbnailData || !thumbnailLastKey) return;
            //console.log("reValue", reValue)
            //console.log("thumbnailLastKey", thumbnailLastKey)
            const moveData = this_thumbnailData[this_thumbnailLastKey]
            const editData = { ...moveData, ...reValue }
            thumbnailData[thumbnailLastKey] = editData
          }
          break

        default: {
          const _exhaustiveCheck: never = token.type;
          return _exhaustiveCheck;
        }
      }


    });


    const jsonData = JSON.stringify(this_work.data);

    const thumbnailJson = JSON.stringify(this_work.thumbnailJson);

    await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        data: jsonData,
        thumbnailJson: thumbnailJson,
      },
    });

    return { success: true };
  };

  const getWorkPackages = async (userId: string, number: string | number) => {
    const packages = await prisma.work.findMany({

      ...(number !== "all" && { take: number as number }),
      where: {
        public: true,
      },
      select: {
        id: true,
        name: true,
        thumbnailJson: true,
        public: true,
        likes: true,
        tags: true,
        createdAt: true,
        lastAccessAt: true,
        likedUsers: {
          where: {
            userId,
          },
          select: {
            userId: true,
          },
        },
      },
      orderBy: {
        likes: "desc",
      },
    });
    console.log(
      "fresh packages",
      packages.map((work) => ({
        id: work.id,
        likes: work.likes,
        likedUsers: JSON.stringify(work.likedUsers),
      })),
    );


    const res = packages.map((work) => (
      {
        ...work,
        liked: userId ? work.likedUsers.length > 0 : false,
        likedUsers: work.likedUsers.length == 0 ? false : true,
        thumbnailJson: JSON.parse(work.thumbnailJson),
      }));

    return res;
  };

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
        thumbnailJson: true,
        public: true,
        lastAccessAt: true,
        likes: true,
        tags: true,
        createdAt: true,
      },
    });
    //console.log("packages", packages)
    return packages.map((work) => ({
      ...work,
      thumbnailJson: JSON.parse(work.thumbnailJson),
    }));
  }

  const publicWork = async (token: publichTokenType) => {
    try {
      await prisma.work.update({
        where: {
          id: token.id,
        },
        data: {
          ...token,
          lastAccessAt: new Date(),
        },
      });
      return { success: true };
    } catch {
      return { success: false }
    }

  }
  const deleteWork = async (workId: string, userId: string) => {
    console.log("workID", userId)
    const owner = await prisma.siteMember.findFirst({
      where: {
        workId,
        userId,
        role: "owner",
      },
    });

    if (!owner) {
      return { success: false }
    }
    try {
      await prisma.work.deleteMany({
        where: {
          id: workId,
        },
      });
      return { success: true };
    } catch {
      return { success: false }
    }
  }

  const getUserworkCount = async (userId: string) => {
    const count = await prisma.work.count({
      where: {
        members: {
          some: {
            userId,
            role: "owner",
          },
        },
      },
    });
    return count
  }

  return {
    createNewWork, getWork, editWork, getTemplateThumbnails, getTemplate, getStaticCases
    , getWorkPackages, getUserWorkPackages
    , getWorkDetail, addMenber, deleteMenber, publicWork, deleteWork, setLike, getUserworkCount
  }
}

export { useWork };

