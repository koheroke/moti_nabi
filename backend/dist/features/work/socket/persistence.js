"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPersistenceSocket = void 0;
const work_1 = require("../work");
const createWork = (0, work_1.useWork)();
const setupPersistenceSocket = (io, socket) => {
    socket.on("work:save", async (data, callback) => {
        const queue = JSON.parse(data);
        try {
            //console.log("savqueuee", queue)
            await createWork.editWork(queue.workId, queue.data);
            callback({
                success: true
            });
        }
        catch (error) {
            callback({
                success: false,
                error: String(error)
            });
        }
    });
};
exports.setupPersistenceSocket = setupPersistenceSocket;
