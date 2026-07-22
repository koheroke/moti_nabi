<template>
  <div class="bar">
    <div class="list">
      <thumbnailList></thumbnailList>
    </div>
    <div>
      <templatePreview
        :cases="selectedTemplateSvgDataGetter"
        v-if="selectedTemplateSvgDataGetter.length != 0"
      ></templatePreview>
    </div>
  </div>
</template>
<script setup lang="ts">
import thumbnailList from "./thumbnailList.vue";
import templatePreview from "./templatePreview.vue";
import { useTemplateBarStore } from "@/features/create/store/templateBar.ts";
import { storeToRefs } from "pinia";
const templateBarStore = useTemplateBarStore();
// import { testTemplate } from "@/features/create/testData/testTemplate.json"; //テストデータ
// const testData = testTemplate;
const { selectedTemplateSvgDataGetter } = storeToRefs(templateBarStore);
</script>
<style lang="css" scoped>
.bar {
  display: flex;
  width: auto;
  height: 100%;

  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
  position: relative;
}
</style>
