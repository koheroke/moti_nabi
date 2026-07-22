<template>
  <div class="list">
    <div v-for="thumbnail in templateThumbnailsGetter" :key="thumbnail.id">
      <thumbnailCard
        :thumbnail="thumbnail"
        @onThumbnail="onThumbnailCard(thumbnail.id)"
      >
      </thumbnailCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTemplateBarStore } from "@/features/create/store/templateBar.ts";
import thumbnailCard from "./thumbnailCard.vue";
import { storeToRefs } from "pinia";
const templateBarStore = useTemplateBarStore();
const { templateThumbnailsGetter } = storeToRefs(templateBarStore); //本番用データ
import { testthumbnailJson } from "@/features/create/testData/testThum.json"; //テストデータ
// const testData: Record<string, any> = testthumbnailJson;
import { useCreateWork } from "@/features/create/composables/useCreateWork";
const createWork = useCreateWork();
const onThumbnailCard = (id: string) => {
  if (templateBarStore.selectedTemplateDataGetter.id == id) return;
  createWork.getTemplate(id);
};
</script>
<style lang="css" scoped>
.list {
  padding: 20px 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
