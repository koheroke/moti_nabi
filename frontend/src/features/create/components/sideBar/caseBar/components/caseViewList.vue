<template>
  <div class="caseView">
    <div
      v-for="(caseItem, index) in getFilteredAllCasesArray"
      :key="caseItem.id"
    >
      <div class="case">
        <Casecard
          :pockets="caseItem.data.pockets"
          :canvas="caseItem.data.canvas"
          :case="caseItem.data.case"
          :handle="caseItem.data.handle"
          :name="caseItem.data.name"
          :id="caseItem.id"
          v-model:selectedPocket="cases"
          style="width: 200px; height: auto"
          :data-tutorial="`sidebar-cases-case${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Casecard from "./Casecard.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import type { Pocket } from "@/features/create/type/casetype";
import { useCreateStore } from "@/features/create/store/createStore";
const createStore = useCreateStore();
const { getFilteredAllCasesArray } = storeToRefs(createStore);

const cases = ref<Pocket[]>();
</script>
<style lang="css" scoped>
.caseView {
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(2, 2fr);
  gap: 15px;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
</style>
