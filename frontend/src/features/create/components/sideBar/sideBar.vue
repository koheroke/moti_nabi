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
    <addItem
      :categories="categories"
      v-model:add-item="returnAddItem"
    ></addItem>

    <ItemList :items="listItem"></ItemList>
  </div>
</template>
<script setup lang="ts">
import ItemList from "./components/ItemList.vue";
import itemSearch from "./components/itemSearch.vue";
import filteredItems from "./components/filteredItems.vue";
import { ref, watch, onMounted } from "vue";
// import { useItemListWork } from "../../composables/itemList";
import { categories } from "../../driver/itemListDriver";
import addItem from "./components/addItem.vue";
import { type addItemType } from "../../type/itemType";
import { useCreateStore } from "../../store/createStore";
import { storeToRefs } from "pinia";

const createStore = useCreateStore();
const { listItem } = storeToRefs(createStore);

// const itemListWork = useItemListWork();
const returnAddItem = ref<addItemType | null>(null);
const index = ref(1);
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
.create-button {
  transition: transform box-shadow 0.1s ease-out;
}
.create-button:hover {
  transform: translateY(-2%);
  box-shadow: 0 4px 12px rgba(172, 194, 201, 0.904);
}
</style>
