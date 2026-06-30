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
import { type Pocket } from "@/features/create/type/casetype";
import { useCreateWork } from "../../composables/useCreateWork";
import { onMounted, onUnmounted } from "vue";
import { useCreateStore } from "../../store/createStore";
const createStore = useCreateStore();

let stop = true;
const createWork = useCreateWork();
const props = defineProps<{
  pocket: Pocket;
  caseId: string;
  pocketId: string;
}>();

let isRemoveing = false;
let lastX = 0;
let lastY = 0;

const startReMove = (event: PointerEvent) => {
  stop = false;
  isRemoveing = true;
  lastX = event.clientX;
  lastY = event.clientY;
  const target = event.currentTarget as SVGCircleElement;
  target.setPointerCapture(event.pointerId);
};

const stopResize = () => {
  if (!stop) {
    //console.log("stopResize");
    createWork.confirmedRemovePocket(props.caseId, props.pocketId);
    createWork.confirmedChangePriorityPocket(props.caseId, props.pocketId);
    isRemoveing = false;
    stop = true;
  }
};

const handlePointerMove = (event: PointerEvent) => {
  if (!isRemoveing) return;
  let diffX = event.clientX - lastX;
  let diffY = event.clientY - lastY;
  lastX = event.clientX;
  lastY = event.clientY;

  const endPos = {
    x: props.pocket.pos.x + diffX,
    y: props.pocket.pos.y + diffY,
  };

  const this_case = createStore.previewItemGetter[props.caseId];
  const max_x = this_case.case.width;
  const max_y = this_case.case.height;
  createWork.provisionaChangePriorityPocket(props.caseId, props.pocketId);
  createWork.provisionalRemovePocket(
    {
      x: props.pocket.pos.x + diffX,
      y: props.pocket.pos.y + diffY,
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
