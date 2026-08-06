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
import { ref, onMounted, watch } from "vue";
import { DotLottieVue, type DotLottie } from "@lottiefiles/dotlottie-vue";
const playerRef = ref<any>(null);
const props = defineProps<{
  liked: boolean | undefined;
  workId: string;
}>();

let dotLottie: DotLottie | null = null;
onMounted(() => {
  dotLottie = playerRef.value?.getDotLottieInstance?.();
  if (!dotLottie) return;
  dotLottie.addEventListener("load", () => {
    if (props.liked == undefined) return;
    if (props.liked) {
      stateLike();
    } else {
      stateDilike();
    }
  });
});

watch(
  () => props.liked,
  (newValue, oldValue) => {
    if (oldValue != undefined) return;
    if (props.liked) {
      stateLike();
    } else {
      stateDilike();
    }
  },
);

const emit = defineEmits<{
  (e: "like", workId: string): void;
  (e: "disLike", workId: string): void;
}>();

const onLike = () => {
  if (props.liked) {
    emit("disLike", props.workId);
    playDislike();
  } else {
    emit("like", props.workId);
    playLike();
  }
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
