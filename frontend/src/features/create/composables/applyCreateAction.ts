import type { UserLuggage_SaveDBData, previewItem, saveDBpreviewData } from "../type/itemType";
import { filteredItems } from "../driver/itemListDriver";

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
          }
        } else {
          return {
            ...itemData,
            count: item.count,
          }
        }
      })
    }

    const vuepreviewData: Record<string, previewItem[]> =
      Object.fromEntries(
        Object.entries(previewDatas.mainLuggage.pokets).map(
          ([key, poket]) => [key, getItemDatra(poket)]
        )
      )
    return { vuepreviewData: vuepreviewData, vueItemList: vueItemList }
  }
  return { hydrateCreateState }
}
export { useApplyCreateAction }




