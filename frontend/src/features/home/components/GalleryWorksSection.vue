<template>
  <HomeWorksSection
    :works="works"
    :onMoreClick="onMoreClick"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useWorks } from "../composables/Works";
import { useRouter } from "vue-router";
const router = useRouter();

const { works } = useWorks();
const onMoreClick = () => {
  router.push("/gallery");
};
</script>
