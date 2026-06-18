<template>
  <div class="filteredItems">
    <h2>カテゴリーで絞り込む</h2>

    <section class="category-list">
      <div v-for="category in props.categorys" :key="category.id">
        <BaseButton
          @click="onCategory(category.id)"
          variant="ghost"
          class="category-item"
          :class="{ selectItem: category.id === currentCategory?.id }"
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
import type { Category, CategoryId } from "@/features/create/type/categoryType";
import { useCreateStore } from "../../../../store/createStore";
import { computed } from "vue";
const createStore = useCreateStore();

const props = defineProps<{
  categorys: Category[] | undefined;
  index: number;
}>();

const currentCategory = computed(() => {
  return props.categorys?.[props.index];
});
const onCategory = (categoryId: CategoryId) => {
  const ids = props.categorys?.map((item) => item.id);
  createStore.setCategory(categoryId);
  const index = ids?.indexOf(categoryId);
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

.category-item:hover {
  transform: translateX(3%);
  color: white;
  background: #5b96f6;
}
.selectItem {
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

h2 {
  margin-top: 2px;
  font-size: 16px;
  width: 100%;
  font-weight: 500;
}
</style>
