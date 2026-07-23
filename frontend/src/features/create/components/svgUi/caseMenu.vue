<template>
  <popMenu
    :close="close"
    :pocketMenu="pocketMenu"
    :onSection="onSection"
    @close="handleClose"
  ></popMenu>
</template>

<script setup lang="ts">
import popMenu from "@/components/ui/form/Menu/popMenu.vue";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCaseStore } from "../../store/caseStore.ts";
import { useCreateWork } from "@/features/create/composables/useCreateWork";
import { useCreateStore } from "../../store/createStore.ts";
const createStore = useCreateStore();
const createWork = useCreateWork();
const close = ref(true);
const caseStore = useCaseStore();
const { getSelectedCase } = storeToRefs(caseStore);
watch(getSelectedCase, (newValue) => {
  console.log("newValue", newValue);
  if (newValue.id.length != 0) {
    close.value = false;
  }
});

const handleClose = () => {
  close.value = true;
  console.log("close", close.value);
  caseStore.setSelectedCase("");
};
const pocketMenu = ref([
  { id: "delete", name: "削除" },
  { id: "paste", name: "貼り付け" },
  { id: "create", name: "新しいポケット" },
]);
let menuPos: { x: number; y: number };
const onSection = (
  value: { id: string; name: string },
  pos: { x: number; y: number },
) => {
  console.log("value", value);
  menuPos = pos;
  menuAction(value.id);
};

const menuAction = (id: string) => {
  const this_pocket = getSelectedCase.value;
  switch (id) {
    case "delete":
      console.log("delete");
      createWork.caseLogicalDelete({
        caseId: this_pocket.id,
        type: "push",
      });
      break;
    case "paste":
      if (createStore.savePocketGetter.id.length == 0) return;
      const paste_priority = createStore.indexChangeCounterGetter;

      console.log(
        "newPocketData.prioritynewPocketData.priority",
        paste_priority,
      );
      createWork.pastePocket(
        caseStore.relativeMousePositionGetter,
        this_pocket.id,
        paste_priority + 1,
      );
      createStore.indexChangeCounterSetter(paste_priority + 1);
      break;
    case "create":
      const this_priority = createStore.indexChangeCounterGetter;
      console.log(
        "newPocketData.prioritynewPocketData.priority",
        this_priority,
      );
      const default_size = 100;
      if (!menuPos) return;
      console.log("this_priority");
      const pos = caseStore.relativeMousePositionGetter;

      createWork.addPocket({
        caseId: this_pocket.id,
        pocketData: {
          id: "",
          name: "新しいポケット",
          pos: { x: pos.x - default_size / 2, y: pos.y - default_size / 2 },
          size: {
            width: default_size,
            height: default_size,
          },
          priority: this_priority + 1,
          items: {},
          logicalDelete: false,
        },
      });
      createStore.indexChangeCounterSetter(this_priority + 1);
      break;
    default:
      break;
  }
  caseStore.setSelectedCase("");
};
</script>
