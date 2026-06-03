import { defineStore } from 'pinia'
import type { workPackage } from '../types/work'
export const useWorkPackageStore = defineStore("package", {
  state: () => ({
    WorkPackageStore: [] as workPackage[],
    userWorkPackageStore: [] as workPackage[],
    selectedPackage: {} as workPackage
  }),
  getters: {
    workPackageStoreGetter: (state) => state.WorkPackageStore,
    userWorkPackageStoreGetter: (state) => state.userWorkPackageStore,
    selectedPackageGetter: (state) => state.selectedPackage
  },
  actions: {
    setWorkPackageStore(data: workPackage[]) {
      this.WorkPackageStore = data
    },
    setUserWorkPackageStore(data: workPackage[]) {
      this.userWorkPackageStore = data
    },
    selectWorkPackage(id: string) {
      this.selectedPackage = this.WorkPackageStore.find((work) => { work.id === id }) as workPackage
    }
  }
})