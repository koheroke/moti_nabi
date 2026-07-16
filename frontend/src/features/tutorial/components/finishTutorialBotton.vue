<template>
  <BaseButton
    v-if="tutorialShowGetter"
    class="floating"
    data-tutorial="finish-tutorial-botton"
    @click="onFinish"
    >チュートリアルを修了する</BaseButton
  >
</template>
<script setup lang="ts">
import { BaseButton } from "@/components/ui/form/BaseButton";
import { useTutorialStore } from "../store/tutorial";
import { storeToRefs } from "pinia";
const tutorialStore = useTutorialStore();
const { tutorialShowGetter } = storeToRefs(tutorialStore);
const onFinish = () => {
  tutorialStore.finished();
};
</script>
<style lang="css" scoped>
.floating {
  animation: floatingEmphasize 2s ease-in-out infinite;
}
@keyframes floatingEmphasize {
  0% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(2px) scale(0.98);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}
</style>
