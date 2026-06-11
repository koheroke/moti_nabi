<script setup lang="ts">
import { ref } from "vue";
import type { ParseSearchQuery } from "@/features/gallery/type";
import GalleryToolbar from "@/features/gallery/components/GalleryToolbar.vue";
import GalleryWorksSection from "@/features/gallery/components/GalleryWorksSection.vue";
import { type SortType } from "@/features/gallery/type";

const searchQuery = ref<ParseSearchQuery>({
  tag: [],
  word: "",
});

const sortType = ref<SortType>("latest");

const onUpdateSearch = (value: ParseSearchQuery) => {
  searchQuery.value = value;
};
const onUpdateSort = (value: SortType) => {
  sortType.value = value;
};
</script>

<template>
  <div class="page">
    <section class="toolbar">
      <GalleryToolbar
        @update:search="onUpdateSearch"
        @update:sort="onUpdateSort"
        class="gallery-toolbar"
      />
    </section>

    <GalleryWorksSection :search="searchQuery" :sort-type="sortType" />
  </div>
</template>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.hero {
  padding: 10px 16px;
  text-align: center;
}
.hero h2 {
  font-size: 35px;
  font-weight: 600;
}

.hero p {
  font-size: 15px;
  font-weight: 400;
  color: rgb(110, 108, 108);
}
.toolbar {
  margin-top: 30px;
  width: 90%;
}
</style>
