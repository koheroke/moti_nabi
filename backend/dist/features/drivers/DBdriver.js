"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBdriver = void 0;
const testDB = {};
exports.DBdriver = {
    saveSecretToDB: (userId, secretBase32) => {
        testDB[userId] = secretBase32;
    },
    getSecretToDB: (userId) => {
        return testDB[userId];
    }
};
