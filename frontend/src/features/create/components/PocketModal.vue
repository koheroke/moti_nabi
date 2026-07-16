<template>
  <div
    :class="['overlay', { close: isClose }, { open: !isClose }]"
    @drop="onDrop"
    @drop.stop
    @dragover.prevent="handleDrop"
    v-show="show"
  >
    <div class="modal">
      <header class="header">
        <div class="name">
          {{ "#" + selectedPocket.name }}
        </div>
        <div @click="close" class="close-button">
          <X :size="20" color="black" stroke-width="2.5"></X>
        </div>
      </header>
      <div
        class="drop-area"
        ref="previewItems"
        data-tutorial="preview-PocketModal-dropArea"
      >
        <p
          v-if="Object.keys(selectedPocket.items).length === 0"
          style="font-size: 12px; text-align: center"
        >
          ここに持ち物をドラッグ
        </p>
        <div
          v-for="item in selectedPocket.items"
          :key="item.id"
          class="item-card"
        >
          <PreviewItem
            :caseId="selectedPocket.caseId"
            :item="item"
            :pocketId="selectedPocket.id"
            :previewItemsDom="previewItems"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import { ref, watch, onMounted } from "vue";
import { type addPreviewItemToken } from "@/features/create/type/tokens.ts";
import { useCreateWork } from "@/features/create/composables/useCreateWork";
import { useSearchStore } from "../store/searchStore.ts";
import PreviewItem from "./PreviewItem.vue";
import type { previewItem } from "../type/casetype.ts";
import { usePocketStore } from "../store/pocketStore.ts";
const searchStore = useSearchStore();
const pocketStore = usePocketStore();
const show = ref(false);
onMounted(() => {
  show.value = false;
});
const isClose = ref(true);
export interface selectedPocketType {
  id: string;
  name: string;
  items: Record<string, previewItem>;
  caseId: string;
}

import { storeToRefs } from "pinia";
import { useCreateStore } from "../store/createStore";

const selectedPocket = ref<selectedPocketType>({
  id: "",
  name: "",
  items: {},
  caseId: "",
});

const { getSelectedPocketId } = storeToRefs(pocketStore);
watch(getSelectedPocketId, (ids) => {
  isClose.value = false;
  show.value = true;
  if (ids.id.length != 0 && ids.caseId.length != 0) {
    const pocket = createStore.previewItemGetter[ids.caseId].pockets[ids.id];
    selectedPocket.value = {
      id: pocket.id,
      name: pocket.name,
      items: pocket.items,
      caseId: ids.caseId,
    };
  }
});
const createStore = useCreateStore();

const createWork = useCreateWork();
const previewItems = ref<HTMLElement | null>(null);

const emit = defineEmits<{
  (e: "close"): void;
}>();
const close = () => {
  isClose.value = true;
  show.value = true;
  setTimeout(() => {
    emit("close");
  }, 300);
};
const onDrop = (event: DragEvent) => {
  createStore.draggedItemIdSetter("");
  const dragged_itemId = event.dataTransfer?.getData("itemId");
  const dragged_id = event.dataTransfer?.getData("positionChangeData");
  if (!dragged_itemId && !dragged_id) return;
  if (!selectedPocket.value) return;
  console.log("caseId", selectedPocket.value.caseId);
  if (dragged_itemId) {
    const addPreviewItemToken: addPreviewItemToken = {
      itemId: dragged_itemId,
      pocketId: selectedPocket.value.id,
      caseId: selectedPocket.value.caseId,
      id: null,
    };
    createWork.addItemToPreview(addPreviewItemToken);
  }
  // if (dragged_id) {
  //   const data = JSON.parse(dragged_id);
  //   const positionChange: positionChangePreviewItemToken = {
  //     id: data.id,
  //     pushPocketId: props.pocket.id,
  //     pushCaseId: props.pocket.caseId,
  //     popPocketId: data.id,
  //     popCaseId: data.caseId,
  //   };
  //   createWork.positionChangeItemToPreview(positionChange);
  // }
};
const handleDrop = () => {};
</script>
<style lang="css" scoped>
.drop-area {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
  overflow: auto;
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
  overflow-x: hidden;
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

.open {
  animation: modalOpen 0.25s ease-out forwards;
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
