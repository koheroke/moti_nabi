import { defineStore } from "pinia";
import type { previewItem } from "../type/casetype";


export const usePocketStore = defineStore("pocket", {
  state: () => ({
    selectedPocket: { caseId: "", id: "" },
    selectedPocketScroll: { x: 0, y: 0 },
  }),

  getters: {
    getSelectedPocketId: (state) => state.selectedPocket,
  },

  actions: {
    setSelectedPocketId(ids: { id: string, caseId: string }) {
      this.selectedPocket = { id: ids.id, caseId: ids.caseId };
    },
  },
});