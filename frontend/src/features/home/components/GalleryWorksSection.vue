<template>
  <HomeWorksSection
    :works="visibleItems"
    :onMoreClick="onMoreClick"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useRouter } from "vue-router";
import { useIncrementalList } from "@/composables/array/useIncrementalList.ts";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore.ts";
import { computed } from "vue";
import { useGetWorkPackages } from "@/features/work/composables/work.ts";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserAuthStore } from "@/store/user/userAuthStore.ts";
const userAuthstore = useUserAuthStore();
const getWorkPackages = useGetWorkPackages();
const workPackageStore = useWorkPackageStore();
const { workPackageStoreGetter } = storeToRefs(workPackageStore);
const sortedWorks = computed(() =>
  [...workPackageStoreGetter.value].sort((a, b) => b.likes - a.likes),
);
const { visibleItems, more } = useIncrementalList(sortedWorks, 5);
const router = useRouter();
const onMoreClick = () => {
  router.push("/gallery");
};
onMounted(() => {
  getWorkPackages.getUserworkPackages(userAuthstore.userIdGetter);
});
</script>
