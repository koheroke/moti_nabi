<template>
  <img :src="iconImage" class="icon" @click="onUserIcon" :class="size" />
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserProfileStore } from "../store/userProfileStore";
import { ref, onMounted } from "vue";

const userProfileStore = useUserProfileStore();
const router = useRouter();
const iconImage = ref<string>();
const props = defineProps<{
  userid: string;
  thumbnailJson: string;
  size: "small" | "medium" | "large";
}>();
onMounted(() => {
  const url = props.thumbnailJson;
  iconImage.value = url === "" ? "/images/user/defaultIcon.png" : url;
});

const onUserIcon = () => {
  userProfileStore.setEditBool(false);
  userProfileStore.setSelectedUserId(props.userid);

  router.push("user");
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
