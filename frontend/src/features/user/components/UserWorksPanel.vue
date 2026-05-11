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
const step = 20;
const { visibleWorks, more } = UserWorks(step);
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
