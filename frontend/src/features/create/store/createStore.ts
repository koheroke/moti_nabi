import { defineStore } from 'pinia'
import type { Case, previewItem } from '../type/casetype';
import type { itemCard } from '../type/itemType';
import type { CategoryId } from "@/features/create/type/categoryType";
import type { iconInfomation, staticCase, UserLuggage_SaveDBData } from "@/features/create/type/apiType";
import { type Category, } from "@/features/create/type/categoryType";
import type { CaseType } from "@/features/create/type/itemType";
import type { addPreviewPocketToken, pocketLogicalDeleteToken, caseLogicalDeleteToken, changePriorityPocket, provisionalRemovePocket, provisionalResizePocket, addPreviewCaseToken, deletePreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, deletePreviewItemToken, addListItemToken } from "@/features/create/type/tokens";
import { useSideBarStore } from './sideBarStore';
import { useSearchStore } from './searchStore';
const sideBarStore = useSideBarStore()
const searchStore = useSearchStore()
import { type menber } from '../type/infoType';
import type { Pocket, part } from '../type/casetype';
import { usePocketStore } from './pocketStore';
import { useCaseStore } from './caseStore';
import type { caseCanvas } from '../type/casetype';
const pocketStore = usePocketStore()
const caseStore = useCaseStore()

export interface caseArray {
  id: string;
  data: Case
}
export interface previewSvgCase {
  id: string;
  data: {
    pockets: Pocket[];
    case: part;
    handle: part;
    name: string;
    id: string
    logicalDelete: boolean;
    canvas: caseCanvas
  }
}



