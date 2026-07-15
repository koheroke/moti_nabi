<template>
  <section class="works-section">
    <div class="box">
      <WorksSection :works="works" :onWorkCard="onWorkCard"></WorksSection>
    </div>
    <BaseButton variant="text" @click="onMoreClick?.()" class="see-all">
      すべて見る →
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import WorksSection from "@features/work/components/WorksSection.vue";
import type { workPackage } from "@/features/work/types/work";
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
defineProps<{
  works: workPackage[];
  onMoreClick: () => void;
  onWorkCard: (cardId: string) => void;
}>();
</script>

<style scoped>
.works-section {
  margin-top: 20px;
  display: inline-grid;
  max-width: 100%;
  justify-content: left;
  margin-bottom: 20px;
}

.c-button--text {
  margin-right: auto;
  padding: 3px !important;
  color: #666;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}
.c-button--text:hover {
  color: #111;
  transform: translateX(4px);
}

.box {
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 10px;
}
.see-all {
  animation: emphasize 2s ease-in-out infinite;
}

@keyframes emphasize {
  0% {
    color: #8d8b8b;
  }
  50% {
    color: #006eff;
  }
  100% {
    color: #8d8b8b;
  }
}
</style>
