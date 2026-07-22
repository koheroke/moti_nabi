<template>
  <div class="templateView">
    <section class="pocketModal">
      <PocketModal
        :selectedPocket="selectedPocket"
        :close="close"
        @onClose="onClose"
      ></PocketModal>
    </section>
    <div class="caseItemList noneScrollBar">
      <div v-for="(caseData, index) in cases">
        <Case
          :caseData="caseData"
          :index="index"
          :role="role"
          :scale="0.8"
          :selectedPocketId="getSelectedPocketId"
          @openPocket="openPocket"
          @setSelectedCase="setSelectedCase"
          @dragstart="onDragStart(caseData.id)"
          draggable="true"
          @dragend="onDragEnd"
          class="templateCase"
        />
      </div>
    </div>
    <BaseButton class="adaptationBotton floating">全て適応</BaseButton>
    <section class="pocketModal"></section>
  </div>
</template>
<script setup lang="ts">
import Case from "../../../svgUi/case.vue";
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
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

const onDragStart = (id: string) => {
  templateBarStore.draggedCaseDataSetter(id);
};
const onDragEnd = () => {
  templateBarStore.draggedCaseDataSetter("");
};
</script>
<style lang="css" scoped>
.templateView {
  padding-top: 10px;
  box-sizing: border-box;
  width: auto;
  padding: 20px;
  height: 100%;
  position: relative;
  border-radius: 10px;
  background-color: rgb(242, 242, 242);
}
.caseItemList {
  width: 100%;
  height: 100%;
  gap: 50px;
  padding: 20px;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
}
.templateCase {
  width: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
  padding: 10px 0px;
}
.pocketModal {
  position: absolute;
  width: 300px;
  right: 0px;
  bottom: 0px;
}
.adaptationBotton {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
