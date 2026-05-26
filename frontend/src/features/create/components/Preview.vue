<template>
  <div class="preview-area">
    <div class="preview" v-for="caseItem in cases" :key="caseItem.id">
      <Case
        :pockets="caseItem.data.pockets"
        :case="caseItem.data.case"
        :name="caseItem.data.name"
        :handle="caseItem.data.handle"
        :id="caseItem.data.id"
        v-model:selectedPocket="cases"
      />
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
import { ref } from "vue";
import type { caseArray } from "../store/createStore";
const selectedPocket = ref();
import Case from "./svgUi/case.vue";
import { useCreateStore } from "../store/createStore";
const createStore = useCreateStore();
const cases: caseArray[] = createStore.getPreviewCasesArray;

const props = defineProps<{
  type: string;
}>();
</script>
<style lang="css" scoped>
.pocketModal {
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  width: auto;
  height: 100%;
}
.preview-area {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(68, 68, 68);
  background-repeat: repeat;
  background-image: radial-gradient(circle, #dfdddd 1px, transparent 1px);
  background-size: 20px 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
