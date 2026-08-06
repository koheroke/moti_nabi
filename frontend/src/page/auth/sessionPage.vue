<template></template>

<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useUserStore } from "@/store/user/userIconStore";
import { useTutorialStore } from "@/features/tutorial/store/tutorial";

const tutorialStore = useTutorialStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const session = useSession();
const userAuthStore = useUserAuthStore();

onMounted(async () => {
  const token = await session.getSessionToken();

  if (!token) {
    await router.replace("/login");
    return;
  }

  const userData = await session.verificationSessionToken(token);

  if (!userData) {
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
  } = userData;

  userAuthStore.login(userId, authData.email, token);

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
