import { defineStore } from 'pinia'
import type { Pocket, Case, previewItem } from '../type/casetype';
import type { itemCard } from '../type/itemType';
import type { CategoryId } from "@/features/create/type/categoryType";
import type { iconInfomation, UserLuggage_SaveDBData } from "@/features/create/type/apiType";
import { type Category, } from "@/features/create/type/categoryType";
import type { CaseType } from "@/features/create/type/itemType";
import type { addPreviewCaseToken, deletePreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, deletePreviewItemToken, addListItemToken } from '../composables/useCreateWork';
export interface caseArray {
  id: string;
  data: Case
}

export const useCreateStore = defineStore("create", {
  state: () => ({
    workId: null as number | null,
    userLuggage_SaveDBData: null as UserLuggage_SaveDBData | null,
    listItem: null as Record<string, itemCard> | null,
    previewCase: {} as Record<string, Case>,
    searchText: "",
    staticItemData: {} as Record<string, itemCard>,
    category: null as CategoryId | null,
    addItemCounter: null as number | null,
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
    previewItemGetter: (state) => state.previewCase,
    workIdGetter: (state) => state.workId,
    getAllCasesArray: (state): caseArray[] =>
      Object.entries(state.staticCases).map(([key, value]) => ({
        id: key,
        data: value,
      })),

    getPreviewCasesArray: (state): caseArray[] =>
      Object.entries(state.previewCase).map(([key, value]) => ({
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
    setpreviewData(data: Record<string, Case>) {
      this.previewCase = data
    },
    setWorkId(id: number) {
      this.workId = id
    },
    setStaticLoaded(state: boolean) {
      this.isStaticLoaded = state
    },
    addCount(token: addItemCountToken) {
      if (!this.previewCase || !this.listItem) return
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      const targetId = token.parentItemId ?? token.originalId
      const itemIndex = findIndex(targetId, pocket.items)
      if (itemIndex === -1) return
      const item = pocket.items[itemIndex]
      if (!token.parentItemId) {
        item.count += token.pulse
        return
      }
      const innerItemIndex = findIndex(
        token.originalId,
        item.innerItems!
      )
      item.innerItems![innerItemIndex].count += token.pulse
    },
    pushpreviewItem(token: addPreviewItemToken) {
      if (!this.previewCase || !this.listItem || !this.addItemCounter) return
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      const originalId = token.originalId ? token.originalId : `item_${this.addItemCounter}`
      this.addItemCounter++
      const cardItem: previewItem = {
        ...this.listItem[token.itemId], ...{ count: 1, originalId: originalId, innerItems: [] }
      }
      if (token.parentItemId == undefined) {
        pocket.items.push(cardItem)
      } else {
        const innnerItemIndex = findIndex(token.parentItemId, pocket.items)
        if (innnerItemIndex == -1) return
        pocket.items[innnerItemIndex].innerItems!.push(cardItem)
      }
    },

    addBookmark(token: addBookmarkToken) {
      if (!this.previewCase || !this.listItem) return
      this.listItem[token.itemId].bookmark = !this.listItem[token.itemId].bookmark
    },

    addListItem(token: addListItemToken) {
      if (!this.previewCase || !this.listItem || !this.addItemCounter) return
      const keys = Object.keys(this.listItem)
      const id = `item_${keys.length + 1}`

      const listItem: itemCard = {
        ...token, ...{ bookmark: false, id: id }
      }
      this.listItem[id] = listItem
    },

    deletepreviewItem(token: deletePreviewItemToken) {
      if (!this.previewCase || !this.listItem) return
      if (!this.previewCase[token.caseId]) return
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      const findId = token.parentItemId ? token.parentItemId : token.originalId
      const index = findIndex(findId, pocket.items)
      if (token.parentItemId == undefined) {
        pocket.items.splice(index, 1);
      }
      if (token.parentItemId != undefined) {
        const innnerItemindex = findIndex(token.originalId, pocket.items[index].innerItems!)
        pocket.items[index].innerItems!.splice(innnerItemindex, 1);
      }
    },

    addPreviewCase(token: addPreviewCaseToken) {
      if (token.reverse) {
        const this_case = token.case as Case
        if (!this_case.case) return
        this.previewCase[this_case.id] = this_case
      } else {
        const this_case = token.case as { caseId: string, caseType: CaseType }
        this.previewCase[this_case.caseId] = this.staticCasesGetter[this_case.caseType]
      }
    },
    deleteCase(token: deletePreviewCaseToken) {
      delete this.previewItemGetter[token.id]
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