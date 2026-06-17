<template>
  <div class="suitcase-wrap">
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

      <g
        v-for="pocket in pockets"
        :key="pocket.id"
        class="pocket-group"
        @dblclick="openPocket(pocket)"
      >
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

        <SvgRemoveHandle
          class="svg-removehandle"
          :pocket="pocket"
          :caseId="id"
          :pocketId="pocket.id"
        ></SvgRemoveHandle>

        <text
          :x="pocket.pos.x + pocket.size.width - 12"
          :y="pocket.pos.y + 22"
          text-anchor="end"
          class="pocket-count"
        >
          {{ pocket.items?.size }}
        </text>
        <SvgResizeHandle
          :pocket="pocket"
          :caseId="id"
          :pocketId="pocket.id"
          class="svg-resizehandle"
        />
      </g>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { Pocket, previewItem, Case } from "../../type/casetype";
import SvgResizeHandle from "./svgResizeHandle.vue";
import SvgRemoveHandle from "./SvgRemoveHandle.vue";
import { usePocketStore } from "../../store/pocketStore.ts";
const pocketStore = usePocketStore();
const props = defineProps<Case>();
const pockets = computed(() => {
  return Object.values(props.pockets).map((pocket) => {
    if (pocket.items) return pocket;
    return {
      ...pocket,
      items: {},
    };
  });
});
const emit = defineEmits<{
  (
    e: "update:selectedPocket",
    payload: {
      items: Record<string, previewItem>;
      id: string;
      name: string;
      caseId: string;
    },
  ): void;
}>();

function openPocket(pocket: Pocket) {
  pocketStore.setSelectedPocketId({
    id: pocket.id,
    caseId: props.id,
  });
}
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
  position: relative;
}
.pocket-group:hover .svg-resizehandle,
.pocket-group:hover .svg-removehandle {
  display: block;
}

.pocket {
  fill: #ffffff;
  stroke: #94a3b8;
  stroke-width: 2;
  stroke-dasharray: 6;
}

.pocket-group:hover .pocket {
  fill: #e0f2fe;
  stroke: #0284c7;
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
.svg-resizehandle {
  display: none;
}

.svg-removehandle {
  display: none;
}
</style>
