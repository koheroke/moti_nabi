import type { UserLuggage_SaveDBData } from "../type/apiType";
import type { Pocket, Case } from "../type/casetype";
import type { itemCard, CaseType } from "../type/itemType";
import type { CategoryId } from "../type/categoryType";
import { useApplyCreateAction } from "./applyCreateAction";
import { useCreateApi } from "../api/createApi";
import { useUserStore } from "@/store/user/userStore";
import { useCreateStore } from "../store/createStore";
import type { alterationToken } from "./applyCreateAction";
import { useAlterationLogStore } from "../store/useAlterationLogStore"



type loadResponse = "noneNameorWorkId" | "fallLoadData" | "damagedData" | "none"
type addItemToPreviewResponse = "nonePreview" | "addPreview" | "noneItem" | "isRegulatedAction"
export type createdType = "default" | "userCreated" | "othersUserCreated"


export interface addItemCountToken {
  originalId: string
  caseId: string
  pocketId: string
  parentItemId: string | undefined
  pulse: number;
}

export interface deletePreviewItemToken {
  originalId: string
  caseId: string
  pocketId: string
  innnerItemToken?: addPreviewItemToken[]
  parentItemId: string | undefined
  itemId: string
}

export interface addPreviewItemToken {
  pocketId: string
  caseId: string
  parentItemId?: string
  itemId: string
  originalId?: string
}

export interface positionChangePreviewItemToken {
  popPocketId: string
  popCaseId: string
  pushPocketId: string,
  pushCaseId: string
  originalId: string
}

export interface addPreviewCaseToken {
  case: Case | {
    caseId: string,
    caseType: CaseType
  }
  reverse: boolean
}
export interface deletePreviewCaseToken {
  deletecase: Case,
  id: string
}
export interface confirmedResizePocketToken {
  caseId: string,
  pocketId: string
}
export interface provisionalResizePocket {
  caseId: string,
  pocketId: string,
  resizeData: { x: number, y: number, width: number, height: number }
}
export interface provisionalRemovePocket {
  caseId: string,
  pocketId: string,
  resizeData: { x: number, y: number }
}


//リスト
export interface addListItemToken {
  name: string
  category: CategoryId[],
  isStorage: boolean,
  iconId: string
  createType: createdType
}


export interface addBookmarkToken {
  itemId: string
}

//



