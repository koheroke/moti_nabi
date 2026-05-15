<script setup lang="ts">
import { useSession } from "@/features/auth/composables/session";
import { onMounted } from "vue";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useUserStore } from "@/store/user/userStore";
const userStore = useUserStore();
const alertStore = useAlertStore();
const session = useSession();
onMounted(async () => {
  const user = await session.login();
  if (!user.email) {
    alertStore.showAlert("ログインに失敗しました", true);
    return;
  }
  alertStore.showAlert("ログインしました");
  userStore.login(user, "");
});
</script>

<template>
  <div>Google Login...</div>
</template>