export const useCreateStore = defineStore("create", {
  state: () => ({
    workId: "" as string,
    workName: "" as string,
    userLuggage_SaveDBData: null as UserLuggage_SaveDBData | null,
    draggedItemId: "" as string,
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
    leave: false,
    role: "viewer" as "owner" | "editor" | "viewer",
    PreviewItemNumberOfChanges: 0,
    ListItemNumberOfChanges: 0,
    indexChangeCounter: 0
  }),
  getters: {
    leaveGetter: (state) => state.leave,
    staticCasesGetter: (state) => state.staticCases,
    addItemCounterGetter: (state) => state.addItemCounter,
    workNameGetter: (state) => state.workName,
    indexChangeCounterGetter: (state) => state.indexChangeCounter,
    categorys: (state) => state.categories,
    iconMapGetter: (state) => state.iconMap,
    categoryColorGetter: (state) => state.categoryColor,
    listItemGetter: (state) => state.listItem,
    previewItemGetter: (state) => state.previewCase,
    workIdGetter: (state) => state.workId,
    roleGetter: (state) => state.role,
    draggedItemIdGetter: (state) => state.draggedItemId,
    menbersGetter: (state) => {
      return state.menbers
    },
    getListItemNumberOfChanges: (state) => state.ListItemNumberOfChanges,
    getPreviewItemNumberOfChanges: (state) => state.PreviewItemNumberOfChanges,
    getAllCasesArray: (state): caseArray[] =>
      Object.entries(state.staticCases).map(([key, value]) => ({
        id: key,
        data: value,
      })),

    getPreviewCasesArray: (state): previewSvgCase[] => {
      return Object.entries(state.previewCase).map(([key, value]) => ({
        id: key,
        data: {
          id: value.id,
          name: value.name,
          case: value.case,
          canvas: value.canvas,
          handle: value.handle,
          pockets: Object.values(value.pockets).sort((a, b) => a.priority - b.priority).filter((thisPocket) => !thisPocket.logicalDelete),
          logicalDelete: value.logicalDelete
        },
      })).filter((thisCase) => !thisCase.data.logicalDelete);

    },


    getBlockEdit: (state): boolean => {
      //console.log("state.role", state.role)
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
    leaveWork() {
      this.workId = ""
      this.workName = ""
      this.userLuggage_SaveDBData = null
      this.listItem = null
      this.previewCase = {}
      this.searchText = ""
      this.staticItemData = {}
      this.category = null
      this.addItemCounter = 0
      this.staticCases = {}
      this.iconMap = {}
      this.categoryColor = {}
      this.categories = []
      this.isStaticLoaded = false
      this.menbers = []
      this.role = "viewer"
      this.leave = true
      this.PreviewItemNumberOfChanges = 0
      this.ListItemNumberOfChanges = 0
      sideBarStore.nowSideBarSetter("")
      searchStore.searchItemSetter({ parentId: undefined, id: "" })
      pocketStore.reset()
      return true;
    },
    indexChangeCounterSetter(count: number) {
      this.indexChangeCounter = count
    },

    selectedMenuReset() {
      sideBarStore.nowSideBarSetter("")
      searchStore.searchItemSetter({ parentId: undefined, id: "" })
      pocketStore.reset()
      caseStore.setSelectedCase("")
    },
    draggedItemIdSetter(id: string) {
      this.draggedItemId = id
    },

    setWork(parseData: UserLuggage_SaveDBData, vuepreviewData: Record<string, Case>, vueItemList: Record<string, itemCard>) {
      this.setSaveDBData(parseData)
      this.setlistItem(vueItemList)
      this.setpreviewData(vuepreviewData)
      this.setWorkId(parseData.workId)
      this.setWorkName(parseData.workName)
      this.PreviewItemNumberOfChanges++
      this.ListItemNumberOfChanges++

      console.log("vuepreviewData__", vuepreviewData)
    },
    setleave(state: boolean) {
      this.leave = state
    },

    setRole(role: "owner" | "editor" | "viewer") {
      //console.log("state.role", role)
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
    addPreviewItem(token: addPreviewItemToken) {
      if (!this.previewCase || !this.listItem || this.addItemCounter == null || !token.caseId) { return }
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
        console.log("innnerItems__", innnerItem)
        if (innnerItem) {
          console.log("cardItem__", cardItem)
          innnerItem[cardItem.id] = cardItem
          return { item: innnerItem[cardItem.id], parent: token.parentId }
        }
      }
      this.PreviewItemNumberOfChanges++
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
      this.listItem[id] = listItem
      this.PreviewItemNumberOfChanges++
      return listItem
    },

    deletepreviewItem(token: deletePreviewItemToken) {
      if (!this.previewCase || !this.listItem) { return }
      if (!this.previewCase[token.caseId]) { return }
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
      this.PreviewItemNumberOfChanges++
    },



    addPreviewCase(token: addPreviewCaseToken) {
      if (token.reverse) {
        const this_case = token.case as Case
        if (!this_case.case) return
        this.previewCase[this_case.id] = this_case
        return this_case
      } else {
        const this_case = token.case as {
          caseId: string; caseType: CaseType, pockets: Record<string, {
            id: string,
            initialPocketId: string
          }>
        }
        const previewCaseSetPocket: Record<string, Pocket> = {} as Record<string, Pocket>;
        const staticCase: Case = JSON.parse(JSON.stringify(this.staticCasesGetter[this_case.caseType]));
        if (!staticCase) return
        console.log("staticCase.pockets", staticCase.pockets)
        Object.values(staticCase.pockets).forEach((pocket: Pocket) => {
          const this_id = crypto.randomUUID()
          this_case.pockets[this_id] = {
            id: this_id,
            initialPocketId: pocket.id
          }
          previewCaseSetPocket[this_id] = {
            ...pocket,
            id: this_id,
            priority: pocket.priority ?? 0
          }
        })


        this.previewCase[this_case.caseId] = {
          ...staticCase,
          id: this_case.caseId,
          pockets: previewCaseSetPocket
        }
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
    },

    changePriorityPocket(token: changePriorityPocket) {
      const pocket = this.previewCase[token.caseId].pockets[token.pocketId]
      pocket.priority = token.priority
    },

    logicalDeletePocket(token: pocketLogicalDeleteToken) {

      this.previewCase[token.caseId].pockets[token.pocketId].logicalDelete = token.type == "cancel" ? false : true
      console.log("logicalDeletePocket", this.previewCase[token.caseId].pockets[token.pocketId])
      return token
    },
    logicalDeleteCase(token: caseLogicalDeleteToken) {
      this.previewCase[token.caseId].logicalDelete = token.type == "cancel" ? false : true
      return token
    },

    hardDeleteCase(token: caseLogicalDeleteToken) {
      delete this.previewCase[token.caseId]
    },

    hardDeletePocket(token: pocketLogicalDeleteToken) {
      delete this.previewCase[token.caseId].pockets[token.pocketId]
    },
    addPreviewPocket(token: addPreviewPocketToken) {
      const data = token.pocketData;
      const this_case = this.previewCase[token.caseId].pockets;
      if (!this_case[token.pocketId]) {
        this_case[token.pocketId] = token.pocketData;

        return {
          items: data.items,
          id: data.id,
          name: data.name,
          poketSvgEdit: {
            x: data.pos.x,
            y: data.pos.y,
            width: data.size.width,
            height: data.size.height,
            priority: data.priority
          }
        }
      }
    }
  }
})


