import { defineStore } from "pinia";

export const useCaseStore = defineStore("case", {
  state: () => ({
    selectedCase: { id: "" },
    relativeMousePosition: { x: 0, y: 0 }
  }),

  getters: {
    getSelectedCase: (state) => state.selectedCase,
    relativeMousePositionGetter: (state) => state.relativeMousePosition
  },

  actions: {
    setSelectedCase(id: string) {
      this.selectedCase = { id: id };
      console.log("id", this.selectedCase)
    },
    relativeMousePositionSetter(newPosition: { x: number, y: number }) {
      this.relativeMousePosition = newPosition
    }
  },
});