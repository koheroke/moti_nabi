import { defineStore } from 'pinia'
import type { Case, previewItem } from '../type/casetype';
import type { itemCard } from '../type/itemType';
import type { CategoryId } from "@/features/create/type/categoryType";
import type { iconInfomation, UserLuggage_SaveDBData } from "@/features/create/type/apiType";
import { type Category, } from "@/features/create/type/categoryType";
import type { CaseType } from "@/features/create/type/itemType";
import type { provisionalRemovePocket, provisionalResizePocket, addPreviewCaseToken, deletePreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, deletePreviewItemToken, addListItemToken } from "@/features/create/type/tokens";

import { type menber } from '../type/infoType';
export interface caseArray {
  id: string;
  data: Case
}

export const useCreateStore = defineStore("create", {
  state: () => ({
    workId: "" as string,
    workName: "" as string,
    userLuggage_SaveDBData: null as UserLuggage_SaveDBData | null,
    listItem: null as Record<string, itemCard> | null,
    previewCase: {} as Record<string, Case>,
    searchText: "",
    staticItemData: {} as Record<string, itemCard>,
    category: null as CategoryId | null,
    addItemCounter: 0 as number | null,
    staticCases: {} as Record<string, Case>,
    iconMap: {} as Record<string, iconInfomation>,
    categoryColor: {} as Record<string, string>,
    categories: [] as Category[],
    isStaticLoaded: false,
    menbers: [] as menber[],
    role: "viewer" as "owner" | "editor" | "viewer"
  }),
  getters: {
    staticCasesGetter: (state) => state.staticCases,
    workNameGetter: (state) => state.workName,
    categorys: (state) => state.categories,
    iconMapGetter: (state) => state.iconMap,
    categoryColorGetter: (state) => state.categoryColor,
    listItemGetter: (state) => state.listItem,
    previewItemGetter: (state) => state.previewCase,
    workIdGetter: (state) => state.workId,
    roleGetter: (state) => state.role,
    menbersGetter: (state) => {
      return state.menbers
    },
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

    getBlockEdit: (state): boolean => {
      console.log("state.role", state.role)
      return state.role === "owner" || state.role === "editor" ? false : true;
    },


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

    setWork(parseData: UserLuggage_SaveDBData, vuepreviewData: Record<string, Case>, vueItemList: Record<string, itemCard>) {
      this.setSaveDBData(parseData)
      this.setlistItem(vueItemList)
      this.setpreviewData(vuepreviewData)
      this.setWorkId(parseData.workId)
      this.setWorkName(parseData.workName)
    },

    setRole(role: "owner" | "editor" | "viewer") {
      console.log("state.role", role)
      this.role = role
    },
    setIconMap(icons: Record<string, iconInfomation>) {
      this.iconMap = icons
    },
    setStaticCases(cases: Record<string, Case>) {
      this.staticCases = cases
    },
    setWorkName(name: string) {
      this.workName = name
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
    setWorkId(id: string) {
      this.workId = id
    },
    setStaticLoaded(state: boolean) {
      this.isStaticLoaded = state
    },

    setMenbersSetter(menbers: menber[]) {
      this.menbers = menbers
    },


    addCount(token: addItemCountToken) {
      if (!this.previewCase || !this.listItem) return
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      const targetId = token.parentId ?? token.id
      const item = pocket.items[targetId]
      if (!item) return

      if (!token.parentId) {
        item.count += token.pulse
        return { data: item.count }
      }
      const innerItem = item.innerItems![token.id]
      if (innerItem) innerItem.count += token.pulse
      return { data: innerItem.count, parent: token.parentId }
    },
    pushpreviewItem(token: addPreviewItemToken) {
      console.log("token", token)
      if (!this.previewCase || !this.listItem || this.addItemCounter == null) { return }
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      this.addItemCounter++
      const { id, ...listItemData } = this.listItem[token.itemId]
      const cardItem: previewItem = {
        ...listItemData, ...{ itemId: id as string, count: 1, innerItems: {}, id: token.id as string }
      }

      if (token.parentId == undefined) {
        pocket.items[cardItem.id] = cardItem
      } else {
        const innnerItem = pocket.items[token.parentId]?.innerItems
        if (innnerItem) {
          innnerItem[cardItem.id] = cardItem
          return { item: innnerItem[cardItem.id], parent: token.parentId }
        }
      }
      console.log("pocket.items", pocket)
      return { item: pocket.items[cardItem.id] }
    },
    addMenber(token: menber) {
      if (!this.menbers) return
      this.menbers.push({ userId: token.userId, role: token.role })
    },
    deleteMenber(userId: string) {
      this.menbers = this.menbers.filter((menber) => menber.userId != userId)
    },
    addBookmark(token: addBookmarkToken) {
      if (!this.previewCase || !this.listItem) return;
      this.listItem[token.itemId].bookmark = !this.listItem[token.itemId].bookmark

      return token.itemId
    },


    addListItem(token: addListItemToken) {

      if (!this.previewCase || !this.listItem) { return };
      const id = crypto.randomUUID()
      const listItem: itemCard = {
        ...token, ...{ bookmark: false, id: id }
      }
      console.log("listItem", listItem)
      this.listItem[id] = listItem
      return listItem
    },

    deletepreviewItem(token: deletePreviewItemToken) {
      if (!this.previewCase || !this.listItem) { return }
      if (!this.previewCase[token.caseId]) { return }
      console.log(token)
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      const findId = token.parentId ? token.parentId : token.id
      if (token.parentId == undefined) {
        delete pocket.items[findId]
        return { id: token.id }
      }
      if (token.parentId != undefined) {
        const innnerItem = pocket.items[token.parentId]
        delete innnerItem?.innerItems?.[token.id]
        return { id: token.id, parent: token.parentId }
      }
    },

    addPreviewCase(token: addPreviewCaseToken) {
      if (token.reverse) {
        const this_case = token.case as Case
        if (!this_case.case) return
        this.previewCase[this_case.id] = this_case
        return this_case
      } else {
        const this_case = token.case as { caseId: string, caseType: CaseType }
        this.previewCase[this_case.caseId] = this.staticCasesGetter[this_case.caseType]
        return this_case
      }
    },
    deleteCase(token: deletePreviewCaseToken) {
      delete this.previewItemGetter[token.id]
      return token.id
    },
    reSizePocket(token: provisionalResizePocket) {
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      pocket.size.height = token.resizeData.height
      pocket.size.width = token.resizeData.width
      pocket.pos.x = token.resizeData.x
      pocket.pos.y = token.resizeData.y
      return pocket.size
    },


    reMovePocket(token: provisionalRemovePocket) {
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      pocket.pos.x = token.removeData.x
      pocket.pos.y = token.removeData.y
      return pocket.pos
    }
  }
})
