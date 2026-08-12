<template>
  <HomeWorksSection
    :works="visibleItems"
    :onMoreClick="onMoreClick"
    :onWorkCard="onWorkCard"
    :publicWork="true"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useRouter } from "vue-router";
import { useIncrementalList } from "@/composables/array/useIncrementalList.ts";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore.ts";
import { computed, onMounted } from "vue";
import { useWork } from "@/features/work/composables/work.ts";
import { storeToRefs } from "pinia";
const work = useWork();
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
  work.getworkPackages(5);
});

const onWorkCard = (workId: string) => {
  router?.push({ path: "/detail", query: { workId: workId } });
};
</script>
