<template>
  <div class="topBar">
    <div class="right">
      <BaseInput v-model="createStore.workNameGetter"></BaseInput>
      <div style="gap: 10px; display: flex; margin-left: auto">
        <CornerUpLeft @click="back" />
        <CornerUpRight @click="forward" />
      </div>
    </div>
    <div class="left">
      <div
        class="buttons"
        style="margin-left: auto; display: flex; align-items: center; gap: 10px"
      >
        <UserIcon
          size="medium"
          userid="a"
          :thumbnailUrl="userIconInfo.iconUrl"
          style="margin-right: 20px"
        ></UserIcon>
        <BaseButton variant="ghost">招待</BaseButton>
        <BaseButton @click="onpublich">公開</BaseButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { CornerUpLeft, CornerUpRight } from "lucide-vue-next";
import UserIcon from "@/features/profile/components/UserIcon.vue";
import { useAlterationLogStore } from "../store/useAlterationLogStore";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { useCreateStore } from "../store/createStore";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
const router = useRouter();
const createStore = useCreateStore();
const alterationLog = useAlterationLogStore();
import { useUserStore, type UserInfo } from "@/store/user/userIconStore";
const userStore = useUserStore();
const userIconInfo = ref<UserInfo>({
  userId: "",
  iconUrl: "",
  name: "",
});
const forward = () => {
  alterationLog.redo();
};
const back = () => {
  alterationLog.undo();
};
const props = defineProps<{
  title: string;
}>();
const onpublich = () => {
  router.push("/publishReady");
};
onMounted(() => {
  const id = userStore.getMyuserId;
  userIconInfo.value = userStore.getUserInfo(id);
});
</script>
<style lang="css" scoped>
.topBar {
  box-sizing: border-box;
  height: 40px;
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(212, 210, 210);
}
.right {
  margin-right: auto;
  display: flex;
  width: 50%;
}
.left {
  margin-left: auto;
  gap: 10px;
  display: flex;
  width: 50%;
}
</style>
