<template>
  <div class="preview-area">
    <div class="preview">
      <dropCaseArea class="drop-area"></dropCaseArea>
      <dropTemplateArea></dropTemplateArea>

      <div class="cases_previewArea">
        <div v-for="(caseItem, index) in cases">
          <Case
            :caseData="caseItem"
            :index="index"
            :role="role"
            :scale="1"
            :selectedPocketId="getSelectedPocketId"
            @onMouseMove="onMouseMove"
            @pocketClick="pocketClick"
            @addPreviewItem="addPreviewItem"
            @openPocket="openPocket"
            @setSelectedCase="setSelectedCase"
            @editName="editName"
          />
        </div>
      </div>
    </div>
    <section class="pocketModal">
      <PocketModal
        @onDropPocket="onDropPocket"
        :selectedPocket="selectedPocket"
        :close="close"
        @onClose="
          {
            close = true;
          }
        "
      />
    </section>

    <pocketMenu v-if="role == 'owner' || role == 'editor'"></pocketMenu>
    <caseMenu v-if="role == 'owner' || role == 'editor'"></caseMenu>
  </div>
</template>

<script setup lang="ts">
import dropTemplateArea from "./sideBar/templateBar/components/dropTemplateArea.vue";
import PocketModal from "./PocketModal.vue";
import dropCaseArea from "./sideBar/caseBar/components/dropCaseArea.vue";
import Case from "./svgUi/case.vue";
import pocketMenu from "@/features/create/components/svgUi/pocketMenu.vue";
import caseMenu from "./svgUi/caseMenu.vue";
import { onUnmounted, watch, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCreateStore } from "../store/createStore.ts";
import type { addPreviewItemToken } from "../type/tokens.ts";
import { useCaseStore } from "../store/caseStore.ts";
import { useCreateWork } from "../composables/useCreateWork.ts";
import { usePocketStore } from "../store/pocketStore.ts";
import { type selectedPocketType } from "./PocketModal.vue";
const close = ref(true);
const selectedPocket = ref<selectedPocketType>({
  id: "",
  name: "",
  items: {},
  caseId: "",
});

const caseStore = useCaseStore();
const createWork = useCreateWork();
const pocketStore = usePocketStore();
const createStore = useCreateStore();
const { getPreviewCasesArray: cases } = storeToRefs(createStore);
const { role } = storeToRefs(createStore);
const { getSelectedPocketId } = storeToRefs(pocketStore);

const setSelectedCase = (id: string) => {
  caseStore.setSelectedCase(id);
};
const openPocket = (pocketId: string, caseId: string) => {
  pocketStore.setSelectedPocketId({
    id: pocketId,
    caseId: caseId,
  });
};
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

onUnmounted(() => {
  createStore.selectedMenuReset();
});

const onDropPocket = (event: DragEvent) => {
  createStore.draggedItemIdSetter("");
  const dragged_itemId = event.dataTransfer?.getData("itemId");
  const dragged_id = event.dataTransfer?.getData("positionChangeData");
  if (!dragged_itemId && !dragged_id) return;
  if (!getSelectedPocketId) return;
  if (dragged_itemId) {
    const addPreviewItemToken: addPreviewItemToken = {
      itemId: dragged_itemId,
      pocketId: getSelectedPocketId.value.id,
      caseId: getSelectedPocketId.value.caseId,
      id: null,
    };
    createWork.addItemToPreview(addPreviewItemToken);
  }
};

watch(getSelectedPocketId, (ids) => {
  if (ids.id.length != 0 && ids.caseId.length != 0) {
    const pocket = createStore.previewItemGetter[ids.caseId].pockets[ids.id];
    close.value = false;
    selectedPocket.value = {
      id: pocket.id,
      name: pocket.name,
      items: pocket.items,
      caseId: ids.caseId,
    };
  }
});

const editName = (newName: string) => {
  const this_pocket = pocketStore.reNamePocketGetter;
  if (newName.length > 15) {
    newName = newName.slice(0, 15);
  }
  createWork.reNamePocket(
    this_pocket.caseId,
    this_pocket.id,
    this_pocket.beforeName,
    newName,
  );
  pocketStore.reNamePocketClear();
};
</script>
<style lang="css" scoped>
.pocketModal {
  position: absolute;
  width: 300px;
  right: 0%;
  bottom: 0%;
}

.viewBox {
  width: 2000px;
  height: 1200px;
  display: block;
}
.drop-area {
  z-index: 20;
}
.preview {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  background-color: rgb(68, 68, 68);
  background-repeat: repeat;
  background-image: radial-gradient(circle, #dfdddd 1px, transparent 1px);
  background-size: 20px 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  align-content: start;
  position: relative;
  box-sizing: border-box;
}
.preview-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.caseSvg {
  height: 100%;
  width: auto;
}
.cases_previewArea {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 30px;
  overflow-x: auto;
}
</style>
