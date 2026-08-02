<template>
  <HomeWorksSection
    :works="sortUserWorkPackageStoreGetter"
    :onWorkCard="onWorkCard"
    :onMoreClick="() => {}"
    :publicWork="false"
  ></HomeWorksSection>
</template>

<script setup lang="ts">
import HomeWorksSection from "./HomeWorksSection.vue";
import { useUserAuthStore } from "@/store/user/userAuthStore.ts";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore.ts";
import { onMounted } from "vue";
const workPackageStore = useWorkPackageStore();
const userAuthstore = useUserAuthStore();
import { useWork } from "@/features/work/composables/work.ts";
const getWorkPackages = useWork();
import { storeToRefs } from "pinia";

const { sortUserWorkPackageStoreGetter } = storeToRefs(workPackageStore);
import { useRouter } from "vue-router";
const router = useRouter();

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