export const UseCreateWork = () => {
  const createStore = useCreateStore()
  const userStore = useUserStore()
  const alterationLog = useAlterationLogStore()
  const createApi = useCreateApi()

  const applyCreateAction = useApplyCreateAction()

  const load = async (): Promise<loadResponse> => {
    // const userId = userStore.userId
    // const theWorkId = createStore.workIdGetter

    const userId = 1 //テスト
    const theWorkId = 1 //テスト


    if (!userId || !theWorkId) return "noneNameorWorkId"
    let data = null as UserLuggage_SaveDBData | null
    let vuepreviewData = {} as Record<string, Case>
    let vueItemList = {} as Record<string, itemCard>
    let addItemCounter = 0 as number

    try {
      data = await createApi.load(userId, theWorkId)
    } catch (e) {
      return "fallLoadData"
    }

    const createAction = useApplyCreateAction()
    await createAction.initCreateStaticData()
    const response = applyCreateAction.hydrateCreateState(data)
    try {
      if (data == null) throw new Error()
      const createAction = useApplyCreateAction()
      await createAction.initCreateStaticData()
      const response = applyCreateAction.hydrateCreateState(data)
      vuepreviewData = response.vuepreviewData
      vueItemList = response.vueItemList
      addItemCounter = response.addItemCounter
    } catch (e) {
      return "damagedData"
    }

    createStore.setAddItemCounter(addItemCounter)
    createStore.setSaveDBData(data)
    createStore.setlistItem(vueItemList)
    createStore.setpreviewData(vuepreviewData)
    return "none"
  }
  const addItemToPreview = async (token: addPreviewItemToken): Promise<addItemToPreviewResponse> => {
    const { itemId } = token
    const items = createStore?.listItemGetter
    if (!items) return "nonePreview"
    const item = items[itemId]
    if (!item) return "noneItem"
    if (item.isStorage == true && token.parentItemId != undefined) return "isRegulatedAction"


    const newToken: alterationToken = {
      alterationType: "previewItems_additem",
      token: token,
      user: userStore.userName
    }

    const reverseToken: alterationToken = {
      alterationType: "previewItems_delete",
      token: token,
      user: userStore.userName
    }
    alterationLog.saveState({ forwardToken: newToken, reverseToken: reverseToken })
    applyCreateAction.alterationData(newToken)
    return "addPreview"
  }

  const addItemCount = (token: addItemCountToken) => {
    const newToken: alterationToken = {
      alterationType: "previewItems_addcount",
      token: token,
      user: userStore.userName
    }

    const reversePulse = { ...token, pulse: token.pulse * -1 }

    const reverseToken: alterationToken = {
      alterationType: "previewItems_addcount",
      token: reversePulse,
      user: userStore.userName
    }
    alterationLog.saveState({ forwardToken: newToken, reverseToken: reverseToken })

    applyCreateAction.alterationData(newToken)
  }

  const addBookmark = (token: addBookmarkToken) => {
    const newToken: alterationToken = {
      alterationType: "itemlistItems_bookmark",
      token: token,
      user: userStore.userName
    }
    applyCreateAction.alterationData(newToken)
  }

  const deletePreviewItem = (token: deletePreviewItemToken) => {
    if (!createStore.listItemGetter) return
    const newToken: alterationToken = {
      alterationType: "previewItems_delete",
      token: token,
      user: userStore.userName
    }
    const { innnerItemToken, ...addtoken } = token
    const reverseToken: alterationToken[] = []
    reverseToken.push({
      alterationType: "previewItems_additem",
      token: addtoken,
      user: userStore.userName
    })
    if (token.innnerItemToken) {
      token.innnerItemToken.forEach((item) => {
        reverseToken.push({
          alterationType: "previewItems_additem",
          token: item,
          user: userStore.userName
        })
      })
    }



    applyCreateAction.alterationData(newToken)
    alterationLog.saveState({ forwardToken: newToken, reverseToken: reverseToken })
  }
  const addListItem = (token: addListItemToken) => {
    const newToken: alterationToken = {
      alterationType: "itemlistItems_additem",
      token: token,
      user: userStore.userName
    }
    applyCreateAction.alterationData(newToken)
  }
  const addCase = (caseType: CaseType) => {
    const id = `caseID_${createStore.getPreviewCasesArray.length}`
    const addToken: addPreviewCaseToken = {
      case: {
        caseType: caseType as CaseType,
        caseId: id
      },
      reverse: false
    }

    const forwardToken: alterationToken = {
      alterationType: "previewCases_addCase",
      token: addToken,
      user: userStore.userName
    }

    const deleteToken: deletePreviewCaseToken = {
      id: id,
      deletecase: createStore.staticCasesGetter[caseType]
    }

    const reverseToken: alterationToken = {
      alterationType: "previewCases_deleteCase",
      token: deleteToken,
      user: userStore.userName
    }

    createStore.addPreviewCase(addToken)
    alterationLog.saveState({ forwardToken: forwardToken, reverseToken: reverseToken })
  }
  const deleteCase = (id: string) => {

    const this_case: Case = createStore.previewItemGetter[id]
    const addToken: addPreviewCaseToken = {
      case: this_case,
      reverse: true
    }

    const deleteToken: deletePreviewCaseToken = {
      id: id,
      deletecase: this_case
    }

    const reverseToken: alterationToken = {
      alterationType: "previewCases_deleteCase",
      token: deleteToken,
      user: userStore.userName
    }

    const forwardToken: alterationToken = {
      alterationType: "previewCases_addCase",
      token: addToken,
      user: userStore.userName
    }
    createStore.addPreviewCase(addToken)
    alterationLog.saveState({ forwardToken: forwardToken, reverseToken: reverseToken })
  }

  const provisionalResizePocket = (resizeData: { x: number, y: number, width: number, height: number }, pocketId: string, caseId: string) => {
    const token: provisionalResizePocket = {
      caseId: caseId,
      pocketId: pocketId,
      resizeData: resizeData,
    };
    createStore.provisionalResizePocket(token)
  }
  const confirmedResizePocket = (caseid: string, pocketId: string) => {
    const confirmedToken: confirmedResizePocketToken = {
      caseId: caseid,
      pocketId: pocketId
    }
    const token: alterationToken = {
      token: confirmedToken,
      alterationType: "confirmed-resizePocket",
      user: userStore.userName
    }
    applyCreateAction.alterationData(token)
  }

  const provisionalReMovePocket = (resizeData: { x: number, y: number }, pocketId: string, caseId: string) => {
    const token: provisionalRemovePocket = {
      caseId: caseId,
      pocketId: pocketId,
      resizeData: resizeData,
    };
    createStore.provisionalRemovePocket(token)
  }
  const positionChangeItemToPreview = (token: positionChangePreviewItemToken) => {
    const target_item = createStore.previewCase[token.popCaseId].pockets[token.popPocketId].items.find((item) => item.originalId === token.originalId)
    if (!target_item) return
    const push_target = createStore.previewCase[token.pushCaseId].pockets[token.pushCaseId].items
    push_target.push(target_item)
  }

  return { positionChangeItemToPreview, provisionalReMovePocket, provisionalResizePocket, confirmedResizePocket, load, addItemToPreview, addItemCount, addBookmark, deletePreviewItem, addListItem, addCase, deleteCase }
}
