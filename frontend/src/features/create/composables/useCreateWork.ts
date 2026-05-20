
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
type loadError = "noneNameorWorkId" | "fallLoadData" | "damagedData" | "none"

export interface addItemToken {
  itemId: string
  poketId: string
  parentItemId?: string
}

export const UseCreateWork = () => {

  const load = async (): Promise<loadError> => {
    // const userId = userStore.userId
    // const theWorkId = createStore.workIdGetter

    const userId = 1 //テスト
    const theWorkId = 1 //テスト


    if (!userId || !theWorkId) return "noneNameorWorkId"
    let data = null as UserLuggage_SaveDBData | null
    let vuepreviewData = null as Record<string, previewItem[]> | null
    let vueItemList = null as Record<string, itemCard> | null
    try {
      data = await createApi.load(userId, theWorkId)
    } catch (e) {
      return "fallLoadData"
    }
    try {
      const response = applyCreateAction.hydrateCreateState(data)
      vuepreviewData = response.vuepreviewData
      vueItemList = response.vueItemList
    } catch (e) {
      return "damagedData"
    }
    createStore.setSaveDBData(data)
    createStore.setlistItem(vueItemList)
    createStore.setpreviewItem(vuepreviewData)
    return "none"
  }

  const addItemToItemList = async (data: Category) => {

  }
  const addItemToPreview = async (token: addItemToken) => {

  }
  return { load, addItemToItemList, addItemToPreview }
}

export { applyCreateAction }