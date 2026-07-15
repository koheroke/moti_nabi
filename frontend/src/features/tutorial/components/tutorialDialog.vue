<template>
  <div
    v-show="show"
    class="dialog lightup"
    :class="{
      popup: !close,
      popdown: close,
    }"
    :style="{
      top: `${pos?.top}px`,
      left: `${pos?.left}px`,
    }"
    ref="dialog"
  >
    <h2>{{ tutorialDialogDataGetter.title }}</h2>
    <p>{{ tutorialDialogDataGetter.description }}</p>
  </div>
</template>
<script setup lang="ts">
import { useTutorialStore } from "../store/tutorial";
import { storeToRefs } from "pinia";
import { ref, onMounted, watch, computed } from "vue";
const show = ref(false);
const dialog = ref<HTMLElement | null>(null);
onMounted(() => {
  show.value = false;
});
const close = ref(true);
const tutorialStore = useTutorialStore();
const { targetDataGetter } = storeToRefs(tutorialStore);
const { tutorialDialogDataGetter } = storeToRefs(tutorialStore);

const pos = computed(() => {
  const direction = tutorialDialogDataGetter.value.direction;
  const margin = 20;
  let top;
  let left;
  const target = targetDataGetter.value;
  if (!target) return;
  switch (direction) {
    case "left":
      top = target.top;
      left = target.left + target.width + margin;
      break;
    case "right":
      let dialogWidth = 0;
      if (dialog.value) {
        dialogWidth = dialog.value.getBoundingClientRect().width;
      }
      top = target.top;
      left = target.left - dialogWidth - margin;
      break;
    case "top":
      top = target.top + target.height + margin;
      left = target.left;
      break;
    case "top":
      top = target.top - target.height - margin;
      left = target.left;
      break;
  }
  return { top: top, left: left };
});

watch(tutorialDialogDataGetter, async () => {
  show.value = true;
  close.value = false;
});
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
  color: rgb(0, 0, 0);
}
.dialog p {
  color: rgb(52, 52, 52);
}

.popup {
  animation: popup 1s ease-out;
  transform-origin: top center;
}

.popdown {
  animation: popdown 1s ease-in forwards;
  transform-origin: top center;
}
@keyframes popup {
  from {
    opacity: 0;
    transform: translateX(0%) translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(0%) translateY(0) scale(1);
  }
}

@keyframes popdown {
  from {
    opacity: 1;
    transform: translateX(0%) translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(0%) translateY(-8px) scale(0.96);
  }
}

.lightup {
  animation: emphasize 2s ease-in-out infinite;
}
@keyframes emphasize {
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
