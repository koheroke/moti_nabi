<template>
  <section class="works-section">
    <div class="box">
      <WorksSection :works="works"></WorksSection>
    </div>
    <BaseButton variant="text" @click="onMoreClick?.()">
      すべて見る →
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import WorksSection from "@features/work/components/WorksSection.vue";
import type { Work } from "@/features/work/types/work";
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
defineProps<{
  works: Work[];
  onMoreClick: () => void;
}>();
</script>

<style scoped>
.works-section {
  margin-top: 20px;
  display: inline-grid;
  max-width: 100%;
  justify-content: center;
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
</style>
