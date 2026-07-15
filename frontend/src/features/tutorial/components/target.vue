<template>
  <div
    v-if="isOpen && targetDataGetter"
    class="tutorial-highlight"
    :style="{
      top: `${targetDataGetter.top - 6}px`,
      left: `${targetDataGetter.left - 6}px`,
      width: `${targetDataGetter.width + 12}px`,
      height: `${targetDataGetter.height + 12}px`,
    }"
  />
</template>
<script setup lang="ts">
import { useTutorialStore } from "../store/tutorial";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const tutorialStore = useTutorialStore();
const { targetDataGetter } = storeToRefs(tutorialStore);
const isOpen = ref(true);
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
</style>
