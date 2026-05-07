<template>
  <article class="work-card" @click="emit('onWorkCard')">
    <img class="thumbnail" :src="work.thumbnailUrl" :alt="work.title" />

    <div class="body">
      <h3 class="title">{{ work.title }}</h3>

      <div class="meta">
        <span>{{ work.createdAt }}</span>
        <span
          ><ThumbsUp :size="16" color="green" fill="yellowgreen"></ThumbsUp
          >{{ " " + work.likeCount }}</span
        >
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Work } from "@/features/work/types/work";
import { ThumbsUp } from "lucide-vue-next";
const emit = defineEmits<{
  (e: "onWorkCard"): void;
}>();

defineProps<{
  work: Work;
}>();
</script>

<style scoped>
.work-card {
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;
  padding: 0px 5px;
  flex: 0 0 auto;
  width: 300px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.work-card:hover {
  transform: translateY(-3.5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #f5f5f5;
}

.body {
  padding: 12px;
}

.title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}

.meta {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
}
</style>
