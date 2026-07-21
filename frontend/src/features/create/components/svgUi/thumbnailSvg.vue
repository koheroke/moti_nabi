<template>
  <div class="svgArea flexCanter">
    <svg
      :viewBox="`0 0 ${caseData.data.canvas.width * scale} ${caseData.data.canvas.height * scale}`"
      :style="{
        width: `${caseData.data.canvas.width * scale}px`,
        height: `${caseData.data.canvas.height * scale}px`,
      }"
      class="svg"
    >
      <g :key="caseData.id">
        <!-- 外枠 -->
        <rect
          :x="caseData.data.case.x * scale"
          :y="caseData.data.case.y * scale"
          :width="caseData.data.case.width * scale"
          :height="caseData.data.case.height * scale"
          class="case-body"
          :rx="14 * scale"
          :style="{ strokeWidth: `${3 * scale}px` }"
        />

        <!-- 持ち手 -->
        <rect
          :x="caseData.data.handle.x * scale"
          :y="caseData.data.handle.y * scale"
          :width="caseData.data.handle.width * scale"
          :height="caseData.data.handle.height * scale"
          rx="12"
          class="handle"
          :style="{ strokeWidth: `${4 * scale}px` }"
        />
        <!-- ポケット -->
        <g
          v-for="pocket in caseData.data.pockets"
          :key="pocket.id"
          class="pocket-group"
        >
          <rect
            :x="pocket.pos.x * scale"
            :y="pocket.pos.y * scale"
            :width="pocket.size.width * scale"
            :height="pocket.size.height * scale"
            :rx="14 * scale"
            class="pocket"
            :style="{ strokeWidth: `${2 * scale}px` }"
          />

          <text
            :x="(pocket.pos.x + pocket.size.width / 2) * scale"
            :y="(pocket.pos.y + pocket.size.height / 2) * scale"
            text-anchor="middle"
            dominant-baseline="middle"
            class="pocket-label"
            :style="{ fontSize: `${Math.max(13 * scale)}px` }"
          >
            {{ pocket.name }}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>
<script setup lang="ts">
import type { previewSvgCase } from "../../store/createStore";
const props = defineProps<{
  caseData: previewSvgCase;
  scale: number;
}>();
</script>
<style scoped>
.svgArea {
  width: 100%;
  height: 100%;
}

.case-body {
  fill: #f8fafc;
  stroke: #334155;
}

.handle {
  fill: none;
  stroke: #334155;
}

.pocket {
  fill: #ffffff;
  stroke: #94a3b8;
  stroke-dasharray: 6;
}

.pocket-label {
  fill: #334155;
  pointer-events: none;
}

.svg {
  width: auto;
  height: auto;
  display: block;
  overflow: visible;
}
</style>
