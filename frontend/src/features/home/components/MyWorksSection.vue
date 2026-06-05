<template>
  <HomeWorksSection
    :works="visibleItems"
    :onMoreClick="more"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useUserAuthStore } from "@/store/user/userAuthStore.ts";
import { useIncrementalList } from "@/composables/array/useIncrementalList.ts";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore.ts";
const workPackageStore = useWorkPackageStore();
const userAuthstore = useUserAuthStore();
import { storeToRefs } from "pinia";
const { userWorkPackageStoreGetter } = storeToRefs(workPackageStore);

const { visibleItems, more } = useIncrementalList(
  userWorkPackageStoreGetter,
  20,
);

const props = defineProps<{
  userId: string;
}>();
</script>
