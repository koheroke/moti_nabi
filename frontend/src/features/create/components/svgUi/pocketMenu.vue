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
import type { Pocket } from "../../type/casetype";
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
  { id: "upIndex", name: "一段上に" },
  { id: "downIndex", name: "一段下に" },
]);

const onSection = (value: { id: string; name: string }) => {
  //console.log("value", value);
  menuAction(value.id);
};

const getPriority = (caseId: string, pocketid: string, addIndex: number) => {
  const sortPockets = Object.values(
    createStore.previewCase[caseId].pockets,
  ).sort((a, b) => a.priority - b.priority);
  console.log("sortPockets", sortPockets);

  const index = sortPockets.findIndex((pocket) => pocket.id === pocketid);
  console.log("index", index);
  console.log("sortPockets", sortPockets.length);
  console.log("sortPockets", sortPockets[index + addIndex].priority);

  const this_priority =
    index == sortPockets.length
      ? index
      : sortPockets[index + addIndex].priority;
  console.log("this_priority", this_priority);
  return this_priority;
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
    case "upIndex":
      {
        const priority = getPriority(this_pocket.caseId, this_pocket.id, 1);
        const this_priority = getPriority(
          this_pocket.caseId,
          this_pocket.id,
          0,
        );
        createWork.provisionaChangePriorityPocket(
          this_pocket.caseId,
          this_pocket.id,
          priority + 1,
        );
        createWork.confirmedChangePriorityPocket(
          this_pocket.caseId,
          this_pocket.id,
          priority + 1,
          this_priority,
        );
      }
      break;
    case "downIndex":
      {
        const priority = getPriority(this_pocket.caseId, this_pocket.id, -1);
        const this_priority = getPriority(
          this_pocket.caseId,
          this_pocket.id,
          0,
        );
        createWork.provisionaChangePriorityPocket(
          this_pocket.caseId,
          this_pocket.id,
          priority - 1,
        );
        createWork.confirmedChangePriorityPocket(
          this_pocket.caseId,
          this_pocket.id,
          priority - 1,
          this_priority,
        );
      }
      break;
    default:
      break;
  }
  pocketStore.setOpenMenuPocket({ id: "", caseId: "" });
};
</script>
