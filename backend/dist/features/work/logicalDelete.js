"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogicalDelete = void 0;
const saveQueue_1 = require("./saveQueue");
const saveQueue = (0, saveQueue_1.useSaveQueue)();
const useLogicalDelete = () => {
    const logicalDelete = new Map();
    const reLogicalDelete = (deleteInfo, type) => {
        if (!logicalDelete.get(deleteInfo.workId)) {
            logicalDelete.set(deleteInfo.workId, { pocketDeleteInfo: [], caseDeleteInfo: [] });
        }
        //console.log("ogicalDelete.get(deleteInfo.workId)", logicalDelete.get(deleteInfo.workId))
        const this_logicalDeletes = logicalDelete.get(deleteInfo.workId);
        if (!this_logicalDeletes)
            return;
        switch (type) {
            case "pocket_logicalDelete":
                this_logicalDeletes.pocketDeleteInfo = this_logicalDeletes.pocketDeleteInfo.filter((info) => !(info.pocketId === deleteInfo.pocketId &&
                    info.caseId === deleteInfo.caseId));
                break;
            case "case_logicalDelete":
                this_logicalDeletes.pocketDeleteInfo = this_logicalDeletes.pocketDeleteInfo.filter((info) => !(info.caseId == deleteInfo.caseId));
                break;
        }
    };
    const getLogicalDelete = (workId) => {
        return logicalDelete.get(workId);
    };
    const setLogicalDelete = (workId, pocketDeleteInfo, caseDeleteInfo) => {
        return logicalDelete.set(workId, { pocketDeleteInfo: pocketDeleteInfo, caseDeleteInfo: caseDeleteInfo });
    };
    const pushLogicalDelete = (deleteInfo, type) => {
        if (!logicalDelete.get(deleteInfo.workId)) {
            logicalDelete.set(deleteInfo.workId, { pocketDeleteInfo: [], caseDeleteInfo: [] });
        }
        const this_logicalDeletes = logicalDelete.get(deleteInfo.workId);
        if (!this_logicalDeletes)
            return;
        switch (type) {
            case "pocket_logicalDelete":
                this_logicalDeletes.pocketDeleteInfo.push(deleteInfo);
                break;
            case "case_logicalDelete":
                this_logicalDeletes.caseDeleteInfo.push(deleteInfo);
                break;
        }
    };
    const leaveWork = (workId) => {
        const this_logicalDelete = logicalDelete.get(workId);
        //console.log("leaveWork", this_logicalDelete)
        this_logicalDelete?.pocketDeleteInfo.forEach((this_pocket) => {
            hardDelete(this_pocket, "pocket_logicalDelete");
        });
        this_logicalDelete?.caseDeleteInfo.forEach((this_case) => {
            hardDelete(this_case, "case_logicalDelete");
        });
        logicalDelete.delete(workId);
    };
    const hardDelete = (deleteInfo, type) => {
        let token;
        let alterationToken;
        const pocketLogicalDelete_path = ["previewDatas", "pocketLogicalDelete"];
        const caseLogicalDelete_path = ["previewDatas", "caseLogicalDelete"];
        let LogicalDelete_path;
        let LogicalDelete_id;
        switch (type) {
            case "pocket_logicalDelete":
                const pocket_path = ["previewDatas", "mainLuggage", deleteInfo.caseId, "pockets"];
                LogicalDelete_path = pocketLogicalDelete_path;
                LogicalDelete_id = deleteInfo.pocketId;
                token = {
                    type: "objectRemove",
                    value: { id: deleteInfo.pocketId },
                    createdAt: Date.now(),
                    path: pocket_path,
                    thumbnailEdit: true
                };
                const pocketToken = {
                    pocketId: deleteInfo.pocketId,
                    caseId: deleteInfo.caseId,
                };
                alterationToken = {
                    alterationType: "pocket_hardDelete",
                    token: pocketToken,
                    user: "",
                };
                break;
            case "case_logicalDelete":
                const case_path = ["previewDatas", "mainLuggage"];
                LogicalDelete_id = deleteInfo.caseId;
                LogicalDelete_path = caseLogicalDelete_path;
                token = {
                    type: "objectRemove",
                    value: { id: deleteInfo.caseId },
                    createdAt: Date.now(),
                    path: case_path,
                    thumbnailEdit: true
                };
                const caseToken = {
                    caseId: deleteInfo.caseId,
                };
                alterationToken = {
                    alterationType: "case_hardDelete",
                    token: caseToken,
                    user: ""
                };
                break;
        }
        if (!token || !alterationToken)
            return null;
        saveQueue.push(deleteInfo.workId, { sendDbToken: token, alterationToken: alterationToken });
        return alterationToken;
    };
    return { leaveWork, pushLogicalDelete, getLogicalDelete, setLogicalDelete, reLogicalDelete };
};
exports.useLogicalDelete = useLogicalDelete;
