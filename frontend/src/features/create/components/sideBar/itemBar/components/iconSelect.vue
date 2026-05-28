<template>
  <div class="window">
    <div class="title" style="text-align: center">
      {{ "アイコンを選択" }}
    </div>
    <div>
      {{ "今選ばれているカテゴリー" + categoryName }}
    </div>
    <section class="icon-area">
      <div v-for="icon in icons">
        <div class="icon" @click="onIcon(icon.id)">
          {{ icon.src }}
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { CategoryId } from "@/features/create/type/categoryType";
import type { Category } from "@/features/create/type/categoryType";
import { computed } from "vue";
import type { iconInfomation } from "@/features/create/type/apiType";
import { useCreateStore } from "../../../../store/createStore";
const createStore = useCreateStore();
const iconMap: Record<string, iconInfomation> = createStore.iconMapGetter;
const categories: Category[] = createStore.categories;

const props = defineProps<{ selectedCategory?: CategoryId }>();

const categoryName = computed(() => {
  return categories.find(
    (categorie: Category) => categorie.id == props.selectedCategory,
  )?.name;
});

const iconArray = Object.entries(iconMap).map(([key, value]) => ({
  id: key,
  ...value,
}));
const icons = computed(() => {
  return iconArray.filter((icon) => icon.category == props.selectedCategory);
});
const emit = defineEmits(["update:iconId", "close"]);
const onIcon = (id: string) => {
  emit("close");
  emit("update:iconId", id);
};
</script>
<style lang="css" scoped>
.window {
  background-color: white;
  position: fixed;
  flex-direction: column;
  height: 400px;
  width: 300px;
  bottom: 0px;
  z-index: 12;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgb(225, 225, 225);
  display: flex;
  justify-content: center;
}
.icon {
  font-size: 40px;
  width: 40px;
  height: 40px;
  text-align: center;
}
.icon-area {
  box-sizing: border-box;
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
</style>
