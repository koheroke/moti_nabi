<template>
  <div
    @drop="onDrop"
    @drop.stop
    @dragover.prevent="handleDrop"
    class="drop-area"
    v-show="isDrag"
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
  background-color: rgba(255, 255, 255, 0.207);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
<script setup lang="ts">
import { useCaseDragStore } from "../store/onDrag.ts";
import { storeToRefs } from "pinia";
import { useCreateWork } from "@/features/create/composables/useCreateWork.ts";
import { type CaseType } from "@/features/create/type/itemType.ts";
const createWork = useCreateWork();
const casecardDragStore = useCaseDragStore();
const { isDrag } = storeToRefs(casecardDragStore);
const handleDrop = () => {};
const onDrop = (event: DragEvent) => {
  const caseId = event.dataTransfer?.getData("caseId") as CaseType;
  if (!caseId) return;
  createWork.addCase(caseId);
};
</script>
