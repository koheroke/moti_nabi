<template>
  <div class="item-bar">
    <section class="list left">
      <section class="top">
        <div
          style="
            color: white;
            font-size: 20px;
            padding-bottom: 12px;
            font-weight: 500;
          "
        >
          {{ "持ち物を検索" }}
        </div>
        <itemSearch class="search"></itemSearch>
      </section>
      <filteredItems
        v-model:index="index"
        :categorys="categories"
      ></filteredItems>
    </section>
    <section class="list right">
      <div class="title">{{ "持ち物一覧" }}</div>
      <addItem
        :categories="categories"
        v-model:add-item="returnAddItem"
      ></addItem>

      <ItemList></ItemList>
    </section>
  </div>
</template>
<script setup lang="ts">
import ItemList from "./components/ItemList.vue";
import itemSearch from "./components/itemSearch.vue";
import filteredItems from "./components/filteredItems.vue";
import { ref, watch, onMounted } from "vue";
// import { useItemListWork } from "../../composables/itemList";
import { categories } from "../../../driver/itemListDriver";
import addItem from "./components/addItem.vue";
import { type addItemType } from "../../../type/itemType";

// const itemListWork = useItemListWork();
const returnAddItem = ref<addItemType | null>(null);
const index = ref(0);
onMounted(async () => {
  watch(
    () => returnAddItem.value?.id,
    () => {
      if (!returnAddItem.value) return;
      // itemListWork.addItem(returnAddItem.value);
      returnAddItem.value = null;
    },
  );
});
</script>
<style lang="css" scoped>
.item-bar {
  display: flex;
  width: 460px;
  height: 100%;
}
.title {
  padding-top: 5px;
  font-size: 20px;
  font-weight: 500;
}
.top {
  background: #3b82f6;
  border: 1px solid #e0e0e067;
  padding: 5px;
  border-radius: 10px;
}

.create-button {
  transition: transform box-shadow 0.1s ease-out;
}
.create-button:hover {
  transform: translateY(-2%);
  box-shadow: 0 4px 12px rgba(172, 194, 201, 0.904);
}
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.right {
  width: 50%;
  padding-left: 15px;
}
.left {
  border-right: 1px solid rgba(0, 0, 0, 0.097);
  border-radius: 10px;
  width: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
