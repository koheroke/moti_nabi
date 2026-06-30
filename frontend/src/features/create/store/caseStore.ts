import { defineStore } from "pinia";

export const useCaseStore = defineStore("case", {
  state: () => ({
    selectedCase: { id: "" },
  }),

  getters: {
    getSelectedCase: (state) => state.selectedCase,
  },

  actions: {
    setSelectedCase(id: string) {
      this.selectedCase = { id: id };
      console.log("id", this.selectedCase)
    },
  },
});