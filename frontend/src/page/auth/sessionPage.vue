<template></template>

<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/user/userIconStore";
import { useTutorialStore } from "@/features/tutorial/store/tutorial";

const tutorialStore = useTutorialStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const session = useSession();
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthStore = useUserAuthStore();

onMounted(async () => {
  const res = await session.getSessionToken();
  console.log("session", res);
  if (!res) {
    await router.replace("/login");
    return;
  }

  const {
    userId,
    iconUrl,
    authData,
    secoundfaEnabled,
    tutorialProgress,
    name,
  } = res;
  console.log("authData", authData);

  userAuthStore.login(userId, authData.email);
  console.log("userAuthStore", userAuthStore.isAuthenticatedGetter);

  userStore.setUserInfo({
    userId,
    iconUrl,
    name,
  });

  tutorialStore.tutorialProgressSetter(tutorialProgress);

  if (secoundfaEnabled) {
    userAuthStore.set2fa();
  }

  const redirect =
    typeof route.query.redirect === "string" ? route.query.redirect : "/home";

  router.push(redirect);
});
</script>
