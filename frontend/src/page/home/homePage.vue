<template>
  <div class="page">
    <header class="top">
      <h1>motinabi</h1>
      <p @click="onLogout" class="logout-button">ログアウト</p>
      <UserIcon
        :thumbnailJson="userIconInfo.iconUrl"
        :userid="userIconInfo.userId"
        size="large"
      ></UserIcon>
    </header>
    <body class="body">
      <section class="container">
        <section class="hero">
          <h1>持ち物リストを作ろう</h1>
          <p>かんたんに作成・共有</p>
          <BaseButton @click="goCreate">＋ 新しく作る</BaseButton>
        </section>
      </section>
      <section class="container">
        <h2 class="title">あなたの作品</h2>
        <MyWorksSection :userId="userIconInfo.userId" class="content" />
      </section>

      <section class="container">
        <h2 class="title">続きから編集</h2>
        <div class="thumbnail" @click="onEdit">
          <div class="coverDiv"></div>
          <Thumbnail
            :scale="0.8"
            :thumbnailJson="userWorkPackageStoreGetter[0]?.thumbnailJson"
          ></Thumbnail>
        </div>
      </section>

      <section class="container">
        <h2 class="title">みんなの作品</h2>
        <GalleryWorksSection class="content" />
      </section>
    </body>
  </div>
</template>
<script setup lang="ts">
import GalleryWorksSection from "@features/home/components/GalleryWorksSection.vue";
import MyWorksSection from "@/features/home/components/MyWorksSection.vue";
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { useRouter } from "vue-router";
import UserIcon from "@/features/profile/components/UserIcon.vue";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useUserStore, type UserInfo } from "@/store/user/userIconStore";
import Thumbnail from "@/features/create/components/Thumbnail.vue";
const workPackageStore = useWorkPackageStore();
const { userWorkPackageStoreGetter } = storeToRefs(workPackageStore);

window.scrollTo({
  top: 0,
  behavior: "smooth", // アニメーション付き
});
const userAuthStore = useUserAuthStore();
const userStore = useUserStore();
const { getUserInfo } = storeToRefs(userStore);

const userIconInfo = ref<UserInfo>({
  userId: "",
  iconUrl: "",
  name: "",
});
const router = useRouter();

const onEdit = () => {
  workPackageStore.selectedPackageIdStore(
    userWorkPackageStoreGetter.value[0]?.id,
  );
  router?.push("create");
};

const goCreate = () => {
  workPackageStore.selectedPackageIdStore("");
  router.push("/create");
};

watch(
  getUserInfo,
  (profile) => {
    if (!profile) return;
    const user = userStore.getUserInfo(userAuthStore.userIdGetter);
    userIconInfo.value = {
      userId: user.userId,
      iconUrl: user.iconUrl,
      name: user.name,
    };
  },
  { immediate: true },
);

import { useLogout } from "@/features/auth/composables/useLogout";
const onLogout = async () => {
  const res = await useLogout();
  if (res == "success") {
    userAuthStore.logout();
    router?.push("/login");
  }
};
</script>
<style lang="css" scoped>
.hero {
  padding: 48px 16px;
}

.hero h1 {
  font-size: 50px;
  font-weight: bold;
}

.hero h1 {
  font-size: 50px;
  font-weight: bold;
}
.container {
  display: grid;
  width: 80vw;
}

.content {
  overflow-x: auto;
  width: 100%;
}
.title {
  margin-right: auto;
  font-size: 18px;
  font-weight: bold;
}

.top {
  padding: 5px 30px;
  background: #fafafa;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.top h1 {
  font-size: 50px;
  font-weight: bold;
  margin-right: auto;
}

.hero p {
  color: #373636;
  margin-bottom: 25px;
}
.c-button--primary {
  width: 300px;
}

.body {
  display: grid;
  text-align: center;
  justify-content: center;
  gap: 30px;
}
.page {
  padding-bottom: 30px;
}

.logout-button {
  font-size: 15px;
  font-weight: 500;
  margin-right: 20px;
  color: rgb(27, 27, 27);
  cursor: pointer;
  transition: scale 0.2s;
}
.logout-button:hover {
  scale: 1.02;
}
.thumbnail {
  position: relative;
  width: 100%;
  height: 520px;
  border-radius: 10px;
  background-color: rgb(68, 68, 68);
  background-repeat: repeat;
  background-image: radial-gradient(circle, #dfdddd 1px, transparent 1px);
  background-size: 20px 20px;
}
.coverDiv {
  background-color: rgba(255, 255, 255, 0.557);
  transition: background-color 0.3s;
}
.coverDiv:hover {
  background-color: rgba(255, 255, 255, 0.281);
}
</style>
