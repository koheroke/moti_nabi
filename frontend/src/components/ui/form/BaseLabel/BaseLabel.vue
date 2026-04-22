<script setup lang="ts">
defineProps<{
  for?: string;
}>();
</script>

<template>
  <label class="c-label" :for="for">
    <slot />
  </label>
</template>

<style scoped>
.c-label {
  font-size: 14px;
  font-weight: 500;
}
</style>
