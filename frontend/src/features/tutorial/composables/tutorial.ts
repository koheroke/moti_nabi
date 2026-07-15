import type { tutorialType, tutorialData } from '../type/tutorial'
import { useTutorialStore } from '../store/tutorial'
import { watchSideBarStore, watchCaseLength, watchPocketStore } from "./watchData"
import { nextTick } from 'vue';
const tutorialStore = useTutorialStore()
const useTutorial = () => {
  const start = async (type: tutorialType) => {
    await tutorialStore.setTutorialData(type)
    next()
  }
  const next = async () => {
    await nextTick()
    const dataId = tutorialStore.next()
    switch (dataId) {
      case "add-case":
        watchSideBarStore(next, "case")
        break;
      case "drop-case":
        watchCaseLength(next)
        break;
      case "open-pocket":
        watchPocketStore(next)
        break
      case "add-item":
        watchSideBarStore(next, "item")
        break;
      case "drop-item":

        break;

    }
  }
  return { start }
}
export { useTutorial }