import { Search } from "lucide-vue-next";
import { defineStore } from "pinia";

export const useCaseStore = defineStore("case", {
  state: () => ({
    selectedCase: { id: "" },
    relativeMousePosition: { x: 0, y: 0 },
    searchText: ""
  }),

  getters: {
    getSelectedCase: (state) => state.selectedCase,
    relativeMousePositionGetter: (state) => state.relativeMousePosition,
    searchTextGetter: (state) => state.searchText
  },

  actions: {
    setSelectedCase(id: string) {
      this.selectedCase = { id: id };
      //console.log("id", this.selectedCase)
    },
    relativeMousePositionSetter(newPosition: { x: number, y: number }) {
      this.relativeMousePosition = newPosition
    },
    searchTextSetter(text: string) {
      //console.log("text__1", text)
      this.searchText = text
    }
  },
});