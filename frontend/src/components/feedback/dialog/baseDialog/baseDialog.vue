<template>
  <div class="dialog" :class="{ popup: popup, popdown: !popup }" v-show="show">
    <section class="top-area">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </section>
    <section class="bottom-area">
      <section style="margin-left: auto; display: flex; gap: 5px">
        <BaseButton @click="onClickOK">はい</BaseButton>
        <BaseButton @click="onClickNo" variant="ghost">いいえ</BaseButton>
      </section>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useDialogStore } from "@/store/feedback/dialogStore";
import { BaseButton } from "@/components/ui/form/BaseButton";
const title = ref<string>("");
const text = ref<string>("");
const onClickOK = ref<(() => void) | null>(null);
const onClickNo = () => {
  popup.value = false;
};
const popup = ref(false);
const dialogStore = useDialogStore();
const show = ref(false);

onMounted(() => {
  show.value = false;
});
watch(
  () => dialogStore.getDialog.count,
  () => {
    title.value = dialogStore.getDialog.title;
    text.value = dialogStore.getDialog.text;
    onClickOK.value = dialogStore.getDialog.onClickOK ?? null;
    popup.value = true;
    show.value = true;
  },
);
</script>
<style lang="css" scoped>
.dialog {
  z-index: 30;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgb(255, 255, 255);
  left: 50%;
  bottom: 0vh;
  transform: translateX(-50%);
  gap: 10px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 5px 5px;
}
.dialog p {
  font-size: 12px;
  font-weight: 500;
}
.dialog h1 {
  font-size: 23px;
  font-weight: 900;
}

.bottom-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
}

.top-area {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
}

.popup {
  animation: popup 0.18s ease-out;
  transform-origin: top center;
}

.popdown {
  animation: popdown 0.15s ease-in forwards;
  transform-origin: top center;
}

@keyframes popup {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes popdown {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px) scale(0.96);
  }
}
</style>
