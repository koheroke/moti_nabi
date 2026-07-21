<template>
  <div class="thumbnail">
    <div v-for="caseItem in thumbnailJson">
      <thumbnailSvg :caseData="caseItem" class="thumbnailJson" :scale="scale" />
    </div>
  </div>
</template>
<script setup lang="ts">
import thumbnailSvg from "./svgUi/thumbnailSvg.vue";
import type { previewSvgCase } from "../store/createStore.ts";
const props = defineProps<{
  thumbnailJson: previewSvgCase[];
  scale: number;
}>();
</script>
<style scoped>
.thumbnail {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}

.thumbnailJson {
  overflow: hidden in !important;
}
</style>
