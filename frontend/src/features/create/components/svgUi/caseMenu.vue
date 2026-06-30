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
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { useCaseStore } from "../../store/caseStore.ts";
import { useCreateWork } from "@/features/create/composables/useCreateWork";
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

const onSection = (value: { id: string; name: string }) => {
  console.log("value", value);
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
      break;
    case "create":
      break;
    default:
      break;
  }
  caseStore.setSelectedCase("");
};
</script>
