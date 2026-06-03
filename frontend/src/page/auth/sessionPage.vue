<template></template>
<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user/userStore";
import type { loginToken } from "@/features/auth/composables/session";
const router = useRouter();
const session = useSession();
const userStore = useUserStore();
onMounted(async () => {
  const token = await session.login();
  if (!token) {
    router.push("/login");
    return;
  }
  if (token) userStore.login(token as loginToken, "");
  router.push("/home");
});
</script>
