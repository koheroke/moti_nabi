import { defineStore } from 'pinia'
import type { workPackage } from '../types/work'
export const useWorkPackageStore = defineStore("package", {
  state: () => ({
    WorkPackageStore: {} as workPackage[],
    userWorkPackageStore: {} as workPackage[]
  }),
  getters: {
    WorkPackageStoreGetter: (state) => state.WorkPackageStore,
    userWorkPackageStoreGetter: (state) => state.userWorkPackageStore
  },
  actions: {
    setWorkPackageStore(data: workPackage[]) {
      this.WorkPackageStore = data
    },
    setUserWorkPackageStore(data: workPackage[]) {
      this.userWorkPackageStore = data
    }
  }
})