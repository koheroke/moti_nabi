<template></template>
<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user/userStore";
const router = useRouter();
const session = useSession();
const userStore = useUserStore();
onMounted(async () => {
  const token = await session.login();
  if (!token.email) {
    router.push("/login");
    return;
  }
  userStore.login(token, "");
  router.push("/home");
});
</script>
