<template>
  <div
    class="overlay"
    @click.self="$emit('close')"
    @drop="onDrop"
    @dragover.prevent="handleDrop"
  >
    <div class="modal">
      <header class="header">
        <h2 style="color: white; font-weight: 800; text-align: center">
          {{ pocket.name }}
        </h2>
        <button style="margin-left: auto" @click="$emit('close')">×</button>
      </header>
      <div class="drop-area">
        <p
          v-if="pocket.items.length === 0"
          style="color: blue; font-size: 12px; text-align: center"
        >
          ここに持ち物をドラッグ
        </p>
        <div v-for="item in pocket.items" :key="item.id" class="item-card">
          {{ item.icon }} {{ item.name }} ×{{ item.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useItemListWork } from "../composables/itemList";
const ttemListWork = useItemListWork();
const onDrop = (event: DragEvent) => {
  const draggedId = event.dataTransfer?.getData("itemId");
  if (!draggedId) return;
  const item = ttemListWork.searchId(draggedId);
  props.pocket.items.push(item[0]);
};
const handleDrop = () => {};

const props = defineProps<{
  pocket: {
    id: string;
    name: string;
    items: any[];
  };
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>
<style lang="css" scoped>
.drop-area {
  padding-top: 10px;
  border-radius: 10px;
}
.overlay {
  border: 1px solid rgba(0, 0, 0, 0.151);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  text-wrap: unset;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
}
.header {
  display: flex;
  background-color: #3b82f6;
  align-items: center;
  border-radius: 10px;
  padding: 7px;
}
</style>
