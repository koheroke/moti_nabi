import { watch, type WatchStopHandle } from "vue";
import { useSideBarStore } from "@/features/create/store/sideBarStore";
import { useCreateStore } from "@/features/create/store/createStore";
import { usePocketStore } from "@/features/create/store/pocketStore";
import { useTutorialStore } from "../store/tutorial";

let onComplete_stopWatch: WatchStopHandle | null = null;
let inComplete_stopWatch: WatchStopHandle | null = null;

const watchSideBarStore = (onComplete: () => void, sideBarName: string) => {
  const sideBarStore = useSideBarStore();
  onComplete_stopWatch?.();
  onComplete_stopWatch = watch(
    () => sideBarStore.nowSideBarGetter,
    (newName) => {
      console.log("newName", newName)
      if (newName == sideBarName) {
        onComplete_stopWatch?.();
        onComplete_stopWatch = null;
        onComplete();
      }
    },
  )
};

const watchCaseLength = (onComplete: () => void) => {
  const createStore = useCreateStore()
  const caselength = Object.keys(createStore.previewCase).length
  onComplete_stopWatch?.();
  onComplete_stopWatch = watch(
    () => Object.keys(createStore.previewCase).length,
    (newLength) => {
      console.log("newName", newLength)
      if (caselength < newLength) {
        onComplete_stopWatch?.();
        onComplete_stopWatch = null;
        onComplete();
      }
    },
  )
}


const watchPocketStore = (onComplete: () => void) => {
  const pocketStore = usePocketStore()

  onComplete_stopWatch?.();
  onComplete_stopWatch = watch(
    () => pocketStore.getSelectedPocketId.id,
    (id) => {
      console.log("newName", id)
      if (id.length != 0) {
        onComplete_stopWatch?.();
        onComplete_stopWatch = null;
        onComplete();
      }
    },
  )
}

const watchDraggedItem = (onComplete: () => void) => {
  const createStore = useCreateStore()
  onComplete_stopWatch?.();
  onComplete_stopWatch = watch(
    () => createStore.draggedItemIdGetter,
    (id) => {
      if (id.length != 0) {
        onComplete_stopWatch?.();
        onComplete_stopWatch = null;
        onComplete();
      }
    },
  )
}

const watchItemCounter = (onComplete: () => void, incomplete: () => void) => {
  const createStore = useCreateStore()
  onComplete_stopWatch?.();
  const counter = createStore.addItemCounterGetter
  console.log("counter", counter)
  onComplete_stopWatch = watch(
    () => createStore.draggedItemIdGetter,
    (id) => {
      if (id.length == 0) {
        const newcounter = createStore.addItemCounterGetter;
        if (counter == null || newcounter == null) return;
        if (counter < newcounter) {
          onComplete();
        } else {
          incomplete()
        }
        onComplete_stopWatch?.();
        onComplete_stopWatch = null;
      }
    },
  )


}


const watchNext = (onComplete: () => void) => {
  const tutorialStore = useTutorialStore()
  onComplete_stopWatch?.();
  onComplete_stopWatch = watch(
    () => tutorialStore.onNextBotton,
    (on) => {
      console.log("on", on)
      if (on == true) {
        onComplete_stopWatch?.();
        onComplete_stopWatch = null;
        onComplete();
      }
    },
  )

}
export { watchSideBarStore, watchCaseLength, watchPocketStore, watchDraggedItem, watchItemCounter, watchNext }