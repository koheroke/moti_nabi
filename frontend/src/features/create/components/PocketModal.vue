<template>
  <div
    :class="['overlay', { close: isClose }, { open: !isClose }]"
    @drop.stop="emit('onDropPocket', $event)"
    @dragover.prevent=""
    v-show="show"
  >
    <div class="modal">
      <header class="header">
        <div class="name">
          {{ "#" + selectedPocket.name }}
        </div>
        <div @click="onClose" class="close-button">
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
import { ref, onMounted, watch } from "vue";
import PreviewItem from "./PreviewItem.vue";
import type { previewItem } from "../type/casetype.ts";
export interface selectedPocketType {
  id: string;
  name: string;
  items: Record<string, previewItem>;
  caseId: string;
}
const show = ref(false);

const props = defineProps<{
  selectedPocket: selectedPocketType;
  close: boolean;
}>();

watch(
  () => props.close,
  (newClose) => {
    isClose.value = newClose;
    show.value = !newClose;
  },
);

const previewItems = ref<HTMLElement | null>(null);
onMounted(() => {
  show.value = false;
});
const isClose = ref(true);

const emit = defineEmits<{
  (e: "onClose"): void;
  (e: "onDropPocket", event: DragEvent): void;
}>();
const onClose = () => {
  isClose.value = true;
  addEventListener("animationend", (event: AnimationEvent) => {
    console.log("event.animationName", event.animationName);
    if (event.animationName == "modalClose-f42593c0") emit("onClose");
  });
};
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
