import { watch, type WatchStopHandle } from "vue";
import { useSideBarStore } from "@/features/create/store/sideBarStore";
import { useCreateStore } from "@/features/create/store/createStore";
import { usePocketStore } from "@/features/create/store/pocketStore";
let stopWatch: WatchStopHandle | null = null;
const watchSideBarStore = (onComplete: () => void, sideBarName: string) => {
  const sideBarStore = useSideBarStore();
  stopWatch?.();
  stopWatch = watch(
    () => sideBarStore.nowSideBarGetter,
    (newName) => {
      console.log("newName", newName)
      if (newName == sideBarName) {
        stopWatch?.();
        stopWatch = null;
        onComplete();
      }
    },
  )
};

const watchCaseLength = (onComplete: () => void) => {
  const createStore = useCreateStore()
  const caselength = Object.keys(createStore.previewCase).length
  stopWatch?.();
  stopWatch = watch(
    () => Object.keys(createStore.previewCase).length,
    (newLength) => {
      console.log("newName", newLength)
      if (caselength < newLength) {
        stopWatch?.();
        stopWatch = null;
        onComplete();
      }
    },
  )
}


const watchPocketStore = (onComplete: () => void) => {
  const pocketStore = usePocketStore()

  stopWatch?.();
  stopWatch = watch(
    () => pocketStore.getSelectedPocketId.id,
    (id) => {
      console.log("newName", id)
      if (id.length != 0) {
        stopWatch?.();
        stopWatch = null;
        onComplete();
      }
    },
  )
}
export { watchSideBarStore, watchCaseLength, watchPocketStore }