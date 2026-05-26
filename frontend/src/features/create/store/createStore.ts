import { defineStore } from 'pinia'
import type { Pocket, UserLuggage_SaveDBData, itemCard, previewItem, CategoryId, Case } from "../type/itemType";
import type { iconInfomation } from "@/features/create/type/itemType";
import { type Category } from "@/features/create/type/itemType";
import type { addPreviewItemToken, addItemCountToken, addBookmarkToken, deletePreviewItemToken, addListItemToken } from '../composables/useCreateWork';
export interface caseArray {
  id: string;
  data: Case
}



export const useCreateStore = defineStore("create", {
  state: () => ({
    workId: null as number | null,
    userLuggage_SaveDBData: null as UserLuggage_SaveDBData | null,
    listItem: null as Record<string, itemCard> | null,
    previewItem: null as Record<string, previewItem[]> | null,
    searchText: "",
    staticItemData: {} as Record<string, itemCard>,
    category: null as CategoryId | null,
    addItemCounter: null as number | null,
    previewCases: {} as Record<string, Case>,
    staticCases: {} as Record<string, Case>,
    iconMap: {} as Record<string, iconInfomation>,
    categoryColor: {} as Record<string, string>,
    categories: [] as Category[],
    isStaticLoaded: false,
  }),
  getters: {
    staticCasesGetter: (state) => state.staticCases,
    categorys: (state) => state.categories,
    iconMapGetter: (state) => state.iconMap,
    categoryColorGetter: (state) => state.categoryColor,
    listItemGetter: (state) => state.listItem,
    previewItemGetter: (state) => state.previewItem,
    workIdGetter: (state) => state.workId,
    getAllCasesArray: (state): caseArray[] =>
      Object.entries(state.staticCases).map(([key, value]) => ({
        id: key,
        data: value,
      })),
    getPreviewCasesArray: (state): caseArray[] =>
      Object.entries(state.previewCases).map(([key, value]) => ({
        id: key,
        data: value,
      })),


    filteredListItem: (state) => {
      if (!state.listItem) return {}
      const keyword = state.searchText.trim().toLowerCase()
      return Object.fromEntries(
        Object.entries(state.listItem).filter(([_, item]) => {
          if (state.category === "bookmark") {
            return item.bookmark == true
          }
          if (state.category === "create") {
            return item.createType == "userCreated"
          }
          const matchKeyword =
            keyword === "" ||
            item.name.toLowerCase().includes(keyword)
          const matchCategory =
            (!state.category || state.category === "all") ||
            item.category.includes(state.category)

          return matchKeyword && matchCategory
        })
      )
    }
  },
  actions: {
    setIconMap(icons: Record<string, iconInfomation>) {
      this.iconMap = icons
    },
    setStaticCases(cases: Record<string, Case>) {
      this.staticCases = cases
    },
    setCategoryColor(colorList: Record<string, string>) {
      this.categoryColor = colorList
    },
    setCategories(categories: Category[]) {
      this.categories = categories
    },
    setSearchText(text: string) {
      this.searchText = text
    },
    setCategory(text: CategoryId) {
      this.category = text
    },
    setAddItemCounter(count: number) {
      this.addItemCounter = count
    },
    setStaticItemData(data: Record<string, itemCard>) {
      this.staticItemData = data
    },
    setSaveDBData(data: UserLuggage_SaveDBData) {
      this.userLuggage_SaveDBData = data
    },
    setlistItem(data: Record<string, itemCard>) {
      this.listItem = data
    },
    setpreviewItem(data: Record<string, previewItem[]>) {
      this.previewItem = data
    },
    setWorkId(id: number) {
      this.workId = id
    },
    setStaticLoaded(state: boolean) {
      this.isStaticLoaded = state
    },
    addCount(token: addItemCountToken) {
      if (!this.previewItem || !this.listItem) return
      const findId = token.parentItemId ? token.parentItemId : token.originalId
      const index = findIndex(findId, this.previewItem[token.pocketId])
      if (index != -1) {
        if (token.parentItemId == undefined)
          this.previewItem[token.pocketId][index].count += token.pulse
        if (token.parentItemId != undefined) {
          const innnerItemindex = findIndex(token.originalId, this.previewItem[token.pocketId][index].innerItems!)
          this.previewItem[token.pocketId][index].innerItems![innnerItemindex].count += token.pulse
        }
      }
    },
    pushpreviewItem(token: addPreviewItemToken) {
      if (!this.previewItem || !this.listItem || !this.addItemCounter) return
      this.addItemCounter++
      const cardItem: previewItem = {
        ...this.listItem[token.itemId], ...{ count: 1, originalId: `item_${this.addItemCounter}`, innerItems: [] }
      }
      if (token.parentItemId == undefined) {
        this.previewItem[token.pocketId].push(cardItem)
      } else {
        const innnerItemIndex = findIndex(token.parentItemId, this.previewItem[token.pocketId])
        if (innnerItemIndex == -1) return
        this.previewItem[token.pocketId][innnerItemIndex].innerItems!.push(cardItem)
      }
    },

    addBookmark(token: addBookmarkToken) {
      if (!this.previewItem || !this.listItem) return
      this.listItem[token.itemId].bookmark = !this.listItem[token.itemId].bookmark
    },

    addListItem(token: addListItemToken) {
      if (!this.previewItem || !this.listItem || !this.addItemCounter) return
      const keys = Object.keys(this.listItem)
      const id = `item_${keys.length + 1}`
      const listItem: itemCard = {
        ...token, ...{ bookmark: false, id: id }
      }
      this.listItem[id] = listItem
    },

    deletepreviewItem(token: deletePreviewItemToken) {
      if (!this.previewItem || !this.listItem) return
      if (!this.previewItem[token.pocketId]) return
      const findId = token.parentItemId ? token.parentItemId : token.originalId
      console.log(findId, this.previewItem[token.pocketId], token)
      const index = findIndex(findId, this.previewItem[token.pocketId])
      if (token.parentItemId == undefined) {
        this.previewItem[token.pocketId].splice(index, 1);
      }
      if (token.parentItemId != undefined) {
        const innnerItemindex = findIndex(token.originalId, this.previewItem[token.pocketId][index].innerItems!)
        this.previewItem[token.pocketId][index].innerItems!.splice(innnerItemindex, 1);
      }

    },

    addPreviewCase(data: Case) {
      const id = `caseID_${Object.keys(this.previewCases).length}`
      this.previewCases[id] = data
    },
    deleteCase(id: string) {

    },
    editSelectCase(id: string, data: Pocket[]) {

    },
    reSizeCase(id: string, data: Pocket[]) {

    }
  }
})

const findIndex = (findId: string, data: previewItem[]) => {
  return data.findIndex(
    (item) => item.originalId === findId
  );
}


// features / create / composables / useCreateWork.ts // 外部から呼ぶ窓口 store/ createStore.ts // state本体 domain/ applyCreateAction.ts // 実際に値を変更する処理 services/ saveQueue.ts // 5秒キュー createApi.ts // API通信