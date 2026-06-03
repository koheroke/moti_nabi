"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSocketEvents = void 0;
const collaboration_1 = require("./collaboration");
const persistence_1 = require("./persistence");
const registerSocketEvents = (io, socket) => {
    (0, collaboration_1.setupCollaborationSocket)(io, socket);
    (0, persistence_1.setupPersistenceSocket)(io, socket);
};
exports.registerSocketEvents = registerSocketEvents;
