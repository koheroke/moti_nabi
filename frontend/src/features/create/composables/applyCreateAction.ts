import type { UserLuggage_SaveDBData, previewItem, saveDBpreviewData } from "../type/itemType";
import { filteredItems } from "../driver/itemListDriver";
import type { addPreviewItemToken, addItemCountToken } from "./useCreateWork";

export type previewAlterationType = "delete" | "push" | "addCount"
export interface previewToken {
  alterationType: previewAlterationType
  token: addPreviewItemToken | addItemCountToken//| deteleItemToken | ...
}

const useApplyCreateAction = () => {
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
  const alterationPreviewData = (token: previewToken) => {

  }
  return { hydrateCreateState, alterationPreviewData }
}
export { useApplyCreateAction }




