<template>
  <div class="UserWorksPanel">
    <GalleryWorksSection
      :works="visibleItems"
      :onMoreClick="more"
    ></GalleryWorksSection>
  </div>
</template>

<script setup lang="ts">
import GalleryWorksSection from "@/features/home/components/GalleryWorksSection.vue";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import { useIncrementalList } from "@/composables/array/useIncrementalList";
import { storeToRefs } from "pinia";

const workPackageStore = useWorkPackageStore();

const { userWorkPackageStoreGetter } = storeToRefs(workPackageStore);

const { visibleItems, more } = useIncrementalList(
  userWorkPackageStoreGetter,
  20,
);

const props = defineProps<{
  userId: string;
}>();
</script>
<style lang="css" scoped>
.UserWorksPanel {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
