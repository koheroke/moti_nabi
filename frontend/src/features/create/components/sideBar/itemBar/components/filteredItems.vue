<template>
  <div class="filteredItems">
    <section class="category-open">
      <section class="category-info">
        {{ "カテゴリーで絞り込む" }}
      </section>
      <BaseButton @click="onCategory(props.categorys[props.index].id)">
        <section class="category-open-button">
          <div>{{ props.categorys[props.index].name }}</div>
          <div>{{ props.categorys[props.index].icon }}</div>
        </section>
      </BaseButton>
    </section>
    <section class="category-list">
      <div v-for="category in props.categorys" :key="category.id">
        <BaseButton
          @click="onCategory(category.id)"
          variant="ghost"
          class="category-item"
        >
          <section class="category-item">
            <div>{{ category.name }}</div>
            <div>{{ category.icon }}</div>
          </section>
        </BaseButton>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { Category, CategoryId } from "@/features/create/type/itemType";
import { useCreateStore } from "../../../../store/createStore";
const createStore = useCreateStore();

const props = defineProps<{
  categorys: Category[];
  index: number;
}>();
const onCategory = (categoryId: CategoryId) => {
  const ids = props.categorys.map((item) => item.id);
  createStore.setCategory(categoryId);
  const index = ids.indexOf(categoryId);
  emit("update:index", index);
};

const emit = defineEmits(["update:index"]);
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
</script>
<style lang="css" scoped>
.category-item {
  display: flex;
  text-wrap: unset;
  align-items: center;
  gap: 10px;
  width: 100%;
  transition: transform 0.1s;
}
.category-open-button {
  display: flex;
  text-wrap: unset;
  align-items: center;
  width: 100%;
}
.category-open {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
}
.category-item:hover {
  transform: translateX(3%);
  color: white;
  background: #3b82f6;
}

.category-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
}
.filteredItems {
  flex-direction: column;
  display: flex;
  gap: 10px;
}
.category-info {
  font-size: 10px;
  border: 1px solid rgba(0, 0, 0, 0.347);
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px;
}
</style>
