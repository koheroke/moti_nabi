import { defineStore } from 'pinia'
import type { tutorialType, tutorialData, targetData } from '../type/tutorial'


const useTutorialStore = defineStore('tutorial', {
  state: () => ({
    tutorialType: null as tutorialType | null,
    tutorialData: null as tutorialData[] | null,
    tutorialDialogData: { title: "", description: "", direction: "" },
    targetData: null as targetData | null,
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
      console.log("data", data)
      if (!data) return;
      this.tutorialDialogData = { title: data.title, description: data.description, direction: data.direction };
      const selector = data.target;
      console.log("selector", selector)
      if (!selector) return;
      const element = document.querySelector(selector);
      console.log("element", element)
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
      return data.id
    }
  }
})
export { useTutorialStore }


