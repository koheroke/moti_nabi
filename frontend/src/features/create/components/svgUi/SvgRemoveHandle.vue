<template>
  <g div @pointerdown="startReMove($event)" class="remove-handle">
    <rect
      :x="pocket.x"
      :y="pocket.y"
      :width="pocket.width"
      :height="pocket.height"
      rx="1"
      class="pocket"
      fill="transparent"
    />
  </g>
</template>
<script setup lang="ts">
import { type Pocket } from "@/features/create/type/casetype";
import { UseCreateWork } from "../../composables/useCreateWork";
import { onMounted, onUnmounted, ref } from "vue";
const clickAreaSize = ref(20);
const createWork = UseCreateWork();
const props = defineProps<{
  pocket: Pocket;
  caseId: string;
  pocketId: string;
}>();

let isRemoveing = false;
let lastX = 0;
let lastY = 0;

const startReMove = (event: PointerEvent) => {
  isRemoveing = true;
  lastX = event.clientX;
  lastY = event.clientY;
  const target = event.currentTarget as SVGCircleElement;
  target.setPointerCapture(event.pointerId);
};

const stopResize = () => {
  isRemoveing = false;
};

const handlePointerMove = (event: PointerEvent) => {
  if (!isRemoveing) return;
  const diffX = event.clientX - lastX;
  const diffY = event.clientY - lastY;
  lastX = event.clientX;
  lastY = event.clientY;

  createWork.provisionalReMovePocket(
    {
      x: props.pocket.x + diffX,
      y: props.pocket.y + diffY,
    },
    props.pocketId,
    props.caseId,
  );
};

onMounted(() => {
  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", stopResize);
});

onUnmounted(() => {
  window.removeEventListener("pointermove", handlePointerMove);
  window.removeEventListener("pointerup", stopResize);
});
</script>

<style lang="css" scoped>
.remove-handle {
  cursor: move;
  width: 100%;
  height: 100%;
}
</style>
