"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocket = void 0;
const collaboration_1 = require("@/features/create/socket/collaboration");
const persistence_1 = require("@/features/create/socket/persistence");
const setupSocket = (io) => {
    (0, collaboration_1.setupCollaborationSocket)(io);
    (0, persistence_1.setupPersistenceSocket)(io);
};
exports.setupSocket = setupSocket;
