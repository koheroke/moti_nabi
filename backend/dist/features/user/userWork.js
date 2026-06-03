"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserWork = void 0;
const prisma_1 = require("@/lib/prisma/prisma");
const useUserWork = () => {
    const editUserPage = (userid, data) => {
        const editData = JSON.parse(data);
        prisma_1.prisma.user.update({
            where: {
                id: userid,
            },
            data: {
                ...editData
            },
        });
    };
    return { editUserPage };
};
exports.useUserWork = useUserWork;
