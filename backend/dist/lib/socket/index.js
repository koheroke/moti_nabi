"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = void 0;
const socket_io_1 = require("socket.io");
const useSocket = (server) => {
    const io = new socket_io_1.Server(server);
    io.on("connection", (socket) => {
        console.log("connected", socket.id);
    });
    io.on("disconnect", (socket) => {
        console.log("disconnected", socket.id);
    });
};
exports.useSocket = useSocket;
