<template>
  <g div @pointerdown="startReMove($event)" class="remove-handle">
    <rect
      :x="pocket.pos.x"
      :y="pocket.pos.y"
      :width="pocket.size.width"
      :height="pocket.size.height"
      rx="1"
      class="pocket"
      fill="transparent"
    />
  </g>
</template>
<script setup lang="ts">
import { useCreateWork } from "../../composables/useCreateWork";
import { onMounted, onUnmounted } from "vue";
import { useCreateStore } from "../../store/createStore";
import { type previewSvgPocket } from "@/features/create/store/createStore";
const createStore = useCreateStore();
const minRemove = 0.5;
const maxRemove = {
  x: 0,
  y: 0,
};
let stop = true;
const createWork = useCreateWork();
const props = defineProps<{
  pocket: previewSvgPocket;
  caseId: string;
  pocketId: string;
}>();

let isRemoveing = false;
let lastX = 0;
let lastY = 0;

const startReMove = (event: PointerEvent) => {
  stop = false;
  console.log("startReMove");
  isRemoveing = true;
  lastX = event.clientX;
  lastY = event.clientY;
  const target = event.currentTarget as SVGCircleElement;
  target.setPointerCapture(event.pointerId);
  createWork.startRemovePocket({
    x: props.pocket.pos.x,
    y: props.pocket.pos.y,
  });
};

const stopResize = () => {
  if (!stop) {
    console.log("stopResize");
    const res = createWork.confirmedRemovePocket(props.caseId, props.pocketId);
    isRemoveing = false;
    stop = true;
    if (res == "blockEdit") return;
    createWork.confirmedChangePriorityPocket(props.caseId, props.pocketId);
  }
};

const handlePointerMove = (event: PointerEvent) => {
  if (!isRemoveing) return;
  let diffX = event.clientX - lastX;
  let diffY = event.clientY - lastY;
  lastX = event.clientX;
  lastY = event.clientY;
  if (Math.abs(diffX) < minRemove && Math.abs(diffY) < minRemove) {
    return;
  }

  const endPos = {
    x: props.pocket.pos.x + diffX,
    y: props.pocket.pos.y + diffY,
  };

  const pocketSize = {
    width: props.pocket.size.width,
    height: props.pocket.size.height,
  };
  if (
    endPos.x > maxRemove.x - pocketSize.width ||
    endPos.y > maxRemove.y - pocketSize.height ||
    endPos.y < 0 ||
    endPos.x < 0
  ) {
    return;
  }
  createWork.provisionaChangePriorityPocket(props.caseId, props.pocketId);
  createWork.provisionalRemovePocket(
    {
      x: endPos.x,
      y: endPos.y,
      width: props.pocket.size.width,
      height: props.pocket.size.height,
    },
    props.pocketId,
    props.caseId,
  );
};

onMounted(() => {
  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", stopResize);
  maxRemove.x = createStore.previewItemGetter[props.caseId].canvas.width;
  maxRemove.y = createStore.previewItemGetter[props.caseId].canvas.height;
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
