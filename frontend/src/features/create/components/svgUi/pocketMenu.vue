<template>
  <popMenu
    :close="close"
    :pocketMenu="pocketMenu"
    :onSection="onSection"
    @close="close = true"
  ></popMenu>
</template>

<script setup lang="ts">
import popMenu from "@/components/ui/form/Menu/popMenu.vue";
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { usePocketStore } from "@/features/create/store/pocketStore";
import { useCreateWork } from "@/features/create/composables/useCreateWork";
import { useCreateStore } from "../../store/createStore";
const createWork = useCreateWork();
const close = ref(true);
const createStore = useCreateStore();
const pocketStore = usePocketStore();
const { getOpenMenuPocket } = storeToRefs(pocketStore);
watch(getOpenMenuPocket, (newValue) => {
  //console.log("getOpemMenuPocket", newValue);
  if (newValue.id.length != 0) {
    close.value = false;
  }
});

const pocketMenu = ref([
  { id: "delete", name: "削除" },
  { id: "save", name: "保存" },
  { id: "reName", name: "名前を変更" },
]);

const onSection = (value: { id: string; name: string }) => {
  //console.log("value", value);
  menuAction(value.id);
};

const menuAction = (id: string) => {
  const this_pocket = getOpenMenuPocket.value;
  switch (id) {
    case "delete":
      //console.log("delete");
      createWork.pocketLogicalDelete({
        caseId: this_pocket.caseId,
        pocketId: this_pocket.id,
        type: "push",
      });
      break;
    case "save":
      createWork.copyPocket(this_pocket.caseId, this_pocket.id);
      break;
    case "reName":
      pocketStore.reNamePocketSetter(
        {
          caseId: this_pocket.caseId,
          id: this_pocket.id,
        },
        createStore.previewCase[this_pocket.caseId].pockets[this_pocket.id]
          .name,
      );
      break;
    default:
      break;
  }
  pocketStore.setOpenMenuPocket({ id: "", caseId: "" });
};
</script>
