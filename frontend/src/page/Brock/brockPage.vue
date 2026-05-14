<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/store/user/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

onMounted(() => {
  router.replace(userStore.isTempAuthenticated ? "/" : "/2fa");
});
</script>
