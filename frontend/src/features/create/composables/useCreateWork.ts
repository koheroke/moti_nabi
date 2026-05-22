import type { UserLuggage_SaveDBData, previewItem, itemCard, CategoryId } from "../type/itemType";
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
  pocketId: string
  parentItemId: string | undefined
  pulse: number;
}

export interface deletePreviewItemToken {
  originalId: string
  pocketId: string
  parentItemId: string | undefined
  itemId: string
}

export interface addPreviewItemToken {
  pocketId: string
  parentItemId?: string
  itemId: string
}

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
    let vuepreviewData = null as Record<string, previewItem[]> | null
    let vueItemList = null as Record<string, itemCard> | null
    let addItemCounter = null as number | null

    try {
      data = await createApi.load(userId, theWorkId)
    } catch (e) {
      return "fallLoadData"
    }
    try {
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
    createStore.setpreviewItem(vuepreviewData)
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
    const newToken: alterationToken = {
      alterationType: "previewItems_delete",
      token: token,
      user: userStore.userName
    }

    const addToken = {
      ...token,
      itemId: token.itemId
    }
    const reverseToken: alterationToken = {
      alterationType: "previewItems_additem",
      token: addToken,
      user: userStore.userName
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




  return { load, addItemToPreview, addItemCount, addBookmark, deletePreviewItem, addListItem }
}

