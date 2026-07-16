<template>
  <div
    v-if="!close && targetDataGetter"
    class="tutorial-highlight lightup"
    :style="{
      top: `${targetDataGetter.top - 6}px`,
      left: `${targetDataGetter.left - 6}px`,
      width: `${targetDataGetter.width + 12}px`,
      height: `${targetDataGetter.height + 12}px`,
    }"
  />
  <finishTutorialBotton class="finishTutorialBotton"></finishTutorialBotton>
</template>
<script setup lang="ts">
import { useTutorialStore } from "../store/tutorial";
import finishTutorialBotton from "./finishTutorialBotton.vue";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
const close = ref(true);
const tutorialStore = useTutorialStore();
const { targetDataGetter, tutorialIdGetter } = storeToRefs(tutorialStore);
watch(tutorialIdGetter, () => {
  if (targetDataGetter == null) {
    close.value = true;
  } else {
    close.value = false;
  }
});
</script>
<style scoped>
.tutorial-highlight {
  position: fixed;
  z-index: 10001;
  border: 3px solid #42b883;
  border-radius: 10px;
  pointer-events: none;
  z-index: 10;
  box-shadow: 0 0 0 9999px rgb(0 0 0 / 55%);
  transition:
    top 0.25s,
    left 0.25s,
    width 0.25s,
    height 0.25s;
}
.finishTutorialBotton {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 100;
}
</style>
