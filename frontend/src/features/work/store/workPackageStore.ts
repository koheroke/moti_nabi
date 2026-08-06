import { defineStore } from 'pinia'
import type { workPackage } from '../types/work'
export const useWorkPackageStore = defineStore("package", {
  state: () => ({
    WorkPackageStore: [] as workPackage[],
    userWorkPackageStore: [] as workPackage[],
    selectedPackageId: "" as string
  }),
  getters: {
    workPackageStoreGetter: (state) => state.WorkPackageStore,
    sortUserWorkPackageStoreGetter: (state) => state.userWorkPackageStore.sort((a, b) => b.lastAccessAt - a.lastAccessAt),
    userWorkPackageStoreGetter: (state) => state.userWorkPackageStore,
    selectedPackageIdGetter: (state) => state.selectedPackageId
  },
  actions: {
    leave() {
      this.WorkPackageStore = []
      this.userWorkPackageStore = []
    },
    deleteWork(id: string) {
      this.WorkPackageStore = this.WorkPackageStore.filter((work) =>
        work.id != id
      )
      this.userWorkPackageStore = this.userWorkPackageStore.filter((work) =>
        work.id != id
      )
      if (this.selectedPackageId == id) {
        this.selectedPackageId = ""
      }
    },
    setWorkPackageStore(data: workPackage[]) {
      this.WorkPackageStore = data
    },
    setUserWorkPackageStore(data: workPackage[]) {
      this.userWorkPackageStore = data
    },
    selectedPackageIdStore(id: string) {
      this.selectedPackageId = id
    },
    setLike(id: string) {

      const work = this.WorkPackageStore.find((work) => work.id == id)
      console.log("work", work)
      if (!work) return
      if (work?.liked) {
        work.likes--
      } else {
        work.likes++
      }
      work.liked = !work.liked
    },


    findPackage(id: string) {
      return [
        ...this.userWorkPackageStore,
        ...this.WorkPackageStore,
      ].find((item) => item.id === id)
    }
  }
})