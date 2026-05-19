import { type UserLuggage_SaveDBData } from "../type/itemType";
import { defineStore } from 'pinia'
import { ref } from "vue";

export const useCreateStore = defineStore("create", () => {
  const luggageData = ref<UserLuggage_SaveDBData | null>(null);
  return {
    luggageData,
  };
});

// features / create / composables / useCreateWork.ts // 外部から呼ぶ窓口 store/ createStore.ts // state本体 domain/ applyCreateAction.ts // 実際に値を変更する処理 services/ saveQueue.ts // 5秒キュー createApi.ts // API通信