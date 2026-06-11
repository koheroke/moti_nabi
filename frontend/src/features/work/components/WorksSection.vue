<template>
  <section class="works-section">
    <div
      class="works-list"
      :class="{
        'is-wrap': wrap,
        'is-scroll': !wrap,
      }"
    >
      <WorkCard
        v-for="work in works"
        :key="work.id"
        :work="work"
        @onWorkCard="onWorkCard(work.id)"
      />
    </div>
    <div v-if="works.length === 0" class="empty">作品がありません</div>
  </section>
</template>

<script setup lang="ts">
import WorkCard from "@/features/work/components/WorkCard.vue";
import type { workPackage } from "@/features/work/types/work";
withDefaults(
  defineProps<{
    works: workPackage[];
    wrap?: boolean;
    onWorkCard: (cardId: string) => void;
  }>(),
  {
    wrap: false,
  },
);
</script>

<style scoped>
.works-list {
  display: flex;
  gap: 12px;
  flex-grow: 0;
  background-color: rgba(240, 248, 255, 0.325);
}

.is-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  border-radius: 15px;
}

.is-scroll {
  overflow-x: auto;
}

.empty {
  margin-top: 12px;
  font-size: 14px;
  color: #999;
  text-align: center;
}
</style>
