<template>
  <div class="preview-area">
    <div class="preview" ref="previewArea">
      <dropCaseArea class="drop-area"></dropCaseArea>
      <svg :viewBox="viewBox" class="viewBox">
        <Case />
      </svg>
    </div>
    <section class="pocketModal">
      <PocketModal />
    </section>
  </div>
</template>

<script setup lang="ts">
import PocketModal from "./PocketModal.vue";
import dropCaseArea from "./sideBar/caseBar/components/dropCaseArea.vue";
import Case from "./svgUi/case.vue";
import { ref, onMounted } from "vue";
const contentWidth = 3500;
const contentHeight = 1800;
const viewBox = ref<string>();

const previewArea = ref<HTMLElement | null>(null);
onMounted(() => {
  const this_viewBox = [0, 0, contentWidth, contentHeight];

  console.log(this_viewBox);
  viewBox.value = this_viewBox.join(" ");
});
</script>
<style lang="css" scoped>
.pocketModal {
  position: absolute;
  width: 300px;
  right: 0%;
  bottom: 0%;
}

.viewBox {
  width: 2000px;
  height: 1200px;
  display: block;
}
.drop-area {
  z-index: 20;
}
.preview {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  display: grid;
  background-color: rgb(68, 68, 68);
  background-repeat: repeat;
  background-image: radial-gradient(circle, #dfdddd 1px, transparent 1px);
  background-size: 20px 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  grid-template-columns: repeat(3, 1fr);
  align-content: start;
  gap: 20px;
  position: relative;
  box-sizing: border-box;
}
.preview-area {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
