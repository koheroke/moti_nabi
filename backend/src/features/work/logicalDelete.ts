import { useSaveQueue } from "./saveQueue"
import type { server_alterationTokenType, alterationType } from "./saveQueue"
const saveQueue = useSaveQueue()
interface pocletDeleteInfo { pocketId: string, caseId: string, userId: string, workId: string }
interface caseDeleteInfo { pocketId: string, caseId: string, userId: string, workId: string }
type deleteInfo = pocletDeleteInfo | caseDeleteInfo
export type type = "pocket_LogicalDelete" | "case_LogicalDelete"

const useLogicalDelete = () => {
  const logicalDelete = new Map<string, { pocketDeleteInfo: pocletDeleteInfo[], caseDeleteInfo: caseDeleteInfo[] }>()
  const maxlogicalDelete = 5

  const getLogicalDelete = (workId: string) => {
    return logicalDelete.get(workId)
  }

  const setLogicalDelete = (workId: string, pocketDeleteInfo: pocletDeleteInfo[], caseDeleteInfo: caseDeleteInfo[]) => {
    logicalDelete.set(workId, { pocketDeleteInfo: pocketDeleteInfo, caseDeleteInfo: caseDeleteInfo })
  }


  const pushLogicalDelete = (deleteInfo: deleteInfo, type: type) => {
    if (!logicalDelete.get(deleteInfo.workId)) {
      logicalDelete.set(deleteInfo.workId, { pocketDeleteInfo: [], caseDeleteInfo: [] })
    }
    const this_logicalDeletes = logicalDelete.get(deleteInfo.workId)
    if (!this_logicalDeletes) return;
    switch (type) {
      case "pocket_LogicalDelete":
        this_logicalDeletes.pocketDeleteInfo.push(deleteInfo as pocletDeleteInfo)
        if (this_logicalDeletes.pocketDeleteInfo.length > maxlogicalDelete) {
          popLogicalDelete(this_logicalDeletes.pocketDeleteInfo)
        }
        break;
      case "case_LogicalDelete":
        this_logicalDeletes.caseDeleteInfo.push(deleteInfo as caseDeleteInfo)
        popLogicalDelete(this_logicalDeletes.caseDeleteInfo)
        break
    }
  }
  const popLogicalDelete = (deleteInfo: deleteInfo[]) => {
    const popDdta = deleteInfo.pop()
    if (!popDdta) return;

    hardDelete(popDdta)
  }
  const hardDelete = (deleteInfo: deleteInfo) => {
    const path = ["previewDatas", "mainLuggage", deleteInfo.caseId, "pockets"]
    const token = {
      type: "objectRemove" as server_alterationTokenType,
      value: { id: deleteInfo.pocketId },
      createdAt: Date.now(),
      path: path
    }

    const newToken = {
      pocketId: deleteInfo.pocketId,
      caseId: deleteInfo.caseId,

    }
    const alterationToken = {
      alterationType: "previewItems_additem" as alterationType,
      token: newToken,
      user: deleteInfo.userId,
    }

    saveQueue.push(deleteInfo.workId, { sendDbToken: token, alterationToken: alterationToken })
  }
  return { pushLogicalDelete, popLogicalDelete, getLogicalDelete, setLogicalDelete }
}
export { useLogicalDelete }