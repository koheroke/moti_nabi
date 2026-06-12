<template>
  <div class="page">
    <header class="header">
      <TopBar title="" />
    </header>

    <main class="main">
      <div class="sidebar-area">
        <sideBar />
      </div>
      <section class="preview-area">
        <Preview type="hard" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/features/create/components/TopBar.vue";
import Preview from "@/features/create/components/Preview.vue";
import sideBar from "@/features/create/components/sideBar/sideBar.vue";
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import { onMounted, onUnmounted } from "vue";
import { useCreateStore } from "@/features/create/store/createStore";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useApplyCreateAction } from "@/features/create/composables/applyCreateAction";
const applyCreateAction = useApplyCreateAction();
const createStore = useCreateStore();
const { leaveGetter } = storeToRefs(createStore);
const createWork = UseCreateWork();
import { useRouter } from "vue-router";
const router = useRouter();
createStore.setleave(false);
onMounted(async () => {
  createWork.setCreatePageWork();
});
onUnmounted(async () => {
  applyCreateAction.leaveWork();
});

watch(leaveGetter, (value) => {
  if (value == true) {
    router.push("/home");
    createStore.setleave(false);
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

.header {
  flex-shrink: 0;
}

.main {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.sidebar-area {
  flex-shrink: 0;
  height: 100%;
  border-right: 1px solid rgba(4, 3, 3, 0.101);
  box-sizing: border-box;
  overflow: hidden;
}

.preview-area {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  position: relative;
}
</style>
