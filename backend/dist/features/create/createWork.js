"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateWork = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const useCreateWork = () => {
    const createNewWork = async (createApi) => {
        const work = await prisma_1.prisma.work.create({
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
        });
        return work.id;
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
    const editWork = async (workId, data) => {
        const work = await prisma_1.prisma.work.update({
            where: {
                id: workId,
            },
            data: {
                data,
            },
        });
        return work;
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
        createNewWork, getUserworkPackage, getWork, editWorkPackage, editWork
    };
};
exports.useCreateWork = useCreateWork;
