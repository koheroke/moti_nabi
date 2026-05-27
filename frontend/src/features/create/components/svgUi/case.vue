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
        @click="openPocket(pocket)"
      >
        <rect
          :x="pocket.x"
          :y="pocket.y"
          :width="pocket.width"
          :height="pocket.height"
          rx="14"
          class="pocket"
        />

        <text
          :x="pocket.x + pocket.width / 2"
          :y="pocket.y + pocket.height / 2"
          text-anchor="middle"
          dominant-baseline="middle"
          class="pocket-label"
        >
          {{ pocket.name }}
        </text>

        <text
          :x="pocket.x + pocket.width - 12"
          :y="pocket.y + 22"
          text-anchor="end"
          class="pocket-count"
        >
          {{ pocket.items.length }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Pocket, previewItem, Case } from "../../type/casetype";
const props = defineProps<Case>();
const pockets = computed(() => {
  return Object.values(props.pockets).map((pocket) => {
    if (pocket.items) return pocket;
    return {
      ...pocket,
      items: [],
    };
  });
});
const emit = defineEmits<{
  (
    e: "update:selectedPocket",
    payload: {
      items: previewItem[];
      id: string;
      name: string;
      caseId: string;
    },
  ): void;
}>();

function openPocket(pocket: Pocket) {
  emit("update:selectedPocket", {
    items: pocket.items,
    id: pocket.id,
    name: pocket.name,
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
</style>
