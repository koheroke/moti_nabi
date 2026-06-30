<template>
  <g
    v-for="(caseItem, index) in cases"
    :key="caseItem.id"
    :transform="`translate(${index * (caseItem.data.case.width + caseGap)}, 0)`"
    @contextmenu.prevent="caseStore.setSelectedCase(caseItem.id)"
  >
    <!-- 外枠 -->
    <rect
      :x="caseItem.data.case.x"
      :y="caseItem.data.case.y"
      :width="caseItem.data.case.width"
      :height="caseItem.data.case.height"
      class="case-body"
      rx="14"
    />

    <!-- 持ち手 -->w
    <rect
      :x="caseItem.data.handle.x"
      :y="caseItem.data.handle.y"
      :width="caseItem.data.handle.width"
      :height="caseItem.data.handle.height"
      rx="12"
      class="handle"
    />
    <!-- ポケット -->
    <g
      v-for="pocket in caseItem.data.pockets"
      :v-if="!pocket.logicalDelete"
      :key="pocket.id"
      class="pocket-group"
      @dblclick="openPocket(pocket.id, caseItem.id)"
      @drop="addPreviewItem($event, pocket.id, caseItem.data.id)"
      @contextmenu.preven="
        pocketClick($event, { pocketId: pocket.id, caseId: caseItem.id })
      "
      @drop.stop
      @dragover.prevent=""
      @click.stop
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
            caseItem.id === getSelectedPocketId.caseId &&
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
        class="svg-removehandle"
        :pocket="pocket"
        :caseId="caseItem.id"
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
        :caseId="caseItem.id"
        :pocketId="pocket.id"
        class="svg-resizehandle"
      />
    </g>
  </g>
</template>
<script setup lang="ts">
import SvgResizeHandle from "./svgResizeHandle.vue";
import { onMounted, onUnmounted } from "vue";
import SvgRemoveHandle from "./SvgRemoveHandle.vue";
import { usePocketStore } from "../../store/pocketStore.ts";
import { storeToRefs } from "pinia";
import { useCreateStore } from "../../store/createStore";
import { type addPreviewItemToken } from "../../type/tokens.ts";
import { useCreateWork } from "../../composables/useCreateWork.ts";
import { useCaseStore } from "../../store/caseStore.ts";
const caseStore = useCaseStore();
const createWork = useCreateWork();
const createStore = useCreateStore();
const pocketStore = usePocketStore();
const { getSelectedPocketId } = storeToRefs(pocketStore);
const caseGap = 20;
const { getPreviewCasesArray: cases } = storeToRefs(createStore);

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
};

onMounted(() => {
  document.addEventListener("contextmenu", handleContextMenu);
});

onUnmounted(() => {
  document.removeEventListener("contextmenu", handleContextMenu);
});
// import { computed } from "vue";
// import type { Pocket, previewItem, Case } from "../../type/casetype";
// const pockets = computed(() => {
//   return Object.values(props.pockets).map((pocket) => {
//     if (pocket.items) return pocket;
//     return {
//       ...pocket,
//       items: {},
//     };
//   });
// });

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
</script>

<style scoped>
.suitcase-wrap {
  width: 420px;
}

.suitcase {
  width: 100%;
  background-color: #1b57ac;
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
</style>
