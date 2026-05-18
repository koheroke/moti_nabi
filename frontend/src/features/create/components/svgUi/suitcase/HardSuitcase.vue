<template>
  <div class="suitcase-wrap">
    <svg viewBox="0 0 400 560" class="suitcase">
      <!-- 外枠 -->
      <rect x="40" y="40" width="320" height="480" rx="28" class="case-body" />

      <!-- 持ち手 -->
      <rect x="145" y="15" width="110" height="35" rx="12" class="handle" />

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
import { ref } from "vue";

type Pocket = {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  items: unknown[];
};

const pockets = ref<Pocket[]>([
  {
    id: "mesh",
    name: "メッシュ",
    x: 70,
    y: 80,
    width: 260,
    height: 95,
    items: [],
  },
  {
    id: "main",
    name: "メイン収納",
    x: 70,
    y: 195,
    width: 170,
    height: 230,
    items: [],
  },
  {
    id: "side",
    name: "小物",
    x: 255,
    y: 195,
    width: 75,
    height: 230,
    items: [],
  },
  {
    id: "bottom",
    name: "下部収納",
    x: 70,
    y: 445,
    width: 260,
    height: 55,
    items: [],
  },
]);

const emit = defineEmits<{
  (e: "update:selectedPocket", pocket: Pocket): void;
}>();

function openPocket(pocket: Pocket) {
  emit("update:selectedPocket", pocket);
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
