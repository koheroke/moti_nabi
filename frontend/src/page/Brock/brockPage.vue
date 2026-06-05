<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useRouter } from "vue-router";

const userAuthstore = useUserAuthStore();
const router = useRouter();

onMounted(() => {
  router.replace(userAuthstore.isTempAuthenticated ? "/" : "/2fa");
});
</script>
