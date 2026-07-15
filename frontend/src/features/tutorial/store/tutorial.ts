import { defineStore } from 'pinia'
import type { tutorialType, tutorialData, targetData } from '../type/tutorial'

const useTutorialStore = defineStore('tutorial', {
  state: () => ({
    tutorialType: null as tutorialType | null,
    tutorialData: null as tutorialData[] | null,
    tutorialDialogData: { title: "", description: "" },
    targetData: {} as targetData,
    index: 0
  }),
  getters: {
    tutorialDataGetter: (state) => state.tutorialData,
    tutorialTypeGetter: (state) => state.tutorialType,
    tutorialDialogDataGetter: (state) => state.tutorialDialogData,
    targetDataGetter: (state) => state.targetData
  },
  actions: {
    async setTutorialData(type: tutorialType) {
      const data = await fetch(`/json/tutorial/${type}.json`);
      if (!data) return;
      this.tutorialData = await data.json()
      console.log("tutorialData", this.tutorialData)
      this.tutorialType = type;
      return this.tutorialData;
    },
    next() {
      if (!this.tutorialData) return;
      const data = this.tutorialData[this.index];
      this.tutorialDialogData = { title: data.title, description: data.description };
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

    }
  }
})
export { useTutorialStore }


