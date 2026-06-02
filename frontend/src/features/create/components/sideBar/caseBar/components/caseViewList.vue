<template>
  <div class="caseView">
    <div v-for="caseItem in allcase" :key="caseItem.id">
      <div class="case">
        <Casecard
          :pockets="caseItem.data.pockets"
          :case="caseItem.data.case"
          :handle="caseItem.data.handle"
          :name="caseItem.data.name"
          :id="caseItem.id"
          v-model:selectedPocket="cases"
          style="width: 200px; height: auto"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Casecard from "./Casecard.vue";
import { ref } from "vue";
import type { Pocket } from "@/features/create/type/casetype";
import { useCreateStore } from "@/features/create/store/createStore";
const createStore = useCreateStore();
const allcase = createStore.getAllCasesArray;
const cases = ref<Pocket[]>();
</script>
<style lang="css" scoped>
.caseView {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 15px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
