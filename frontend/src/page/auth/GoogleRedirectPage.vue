<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useUserStore } from "@/store/user/userIconStore";
const userStore = useUserStore();
import { useRouter } from "vue-router";
const router = useRouter();
const userAuthstore = useUserAuthStore();
const session = useSession();
onMounted(async () => {
  const token = await session.getSessionToken();
  if (!token) {
    router.push("/login");
    return;
  }
  console.log("token", token);
  const { userId, authData, userIconData } =
    await session.verificationSessionToken(token);
  if (!userId || !authData) {
    router.push("/login");
    return;
  }
  userAuthstore.login(userId, authData.email, token);
  userStore.setUserInfo({ userId: userId, ...userIconData });
  userStore.setMyuserId(userId);
  router.push("/home");
});
</script>

<template>
  <div>Google Login...</div>
</template>
