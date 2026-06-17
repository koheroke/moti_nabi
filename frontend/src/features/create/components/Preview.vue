<template>
  <div class="preview-area">
    <div class="preview">
      <dropCaseArea class="drop-area"></dropCaseArea>
      <div v-for="caseItem in cases" :key="caseItem.id">
        <Case
          :pockets="caseItem.data.pockets"
          :case="caseItem.data.case"
          :name="caseItem.data.name"
          :handle="caseItem.data.handle"
          :id="caseItem.id"
        />
      </div>
    </div>
    <section class="pocketModal">
      <PocketModal
        v-if="selectedPocket"
        :pocket="selectedPocket"
        @close="selectedPocket = null"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import PocketModal from "./PocketModal.vue";
import dropCaseArea from "./sideBar/caseBar/components/dropCaseArea.vue";
import { type selectedPocketType } from "@/features/create/components/PocketModal.vue";
import { watch, ref } from "vue";
import { storeToRefs } from "pinia";
import Case from "./svgUi/case.vue";
import { useCreateStore } from "../store/createStore";

import { usePocketStore } from "../store/pocketStore.ts";
const pocketStore = usePocketStore();
const selectedPocket = ref<selectedPocketType | null>(null);

const { getSelectedPocketId } = storeToRefs(pocketStore);
const createStore = useCreateStore();

watch(getSelectedPocketId, (ids) => {
  if (ids.id.length != 0 && ids.caseId.length != 0) {
    const pocket = createStore.previewItemGetter[ids.caseId].pockets[ids.id];
    selectedPocket.value = {
      id: pocket.id,
      name: pocket.name,
      items: pocket.items,
      caseId: ids.caseId,
    };
  }
});

const { getPreviewCasesArray: cases } = storeToRefs(createStore);
</script>
<style lang="css" scoped>
.pocketModal {
  position: absolute;
  width: 300px;
  right: 0%;
  bottom: 0%;
}

.preview {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  display: grid;
  background-color: rgb(68, 68, 68);
  background-repeat: repeat;
  background-image: radial-gradient(circle, #dfdddd 1px, transparent 1px);
  background-size: 20px 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  gap: 20px;
  position: relative;
  box-sizing: border-box;
}
.preview-area {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
