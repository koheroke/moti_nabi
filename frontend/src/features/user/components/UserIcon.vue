<template>
  <img :src="testThumbnailUrl" class="icon" @click="onUserIcon" :class="size" />
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps<{
  userid: string;
  size: "small" | "medium" | "large";
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
  border-radius: 100%;
  background-color: aliceblue;
}
.small {
  width: 24px;
  height: 24px;
}
.medium {
  width: 34px;
  height: 34px;
}
.large {
  width: 45px;
  height: 45px;
}
</style>
