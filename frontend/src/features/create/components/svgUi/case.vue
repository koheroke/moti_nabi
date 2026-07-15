<template>
  <div class="svgArea flexCanter">
    <svg
      :viewBox="`0 0 ${caseData.data.canvas.width} ${caseData.data.canvas.height}`"
      :style="{
        width: `${caseData.data.canvas.width}px`,
        height: `${caseData.data.canvas.height}px`,
      }"
      class="svg"
      @mousemove="onMouseMove"
    >
      <g
        :key="caseData.id"
        @contextmenu.prevent="caseStore.setSelectedCase(caseData.id)"
      >
        <!-- 外枠 -->
        <rect
          :x="caseData.data.case.x"
          :y="caseData.data.case.y"
          :width="caseData.data.case.width"
          :height="caseData.data.case.height"
          class="case-body"
          rx="14"
        />

        <!-- 持ち手 -->
        <rect
          :x="caseData.data.handle.x"
          :y="caseData.data.handle.y"
          :width="caseData.data.handle.width"
          :height="caseData.data.handle.height"
          rx="12"
          class="handle"
        />
        <!-- ポケット -->
        <g
          v-for="(pocket, index) in caseData.data.pockets"
          :key="pocket.id"
          class="pocket-group"
          @dblclick="openPocket(pocket.id, caseData.id)"
          @drop="addPreviewItem($event, pocket.id, caseData.data.id)"
          @contextmenu.prevent.stop="
            pocketClick($event, { pocketId: pocket.id, caseId: caseData.id })
          "
          @drop.stop
          @dragover.prevent=""
          @click.stop
          :data-tutorial="`preview-case${props.index}-pocket${index}`"
        >
          <rect
            :x="pocket.pos.x"
            :y="pocket.pos.y"
            :width="pocket.size.width"
            :height="pocket.size.height"
            rx="14"
            class="pocket"
            :class="{
              lightning:
                caseData.id === getSelectedPocketId.caseId &&
                pocket.id === getSelectedPocketId.id,
            }"
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
            v-if="role == 'owner' || role == 'editor'"
            class="svg-removehandle"
            :pocket="pocket"
            :caseId="caseData.id"
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
import { usePocketStore } from "../../store/pocketStore.ts";
import { storeToRefs } from "pinia";
import { useCreateStore } from "../../store/createStore";
import { type addPreviewItemToken } from "../../type/tokens.ts";
import { useCaseStore } from "../../store/caseStore.ts";
import { useCreateWork } from "../../composables/useCreateWork.ts";
import type { previewSvgCase } from "../../store/createStore";
const createStore = useCreateStore();
const caseStore = useCaseStore();
const createWork = useCreateWork();
const pocketStore = usePocketStore();
const { getSelectedPocketId } = storeToRefs(pocketStore);

const props = defineProps<{
  caseData: previewSvgCase;
  index: number;
}>();

const { role } = storeToRefs(createStore);

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
};

onMounted(() => {
  document.addEventListener("contextmenu", handleContextMenu);
});

onUnmounted(() => {
  document.removeEventListener("contextmenu", handleContextMenu);
});

function openPocket(pocketId: string, caseId: string) {
  pocketStore.setSelectedPocketId({
    id: pocketId,
    caseId: caseId,
  });
}
const addPreviewItem = (event: DragEvent, pocketId: string, caseId: string) => {
  const dragged_itemId = event.dataTransfer?.getData("itemId");
  const dragged_id = event.dataTransfer?.getData("positionChangeData");
  if (!dragged_itemId && !dragged_id) return;
  if (dragged_itemId) {
    const addPreviewItemToken: addPreviewItemToken = {
      itemId: dragged_itemId,
      pocketId: pocketId,
      caseId: caseId,
      id: null,
    };
    createWork.addItemToPreview(addPreviewItemToken);
  }
};

const pocketClick = (
  event: MouseEvent,
  value: { pocketId: string; caseId: string },
) => {
  console.log("button" + event.button);

  if (event.button === 2) {
    pocketStore.setOpenMenuPocket({
      id: value.pocketId,
      caseId: value.caseId,
    });
  }
};

const onMouseMove = (event: MouseEvent) => {
  const svg = event.currentTarget as SVGSVGElement;

  const pt = svg.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;

  const svgPoint = pt.matrixTransform(svg.getScreenCTM()!.inverse());
  caseStore.relativeMousePositionSetter({ x: svgPoint.x, y: svgPoint.y });
};
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
