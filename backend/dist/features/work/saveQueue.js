"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSaveQueue = void 0;
const work_1 = require("./work");
const usework = (0, work_1.useWork)();
const useSaveQueue = () => {
    const queues = new Map();
    const timers = new Map();
    const getQueue = (workId) => {
        //console.log("queues", queues)
        //console.log("timers", timers)
        if (!queues.has(workId)) {
            queues.set(workId, []);
        }
        return queues.get(workId);
    };
    const push = (workId, token) => {
        const queue = getQueue(workId);
        queue.push(token);
        if (!timers.has(workId)) {
            setTimer(workId);
        }
    };
    const pop = async (workId) => {
        const queue = getQueue(workId);
        if (queue.length === 0)
            return;
        const dbTokens = queue.map((token) => token.sendDbToken);
        const res = await usework.editWork(workId, dbTokens);
        if (res?.success === true) {
            queue.length = 0;
            timers.delete(workId);
        }
    };
    const setTimer = (workId) => {
        const timer = setTimeout(() => {
            pop(workId);
        }, 3000);
        timers.set(workId, timer);
    };
    const deleteQueue = (workId) => {
        queues.delete(workId);
        const timer = timers.get(workId);
        if (timer)
            clearTimeout(timer);
        timers.delete(workId);
    };
    return {
        push,
        pop,
        getQueue,
        deleteQueue,
    };
};
exports.useSaveQueue = useSaveQueue;
