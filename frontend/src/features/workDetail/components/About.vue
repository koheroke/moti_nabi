<template>
  <section class="work-about">
    <h2 class="title">詳細</h2>

    <p class="content">
      {{ about }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  about: string | undefined;
}>();
</script>

<style scoped>
.work-about {
  box-sizing: border-box;
  padding: 24px;
  border-radius: 16px;
  height: 100%;
  background: white;
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}

.content {
  line-height: 1.8;
  color: #555;
}
</style>
