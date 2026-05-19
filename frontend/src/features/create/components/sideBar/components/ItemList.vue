<template>
  <div class="itemList">
    <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
  </div>
</template>
<script setup lang="ts">
import ItemCard from "./itemCard.vue";
import { filteredItems } from "../../../driver/itemListDriver";
</script>
<style scoped>
.itemList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
