<template>
  <div class="page">
    <header>
      <TopBar title="" />
    </header>

    <main class="main">
      <div class="sidebar-area">
        <sideBar />
      </div>
      <Preview type="hard" />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/features/create/components/TopBar.vue";
import Preview from "@/features/create/components/Preview.vue";
import sideBar from "@/features/create/components/sideBar/sideBar.vue";
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import { onMounted } from "vue";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
const workPackageStore = useWorkPackageStore();
const alertStore = useAlertStore();
const createWork = UseCreateWork();

onMounted(async () => {
  let res = "";
  if (
    (workPackageStore.selectedPackageGetter?.id ?? "").replaceAll(/\s+/g, "")
      .length === 0
  ) {
    res = await createWork.createNewwork();
  } else {
    res = await createWork.loadWork();
  }
  switch (res) {
    case "noneNameorWorkId":
      alertStore.showAlert("ユーザー情報の取得に失敗しました", true);
      break;
    case "fallLoadData":
      alertStore.showAlert("データの取得に失敗しました", true);
      break;
    case "damagedData":
      alertStore.showAlert("データが破損しています", true);
      break;
    case "none":
      alertStore.showAlert("読み込み完了", false);
      break;
    default:
      break;
  }
});
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar-area {
  border-right: 1px solid rgba(4, 3, 3, 0.101);
  width: auto;
  height: 100%;
  box-sizing: border-box;
}
</style>
