<template>
  <div class="UserWorksPanel">
    <GalleryWorksSection
      :works="visibleWorks"
      :onMoreClick="onMoreClick"
    ></GalleryWorksSection>
  </div>
</template>

<script setup lang="ts">
import GalleryWorksSection from "@/features/home/components/GalleryWorksSection.vue";
import { UserWorks } from "../composables/UserWorks";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import { computed } from "vue";
const workPackageStore = useWorkPackageStore();

const workPackage = computed(() => workPackageStore.userWorkPackageStoreGetter);
const step = 20;
const props = defineProps<{
  userId: string;
}>();
const { visibleWorks, more } = UserWorks(step, props.userId);
const onMoreClick = () => {
  more();
};
</script>
<style lang="css" scoped>
.UserWorksPanel {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
