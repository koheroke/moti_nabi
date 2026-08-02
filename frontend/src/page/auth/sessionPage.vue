<template></template>
<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useUserStore } from "@/store/user/userIconStore";
import { useTutorialStore } from "@/features/tutorial/store/tutorial";
const tutorialStore = useTutorialStore();
const userStore = useUserStore();
const router = useRouter();
const session = useSession();
const userAuthstore = useUserAuthStore();
onMounted(async () => {
  const token = await session.getSessionToken();
  if (token == null) {
    router.push("/login");
    return;
  }

  const userData = await session.verificationSessionToken(token);
  if (userData == false) {
    router.push("/login");
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
  console.log("tutorialProgress", tutorialProgress);
  userAuthstore.login(userId, authData.email, token);
  userStore.setUserInfo({
    userId: userId,
    iconUrl: iconUrl,
    name: name,
  });

  tutorialStore.tutorialProgressSetter(tutorialProgress);
  if (secoundfaEnabled == true) {
    userAuthstore.set2fa();
  }
  router.push("/home");
});
</script>
