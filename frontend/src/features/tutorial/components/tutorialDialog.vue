<template>
  <div
    v-show="show && tutorialShowGetter"
    class="dialog floating"
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

    <BaseButton
      v-if="tutorialDialogDataGetter.action === 'botton'"
      style="margin-top: 10px; margin-left: auto"
      class="lightup"
      @click="onNext"
      >次に進む
    </BaseButton>
  </div>
</template>
<script setup lang="ts">
import { useTutorialStore } from "../store/tutorial";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { storeToRefs } from "pinia";
import { ref, watch, nextTick } from "vue";
const show = ref(false);
const dialog = ref<HTMLElement | null>(null);
const close = ref(true);
const tutorialStore = useTutorialStore();
const {
  targetDataGetter,
  tutorialDialogDataGetter,
  tutorialShowGetter,
  tutorialIdGetter,
} = storeToRefs(tutorialStore);

const onNext = () => {
  tutorialStore.onNextBottonSetter(true);
};

const getpos = async () => {
  const direction = tutorialDialogDataGetter.value.direction;
  const margin = 20;
  let top;
  let left;
  const target = targetDataGetter.value;
  if (!target) return;
  switch (direction) {
    case "right":
      top = target.top;
      left = target.left + target.width + margin;
      break;
    case "left":
      let dialogWidth = 0;
      await nextTick();
      if (dialog.value) {
        dialogWidth = dialog.value.getBoundingClientRect().width;
      }
      top = target.top;
      left = target.left - dialogWidth - margin - target.width;
      break;
    case "bottom":
      top = target.top + target.height + margin;
      left = target.left;
      break;
    case "top":
      let dialogheight = 0;
      await nextTick();
      if (dialog.value) {
        dialogheight = dialog.value.getBoundingClientRect().height;
      }

      top = target.top - margin - dialogheight - target.height;
      left = target.left;
      break;
  }
  return { top: top, left: left };
};

const pos = ref();

watch(tutorialIdGetter, async () => {
  show.value = true;
  close.value = false;
  pos.value = await getpos();
});
</script>
<style lang="css" scoped>
.dialog {
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1000;
  width: auto;
  height: auto;
}
.dialog h2 {
  font-weight: 600;
  color: rgb(0, 0, 0);
}
.dialog p {
  color: rgb(52, 52, 52);
}

.lightup {
  animation: lightupEmphasize 2s ease-in-out infinite;
}
@keyframes lightupEmphasize {
  0% {
    background: #3b82f6;
  }

  50% {
    background: #1b66e0;
  }

  100% {
    background: #3b82f6;
  }
}
</style>
