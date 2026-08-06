<template>
  <div class="templateView">
    <section class="pocketModal">
      <PocketModal
        :selectedPocket="selectedPocket"
        :close="pocketClose"
        @onClose="onClose"
      ></PocketModal>
    </section>
    <div class="caseItemList noneScrollBar">
      <div v-for="(caseData, index) in cases">
        <div class="caseArea">
          <Case
            :caseData="caseData"
            :index="index"
            :role="role"
            :scale="scale"
            :selectedPocketId="getSelectedPocketId"
            @openPocket="openPocket"
            @setSelectedCase="setSelectedCase"
            @dragstart="onDragStart(caseData.id)"
            draggable="true"
            @dragend="onDragEnd"
            class="templateCase"
            :pocketClose="pocketClose"
            :selectedPocket="selectedPocket"
          />
          <div class="itemList">
            <div
              v-if="getSelectedPocketId.caseId === caseData.id"
              v-for="item in selectedPocket.items"
              :key="item.id"
              class="item-card"
            >
              <PreviewItem
                :caseId="selectedPocket.caseId"
                :item="item"
                :pocketId="selectedPocket.id"
                :previewItemsDom="null"
              />
            </div>
          </div>
        </div>
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
import { ref, watch } from "vue";
import { type selectedPocketType } from "../../../PocketModal.vue";
import { useTemplateBarStore } from "@/features/create/store/templateBar.ts";
import { storeToRefs } from "pinia";
import PreviewItem from "../../../PreviewItem.vue";
const pocketClose = ref(true);
const scale = ref(0.8);

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
    pos: this_pocket.pos,
    size: this_pocket.size,
  };
  pocketClose.value = false;
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
    pos: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
  };
  templateBarStore.setSelectedPocketId({ id: "", caseId: "" });
  console.log("getSelectedPocketId", getSelectedPocketId);
};
const selectedPocket = ref<selectedPocketType>({
  id: "",
  name: "",
  items: {},
  caseId: "",
  pos: { x: 0, y: 0 },
  size: { width: 0, height: 0 },
});

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
  overflow-x: auto;
  flex-direction: column;
}
.caseArea {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.itemList {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
