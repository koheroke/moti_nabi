<template>
  <g class="resize-handles">
    <!-- 左上 -->
    <circle
      :cx="pocket.x"
      :cy="pocket.y"
      r="6"
      @pointerdown="startResize($event, -1, -1)"
      class="resize-handle"
      style="cursor: nwse-resize"
    />

    <!-- 右上 -->
    <circle
      :cx="pocket.x + pocket.width"
      :cy="pocket.y"
      r="6"
      @pointerdown="startResize($event, 1, -1)"
      class="resize-handle"
      style="cursor: nesw-resize"
    />

    <!-- 左下 -->
    <circle
      :cx="pocket.x"
      :cy="pocket.y + pocket.height"
      r="6"
      @pointerdown="startResize($event, -1, 1)"
      class="resize-handle"
      style="cursor: nesw-resize"
    />

    <!-- 右下 -->
    <circle
      :cx="pocket.x + pocket.width"
      :cy="pocket.y + pocket.height"
      r="6"
      @pointerdown="startResize($event, 1, 1)"
      class="resize-handle"
      style="cursor: nwse-resize"
    />

    <!-- 上 -->
    <circle
      :cx="pocket.x + pocket.width / 2"
      :cy="pocket.y"
      r="6"
      @pointerdown="startResize($event, 0, -1)"
      class="resize-handle"
      style="cursor: ns-resize"
    />

    <!-- 下 -->
    <circle
      :cx="pocket.x + pocket.width / 2"
      :cy="pocket.y + pocket.height"
      r="6"
      @pointerdown="startResize($event, 0, 1)"
      class="resize-handle"
      style="cursor: ns-resize"
    />

    <!-- 左 -->
    <circle
      :cx="pocket.x"
      :cy="pocket.y + pocket.height / 2"
      r="6"
      @pointerdown="startResize($event, -1, 0)"
      class="resize-handle"
      style="cursor: ew-resize"
    />

    <!-- 右 -->
    <circle
      :cx="pocket.x + pocket.width"
      :cy="pocket.y + pocket.height / 2"
      r="6"
      @pointerdown="startResize($event, 1, 0)"
      class="resize-handle"
      style="cursor: ew-resize"
    />
  </g>
</template>
<script setup lang="ts">
import { type Pocket } from "@/features/create/type/casetype";
import {
  UseCreateWork,
  type provisionalResizePocket,
} from "../../composables/useCreateWork";
import { onMounted, onUnmounted } from "vue";
const createWork = UseCreateWork();
const props = defineProps<{
  pocket: Pocket;
  caseId: string;
  pocketId: string;
}>();

let isResizing = false;
let resizeDirection = { x: 0, y: 0 };
let lastX = 0;
let lastY = 0;

const startResize = (event: PointerEvent, x: number, y: number) => {
  isResizing = true;
  resizeDirection = { x, y };

  lastX = event.clientX;
  lastY = event.clientY;
  const target = event.currentTarget as SVGCircleElement;
  target.setPointerCapture(event.pointerId);
};

const stopResize = () => {
  isResizing = false;
};

const handlePointerMove = (event: PointerEvent) => {
  if (!isResizing) return;

  const diffX = event.clientX - lastX;
  const diffY = event.clientY - lastY;

  lastX = event.clientX;
  lastY = event.clientY;

  const moveX = resizeDirection.x === -1 ? diffX : 0;
  const moveY = resizeDirection.y === -1 ? diffY : 0;

  createWork.provisionalResizePocket(
    {
      x: props.pocket.x + moveX,
      y: props.pocket.y + moveY,
      width: props.pocket.width + diffX * resizeDirection.x,
      height: props.pocket.height + diffY * resizeDirection.y,
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
.resize-handle {
  fill: white;
  stroke: #3b83f61d;
  stroke-width: 2;
}

.resize-handles {
  pointer-events: all;
  display: none;
}
</style>
