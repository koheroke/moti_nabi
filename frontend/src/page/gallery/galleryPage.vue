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
    <!-- <section class="container">
      <section class="hero">
        <h1>公開されてる持ち物</h1>
        <p>他の人の持ち物を参考にしよう</p>
      </section>
    </section> -->
    <section class="hero">
      {{ "Search" }}
    </section>
    <GalleryToolbar
      @update:search="onUpdateSearch"
      @update:sort="onUpdateSort"
      class="gallery-toolbar"
    />
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
  font-size: 30px;
  font-weight: 600;
}
</style>
