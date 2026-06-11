<template>
  <div class="topBar">
    <div class="right">
      <h2>{{ createStore.workNameGetter }}</h2>
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
        <div class="wrapper">
          <BaseButton variant="ghost" @click="addMenberShow = !addMenberShow">
            招待
          </BaseButton>

          <addMenber
            v-if="addMenberShow"
            class="popup"
            @close="addMenberShow = false"
          />
        </div>
        <BaseButton
          @click="onpublich"
          :class="{ blockBotton: createStore.roleGetter != 'owner' }"
          >公開</BaseButton
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { CornerUpLeft, CornerUpRight } from "lucide-vue-next";
import UserIcon from "@/features/profile/components/UserIcon.vue";
import { useAlterationLogStore } from "../store/useAlterationLogStore";
import { useCreateStore } from "../store/createStore";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import addMenber from "@/features/create/components/addMenber.vue";
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthStore = useUserAuthStore();
const addMenberShow = ref(false);
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
  if (createStore.roleGetter != "owner") return;
  router.push("/publishReady");
};
onMounted(() => {
  userIconInfo.value = userStore.getUserInfo(userAuthStore.userIdGetter);
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

.wrapper {
  position: relative;
}

.popup {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;
}
</style>
