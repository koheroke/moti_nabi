<template>
  <div
    class="overlay"
    @click.self="$emit('close')"
    @drop="onDrop"
    @drop.stop
    @dragover.prevent="handleDrop"
  >
    <div class="modal">
      <header class="header">
        <h2 class="name">
          {{ "ポケット: " + pocket.name }}
        </h2>
        <div @click="$emit('close')" class="close-button">
          <X :size="20" color="black" stroke-width="2.5"></X>
        </div>
      </header>
      <div class="drop-area">
        <p
          v-if="pocket.items.length === 0"
          style="font-size: 12px; text-align: center"
        >
          ここに持ち物をドラッグ
        </p>
        <div
          v-for="item in pocket.items"
          :key="item.originalId"
          class="item-card"
        >
          <PreviewItem :item="item" :pocketId="pocket.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import {
  UseCreateWork,
  type addPreviewItemToken,
} from "../composables/useCreateWork";
import PreviewItem from "./PreviewItem.vue";
import type { previewItem } from "../type/itemType";

const createWork = UseCreateWork();

const onDrop = (event: DragEvent) => {
  const draggedId = event.dataTransfer?.getData("itemId");
  if (!draggedId) return;
  const addPreviewItemToken: addPreviewItemToken = {
    itemId: draggedId,
    pocketId: props.pocket.id,
  };
  createWork.addItemToPreview(addPreviewItemToken);
};
const handleDrop = () => {};

const props = defineProps<{
  pocket: {
    id: string;
    name: string;
    items: previewItem[];
  };
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>
<style lang="css" scoped>
.drop-area {
  padding-top: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 300px;
  flex: 1;
}
.modal {
  height: 100%;
}
.overlay {
  border: 3px dotted rgba(29, 29, 29, 0.376);
  border-radius: 10px;
  flex-direction: column;
  height: 60%;
  width: 100%;
  text-wrap: unset;
  background-color: rgba(255, 255, 255, 0.546);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  min-height: 0;
}
.header {
  padding: 10px;
  display: flex;
  height: 40px;
  background-color: rgba(237, 237, 237, 0.64);

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.142);
}
.close-button {
  border: 2px solid rgba(0, 0, 0, 0.459);
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  margin-left: auto;
  padding: 2px 7px;
}

.name {
  font-weight: 600;
  color: rgb(62, 61, 61);
  font-size: 20px;
  text-align: center;
}
</style>
