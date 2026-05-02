<template>
  <HomeWorksSection
    :works="visibleWorks"
    :onMoreClick="onMoreClick"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useMyWorks } from "../composables/MyWorks";
const { visibleWorks, more } = useMyWorks();
const onMoreClick = () => {
  more();
};
</script>
