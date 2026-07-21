<template>
  <div class="templateView">
    <section class="pocketModal">
      <PocketModal
        :selectedPocket="selectedPocket"
        :close="close"
        @onClose="onClose"
      ></PocketModal>
    </section>
    <div class="caseItemList">
      <div v-for="(caseData, index) in cases">
        <Case
          :caseData="caseData"
          :index="index"
          :role="role"
          :scale="0.5"
          :selectedPocketId="getSelectedPocketId"
          @openPocket="openPocket"
          @setSelectedCase="setSelectedCase"
          class="templateCase"
        />
      </div>
    </div>
  </div>
  <section class="pocketModal"></section>
</template>
<script setup lang="ts">
import Case from "../../../svgUi/case.vue";
import PocketModal from "../../../PocketModal.vue";
import { type previewSvgCase } from "@/features/create/store/createStore.ts";
import { ref } from "vue";
import { type selectedPocketType } from "../../../PocketModal.vue";
import { useTemplateBarStore } from "@/features/create/store/templateBar.ts";
import { storeToRefs } from "pinia";
const templateBarStore = useTemplateBarStore();
const { getSelectedPocketId } = storeToRefs(templateBarStore);

const setSelectedCase = () => {};
const openPocket = (pocketId: string, caseId: string) => {
  templateBarStore.setSelectedPocketId({ id: pocketId, caseId: caseId });
  const this_pocket =
    templateBarStore.selectedTemplateDataGetter.data[caseId].pockets[pocketId];
  selectedPocket.value = {
    items: this_pocket.items,
    caseId: caseId,
    name: this_pocket.name,
    id: this_pocket.id,
  };
  close.value = false;
};
const role = ref("viewer");
const props = defineProps<{
  cases: previewSvgCase[];
}>();
const onClose = () => {
  selectedPocket.value = {
    id: "",
    name: "",
    items: {},
    caseId: "",
  };
  close.value = true;
};
const selectedPocket = ref<selectedPocketType>({
  id: "",
  name: "",
  items: {},
  caseId: "",
});
const close = ref(true);
</script>
<style lang="css" scoped>
.templateView {
  padding-top: 30px;
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  position: relative;
  border-radius: 10px;
}
.caseItemList {
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
}
.templateCase {
  width: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.pocketModal {
  position: absolute;
  width: 300px;
  right: 0px;
  bottom: 0px;
}
</style>
