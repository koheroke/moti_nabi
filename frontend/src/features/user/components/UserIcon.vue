<template>
  <img :src="testThumbnailUrl" class="icon" @click="onUserIcon" />
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps<{
  userid: number;
}>();
const testThumbnailUrl = "https://picsum.photos/400/300";
const onUserIcon = () => {
  router.push({
    name: "user",
    params: {
      userId: props.userid,
    },
    query: {
      edit: "true",
    },
  });
};
</script>
<style scoped>
.icon {
  width: 24px;
  height: 24px;
  border-radius: 100%;
}
</style>
