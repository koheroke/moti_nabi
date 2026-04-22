<script setup lang="ts">
defineProps<{
  message?: string;
  type?: "error" | "info";
}>();
</script>

<template>
  <p v-if="message" :class="['c-message', type]">
    {{ message }}
  </p>
</template>

<style scoped>
.c-message {
  font-size: 12px;
}

.error {
  color: #ef4444;
}

.info {
  color: #64748b;
}
</style>
