<template>
  <g class="resize-handles">
    <!-- 左上 -->
    <circle
      :cx="pocket.pos.x"
      :cy="pocket.pos.y"
      r="6"
      @pointerdown="startResize($event, -1, -1)"
      class="resize-handle"
      style="cursor: nwse-resize"
    />

    <!-- 右上 -->
    <circle
      :cx="pocket.pos.x + pocket.size.width"
      :cy="pocket.pos.y"
      r="6"
      @pointerdown="startResize($event, 1, -1)"
      class="resize-handle"
      style="cursor: nesw-resize"
    />

    <!-- 左下 -->
    <circle
      :cx="pocket.pos.x"
      :cy="pocket.pos.y + pocket.size.height"
      r="6"
      @pointerdown="startResize($event, -1, 1)"
      class="resize-handle"
      style="cursor: nesw-resize"
    />

    <!-- 右下 -->
    <circle
      :cx="pocket.pos.x + pocket.size.width"
      :cy="pocket.pos.y + pocket.size.height"
      r="6"
      @pointerdown="startResize($event, 1, 1)"
      class="resize-handle"
      style="cursor: nwse-resize"
    />

    <!-- 上 -->
    <circle
      :cx="pocket.pos.x + pocket.size.width / 2"
      :cy="pocket.pos.y"
      r="6"
      @pointerdown="startResize($event, 0, -1)"
      class="resize-handle"
      style="cursor: ns-resize"
    />

    <!-- 下 -->
    <circle
      :cx="pocket.pos.x + pocket.size.width / 2"
      :cy="pocket.pos.y + pocket.size.height"
      r="6"
      @pointerdown="startResize($event, 0, 1)"
      class="resize-handle"
      style="cursor: ns-resize"
    />

    <!-- 左 -->
    <circle
      :cx="pocket.pos.x"
      :cy="pocket.pos.y + pocket.size.height / 2"
      r="6"
      @pointerdown="startResize($event, -1, 0)"
      class="resize-handle"
      style="cursor: ew-resize"
    />

    <!-- 右 -->
    <circle
      :cx="pocket.pos.x + pocket.size.width"
      :cy="pocket.pos.y + pocket.size.height / 2"
      r="6"
      @pointerdown="startResize($event, 1, 0)"
      class="resize-handle"
      style="cursor: ew-resize"
    />
  </g>
</template>
<script setup lang="ts">
import { useCreateWork } from "@/features/create/composables/useCreateWork";
import { onMounted, onUnmounted } from "vue";
import { type previewSvgPocket } from "@/features/create/store/createStore";
const createWork = useCreateWork();
let stop = true;
const props = defineProps<{
  pocket: previewSvgPocket;
  caseId: string;
  pocketId: string;
}>();
const minWidth = 10;
const minHeight = 10;
let isResizing = false;
let resizeDirection = { x: 0, y: 0 };
let lastX = 0;
let lastY = 0;

const startResize = (event: PointerEvent, x: number, y: number) => {
  stop = false;
  isResizing = true;
  resizeDirection = { x, y };
  lastX = event.clientX;
  lastY = event.clientY;

  const width = props.pocket.size.width;
  const height = props.pocket.size.height;
  const target = event.currentTarget as SVGCircleElement;
  target.setPointerCapture(event.pointerId);
  createWork.startResizePocket({
    width: width,
    height: height,
  });
};

const stopResize = () => {
  if (!stop) {
    createWork.confirmedResizePocket(props.caseId, props.pocketId);
    isResizing = false;
    stop = true;
  }
};

const handlePointerMove = (event: PointerEvent) => {
  if (!isResizing) return;

  const diffX = event.clientX - lastX;
  const diffY = event.clientY - lastY;

  lastX = event.clientX;
  lastY = event.clientY;

  if (
    diffX < Math.abs(resizeDirection.x) &&
    diffY < Math.abs(resizeDirection.y)
  ) {
    return;
  }
  let moveX = resizeDirection.x === -1 ? diffX : 0;
  let moveY = resizeDirection.y === -1 ? diffY : 0;
  let width = props.pocket.size.width + diffX * resizeDirection.x;
  let height = props.pocket.size.height + diffY * resizeDirection.y;
  if (width < minWidth) {
    width = minWidth;
    moveX = 0;
  }
  if (height < minHeight) {
    height = minHeight;
    moveY = 0;
  }

  createWork.provisionalResizePocket(
    {
      x: props.pocket.pos.x + moveX,
      y: props.pocket.pos.y + moveY,
      width: width,
      height: height,
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
