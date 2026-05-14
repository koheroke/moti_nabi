<template>
  <div
    class="alert"
    :class="{
      popup: popup,
      popdown: !popup,
      errorAlert: error,
      successAlert: !error,
    }"
    v-show="show"
  >
    <div v-if="error">
      <CircleX color="red" :size="50" />
    </div>
    <div v-if="!error">
      <CircleCheck color="#007fff" :size="50" />
    </div>
    <p :class="{ errorText: error, successText: !error }" class="test">
      {{ title }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useAlertStore } from "@/store/feedback/alertStore";
import { CircleX, CircleCheck } from "lucide-vue-next";
const title = ref<string>("");
const popup = ref(false);
const error = ref(false);
const alertStore = useAlertStore();
const show = ref(false);

onMounted(() => {
  show.value = false;
});
watch(
  () => alertStore.getAlert.count,
  () => {
    title.value = alertStore.getAlert.title;
    popup.value = true;
    error.value = alertStore.getAlert.error;
    show.value = true;
    setTimeout(() => {
      popup.value = false;
      setTimeout(() => {
        show.value = false;
      }, 500);
    }, 3000);
  },
);
</script>
<style lang="css" scoped>
.alert {
  z-index: 30;
  display: flex;
  position: absolute;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  padding: 10px 25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  font-weight: 700;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.alert p {
  font-size: 20px;
}

.errorAlert {
  border-bottom: 5px solid red;
}
.successAlert {
  border-bottom: 5px solid #007fff;
}

.errorText {
  color: red;
}
.successText {
  color: #007fff;
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
