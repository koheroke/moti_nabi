<template>
  <div
    class="closeArea"
    v-if="getConfirmation.show"
    @click="confirmationStore.close()"
  >
    <div class="tab">
      {{ getConfirmation.text }}

      <BaseButton
        @click="
          getConfirmation.onfunction();
          confirmationStore.close();
        "
        style="width: 100%"
        >はい</BaseButton
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseButton } from "@/components/ui/form/BaseButton";
import { useConfirmationStore } from "@/store/feedback/confirmationStore";
import { storeToRefs } from "pinia";
const confirmationStore = useConfirmationStore();
const { getConfirmation } = storeToRefs(confirmationStore);
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
