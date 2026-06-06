<template>
  <div class="page">
    <header class="top">
      <h1>motinabi</h1>
      <p @click="onLogout" class="logout-button">ログアウト</p>
      <UserIcon
        :thumbnailUrl="userIconInfo.iconUrl"
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
        作りかけの持ち物リストの画像をぼやけさせて写す
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
import { ref, onMounted } from "vue";
import { useUserStore, type UserInfo } from "@/store/user/userIconStore";
const userStore = useUserStore();
const userIconInfo = ref<UserInfo>({
  userId: "",
  iconUrl: "",
  name: "",
});
const router = useRouter();
const workPackageStore = useWorkPackageStore();

const goCreate = () => {
  workPackageStore.selectWorkPackage("");
  router.push("/create");
};
onMounted(() => {
  const id = userStore.getMyuserId;
  userIconInfo.value = userStore.getUserInfo(id);
  console.log("userIconInfo", userStore.getUserInfo(id), id);
});

import { useLogout } from "@/features/auth/composables/useLogout";
const onLogout = async () => {
  const res = await useLogout();
  if (res == "success") {
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
</style>
