tutorialDialog
<template>
  <div
    class="dialog"
    :style="{
      top: `${targetDataGetter.top}px`,
      left: `${targetDataGetter.left + targetDataGetter.height + 20}px`,
    }"
  >
    <h2>{{ tutorialDialogDataGetter.title }}</h2>
    <p>{{ tutorialDialogDataGetter.description }}</p>
  </div>
</template>
<script setup lang="ts">
import { useTutorialStore } from "../store/tutorial";
import { storeToRefs } from "pinia";
const tutorialStore = useTutorialStore();
const { targetDataGetter } = storeToRefs(tutorialStore);
const { tutorialDialogDataGetter } = storeToRefs(tutorialStore);
</script>
<style lang="css" scoped>
.dialog {
  position: fixed;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1000;
}
.dialog h2 {
  font-weight: 600;
}
.dialog p {
  color: rgb(52, 51, 51);
}
</style>
