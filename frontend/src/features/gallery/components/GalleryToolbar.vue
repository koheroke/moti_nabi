<script setup lang="ts">
import { ref, watch } from "vue";
import { parseSearchQuery } from "../composables/GalleryToolbar";
import type { ParseSearchQuery } from "../type";
import GallerySeatch from "./GallerySearch.vue";
import BaseDropdown from "@/components/ui/form/BaseDropdown/BaseDropdown.vue";
import { type SortType } from "../type";

const emit = defineEmits<{
  (e: "update:search", value: ParseSearchQuery): void;
  (e: "update:sort", value: SortType): void;
}>();
const sortType = ref<SortType>("latest");

const options = [
  { label: "新しい順", value: "latest" },
  { label: "人気順", value: "likes" },
];

const onUpdateSearch = (newSearch: string) => {
  emit("update:search", parseSearchQuery(newSearch));
};

watch(sortType, (newSortType) => {
  emit("update:sort", newSortType);
});
</script>

<template>
  <div class="gallery-toolbar">
    <section class="search-gallery">
      <GallerySeatch @update:modelValue="onUpdateSearch" />
    </section>
    <section class="sort-gallery">
      <BaseDropdown v-model="sortType" :options="options" />
    </section>
  </div>
</template>
<style>
.sort-gallery {
  padding-top: 60px;
  min-width: 90%;
}
.search-gallery {
  width: 100%;
  display: grid;
  place-items: center;
  gap: 8px;
}
.gallery-toolbar {
  width: 100%;
  gap: 13px;
  color: rgb(66, 65, 65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
