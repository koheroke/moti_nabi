<template>
  <div
    class="overlay"
    :class="['overlay', { close: isClose }]"
    @drop="onDrop"
    @drop.stop
    @dragover.prevent="handleDrop"
  >
    <div class="modal">
      <header class="header">
        <div class="name">
          {{ "#" + pocket.name }}
        </div>
        <div @click="close" class="close-button">
          <X :size="20" color="black" stroke-width="2.5"></X>
        </div>
      </header>
      <div class="drop-area">
        <p
          v-if="pocket.items.size === 0"
          style="font-size: 12px; text-align: center"
        >
          ここに持ち物をドラッグ
        </p>
        <div v-for="[id, item] in pocket.items" :key="id" class="item-card">
          <PreviewItem
            :caseId="pocket.caseId"
            :item="item"
            :pocketId="pocket.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import { ref } from "vue";
import { type addPreviewItemToken } from "@/features/create/type/tokens.ts";
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import PreviewItem from "./PreviewItem.vue";
import type { previewItem } from "../type/casetype.ts";
import { el } from "vuetify/locale";
const isClose = ref(false);
const createWork = UseCreateWork();

const emit = defineEmits<{
  (e: "close"): void;
}>();
const close = () => {
  isClose.value = true;
  setTimeout(() => {
    emit("close");
  }, 300);
};
const onDrop = (event: DragEvent) => {
  const dragged_itemId = event.dataTransfer?.getData("itemId");
  const dragged_originalId = event.dataTransfer?.getData("positionChangeData");
  if (!dragged_itemId && !dragged_originalId) return;
  if (dragged_itemId) {
    const addPreviewItemToken: addPreviewItemToken = {
      itemId: dragged_itemId,
      pocketId: props.pocket.id,
      caseId: props.pocket.caseId,
      originalId: null,
    };
    createWork.addItemToPreview(addPreviewItemToken);
  }
  // if (dragged_originalId) {
  //   const data = JSON.parse(dragged_originalId);
  //   const positionChange: positionChangePreviewItemToken = {
  //     originalId: data.originalId,
  //     pushPocketId: props.pocket.id,
  //     pushCaseId: props.pocket.caseId,
  //     popPocketId: data.id,
  //     popCaseId: data.caseId,
  //   };
  //   createWork.positionChangeItemToPreview(positionChange);
  // }
};
const handleDrop = () => {};

const props = defineProps<{
  pocket: {
    id: string;
    name: string;
    items: Map<string, previewItem>;
    caseId: string;
  };
}>();
</script>
<style lang="css" scoped>
.drop-area {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 300px;
  flex: 1;
  min-height: 200px;
  max-height: 400px;
}
.modal {
  position: relative;
  height: 100%;
}
.overlay {
  border: 3px dotted rgba(29, 29, 29, 0.376);
  border-radius: 10px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  animation: modalOpen 0.25s ease-out forwards;
}

@keyframes modalOpen {
  from {
    opacity: 0;
    max-height: 0;
  }

  to {
    opacity: 1;
    max-height: 500px;
  }
}

@keyframes modalClose {
  from {
    opacity: 1;
    max-height: 500px;
  }

  to {
    opacity: 0;
    max-height: 0px;
  }
}

.close {
  animation: modalClose 0.25s ease-out forwards;
}
.header {
  position: sticky;
  padding: 10px;
  width: 300px;
  height: 40px;
  background-color: rgba(241, 238, 238, 0.458);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
}
.close-button {
  border: 2px solid rgba(0, 0, 0, 0.459);
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  margin-left: auto;
  padding: 2px 3px;
}
.close-button:hover {
  background-color: rgba(229, 227, 227, 0.38);
}

.name {
  font-weight: 600;
  color: rgb(79, 79, 79);
  font-size: 20px;
  text-align: center;
}
</style>
