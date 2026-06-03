"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = void 0;
const socket_io_1 = require("socket.io");
const index_1 = require("@/features/work/socket/index");
const useSocket = (server) => {
    const io = new socket_io_1.Server(server);
    io.on("connection", (socket) => {
        (0, index_1.registerSocketEvents)(io, socket);
    });
};
exports.useSocket = useSocket;
