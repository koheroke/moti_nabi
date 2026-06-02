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
  originalId: string
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
  pos: { x: number, y: number, width: number, height: number }
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
  removeData: { x: number, y: number }
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
    const originalId = token.originalId ? token.originalId : `item_${createStore.addItemCounter}`
    const deleteToken: deletePreviewItemToken = {
      originalId: originalId,
      caseId: token.caseId,
      pocketId: token.pocketId,
      parentItemId: token.parentItemId,
      itemId: token.itemId
    }

    const newToken = {
      ...token,
      originalId: originalId
    }

    const fowardToken: alterationToken = {
      alterationType: "previewItems_additem",
      token: newToken,
      user: userStore.userName,
    }

    const reverseToken: alterationToken = {
      alterationType: "previewItems_delete",
      token: deleteToken,
      user: userStore.userName
    }
    alterationLog.saveState({ forwardToken: fowardToken, reverseToken: reverseToken })
    applyCreateAction.alterationData(fowardToken)
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

  let provisionalpocket = false
  let sevePocket: { x: number, y: number, width: number, height: number } = { x: 0, y: 0, width: 0, height: 0 }
  const provisionalResizePocket = (resizeData: { x: number, y: number, width: number, height: number }, pocketId: string, caseId: string) => {
    if (!provisionalpocket) {
      provisionalpocket = true
      const { x, y, width, height } = createStore.previewCase[caseId].pockets[pocketId]
      sevePocket = { x: x, y: y, width: width, height: height }
    }
    const token: provisionalResizePocket = {
      caseId: caseId,
      pocketId: pocketId,
      resizeData: resizeData,
    };
    createStore.reSizePocket(token)
  }
  const confirmedResizePocket = (caseid: string, pocketId: string) => {
    const { x, y, width, height } = createStore.previewCase[caseid].pockets[pocketId]

    const confirmedToken: confirmedResizePocketToken = {
      pos: { x: x, y: y, width: width, height: height },
      caseId: caseid,
      pocketId: pocketId,
    }

    const revarseConfirmedToken: confirmedResizePocketToken = {
      pos: sevePocket,
      caseId: caseid,
      pocketId: pocketId
    }

    const reverseToken: alterationToken = {
      alterationType: "confirmed_resizePocket",
      token: revarseConfirmedToken,
      user: userStore.userName
    }

    const token: alterationToken = {
      token: confirmedToken,
      alterationType: "confirmed_resizePocket",
      user: userStore.userName
    }
    provisionalpocket = false

    alterationLog.saveState({ forwardToken: token, reverseToken: reverseToken })
    applyCreateAction.alterationData(token)
  }


  let provisionalPocket = false
  let savePocket: { x: number; y: number; width: number; height: number } = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }

  const provisionalRemovePocket = (
    moveData: { x: number; y: number },
    pocketId: string,
    caseId: string
  ) => {
    if (!provisionalPocket) {
      provisionalPocket = true

      const { x, y, width, height } =
        createStore.previewCase[caseId].pockets[pocketId]

      savePocket = { x, y, width, height }
    }

    const token: provisionalRemovePocket = {
      caseId,
      pocketId,
      removeData: moveData,
    }

    createStore.reMovePocket(token)
  }

  const confirmedRemovePocket = (caseId: string, pocketId: string) => {
    const { x, y, width, height } =
      createStore.previewCase[caseId].pockets[pocketId]

    const confirmedToken: confirmedResizePocketToken = {
      pos: { x, y, width, height },
      caseId,
      pocketId,
    }

    const reverseConfirmedToken: confirmedResizePocketToken = {
      pos: savePocket,
      caseId,
      pocketId,
    }

    const token: alterationToken = {
      alterationType: "confirmed_resizePocket",
      token: confirmedToken,
      user: userStore.userName,
    }

    const reverseToken: alterationToken = {
      alterationType: "confirmed_resizePocket",
      token: reverseConfirmedToken,
      user: userStore.userName,
    }

    provisionalPocket = false

    alterationLog.saveState({
      forwardToken: token,
      reverseToken,
    })

    applyCreateAction.alterationData(token)
  }


  // const positionChangeItemToPreview = (token: positionChangePreviewItemToken) => {
  //   const target_item = createStore.previewCase[token.popCaseId].pockets[token.popPocketId].items.
  //     if(!target_item) return
  //   const push_target = createStore.previewCase[token.pushCaseId].pockets[token.pushCaseId].items
  //   push_target.set(target_item, target_item)
  // }

  return { confirmedRemovePocket, provisionalRemovePocket, provisionalResizePocket, confirmedResizePocket, load, addItemToPreview, addItemCount, addBookmark, deletePreviewItem, addListItem, addCase, deleteCase }
}
