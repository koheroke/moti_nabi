
import type { UserLuggage_SaveDBData, previewItem, itemCard } from "../type/itemType";
import { type Category } from "../type/itemType";
import { useApplyCreateAction } from "./applyCreateAction";
import { useCreateApi } from "../api/createApi";
import { useCreateStore } from "../store/createStore";
import { useUserStore } from "@/store/user/userStore";



const createStore = useCreateStore()
const userStore = useUserStore()
const createApi = useCreateApi()
const applyCreateAction = useApplyCreateAction()

type loadResponse = "noneNameorWorkId" | "fallLoadData" | "damagedData" | "none"
type addItemToPreviewResponse = "nonePreview" | "addPreview" | "noneItem" | "isRegulatedAction"
export type createdType = "default" | "userCreated" | "othersUserCreated"

export interface addListItemToken {
  name: string
  category: string[],
  isStorage: boolean,
  iconId: string
  createType: createdType
}

export interface addPreviewItemToken {
  pocketId: string
  parentItemId?: string
  itemId: string
}
export interface addItemCountToken {
  originalId: string
  pocketId: string
  parentItemId: string | undefined
  pulse: number;
}

export interface DeletePreviewItemToken {
  originalId: string
  pocketId: string
  parentItemId: string | undefined
}

export interface addBookmarkToken {
  itemId: string
}





export const UseCreateWork = () => {

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

  const addItemToItemList = async (data: Category) => {

  }
  const addItemToPreview = async (token: addPreviewItemToken): Promise<addItemToPreviewResponse> => {
    const { itemId } = token
    const items = createStore?.listItemGetter
    if (!items) return "nonePreview"
    const item = items[itemId]
    if (!item) return "noneItem"
    if (item.isStorage == true && token.parentItemId != undefined) return "isRegulatedAction"

    createStore.pushpreviewItem(token)
    applyCreateAction.alterationPreviewData({
      alterationType: "push",
      token: token,
    })
    return "addPreview"
  }

  const addItemCount = (token: addItemCountToken) => {
    createStore.addCount(token)

    applyCreateAction.alterationPreviewData({
      alterationType: "addCount",
      token: token,
    })
  }

  const addBookmark = (token: addBookmarkToken) => {
    createStore.addBookmark(token)
  }

  const deletePreviewItem = (token: DeletePreviewItemToken) => {
    createStore.deletepreviewItem(token)
    // applyCreateAction.alterationPreviewData({
    //   alterationType: "delete",
    //   token: token,
    // })
  }


  return { load, addItemToItemList, addItemToPreview, addItemCount, addBookmark, deletePreviewItem }
}

