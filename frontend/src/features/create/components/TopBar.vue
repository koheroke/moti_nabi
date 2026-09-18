<template>
  <div class="topBar">
    <div class="left">
      <h2 style="margin-right: 20px">{{ createStore.workNameGetter }}</h2>

      <div class="historyButtons historyButtonsLeft">
        <CornerUpLeft @click="back" class="historyArrow" />
        <CornerUpRight @click="forward" class="historyArrow" />
      </div>
      <PreviewSearch style="margin-left: 10px; flex: 1"></PreviewSearch>
    </div>
    <div class="right">
      <div class="historyButtons historyButtonsRight">
        <CornerUpLeft @click="back" class="historyArrow" />
        <CornerUpRight @click="forward" class="historyArrow" />
      </div>
      <CircleQuestionMark
        data-tutorial="start-tutorial-botton"
        @click="startTutorial"
      ></CircleQuestionMark>
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
        data-tutorial="setting-botton"
        :class="{ blockBotton: createStore.roleGetter != 'owner' }"
        >設定</BaseButton
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { CornerUpLeft, CornerUpRight } from "lucide-vue-next";
import { useAlterationLogStore } from "../store/useAlterationLogStore";
import { useCreateStore } from "../store/createStore";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import addMenber from "@/features/create/components/addMenber.vue";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useCreateApi } from "@/features/create/api/createApi";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useTutorial } from "@/features/tutorial/composables/tutorial.ts";
import { CircleQuestionMark } from "lucide-vue-next";
import PreviewSearch from "./PreviewSearch.vue";
import { useUserStore, type UserInfo } from "@/store/user/userIconStore";
const createApi = useCreateApi();
const tutorial = useTutorial();
const alertStore = useAlertStore();
const userAuthStore = useUserAuthStore();
const addMenberShow = ref(false);
const router = useRouter();
const createStore = useCreateStore();
const alterationLog = useAlterationLogStore();
const userStore = useUserStore();
const startTutorial = () => {
  tutorial.start("create");
};
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
  gap: 20px;
}
.right {
  display: flex;
  align-items: center;
  min-width: 0;
  width: auto;
  gap: 10px;
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
.historyButtons {
  gap: 10px;
  display: flex;
  margin-left: auto;
}
.historyButtonsLeft {
  display: flex;
}
.historyButtonsRight {
  display: none;
  margin-left: auto;
}

@media screen and (max-width: 800px) {
  .topBar {
    flex-direction: column;
    min-height: 100px;
    gap: 0px;
  }
  .historyButtonsLeft {
    display: none;
  }
  .historyButtonsRight {
    display: flex;
    margin-right: auto;
  }
  .right {
    min-width: 100%;
  }
  .left {
    min-width: 100%;
  }
}

.historyArrow {
  background-color: white;
  border-radius: 10px;
}
.historyArrow:hover {
  background-color: rgb(241, 240, 240);
}
</style>
