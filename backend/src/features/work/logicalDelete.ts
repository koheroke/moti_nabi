import { useSaveQueue } from "./saveQueue"
import type { server_alterationTokenType, alterationType } from "./saveQueue"
const saveQueue = useSaveQueue()
interface pocletDeleteInfo { pocketId: string, caseId: string, userId: string, workId: string }
interface caseDeleteInfo { pocketId: string, caseId: string, userId: string, workId: string }
type deleteInfo = pocletDeleteInfo | caseDeleteInfo
export type type = "pocket_logicalDelete" | "case_logicalDelete"



const useLogicalDelete = () => {
  const logicalDelete = new Map<string, { pocketDeleteInfo: pocletDeleteInfo[], caseDeleteInfo: caseDeleteInfo[] }>()
  const reLogicalDelete = (deleteInfo: deleteInfo, type: type) => {
    if (!logicalDelete.get(deleteInfo.workId)) {
      logicalDelete.set(deleteInfo.workId, { pocketDeleteInfo: [], caseDeleteInfo: [] })
    }
    console.log("ogicalDelete.get(deleteInfo.workId)", logicalDelete.get(deleteInfo.workId))
    const this_logicalDeletes = logicalDelete.get(deleteInfo.workId)
    if (!this_logicalDeletes) return;
    switch (type) {
      case "pocket_logicalDelete":
        this_logicalDeletes.pocketDeleteInfo = this_logicalDeletes.pocketDeleteInfo.filter((info) => !(
          info.pocketId === deleteInfo.pocketId &&
          info.caseId === deleteInfo.caseId
        ))

        break;
      case "case_logicalDelete":
        this_logicalDeletes.pocketDeleteInfo = this_logicalDeletes.pocketDeleteInfo.filter((info) => !(info.caseId == deleteInfo.caseId))
        break
    }

  }
  const getLogicalDelete = (workId: string) => {
    return logicalDelete.get(workId)
  }
  const setLogicalDelete = (workId: string, pocketDeleteInfo: pocletDeleteInfo[], caseDeleteInfo: caseDeleteInfo[]) => {
    return logicalDelete.set(workId, { pocketDeleteInfo: pocketDeleteInfo, caseDeleteInfo: caseDeleteInfo })
  }

  const pushLogicalDelete = (deleteInfo: deleteInfo, type: type) => {
    if (!logicalDelete.get(deleteInfo.workId)) {
      logicalDelete.set(deleteInfo.workId, { pocketDeleteInfo: [], caseDeleteInfo: [] })
    }
    const this_logicalDeletes = logicalDelete.get(deleteInfo.workId)
    if (!this_logicalDeletes) return;
    switch (type) {
      case "pocket_logicalDelete":
        this_logicalDeletes.pocketDeleteInfo.push(deleteInfo as pocletDeleteInfo)
        break;
      case "case_logicalDelete":
        this_logicalDeletes.caseDeleteInfo.push(deleteInfo as caseDeleteInfo)
        break
    }
  }

  const leaveWork = (workId: string) => {
    const this_logicalDelete = logicalDelete.get(workId)
    console.log("leaveWork", this_logicalDelete)
    this_logicalDelete?.caseDeleteInfo.forEach((this_case) => {
      hardDelete(this_case, "case_logicalDelete")
    })
    this_logicalDelete?.pocketDeleteInfo.forEach((this_pocket) => {
      hardDelete(this_pocket, "pocket_logicalDelete")
    })
    logicalDelete.delete(workId)
  }



  const hardDelete = (deleteInfo: deleteInfo, type: string) => {
    let token;
    let alterationToken;
    const pocketLogicalDelete_path = ["previewDatas", "pocketLogicalDelete"]
    const caseLogicalDelete_path = ["previewDatas", "caseLogicalDelete"]
    let LogicalDelete_path;
    let LogicalDelete_id;
    switch (type) {
      case "pocket_logicalDelete":
        const pocket_path = ["previewDatas", "mainLuggage", deleteInfo.caseId, "pockets"]
        LogicalDelete_path = pocketLogicalDelete_path
        LogicalDelete_id = deleteInfo.pocketId
        token = {
          type: "objectRemove" as server_alterationTokenType,
          value: { id: deleteInfo.pocketId },
          createdAt: Date.now(),
          path: pocket_path,
          thumbnailEdit: true
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
          path: case_path,
          thumbnailEdit: true
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
    if (!token || !alterationToken) return null;
    console.log("deleteInfo.workId", { sendDbToken: token, alterationToken: alterationToken })
    saveQueue.push(deleteInfo.workId, { sendDbToken: token, alterationToken: alterationToken })
    return alterationToken
  }
  return { leaveWork, pushLogicalDelete, getLogicalDelete, setLogicalDelete, reLogicalDelete }
}
export { useLogicalDelete }