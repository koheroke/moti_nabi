import type { tutorialType, tutorialData } from '../type/tutorial'
import { useTutorialStore } from '../store/tutorial'
const tutorialStore = useTutorialStore()
const useTutorial = () => {
  const start = async (type: tutorialType) => {
    await tutorialStore.setTutorialData(type)
    next()
  }
  const next = () => {
    tutorialStore.next()
  }
  return { start }
}
export { useTutorial }