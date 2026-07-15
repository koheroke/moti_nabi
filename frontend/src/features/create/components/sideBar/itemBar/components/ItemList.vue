<template>
  <div class="itemList">
    <ItemCard
      v-for="(item, index) in filteredListItem"
      :key="item.id"
      :item="item"
      :data-tutorial="`sidebar-items-${index}`"
    />
  </div>
</template>
<script setup lang="ts">
import ItemCard from "./itemCard.vue";
import { useCreateStore } from "../../../../store/createStore";
import { storeToRefs } from "pinia";
const createStore = useCreateStore();

const { filteredListItem } = storeToRefs(createStore);
</script>
<style scoped>
.itemList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
