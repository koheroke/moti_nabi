<template>
  <div class="page">
    <section class="container">
      <div class="right">
        <viewTopBar
          :tags="workDetail?.tags"
          :likes="workDetail?.likes"
          :commits="workDetail?.commits"
          style="margin-bottom: 10px"
        ></viewTopBar>
        <Preview class="work-preview"></Preview>
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
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import Preview from "@/features/create/components/Preview.vue";
const createWork = UseCreateWork();

const workDetail = ref<WorkDetail | null>(null);

onMounted(async () => {
  await createWork.load();
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
.work-preview {
  border-radius: 15px;
}
</style>
