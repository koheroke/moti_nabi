<template>
  <div class="topBar">
    <div class="left">
      <h2 style="margin-right: 20px">{{ createStore.workNameGetter }}</h2>
      <div style="gap: 10px; display: flex; margin-left: auto">
        <CornerUpLeft @click="back" />
        <CornerUpRight @click="forward" />
      </div>
      <PreviewSearch style="margin-left: 10px; flex: 1"></PreviewSearch>
    </div>
    <div class="right">
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
          <BaseButton
            variant="ghost"
            @click="leaveMenber"
            v-if="createStore.roleGetter != 'owner'"
          >
            脱退
          </BaseButton>
          <BaseButton
            variant="ghost"
            @click="addMenberShow = !addMenberShow"
            v-if="createStore.roleGetter == 'owner'"
          >
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
          >設定</BaseButton
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
import { useCreateApi } from "@/features/create/api/createApi";
const createApi = useCreateApi();
import { useAlertStore } from "@/store/feedback/alertStore";
import { BaseInput } from "@/components/ui/form/BaseInput";
import PreviewSearch from "./PreviewSearch.vue";
const alertStore = useAlertStore();

const userAuthStore = useUserAuthStore();
const addMenberShow = ref(false);
const router = useRouter();
const createStore = useCreateStore();
const alterationLog = useAlterationLogStore();
import { useUserStore, type UserInfo } from "@/store/user/userIconStore";
const userStore = useUserStore();
const searchPreview = ref("");
const userIconInfo = ref<UserInfo>({
  userId: "",
  iconUrl: "",
  name: "",
});
const forward = () => {
  alterationLog.redo();
};
const leaveMenber = async () => {
  if (createStore.roleGetter == "owner") return;
  const res = await createApi.deleteMenber({
    userId: userAuthStore.userIdGetter,
    workId: createStore.workId,
  });
  if (res == "success") {
    createStore.deleteMenber(userAuthStore.userIdGetter);
    router.push("/home");
  } else {
    alertStore.showAlert("ユーザーが存在しません", true);
  }
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
  height: 55px;
  min-height: 40px;
  padding: 0px 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(212, 210, 210);
}
.right {
  display: flex;
  align-items: center;
  min-width: 0;
  width: auto;
  margin-left: 20px;
}

.left {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex: 1;
  min-width: 0;
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
