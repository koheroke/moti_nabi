<template>
  <div class="preview-area">
    <div class="preview">
      <dropCaseArea class="drop-area"></dropCaseArea>
      <div class="cases_previewArea">
        <div v-for="caseItem in cases">
          <Case :caseData="caseItem" />
        </div>
      </div>
    </div>
    <section class="pocketModal">
      <PocketModal />
    </section>

    <pocketMenu v-if="role == 'owner' || role == 'editor'"></pocketMenu>
    <caseMenu v-if="role == 'owner' || role == 'editor'"></caseMenu>
  </div>
</template>

<script setup lang="ts">
import PocketModal from "./PocketModal.vue";
import dropCaseArea from "./sideBar/caseBar/components/dropCaseArea.vue";
import Case from "./svgUi/case.vue";
import pocketMenu from "@/features/create/components/svgUi/pocketMenu.vue";
import caseMenu from "./svgUi/caseMenu.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useCreateStore } from "../store/createStore.ts";
const createStore = useCreateStore();
const { getPreviewCasesArray: cases } = storeToRefs(createStore);
const { role } = storeToRefs(createStore);
const contentWidth = 3500;
const contentHeight = 1800;
const viewBox = ref<string>();

const previewArea = ref<HTMLElement | null>(null);
onMounted(() => {
  const this_viewBox = [0, 0, contentWidth, contentHeight];

  console.log(this_viewBox);
  viewBox.value = this_viewBox.join(" ");
});

onUnmounted(() => {
  createStore.selectedMenuReset();
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
  background-color: rgb(68, 68, 68);
  background-repeat: repeat;
  background-image: radial-gradient(circle, #dfdddd 1px, transparent 1px);
  background-size: 20px 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  align-content: start;
  position: relative;
  box-sizing: border-box;
}
.preview-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.caseSvg {
  height: 100%;
  width: auto;
}
.cases_previewArea {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 30px;
  overflow-x: auto;
}
</style>
