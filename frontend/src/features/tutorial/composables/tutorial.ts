import type { tutorialType } from '../type/tutorial'
import { useTutorialStore } from '../store/tutorial'
import { watchSideBarStore, watchCaseLength, watchPocketStore, watchDraggedItem, watchItemCounter, watchNext } from "./watchData"
import { nextTick } from 'vue';
import { useUserAuthStore } from '@/store/user/userAuthStore';
const userAuthStore = useUserAuthStore()
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/user`;

const tutorialStore = useTutorialStore()
const useTutorial = () => {
  const start = async (type: tutorialType) => {
    await tutorialStore.setTutorialData(type)
    next()
  }


  const finishTutorial = async (tutorialId: tutorialType) => {
    await fetch(
      `${url}/finishTutorial`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tutorialId: tutorialId,
          userId: userAuthStore.userIdGetter
        })
      })
  }

  const setWatch = (dataId: string) => {
    switch (dataId) {
      case "open-sidebar-case":
        watchSideBarStore(next, "case")
        break;
      case "drop-case":
        watchCaseLength(next)
        break;
      case "open-pocket":
        watchPocketStore(next)
        break
      case "open-sidebar-item":
        watchSideBarStore(next, "item")
        break;
      case "drag-item":
        watchDraggedItem(next)
        break;
      case "drop-item":
        const incomplete = () => {
          previous()
        }
        watchItemCounter(next, incomplete)
        break;
      case "close-sidebar":
        watchSideBarStore(next, "preview")
        break;
    }
  }
  const next = async () => {
    await nextTick()
    tutorialStore.onNextBottonSetter(false);
    const data = tutorialStore.next()
    if (!data) return;
    switch (data.action as string) {
      case "store":
        setWatch(data?.id)
        break;
      case "botton":
        watchNext(next)
        break;
    }
  }

  const previous = async () => {
    await nextTick()
    const data = tutorialStore.previous()
    if (!data) return;
    switch (data.action as string) {
      case "store":
        setWatch(data?.id)
        break;
      case "botton":
        watchNext(next)
        break;
    }
  }

  return { finishTutorial, start, previous }
}
export { useTutorial }