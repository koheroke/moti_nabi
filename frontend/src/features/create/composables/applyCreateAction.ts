
import type { addPreviewItemToken, addItemCountToken, addBookmarkToken, addListItemToken, deletePreviewItemToken } from "./useCreateWork";
import { useCreateStore } from "../store/createStore";

import { useSaveQueue } from "../services/saveQueue";

import type { UserLuggage_SaveDBData, saveDBpreviewData, previewItem } from "@/features/create/type/itemType";

export type alterationType = "previewItems_additem"
  | "previewItems_addcount"
  | "itemlistItems_bookmark"
  | "previewItems_delete"
  | "itemlistItems_additem"
type allToken = addPreviewItemToken | addItemCountToken | addBookmarkToken | addListItemToken | deletePreviewItemToken

export interface alterationToken {
  token: allToken
  alterationType: alterationType
  user: string
}






const useApplyCreateAction = () => {
  const saveQueue = useSaveQueue()
  const createStore = useCreateStore()
  const initCreateStaticData = async () => {
    if (createStore.isStaticLoaded) return
    const [itemListRes, categoryRes, casesRes] = await Promise.all([
      fetch("/json/create/itemList.json"),
      fetch("/json/create/category.json"),
      fetch("/json/create/case.json"),
    ])
    const staticItemData = await itemListRes.json()
    const categoryData = await categoryRes.json()
    const casesData = await casesRes.json()
    console.log(casesData)
    createStore.setStaticItemData(staticItemData)
    createStore.setIconMap(categoryData.iconMap)
    createStore.setCategoryColor(categoryData.color)
    createStore.setCategories(categoryData.categoryData)
    createStore.setStaticCases(casesData)
    createStore.setStaticLoaded(true)
  }

  const hydrateCreateState = (data: UserLuggage_SaveDBData) => {
    const staticItemData = createStore.staticItemData
    const { previewDatas, itemListDatas } = data
    const synthesis = Object.assign(itemListDatas.addedItems, staticItemData)
    const vueItemList = Object.fromEntries(
      Object.entries(synthesis).map(([key, item]) => [
        key,
        {
          ...item,
          bookmark: itemListDatas.bookmarks.includes(item.id),
        },
      ]),
    );
    const getItemDatra = (poket: saveDBpreviewData[]): previewItem[] => {
      return poket.map((item: saveDBpreviewData): previewItem => {
        const { bookmark, ...itemData } = vueItemList[item.id]
        if (vueItemList[item.id].isStorage) {
          return {
            ...itemData,
            innerItems: item.innerItems ? getItemDatra(item.innerItems) : [],
            count: item.count,
            originalId: item.originalId
          }
        } else {
          return {
            ...itemData,
            count: item.count,
            originalId: item.originalId
          }
        }
      })
    }
    const vuepreviewData: Record<string, previewItem[]> =
      Object.fromEntries(
        Object.entries(previewDatas.mainLuggage.pockets).map(
          ([key, poket]) => [key, getItemDatra(poket)]
        )
      )
    return { vuepreviewData: vuepreviewData, vueItemList: vueItemList, addItemCounter: previewDatas.addItemCounter }
  }
  const alterationData = (token: alterationToken) => {
    saveQueue.push(token)

    switch (token.alterationType) {
      case 'previewItems_additem':
        createStore.pushpreviewItem(token.token as addPreviewItemToken)
        break

      case 'previewItems_addcount':
        createStore.addCount(token.token as addItemCountToken)
        break

      case 'itemlistItems_bookmark':
        createStore.addBookmark(token.token as addBookmarkToken)
        break

      case 'previewItems_delete':
        createStore.deletepreviewItem(token.token as deletePreviewItemToken)
        break

      case 'itemlistItems_additem':
        createStore.addListItem(token.token as addListItemToken)
        break

      default:
        console.warn('unknown alterationType:', token.alterationType)
    }

  }
  return { hydrateCreateState, alterationData, initCreateStaticData }
}
export { useApplyCreateAction }




