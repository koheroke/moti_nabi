<template>
  <div class="worksSection">
    <WorksSection
      :works="visibleWorks"
      :wrap="true"
      :onMoreClick="onMoreClick"
      :onWorkCard="onWorkCard"
    >
      ></WorksSection
    >
  </div>
</template>
<script setup lang="ts">
import WorksSection from "@/features/work/components/WorksSection.vue";
import { useGalleryWorks } from "../composables/GalleryWork";
import type { ParseSearchQuery, SortType } from "../type";
import { watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const step = 10;
const { visibleWorks, more, GalleryWorksSearch, GalleryWorksSort } =
  useGalleryWorks(step);
const props = defineProps<{
  search: ParseSearchQuery;
  sortType: SortType;
}>();
watch(
  () => props.search,
  (newValue) => {
    GalleryWorksSearch(newValue);
  },
);

watch(
  () => props.sortType,
  (newValue) => {
    GalleryWorksSort(newValue);
  },
);
const onWorkCard = (cardId: string) => {
  router?.push({ path: "/detail", query: { cardId: cardId } });
};

const onMoreClick = () => {
  more();
};
</script>
<style lang="css">
.worksSection {
  min-width: auto;
  min-height: auto;
}
</style>
