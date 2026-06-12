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
import { onMounted } from "vue";
const workPackageStore = useWorkPackageStore();
const userAuthstore = useUserAuthStore();
import { useWork } from "@/features/work/composables/work.ts";
const getWorkPackages = useWork();
import { storeToRefs } from "pinia";

const { userWorkPackageStoreGetter } = storeToRefs(workPackageStore);
import { useRouter } from "vue-router";
const router = useRouter();
const { visibleItems, more } = useIncrementalList(
  userWorkPackageStoreGetter,
  4,
);
const onWorkCard = (cardId: string) => {
  router?.push("create");
};
onMounted(() => {
  getWorkPackages.getUserworkPackages(userAuthstore.userIdGetter);
});

const props = defineProps<{
  userId: string;
}>();
</script>
