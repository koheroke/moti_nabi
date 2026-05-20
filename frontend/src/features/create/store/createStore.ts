import { defineStore } from 'pinia'
import type { UserLuggage_SaveDBData, itemCard, previewItem } from "../type/itemType";

export const useCreateStore = defineStore("create", {
  state: () => ({
    workId: null as number | null,
    userLuggage_SaveDBData: null as UserLuggage_SaveDBData | null,
    listItem: null as Record<string, itemCard> | null,
    previewItem: null as Record<string, previewItem[]> | null,
  }),
  getters: {
    listItemGetter: (state) => state.listItem,
    previewItemGetter: (state) => state.previewItem,
    workIdGetter: (state) => state.workId,
  },
  actions: {
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
    }
  }
})


// features / create / composables / useCreateWork.ts // 外部から呼ぶ窓口 store/ createStore.ts // state本体 domain/ applyCreateAction.ts // 実際に値を変更する処理 services/ saveQueue.ts // 5秒キュー createApi.ts // API通信