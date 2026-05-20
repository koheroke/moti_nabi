<template>
  <div class="page">
    <header>
      <TopBar title="" />
    </header>

    <main class="main">
      <div class="sidebar-area">
        <sideBar :itemListDatas="getUserLuggageData?.itemListDatas" />
      </div>
      <Preview type="hard" :previewDatas="getUserLuggageData?.previewDatas" />
    </main>
  </div>
</template>
<script setup lang="ts">
import sideBar from "@/features/create/components/sideBar/sideBar.vue";
import TopBar from "@/features/create/components/TopBar.vue";
import Preview from "@/features/create/components/Preview.vue";
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import { ref, onMounted } from "vue";
import { type UserLuggage_SaveDBData } from "@/features/create/type/itemType";
import { useAlertStore } from "@/store/feedback/alertStore";
const alertStore = useAlertStore();
const getUserLuggageData = ref<UserLuggage_SaveDBData | null>(null);

const createWork = UseCreateWork();
onMounted(async () => {
  const res = await createWork.load();

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
  border-right: 1px solid rgba(0, 0, 0, 0.101);
  width: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
