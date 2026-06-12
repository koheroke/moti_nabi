<template>
  <div class="closeArea" @click="emit('close')">
    <div class="tab">
      {{ text }}
      <BaseInput
        @click.stop=""
        v-model="message"
        style="z-index: 20"
      ></BaseInput>
      <BaseButton @click="onMessage" style="width: 100%; margin: 0px 8px"
        >送信</BaseButton
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseInput } from "@/components/ui/form/BaseInput";
import { ref } from "vue";
import { BaseButton } from "../BaseButton";
const message = ref("");
const onMessage = () => {
  emit("text", message.value);
  emit("close");
};
const props = defineProps<{
  text: string;
}>();
const emit = defineEmits<{
  (e: "close"): void;
  (e: "text", iconUrl: string): void;
}>();
</script>
<style lang="css" scoped>
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}
.closeArea {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.203);
}
</style>
