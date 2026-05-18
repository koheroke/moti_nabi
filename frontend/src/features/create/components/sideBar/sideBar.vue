<template>
  <div class="sideBar">
    <section class="top">
      <div
        style="
          color: white;
          font-size: 20px;
          padding-bottom: 12px;
          font-weight: 700;
        "
      >
        {{ "持ち物を検索" }}
      </div>
      <itemSearch></itemSearch>
    </section>
    <filteredItems
      v-model:index="index"
      :categorys="categories"
    ></filteredItems>
    <div class="title">{{ "一覧" }}</div>
    <ItemList></ItemList>
  </div>
</template>
<script setup lang="ts">
import ItemList from "./components/ItemList.vue";
import itemSearch from "./components/itemSearch.vue";
import filteredItems from "./components/filteredItems.vue";
import { ref } from "vue";
import { categories } from "../../driver/itemListDriver";
const index = ref(1);
</script>
<style lang="css" scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 5px;
}
.title {
  font-weight: 900;
  font-size: 30px;
}
.top {
  background: #3b82f6;
  padding: 10px;
  border-radius: 10px;
}
</style>
