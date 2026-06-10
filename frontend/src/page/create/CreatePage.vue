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
const createWork = UseCreateWork();
onMounted(async () => {
  createWork.setCreatePageWork();
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
