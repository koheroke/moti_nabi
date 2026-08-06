<template></template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
onMounted(() => {
  console.log("onMounted!");
  router.push({
    path: "/session",
    query: {
      redirect: "/home",
    },
  });
});
</script>
