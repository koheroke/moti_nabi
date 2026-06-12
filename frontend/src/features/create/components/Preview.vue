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
          v-model:selectedPocket="selectedPocket"
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

import { ref } from "vue";
import { storeToRefs } from "pinia";
const selectedPocket = ref();
import Case from "./svgUi/case.vue";
import { useCreateStore } from "../store/createStore";

const createStore = useCreateStore();

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
