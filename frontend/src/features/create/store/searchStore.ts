import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchPreviewItem: { parentId: "", id: "" } as { parentId: string | undefined, id: string },
  }),

  getters: {
    searchItemGetter: (state) => state.searchPreviewItem,
  },

  actions: {
    searchItemSetter(ids: { parentId: string | undefined, id: string }) {
      this.searchPreviewItem = { id: ids.id, parentId: ids.parentId };
    },
  },
});