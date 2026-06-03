<template>
  <HomeWorksSection
    :works="visibleItems"
    :onMoreClick="onMoreClick"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user/userStore.ts";
import { useIncrementalList } from "@/composables/array/useIncrementalList.ts";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore.ts";
import { computed } from "vue";

const workPackageStore = useWorkPackageStore();
const userStore = useUserStore();
import { storeToRefs } from "pinia";
const { workPackageStoreGetter } = storeToRefs(workPackageStore);
const sortedWorks = computed(() =>
  [...workPackageStoreGetter.value].sort((a, b) => b.likes - a.likes),
);
const { visibleItems, more } = useIncrementalList(sortedWorks, 5);
const router = useRouter();
const onMoreClick = () => {
  router.push("/gallery");
};
</script>
