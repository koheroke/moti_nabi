<template>
  <HomeWorksSection
    :works="visibleWorks"
    :onMoreClick="onMoreClick"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useMyWorks } from "../composables/MyWorks";
const step = 5;
const { visibleWorks, more } = useMyWorks(step);
const onMoreClick = () => {
  more();
};
</script>
