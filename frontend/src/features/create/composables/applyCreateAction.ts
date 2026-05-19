import { type UserLuggage_SaveDBData } from "../type/itemType";
import { categories } from "../driver/itemListDriver";
const hydrateCreateState = (data: UserLuggage_SaveDBData) => {
  const { previewDatas, itemListDatas } = data
  const synthesis = { ...itemListDatas.addedItems, ...categories }
  const vueItemList = synthesis.map((item) => ({
    ...item,
    bookmark: itemListDatas.bookmarks.includes(item.id),
  }));


  const keys = Object.keys(previewDatas.mainLuggage.pokets)

  const vuepreviewData = keys.filter((key) => {
    const poketItems = previewDatas.mainLuggage.pokets[key]
    return poketItems.filter((item) => {
      if (!item.innerItems) {
        return item.id
      }
    })
  })




  return { vueItemList: vueItemList, vuepreviewData: vuepreviewData }
}
export { hydrateCreateState }