<template>
  <DotLottieVue
    class="like_style"
    src="/lottie/like.json"
    ref="playerRef"
    :autoplay="false"
    :loop="false"
    @click="onLike"
    @click.stop
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { DotLottieVue, type DotLottie } from "@lottiefiles/dotlottie-vue";
import { useWorkPackageStore } from "../store/workPackageStore";
import { useWork } from "../composables/work";
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthStore = useUserAuthStore();
const work = useWork();
const playerRef = ref<any>(null);
const workPackageStore = useWorkPackageStore();
let set = 0;
const props = defineProps<{
  liked: boolean;
  workId: string;
}>();

let dotLottie: DotLottie | null = null;
onMounted(() => {
  dotLottie = playerRef.value?.getDotLottieInstance?.();
  if (!dotLottie) return;
  dotLottie.addEventListener("load", () => {
    if (props.liked) {
      stateLike();
    } else {
      stateDilike();
    }
  });
});

const onLike = () => {
  if (props.liked) {
    playDislike();
  } else {
    playLike();
  }
  const userId = userAuthStore.userIdGetter;
  work.setLike(props.workId, userId);
  workPackageStore.setLike(props.workId);
};
const playLike = () => {
  if (!dotLottie) return;

  dotLottie.stop();
  dotLottie.setSegment(20, 106);
  dotLottie.setFrame(20);

  dotLottie?.play();
};

const playDislike = () => {
  if (!dotLottie) return;

  dotLottie.stop();
  dotLottie.setSegment(121, 162);
  dotLottie.setFrame(121);

  dotLottie?.play();
};

const stateLike = () => {
  if (!dotLottie) return;
  dotLottie.setFrame(106);
  dotLottie.stop();
};
const stateDilike = () => {
  if (!dotLottie) return;
  dotLottie.setFrame(162);
  dotLottie.stop();
};
</script>

<style scoped>
.like_style {
  aspect-ratio: 1 / 1;
  height: 100%;
  transform: scale(200%);
}
</style>
