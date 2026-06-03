"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCollaborationSocket = void 0;
const setupCollaborationSocket = (io, socket) => {
    socket.on("work:alteration", (token) => {
        socket.emit("work:alteration", token);
    });
};
exports.setupCollaborationSocket = setupCollaborationSocket;
