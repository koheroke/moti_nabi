<template>
  <div class="page">
    <h1>{{ workDetailStore.AboutGetter.name }}</h1>
    <section class="container">
      <div class="previewArea">
        <viewTopBar style="margin-bottom: 10px"></viewTopBar>
        <div class="work-preview">
          <Preview></Preview>
        </div>
      </div>
      <div class="right">
        <About></About>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import About from "@/features/workDetail/components/About.vue";
import viewTopBar from "@/features/workDetail/components/ViewTopBar.vue";
import { onMounted } from "vue";
import { usePreviewWork } from "@/features/workDetail/composables/useworkDetail";
import Preview from "@/features/create/components/Preview.vue";
const previewWork = usePreviewWork();
import { useworkDetailStore } from "@/features/workDetail/store/useworkDetail";
const workDetailStore = useworkDetailStore();

onMounted(async () => {
  await previewWork.get();
});
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}

.page h1 {
  font-size: 30px;
  font-weight: 800;
  margin: 5px;
  flex-shrink: 0;
}

.container {
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 0;
}

.previewArea {
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.work-preview {
  flex: 1;
  width: 100%;
  min-height: 0;
  border-radius: 15px;
  min-width: 0;
  min-height: 0;
  border-radius: 10px;
}

.right {
  width: 400px;
  flex-shrink: 0;
  margin: 10px 0;
}
</style>
