<template>
  <HomeWorksSection
    :works="visibleWorks"
    :onMoreClick="onMoreClick"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useMyWorks } from "../composables/MyWorks";
import { useUserStore } from "@/store/user/userStore.ts";
const userStore = useUserStore();

const step = 5;
const { visibleWorks, more } = useMyWorks(step, userStore.userId);
const onMoreClick = () => {
  more();
};
</script>
