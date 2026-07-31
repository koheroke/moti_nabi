<template>
  <div>
    <DotLottieVue
      class="like_style"
      src="/lottie/delete.json"
      ref="playerRef"
      :autoplay="false"
      :loop="false"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      @click="
        confirmationStore.open({
          text: '作品を削除しますか',
          onfunction: deleteWork,
          show: true,
        })
      "
      @click.stop
    />
  </div>
</template>

<script setup lang="ts">
import { useConfirmationStore } from "@/store/feedback/confirmationStore";
import { ref, onMounted, watch } from "vue";
import { DotLottieVue, type DotLottie } from "@lottiefiles/dotlottie-vue";
import { useWork } from "../composables/work";
import { useWorkPackageStore } from "../store/workPackageStore";
const workPackageStore = useWorkPackageStore();
const confirmationStore = useConfirmationStore();
const work = useWork();
const playerRef = ref<any>(null);
const isHover = ref(false);
let dotLottie: DotLottie | null = null;
onMounted(() => {
  dotLottie = playerRef.value?.getDotLottieInstance?.();
  if (!dotLottie) return;
  dotLottie.addEventListener("load", () => {
    state();
  });
});

const props = defineProps<{
  workId: string;
}>();

const deleteWork = async () => {
  console.log("props", props.workId);
  if (!props.workId) return;
  const res = await work.deleteWork(props.workId);
  if (res.success == true) {
    workPackageStore.deleteWork(props.workId);
  }
};

watch(
  () => isHover.value,
  (newHover) => {
    if (newHover) {
      stateHover();
    } else {
      mouseOut();
    }
  },
);

const mouseOut = () => {
  play();
};
const play = () => {
  if (!dotLottie) return;
  dotLottie.stop();
  dotLottie.setSegment(40, 106);
  dotLottie.setFrame(40);

  dotLottie?.play();
};

const state = () => {
  if (!dotLottie) return;
  dotLottie.setFrame(50);
  dotLottie.stop();
};

const stateHover = () => {
  if (!dotLottie) return;
  dotLottie.setFrame(20);
  dotLottie.stop();
};
</script>

<style scoped>
.like_style {
  aspect-ratio: 1 / 1;
  height: 100%;
  transform: scale(150%);
}
.window {
  z-index: 200;
}
</style>
