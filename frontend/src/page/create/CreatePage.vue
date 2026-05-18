<template>
  <div class="page">
    <header>
      <TopBar title="" />
    </header>

    <main class="main">
      <div class="sidebar-area">
        <sideBar />
      </div>
      <Preview type="hard" project="" />
    </main>
  </div>
</template>
<script setup lang="ts">
import sideBar from "@/features/create/components/sideBar/sideBar.vue";
import TopBar from "@/features/create/components/TopBar.vue";
import Preview from "@/features/create/components/Preview.vue";
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
