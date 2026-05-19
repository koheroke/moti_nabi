<template>
  <div class="preview-area">
    <component
      :is="currentSuitcaseComponent"
      :project="previewDatas"
      v-model:selectedPocket="selectedPocket"
    />
    <section class="pocketModal">
      <PocketModal
        v-if="selectedPocket"
        :pocket="selectedPocket"
        @close="selectedPocket = null"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import PocketModal from "./PocketModal.vue";
import { ref } from "vue";

const selectedPocket = ref();

import HardSuitcase from "./svgUi/suitcase/HardSuitcase.vue";

const props = defineProps<{
  type: string;
  previewDatas: unknown;
}>();

const componentMap = {
  hard: HardSuitcase,
};
type ComponentType = keyof typeof componentMap;

const component = componentMap[props.type as ComponentType];

const currentSuitcaseComponent = computed(() => {
  return component || HardSuitcase;
});
</script>
<style lang="css" scoped>
.pocketModal {
  bottom: 0px;
  position: fixed;
  width: auto;
}
.preview-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(244, 244, 244, 0.763);
}
</style>
