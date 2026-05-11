<template>
  <div class="page">
    <header class="header">
      <DetailTopbar :title="workDetail?.title"></DetailTopbar>
    </header>
    <section class="container">
      <div class="right">
        <viewTopBar
          :tags="workDetail?.tags"
          :likes="workDetail?.likes"
          :commits="workDetail?.commits"
          style="margin-bottom: 10px"
        ></viewTopBar>
        <viewWork></viewWork>
      </div>
      <div class="left">
        <About :about="workDetail?.about"></About>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import viewWork from "@/features/workDetail/components/ViewWork.vue";
import DetailTopbar from "@/features/workDetail/components/DetailTopbar.vue";
import About from "@/features/workDetail/components/About.vue";
import viewTopBar from "@/features/workDetail/components/ViewTopBar.vue";
import { fetchWorkDetail } from "./workDetail";
import { onMounted, ref } from "vue";
import { type WorkDetail } from "./workDetailType";
const workDetail = ref<WorkDetail | null>(null);
onMounted(async () => {
  workDetail.value = await fetchWorkDetail();
});
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.container .right {
  width: 60%;
  padding: 20px;
  margin-left: auto;
}
.container .left {
  width: 40%;
  margin-right: auto;
  padding: 20px;
}
.container {
  display: flex;
  width: 100%;
  height: auto;
}
.header {
  width: 100%;
}
</style>
