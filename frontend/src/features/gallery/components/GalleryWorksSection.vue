<template>
  <div class="worksSection">
    <WorksSection
      :works="GalleryWorksGetter"
      :wrap="true"
      :onMoreClick="onMoreClick"
      :onWorkCard="onWorkCard"
      :publicWork="true"
    >
      ></WorksSection
    >
  </div>
</template>
<script setup lang="ts">
import WorksSection from "@/features/work/components/WorksSection.vue";
import { useGalleryWorksStore } from "../composables/useGalleryWorksStore";
import type { ParseSearchQuery, SortType } from "../type";
import { watch } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
const router = useRouter();
const step = 10;
const galleryWorksStore = useGalleryWorksStore();
const { GalleryWorksGetter } = storeToRefs(galleryWorksStore);
galleryWorksStore.setStep(step);

const props = defineProps<{
  search: ParseSearchQuery;
  sortType: SortType;
}>();

watch(
  () => props.sortType,
  (newValue) => {
    galleryWorksStore.GalleryWorksSort(newValue);
  },
);
const onWorkCard = (cardId: string) => {
  router?.push({ path: "/detail", query: { cardId: cardId } });
};

const onMoreClick = () => {
  galleryWorksStore.more();
};
</script>
<style lang="css">
.worksSection {
  min-width: auto;
  min-height: auto;
}
</style>
