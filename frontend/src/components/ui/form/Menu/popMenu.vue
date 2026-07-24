<template>
  <div class="closeArea" v-if="!close" @click="handleClose">
    <div
      :class="{ popup: !close, popdown: close }"
      class="MenuBox"
      ref="MenuBoxDom"
      @click.stop
    >
      <BaseMenu
        :values="pocketMenu"
        @close="handleClose"
        @onSection="onMenuSection"
      ></BaseMenu>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseMenu from "./BaseMenu.vue";
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
let mousePos = { x: 0, y: 0 };
let menuPos = { x: 0, y: 0 };
const onMenuSection = (value: { id: string; name: string }) => {
  props.onSection(value, menuPos);
};
const props = defineProps<{
  close: boolean;
  pocketMenu: { id: string; name: string }[];
  onSection: (
    value: { id: string; name: string },
    pos: { x: number; y: number },
  ) => void;
}>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = () => {
  //console.log("handleClose");
  emit("close");
};

const MenuBoxDom = ref<HTMLDivElement | null>(null);

const moveMenu = async () => {
  await nextTick();
  if (!MenuBoxDom.value) return;
  //console.log("mousePos", mousePos);
  MenuBoxDom.value.style.top = `${mousePos.y}px`;
  MenuBoxDom.value.style.left = `${mousePos.x}px`;
  menuPos = mousePos;
  //console.log("style", MenuBoxDom.value.style);
};

watch(
  () => props.close,
  (newValue) => {
    if (!newValue) {
      moveMenu();
    }
  },
);
const mouseMove = (event: MouseEvent) => {
  const x = event.clientX;
  const y = event.clientY;
  mousePos = { x, y };
};

onMounted(() => {
  document.addEventListener("mousemove", mouseMove);
});
onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMove);
});
</script>
<style lang="css" scoped>
.closeArea {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
}
.MenuBox {
  position: absolute;
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
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes popdown {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
}
</style>
