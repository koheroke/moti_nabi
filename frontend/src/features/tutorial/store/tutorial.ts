import { defineStore } from 'pinia'
import type { tutorialType, tutorialData, targetData, action } from '../type/tutorial'


const useTutorialStore = defineStore('tutorial', {
  state: () => ({
    tutorialType: null as tutorialType | null,
    tutorialData: null as tutorialData[] | null,
    tutorialDialogData: { title: "", description: "", direction: "", action: "" },
    targetData: null as targetData | null,
    onNextBotton: false,
    index: 0,
    tutorialShow: false,
    id: ""
  }),

  getters: {
    tutorialDataGetter: (state) => state.tutorialData,
    tutorialTypeGetter: (state) => state.tutorialType,
    tutorialDialogDataGetter: (state) => state.tutorialDialogData,
    targetDataGetter: (state) => state.targetData,
    onNextBottonGetter: (state) => state.onNextBotton,
    tutorialShowGetter: (state) => state.tutorialShow,
    tutorialIdGetter: (state) => state.id
  },
  actions: {
    tutorialShowSetter(show: boolean) {
      this.tutorialShow = show;
    },

    onNextBottonSetter(on: boolean) {
      this.onNextBotton = on
    },
    async setTutorialData(type: tutorialType) {
      const data = await fetch(`/json/tutorial/${type}.json`);
      if (!data) return;
      this.tutorialData = await data.json()
      console.log("tutorialData", this.tutorialData)
      this.tutorialType = type;
      this.tutorialShow = true
      return this.tutorialData;
    },
    next() {
      if (!this.tutorialData) return;
      const data = this.tutorialData[this.index];
      if (!data) return;
      this.id = data.id
      this.tutorialDialogData = { title: data.title, description: data.description, direction: data.direction, action: data.action };
      const selector = data.target;
      if (!selector) return;
      const element = document.querySelector(selector);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      this.targetData = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      }
      console.log(this.targetData)
      this.index++;
      return { id: data.id, action: data.action }
    },
    previous() {
      this.index -= 2;
      return this.next()
    },
    finished() {
      this.tutorialType = null;
      this.tutorialData = null;
      this.tutorialDialogData = { title: "", description: "", direction: "", action: "", };
      this.targetData = null;
      this.onNextBotton = false;
      this.index = 0;
      this.id = ""
      this.tutorialShow = false;
    }
  }
})
export { useTutorialStore }


