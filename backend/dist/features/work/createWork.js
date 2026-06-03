"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWork = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const workData = new Map();
const useWork = () => {
    const createNewWork = async (userId) => {
        const work = await prisma_1.prisma.work.create({
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
        });
        workData.set(work.id, work);
        return { workName: work.name, workId: work.id };
    };
    const getWork = async (workId) => {
        const work = await prisma_1.prisma.work.findUnique({
            where: {
                id: workId,
            },
        });
        return work;
    };
    const editWorkPackage = async (workId, editData) => {
        const work = await prisma_1.prisma.work.update({
            where: {
                id: workId,
            },
            data: {
                ...editData
            },
        });
        return work;
    };
    const editWork = async (workId, token) => {
        let this_work = workData.get(workId);
        if (!this_work) {
            const work = await getWork(workId);
            if (!work)
                return;
            workData.set(work.id, work);
            this_work = work;
        }
        token.tokens.forEach((token) => {
            let data = this_work.data;
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
                    if (!Array.isArray(data[lastKey]))
                        data[lastKey] = [];
                    data[lastKey].push(token.value);
                    break;
                case "arrayRemove":
                    if (!Array.isArray(data[lastKey]))
                        return;
                    data[lastKey] = data[lastKey].filter((item) => item.id !== token.value.id);
                    break;
                case "addMap":
                    if (!(data[lastKey] instanceof Map)) {
                        data[lastKey] = new Map();
                    }
                    data[lastKey].set(token.value.id, token.value);
                    break;
                case "mapPush":
                    if (!(data[lastKey] instanceof Map)) {
                        data[lastKey] = new Map();
                    }
                    data[lastKey].set(token.value.id, token.value);
                    break;
                case "mapRemove":
                    if (!(data[lastKey] instanceof Map))
                        return;
                    data[lastKey].delete(token.value.id);
                    break;
                case "objectPush":
                    if (typeof data[lastKey] !== "object" ||
                        data[lastKey] === null ||
                        Array.isArray(data[lastKey])) {
                        data[lastKey] = {};
                    }
                    data[lastKey][token.value.id] = token.value;
                    break;
                case "objectRemove":
                    if (typeof data[lastKey] !== "object" ||
                        data[lastKey] === null ||
                        Array.isArray(data[lastKey]))
                        return;
                    delete data[lastKey][token.value.id];
                    break;
                default: {
                    const _exhaustiveCheck = token.type;
                    return _exhaustiveCheck;
                }
            }
        });
        const work = await prisma_1.prisma.work.update({
            where: {
                id: workId,
            },
            data: {
                data: this_work.data,
            },
        });
        return work;
    };
    const getWorkPackage = async () => {
        const works = await prisma_1.prisma.work.findMany({
            where: {
                public: true,
            },
        });
        if (!works)
            return;
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
        return thumbnail;
    };
    const getUserworkPackage = async (userId, publicDisplay) => {
        const works = await prisma_1.prisma.work.findMany({
            where: {
                members: {
                    some: {
                        userId,
                        role: "owner",
                    },
                },
            },
        });
        if (!works)
            return;
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
            return thumbnail.filter((work) => work.public);
        }
        return thumbnail;
    };
    return {
        createNewWork, getUserworkPackage, getWork, editWorkPackage, editWork,
        getWorkPackage
    };
};
exports.useWork = useWork;
