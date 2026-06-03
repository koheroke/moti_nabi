"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPersistenceSocket = void 0;
const createWork_1 = require("../createWork");
const createWork = (0, createWork_1.useWork)();
const setupPersistenceSocket = (io, socket) => {
    socket.on("work:save", (data) => {
        createWork.editWork(data.id, data.token);
    });
};
exports.setupPersistenceSocket = setupPersistenceSocket;
