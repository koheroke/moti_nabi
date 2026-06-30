<template>
  <div
    class="suitcase-wrap case"
    @dragstart="onDragStart"
    draggable="true"
    @dragend="onDragEnd"
  >
    <svg viewBox="0 0 400 560" class="suitcase">
      <!-- 外枠 -->
      <rect
        :x="props.case.x"
        :y="props.case.y"
        :width="props.case.width"
        :height="props.case.height"
        class="case-body"
        rx="14"
      />

      <!-- 持ち手 -->
      <rect
        :x="props.handle.x"
        :y="props.handle.y"
        :width="props.handle.width"
        :height="props.handle.height"
        rx="12"
        class="handle"
      />

      <!-- ポケット -->
      <g v-for="pocket in pockets" :key="pocket.id" class="pocket-group">
        <rect
          :x="pocket.pos.x"
          :y="pocket.pos.y"
          :width="pocket.size.width"
          :height="pocket.size.height"
          rx="14"
          class="pocket"
        />

        <text
          :x="pocket.pos.x + pocket.size.width / 2"
          :y="pocket.pos.y + pocket.size.height / 2"
          text-anchor="middle"
          dominant-baseline="middle"
          class="pocket-label"
        >
          {{ pocket.name }}
        </text>

        <text
          :x="pocket.pos.x + pocket.size.width - 12"
          :y="pocket.pos.y + 22"
          text-anchor="end"
          class="pocket-count"
        >
          {{ pocket.items.size }}
        </text>
      </g>
    </svg>
    <p>{{ props.name }}</p>
  </div>
</template>
<script setup lang="ts">
import type { listCase } from "@/features/create/type/casetype";
const props = defineProps<listCase>();
import { useCaseDragStore } from "../store/onDrag.ts";
const caseDragStore = useCaseDragStore();
const onDragEnd = (event: DragEvent) => {
  caseDragStore.drag(false);
};
const onDragStart = (event: DragEvent) => {
  caseDragStore.drag(true);
  event.dataTransfer?.setData("caseId", props.id);
};
</script>

<style scoped>
.suitcase-wrap {
  width: 420px;
}

.suitcase {
  width: 100%;
}

.case-body {
  fill: #f8fafc;
  stroke: #334155;
  stroke-width: 3;
}

.handle {
  fill: none;
  stroke: #334155;
  stroke-width: 4;
}

.pocket-group {
  cursor: pointer;
}

.pocket {
  fill: #ffffff;
  stroke: #94a3b8;
  stroke-width: 2;
  stroke-dasharray: 6;
}

.pocket-label {
  font-size: 14px;
  fill: #334155;
  pointer-events: none;
}

.pocket-count {
  font-size: 13px;
  font-weight: bold;
  fill: #0f172a;
  pointer-events: none;
}

.case {
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.case p {
  text-align: center;
  font-weight: 800;
  font-size: 12px;
  color: #334155;
}
</style>
