<template>
  <div class="page">
    <header class="top">
      <h1>motinabi</h1>
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
        <p2 class="title">あなたの作品</p2>
        <MyWorksSection class="content"></MyWorksSection>
      </section>
      <section class="container">
        <p2 class="title">続きから編集</p2>
        作りかけの持ち物リストの画像をぼやけさせて写す
      </section>
      <section class="container">
        <p2 class="title">みんなの作品</p2>
        <GalleryWorksSection class="content"></GalleryWorksSection>
      </section>
    </body>
  </div>
</template>
<script setup lang="ts">
import GalleryWorksSection from "@features/home/components/GalleryWorksSection.vue";
import MyWorksSection from "@/features/home/components/MyWorksSection.vue";
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goCreate = () => {
  router.push("/create");
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
</style>
