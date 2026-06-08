<template>
  <div class="item-card">
    <section class="header">
      <div>
        {{ icon.src }}
      </div>
      <div>
        {{ props.item.name }}
      </div>
      <div class="count">
        <CirclePlus class="countIcon" @click="onPlue(1)"></CirclePlus>
        {{ props.item.count }}
        <CircleMinus class="countIcon" @click="onPlue(-1)"></CircleMinus>
      </div>
      <BaseButton class="delete-button" @click="onDelete">削除</BaseButton>
    </section>
    <section
      class="storage innerItems"
      v-if="props.item.isStorage"
      @drop="onDrop"
      @drop.stop
    >
      <div v-for="item in props.item.innerItems" :key="item.id">
        <previewItem
          :item="item"
          :pocketId="props.pocketId"
          :parentItem="props.item.id"
          :caseId="props.caseId"
        />
      </div>
      <p v-if="props.item.isStorage === true" class="drop-text">
        {{ "ここにドロップ" }}
      </p>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { previewItem } from "../type/casetype";
const props = defineProps<{
  item: previewItem;
  pocketId: string;
  parentItem?: string;
  caseId: string;
}>();
import { CirclePlus, CircleMinus } from "lucide-vue-next";
import { UseCreateWork } from "../composables/useCreateWork";
import { BaseButton } from "@/components/ui/form/BaseButton";
import type {
  deletePreviewItemToken,
  addPreviewItemToken,
} from "@/features/create/type/tokens.ts";

import { useCreateStore } from "../store/createStore";
const createStore = useCreateStore();
const createWork = UseCreateWork();
const iconMap = createStore.iconMap;

function onDragStart(event: DragEvent) {
  const token = {
    id: props.item.id,
    popCaseId: props.caseId,
    popPocketId: props.pocketId,
  };
  event.dataTransfer?.setData("id", JSON.stringify(token));
}
const onDrop = (event: DragEvent) => {
  const draggedId = event.dataTransfer?.getData("itemId");
  if (!draggedId) return;
  const addPreviewItemToken = {
    itemId: draggedId,
    pocketId: props.pocketId,
    parentId: props.item.id,
    caseId: props.caseId,
    id: props.item.id,
  };
  createWork.addItemToPreview(addPreviewItemToken);
};

const onPlue = (plue: number) => {
  if (props.item.count + plue >= 99 || props.item.count + plue <= 0) return;
  createWork.addItemCount({
    id: props.item.id,
    pulse: plue,
    pocketId: props.pocketId,
    parentId: props.parentItem ? props.parentItem : undefined,
    caseId: props.caseId,
  });
};

const onDelete = () => {
  const innerItemsToken: addPreviewItemToken[] | undefined = [];
  const items = props.item.innerItems;
  if (items != undefined) {
    const keys = Object.keys(items);
    keys.forEach((item) => {
      if (items[item] == undefined) return;
      innerItemsToken?.push({
        pocketId: props.pocketId,
        caseId: props.caseId,
        parentId: props.item.id,
        itemId: items[item].itemId,
        id: props.item.id,
      });
    });
  }
  const token: deletePreviewItemToken = {
    id: props.item.id,
    pocketId: props.pocketId,
    parentId: props.parentItem ? props.parentItem : undefined,
    itemId: props.item.itemId,
    caseId: props.caseId,
    innnerItemToken: innerItemsToken,
  };
  createWork.deletePreviewItem(token);
};

const icon = iconMap[props.item.iconId] ?? "📦";
</script>
<style lang="css" scoped>
.item-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #3b82f6;
  border-radius: 10px;
  background-color: white;
}

.storage {
  padding: 10px;
  display: flex;
  border-radius: 10px;
  border: 3px dotted #5c5c5d;
  margin: 7px;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
}
.header {
  color: #2563eb;
  padding: 10px 5px;
  font-weight: bold;
  display: flex;
  gap: 10px;
}
.innerItems {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.count {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
}
.countIcon {
  transition: scale 0.1s ease-out;
}
.countIcon:hover {
  transform: scale(1.03);
}
.delete-button {
  background-color: red;
  padding: 2px 5px;
  text-wrap: nowrap;
}
.delete-button:hover {
  background-color: rgba(255, 0, 0, 0.715);
}

.storage p {
  color: #3b82f6;
  font-size: 12px;
}
.drop-text {
  transition: scale 0.2s ease;
}
.drop-text:hover {
  transform: scale(1.02);
}
</style>
