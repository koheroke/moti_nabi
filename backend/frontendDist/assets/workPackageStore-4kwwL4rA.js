import { c as e } from "./index-BTRvxs7G.js";
var t = e(`package`, {
  state: () => ({
    WorkPackageStore: [],
    userWorkPackageStore: [],
    selectedPackageId: {},
  }),
  getters: {
    workPackageStoreGetter: (e) => e.WorkPackageStore,
    userWorkPackageStoreGetter: (e) => e.userWorkPackageStore,
    selectedPackageIdGetter: (e) => e.selectedPackageId,
  },
  actions: {
    setWorkPackageStore(e) {
      this.WorkPackageStore = e;
    },
    setUserWorkPackageStore(e) {
      ((this.userWorkPackageStore = e), console.log(this.userWorkPackageStore));
    },
    selectWorkPackage(e) {
      this.selectedPackageId = this.WorkPackageStore.find((e) => {
        e.id;
      });
    },
  },
});
export { t };
//# sourceMappingURL=workPackageStore-4kwwL4rA.js.map
