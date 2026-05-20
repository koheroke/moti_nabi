<template>
  <div
    class="overlay"
    @click.self="$emit('close')"
    @drop="onDrop"
    @dragover.prevent="handleDrop"
  >
    <div class="modal">
      <header class="header">
        <div @click="$emit('close')" class="close-button">
          <X :size="25" fill="#686868"></X>
        </div>
        <h2 style="color: black; font-weight: 00">
          {{ pocket.name }}
        </h2>
      </header>
      <div class="drop-area">
        <p
          v-if="pocket.items.length === 0"
          style="font-size: 12px; text-align: center"
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
import { X } from "lucide-vue-next";
import { UseCreateWork, type addItemToken } from "../composables/useCreateWork";

const createWork = UseCreateWork();

const onDrop = (event: DragEvent) => {
  const draggedId = event.dataTransfer?.getData("itemId");
  if (!draggedId) return;
  const addItemToken: addItemToken = {
    itemId: draggedId,
    poketId: props.pocket.id,
  };
  createWork.addItemToPreview(addItemToken);
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
  border: 3px dotted #94a3b8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 400px;
  text-wrap: unset;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
.close-button {
  margin-left: auto;
  padding-right: 5px;
}

.item-card {
  background-color: rgb(22, 100, 152);
  color: white;
  text-align: center;
  margin: 10px;
  padding: 8px 5px;
  border-radius: 10px;
  font-weight: 600;
}
</style>
