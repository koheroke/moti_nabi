<template>
  <div class="svgArea flexCanter">
    <svg
      :viewBox="`0 0 ${caseData.data.canvas.width * scale} ${caseData.data.canvas.height * scale}`"
      :style="{
        width: `${caseData.data.canvas.width * scale}px`,
        height: `${caseData.data.canvas.height * scale}px`,
      }"
      class="svg"
      @mousemove="emit('onMouseMove', $event)"
    >
      <g
        :key="caseData.id"
        @contextmenu.prevent="emit('setSelectedCase', caseData.id)"
      >
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
          v-for="(pocket, index) in caseData.data.pockets"
          :key="pocket.id"
          class="pocket-group pocketHover"
          @dblclick="emit('openPocket', pocket.id, caseData.id)"
          @drop="emit('addPreviewItem', $event, pocket.id, caseData.data.id)"
          @contextmenu.prevent.stop="
            emit('pocketClick', $event, {
              pocketId: pocket.id,
              caseId: caseData.id,
            })
          "
          @drop.stop
          @dragover.prevent=""
          @click.stop
          :data-tutorial="`preview-case${props.index}-pocket${index}`"
        >
          <rect
            :x="pocket.pos.x * scale"
            :y="pocket.pos.y * scale"
            :width="pocket.size.width * scale"
            :height="pocket.size.height * scale"
            :rx="14 * scale"
            class="pocket"
            :class="{
              lightning:
                caseData.id === selectedPocketId.caseId &&
                pocket.id === selectedPocketId.id,
            }"
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

          <SvgRemoveHandle
            v-if="role == 'owner' || role == 'editor'"
            class="svg-removehandle"
            :pocket="pocket"
            :caseId="caseData.id"
            :pocketId="pocket.id"
          ></SvgRemoveHandle>
          <SvgResizeHandle
            v-if="role == 'owner' || role == 'editor'"
            :pocket="pocket"
            :caseId="caseData.id"
            :pocketId="pocket.id"
            class="svg-resizehandle"
          />
        </g>
      </g>
    </svg>
  </div>
</template>
<script setup lang="ts">
import SvgResizeHandle from "./svgResizeHandle.vue";
import { onMounted, onUnmounted } from "vue";
import SvgRemoveHandle from "./SvgRemoveHandle.vue";
import type { previewSvgCase } from "../../store/createStore";
const props = defineProps<{
  caseData: previewSvgCase;
  index: number;
  role: string;
  selectedPocketId: { caseId: string; id: string };
  scale: number;
}>();

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
};

onMounted(() => {
  document.addEventListener("contextmenu", handleContextMenu);
});

onUnmounted(() => {
  document.removeEventListener("contextmenu", handleContextMenu);
});
const emit = defineEmits<{
  (e: "onMouseMove", event: MouseEvent): void;
  (
    e: "pocketClick",
    event: MouseEvent,
    value: { pocketId: string; caseId: string },
  ): void;
  (
    e: "addPreviewItem",
    event: DragEvent,
    pocketId: string,
    caseId: string,
  ): void;

  (e: "openPocket", pocketId: string, caseId: string): void;
  (e: "setSelectedCase", id: string): void;
}>();
</script>

<style scoped>
.svgArea {
  width: 100%;
  height: 100%;
}

.suitcase {
  width: 100%;
}

.case-body {
  fill: #f8fafc;
  stroke: #334155;
}

.handle {
  fill: none;
  stroke: #334155;
}

.pocket-group {
  position: relative;
}
.pocket-group:hover .svg-resizehandle,
.pocket-group:hover .svg-removehandle {
  display: block;
}
.pocketHover {
  cursor: pointer;
}

.pocket {
  fill: #ffffff;
  stroke: #94a3b8;
  stroke-dasharray: 6;
}

.pocketHover:hover .pocket {
  fill: #e0f2fe;
  stroke: #0284c7;
}

.pocket-label {
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

.lightning {
  display: block;
  fill: #e0f2fe;
  stroke: #0284c7;
}

.svg {
  width: auto;
  height: auto;
  display: block;
  overflow: visible;
}
</style>
