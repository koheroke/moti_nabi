<template></template>
<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useUserStore } from "@/store/user/userIconStore";
const userStore = useUserStore();
const router = useRouter();
const session = useSession();
const userAuthstore = useUserAuthStore();
onMounted(async () => {
  const token = await session.getSessionToken();
  if (!token) {
    router.push("/login");
    return;
  }
  console.log("token", token);
  const userData = await session.verificationSessionToken(token);
  console.log("userData", userData);
  if (!userData) {
    router.push("/login");
    return;
  }
  const { userId, userIconData, authData } = userData;
  console.log("userId", userId);
  console.log("userIconData", userIconData);
  console.log("authData", authData);
  userAuthstore.login(userId, authData.email, token);
  userStore.setUserInfo({ userId: userId, ...userIconData });
  userStore.setMyuserId(userId);
  router.push("/home");
});
</script>
