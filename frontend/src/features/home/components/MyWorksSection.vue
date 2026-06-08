<template>
  <HomeWorksSection
    :works="visibleItems"
    :onWorkCard="onWorkCard"
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
import { useRouter } from "vue-router";
const router = useRouter();
const { visibleItems, more } = useIncrementalList(
  userWorkPackageStoreGetter,
  20,
);
const onWorkCard = (cardId: string) => {
  router?.push("create");
};

const props = defineProps<{
  userId: string;
}>();
</script>
