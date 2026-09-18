"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCollaborationSocket = void 0;
const saveQueue_1 = require("../saveQueue");
const logicalDelete_1 = require("../logicalDelete");
const template_1 = require("../template");
const logicalDelete = (0, logicalDelete_1.useLogicalDelete)();
const disconnectTimers = new Map();
const saveQueue = (0, saveQueue_1.useSaveQueue)();
const template = (0, template_1.useTemplate)();
const setupCollaborationSocket = (io, socket) => {
    socket.on("work:alteration", (token) => {
        const workId = socket.data.workId;
        if (workId == undefined)
            return;
        if (token.alterationToken.alterationType == "pocket_logicalDelete" || token.alterationToken.alterationType == "case_logicalDelete") {
            if (token.alterationToken.token.type == "cancel") {
                logicalDelete.reLogicalDelete({ ...token.alterationToken.token, workId: workId, userId: token.alterationToken.user }, token.alterationToken.alterationType);
            }
            else {
                logicalDelete.pushLogicalDelete({ ...token.alterationToken.token, workId: workId, userId: token.alterationToken.user }, token.alterationToken.alterationType);
            }
            io.to(workId).emit("work:alteration", token.alterationToken);
            return;
        }
        if (token.alterationToken.alterationType == "preview_addTemplate") {
            //console.log("token.alterationToken.token", token.alterationToken.token)
            const this_saveDbToken = template.addTemplate(token.alterationToken.token);
            if (this_saveDbToken) {
                token.sendDbToken = this_saveDbToken;
                token.alterationToken.token.caseData = this_saveDbToken.value;
                saveQueue.push(workId, token);
            }
            socket.to(workId).emit("work:alteration", token.alterationToken);
            return;
        }
        saveQueue.push(workId, token);
        io.to(workId).emit("work:alteration", token.alterationToken);
    });
    socket.on("work:kick", (token) => {
        const workId = socket.data.workId;
        if (workId == undefined)
            return;
        socket.to(workId).emit("work:kicked", token.kickedUserId);
    });
    socket.on("joinRoom", (workId, userId, callback) => {
        let this_logicalDelete = logicalDelete.getLogicalDelete(workId);
        socket.data.workId = workId;
        socket.data.userId = userId;
        socket.join(workId);
        const queue = saveQueue.getQueue(workId);
        const alterationTokens = queue.map((token) => token.alterationToken);
        if (!this_logicalDelete) {
            this_logicalDelete = { pocketDeleteInfo: [], caseDeleteInfo: [] };
        }
        return callback({ alterationTokens: alterationTokens, logicalDelete: this_logicalDelete });
    });
    socket.on("disconnect", () => {
        const userId = socket.data.userId;
        const workId = socket.data.workId;
        if (workId == undefined)
            return;
        const key = `${workId}:${userId}`;
        const existingTimer = disconnectTimers.get(key);
        if (existingTimer) {
            clearTimeout(existingTimer);
        }
        const timer = setTimeout(() => {
            //console.log("disconnectTimers", userId)
            logicalDelete.leaveWork(workId);
            disconnectTimers.delete(key);
        }, 5000);
        disconnectTimers.set(key, timer);
    });
};
exports.setupCollaborationSocket = setupCollaborationSocket;
