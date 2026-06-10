<template>
  <div class="page">
    <viewWOrkDetailPage></viewWOrkDetailPage>
  </div>
</template>
<script setup lang="ts">
import viewWOrkDetailPage from "@/features/workDetail/components/viewWorkDetailPage.vue";
import { onMounted } from "vue";
import { usePreviewWork } from "@/features/workDetail/composables/useworkDetail";
const previewWork = usePreviewWork();
onMounted(async () => {
  await previewWork.get();
});
</script>
<style lang="css" scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
