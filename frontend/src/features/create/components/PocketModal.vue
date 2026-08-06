<template>
  <div
    :class="[
      'overlay',
      'pocketModel',
      { popdown: isClose },
      { popup: !isClose },
    ]"
    @drop.stop="emit('onDropPocket', $event)"
    @dragover.prevent=""
    v-show="show"
    @animationend="onAnimationEnd"
    ref="pocketModel"
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
import { ref, onMounted, watch, nextTick } from "vue";
import PreviewItem from "./PreviewItem.vue";
import type { previewItem } from "../type/casetype.ts";
export interface selectedPocketType {
  id: string;
  name: string;
  items: Record<string, previewItem>;
  caseId: string;
  pos: { x: number; y: number };
  size: { width: number; height: number };
  scale?: number;
}
const pocketModel = ref<HTMLElement | null>(null);
const show = ref(false);

const props = defineProps<{
  selectedPocket: selectedPocketType;
  close: boolean;
}>();

const move = async () => {
  if (!pocketModel.value) return;
  await nextTick();
  const scale = props.selectedPocket.scale ? props.selectedPocket.scale : 1;
  const padding = 5;
  const pocketPos = {
    x: props.selectedPocket.pos.x * scale,
    y: props.selectedPocket.pos.x * scale,
  };
  const pocketSize = {
    width: props.selectedPocket.size.width * scale,
    height: props.selectedPocket.size.height * scale,
  };
  pocketModel.value.style.top = `${pocketPos.y}px`;
  pocketModel.value.style.left = `${pocketPos.x + pocketSize.width + padding}px`;
};
watch(
  () => props.selectedPocket.id,
  () => {
    move();
  },
);
watch(
  () => props.close,
  (newClose) => {
    isClose.value = newClose;
    show.value = !newClose;
    if (show.value) {
      move();
    }
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
};

const onAnimationEnd = (event: AnimationEvent) => {
  if (event.animationName.includes("popdown")) {
    show.value = false;
    emit("onClose");
  }
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
.pocketModel {
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 200px;
  max-height: 400px;
  max-width: 300px;
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
