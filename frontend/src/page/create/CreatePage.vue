<template>
  <div class="page">
    <header class="header">
      <TopBar title="" />
    </header>

    <main class="main">
      <div class="sidebar-area">
        <sideBar />
      </div>
      <section class="preview-area">
        <Preview type="hard" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/features/create/components/TopBar.vue";
import Preview from "@/features/create/components/Preview.vue";
import sideBar from "@/features/create/components/sideBar/sideBar.vue";
import { useCreateWork } from "@/features/create/composables/useCreateWork";
import { onMounted, onUnmounted } from "vue";
import { useCreateStore } from "@/features/create/store/createStore";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { onBeforeRouteLeave } from "vue-router";
import { useApplyCreateAction } from "@/features/create/composables/applyCreateAction";
import { useRouter } from "vue-router";
import { useAlterationLogStore } from "@/features/create/store/useAlterationLogStore";
import { useTutorial } from "@/features/tutorial/composables/tutorial";
import { useDialogStore } from "@/store/feedback/dialogStore";
const dialogStore = useDialogStore();
const tutorial = useTutorial();
const alterationLog = useAlterationLogStore();
const router = useRouter();
const applyCreateAction = useApplyCreateAction();
const createStore = useCreateStore();
const { leaveGetter } = storeToRefs(createStore);
const createWork = useCreateWork();
createStore.setleave(false);

let before = false;
let firstTimeCreate = true;

onMounted(async () => {
  createWork.setCreatePageWork();
  if (firstTimeCreate) {
    // dialogStore.showDialog(
    //   "チュートリアルを行いますか",
    //   "チュートリアルはチュートリアルボタンからいつでも受けることができます",
    //   () => {
    //     tutorial.start("create");
    //   },
    // );
  }
  before = true;
});
onUnmounted(async () => {
  alterationLog.resetStack();
});

watch(leaveGetter, (value) => {
  if (value == true) {
    router.push("/home");
    createStore.setleave(false);
  }
});

onBeforeRouteLeave((to) => {
  if (before) {
    if (to.name !== "publishReady") {
      before = false;
      const res = createStore.leaveWork();
    }
    return true;
  }
});
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.header {
  flex-shrink: 0;
}

.main {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.sidebar-area {
  flex-shrink: 0;
  height: 100%;
  border-right: 1px solid rgba(4, 3, 3, 0.101);
  box-sizing: border-box;
  overflow: hidden;
}

.preview-area {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  position: relative;
}
</style>
