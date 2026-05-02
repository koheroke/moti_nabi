<template>
  <section class="works-section">
    <div class="grid">
      <WorkCard v-for="work in works" :key="work.id" :work="work" />
    </div>
    <div v-if="works.length === 0" class="empty">作品がありません</div>
  </section>
</template>
<script setup lang="ts">
import WorkCard from "@/features/work/components/WorkCard.vue";
import type { Work } from "@/features/work/types/work";

defineProps<{
  works: Work[];
}>();
</script>

<style scoped>
.grid {
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.empty {
  margin-top: 12px;
  font-size: 14px;
  color: #999;
}
</style>
