import { defineStore } from "pinia";

export const useSideBarStore = defineStore("sideBar", {
  state: () => ({
    nowSideBar: ""
  }),

  getters: {
    nowSideBarGetter: (state) => state.nowSideBar,
  },

  actions: {
    nowSideBarSetter(id: string) {
      this.nowSideBar = id
    },
  },
});