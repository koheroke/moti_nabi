<template>
  <div class="itemList">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
<script setup lang="ts">
import ItemCard from "./itemCard.vue";
import type { itemCard } from "@/features/create/type/itemType";
defineProps<{
  items: Record<string, itemCard> | null;
}>();
</script>
<style scoped>
.itemList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
