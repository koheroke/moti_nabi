<template>
  <div
    @drop="onDrop"
    @drop.stop
    @dragover.prevent="handleDrop"
    class="drop-area"
    v-if="draggedCaseDataGetter.caseId.length != 0"
  >
    <h1>ここにドロップ</h1>
  </div>
</template>
<style lang="css" scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: 400;
}
.drop-area {
  background-color: rgba(255, 255, 255, 0.431);
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
<script setup lang="ts">
import { useTemplateBarStore } from "@/features/create/store/templateBar";
import { storeToRefs } from "pinia";
import { useCreateWork } from "@/features/create/composables/useCreateWork.ts";
const createWork = useCreateWork();
const templateBarStore = useTemplateBarStore();
const { draggedCaseDataGetter } = storeToRefs(templateBarStore);

const handleDrop = () => {};
const onDrop = () => {
  const draggedCaseData = templateBarStore.draggedCaseDataGetter;
  if (draggedCaseData) {
    const data = {
      templateId: templateBarStore.selectedTemplateDataGetter.id,
      caseId: draggedCaseData.caseId,
    };
    console.log("onDropTemplate", data);
    createWork.addTemplate(data);
    templateBarStore.draggedCaseDataSetter("");
  }
};
</script>
