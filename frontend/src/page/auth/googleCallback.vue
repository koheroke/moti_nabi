<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useAlertStore } from "@/store/feedback/alertStore";
const alertStore = useAlertStore();
const router = useRouter();
const fall = () => {
  router.push("/login");
  alertStore.showAlert("ログインに失敗しました", true);
};
onMounted(async () => {
  const route = useRoute();
  const res = route.query.error;
  console.log("error", res);
  if (!res) {
    fall();
    return;
  }
  if (res == "nonerror") {
    router.push("/session");
    return;
  }
  fall();
});
</script>
