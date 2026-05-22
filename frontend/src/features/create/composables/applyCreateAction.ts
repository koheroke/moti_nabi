import type { UserLuggage_SaveDBData, previewItem, saveDBpreviewData } from "../type/itemType";
import { filteredItems } from "../driver/itemListDriver";
import type { addPreviewItemToken, addItemCountToken, addBookmarkToken, addListItemToken, deletePreviewItemToken } from "./useCreateWork";
import { useCreateStore } from "../store/createStore";
import { useSaveQueue } from "../services/saveQueue";


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

  const hydrateCreateState = (data: UserLuggage_SaveDBData) => {
    const { previewDatas, itemListDatas } = data
    const synthesis = Object.assign(itemListDatas.addedItems, filteredItems)
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
    console.log(" previewDatas.addItemCounter", previewDatas.addItemCounter)
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
  return { hydrateCreateState, alterationData }
}
export { useApplyCreateAction }




