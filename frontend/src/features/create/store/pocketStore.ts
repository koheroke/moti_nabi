import { defineStore } from "pinia";

export const usePocketStore = defineStore("pocket", {
  state: () => ({
    selectedPocket: { caseId: "", id: "" },
    selectedPocketScroll: { x: 0, y: 0 },
    openMenuPocket: { caseId: "", id: "" },
    savePocket: { items: [] }
  }),

  getters: {
    getSelectedPocketId: (state) => state.selectedPocket,
    getOpenMenuPocket: (state) => state.openMenuPocket,
  },

  actions: {
    setSelectedPocketId(ids: { id: string; caseId: string }) {
      this.selectedPocket = { id: ids.id, caseId: ids.caseId };
    },
    reset() {
      this.selectedPocket = { caseId: "", id: "" };
      this.selectedPocketScroll = { x: 0, y: 0 };
      this.openMenuPocket = { caseId: "", id: "" };
      this.savePocket = { items: [] };
    },

    setOpenMenuPocket(ids: { id: string; caseId: string }) {
      console.log("setOpenMenuPocket", ids);
      this.openMenuPocket = { id: ids.id, caseId: ids.caseId };
    },
  },
});