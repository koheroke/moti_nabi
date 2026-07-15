import { useSaveQueue } from "./saveQueue"
import type { server_alterationTokenType, alterationType } from "./saveQueue"
const saveQueue = useSaveQueue()
interface pocletDeleteInfo { pocketId: string, caseId: string, userId: string, workId: string }
interface caseDeleteInfo { pocketId: string, caseId: string, userId: string, workId: string }
type deleteInfo = pocletDeleteInfo | caseDeleteInfo
export type type = "pocket_logicalDelete" | "case_logicalDelete"

const useLogicalDelete = () => {
  const logicalDelete = new Map<string, { pocketDeleteInfo: pocletDeleteInfo[], caseDeleteInfo: caseDeleteInfo[] }>()
  const maxPocketDelete = 7;
  const maxCaseDelete = 3;

  const getLogicalDelete = (workId: string) => {
    return logicalDelete.get(workId)
  }

  const setLogicalDelete = (workId: string, pocketDeleteInfo: pocletDeleteInfo[], caseDeleteInfo: caseDeleteInfo[]) => {
    return logicalDelete.set(workId, { pocketDeleteInfo: pocketDeleteInfo, caseDeleteInfo: caseDeleteInfo })
  }


  const pushLogicalDelete = (deleteInfo: deleteInfo, type: type) => {
    console.log("pushLogicalDelete__", deleteInfo)
    if (!logicalDelete.get(deleteInfo.workId)) {
      logicalDelete.set(deleteInfo.workId, { pocketDeleteInfo: [], caseDeleteInfo: [] })
    }
    const this_logicalDeletes = logicalDelete.get(deleteInfo.workId)
    if (!this_logicalDeletes) return;
    switch (type) {
      case "pocket_logicalDelete":

        this_logicalDeletes.pocketDeleteInfo.push(deleteInfo as pocletDeleteInfo)
        console.log("logicalDelete__,", this_logicalDeletes.pocketDeleteInfo)
        if (this_logicalDeletes.pocketDeleteInfo.length > maxPocketDelete) {
          return popLogicalDelete(this_logicalDeletes.pocketDeleteInfo, type)
        }
        break;
      case "case_logicalDelete":
        this_logicalDeletes.caseDeleteInfo.push(deleteInfo as caseDeleteInfo)
        if (this_logicalDeletes.pocketDeleteInfo.length > maxCaseDelete) {
          return popLogicalDelete(this_logicalDeletes.caseDeleteInfo, type)
        }
        break
    }
  }
  const popLogicalDelete = (deleteInfo: deleteInfo[], type: string) => {
    const popDdta = deleteInfo.shift()
    if (!popDdta) return;

    hardDelete(popDdta, type)
  }
  const hardDelete = (deleteInfo: deleteInfo, type: string) => {
    let token;
    let alterationToken;
    const pocketLogicalDelete_path = ["previewDatas", "pocketLogicalDelete"]
    const caseLogicalDelete_path = ["previewDatas", "caseLogicalDelete"]
    let LogicalDelete_path;
    let LogicalDelete_id;
    console.log("hardDelete__", type)
    switch (type) {
      case "pocket_logicalDelete":
        const pocket_path = ["previewDatas", "mainLuggage", deleteInfo.caseId, "pockets"]
        LogicalDelete_path = pocketLogicalDelete_path
        LogicalDelete_id = deleteInfo.pocketId
        token = {
          type: "objectRemove" as server_alterationTokenType,
          value: { id: deleteInfo.pocketId },
          createdAt: Date.now(),
          path: pocket_path
        }

        const pocketToken = {
          pocketId: deleteInfo.pocketId,
          caseId: deleteInfo.caseId,
        }
        alterationToken = {
          alterationType: "pocket_hardDelete" as alterationType,
          token: pocketToken,
          user: "",
        }
        break;
      case "case_logicalDelete":
        const case_path = ["previewDatas", "mainLuggage"]
        LogicalDelete_id = deleteInfo.caseId
        LogicalDelete_path = caseLogicalDelete_path
        token = {
          type: "objectRemove" as server_alterationTokenType,
          value: { id: deleteInfo.caseId },
          createdAt: Date.now(),
          path: case_path
        }
        const caseToken = {
          caseId: deleteInfo.caseId,
        }
        alterationToken = {
          alterationType: "case_hardDelete" as alterationType,
          token: caseToken,
          user: ""
        }
        break
    }

    const logicalListDbToken = {
      type: "arrayRemove" as server_alterationTokenType,
      value: { id: LogicalDelete_id },
      createdAt: Date.now(),
      path: LogicalDelete_path ? LogicalDelete_path : []
    }

    const logicalListToken = {
      alterationType: "case_hardDelete" as alterationType,
      token: logicalListDbToken,
      user: deleteInfo.userId,
    }

    if (!token || !alterationToken) return null;
    console.log("deleteInfo.workId, { sendDbToken: token, alterationToken: alterationToken }", token)
    saveQueue.push(deleteInfo.workId, { sendDbToken: token, alterationToken: alterationToken })
    saveQueue.push(deleteInfo.workId, { sendDbToken: logicalListDbToken, alterationToken: logicalListToken })
    return alterationToken
  }
  return { pushLogicalDelete, popLogicalDelete, getLogicalDelete, setLogicalDelete }
}
export { useLogicalDelete }