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
const userlike = ref(true);
const playerRef = ref<any>(null);
let dotLottie: DotLottie | null = null;
onMounted(() => {
  dotLottie = playerRef.value?.getDotLottieInstance?.();
  if (!dotLottie) return;
  dotLottie.addEventListener("load", () => {
    if (userlike.value) {
      stateLike();
    } else {
      stateDilike();
    }
  });
});

const onLike = () => {
  if (userlike.value) {
    playDislike();
    userlike.value = false;
  } else {
    playLike();
    userlike.value = true;
  }
};
const playLike = () => {
  if (!dotLottie) return;
  dotLottie.play();
  dotLottie.setSegment(20, 106);
};
const playDislike = () => {
  if (!dotLottie) return;
  dotLottie.play();
  dotLottie.setSegment(121, 162);
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
