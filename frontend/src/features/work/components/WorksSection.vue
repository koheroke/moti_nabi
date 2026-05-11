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
import type { Work } from "@/features/work/types/work";
import { useRouter } from "vuetify/lib/composables/router.mjs";
const router = useRouter();
const onWorkCard = (cardId: string) => {
  router?.push({ path: "/detail", query: { cardId: cardId } });
};

withDefaults(
  defineProps<{
    works: Work[];
    wrap?: boolean;
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
}

.is-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: rgba(240, 240, 240, 0.408);
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
}
</style>
