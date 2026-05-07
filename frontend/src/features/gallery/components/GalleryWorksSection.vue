<template>
  <div class="worksSection">
    <WorksSection
      :works="visibleWorks"
      :wrap="true"
      :onMoreClick="onMoreClick"
    ></WorksSection>
  </div>
</template>
<script setup lang="ts">
import WorksSection from "@/features/work/components/WorksSection.vue";
import { useGalleryWorks } from "../composables/GalleryWork";
import type { ParseSearchQuery, SortType } from "../type";
import { watch } from "vue";
const step = 10;
const { visibleWorks, more, GalleryWorksSearch, GalleryWorksSort } =
  useGalleryWorks(step);

import { onMounted } from "vue";
onMounted(() => {
  console.log("visibleWorks", visibleWorks.value);
});

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
