import { defineStore } from 'pinia'
import type { workPackage } from '../types/work'
export const useWorkPackageStore = defineStore("package", {
  state: () => ({
    WorkPackageStore: [] as workPackage[],
    userWorkPackageStore: [] as workPackage[],
    selectedPackageId: {} as string
  }),
  getters: {
    workPackageStoreGetter: (state) => state.WorkPackageStore,
    userWorkPackageStoreGetter: (state) => state.userWorkPackageStore,
    selectedPackageIdGetter: (state) => state.selectedPackageId

  },
  actions: {
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
      if (!work) return
      work.liked = !work.liked
    },

    findPackage(id: string) {
      const allPackage = [... this.userWorkPackageStore, ...this.WorkPackageStore]
      const index = allPackage.findIndex((item) => { item.id == id })
      return allPackage[index]
    }
  }
})