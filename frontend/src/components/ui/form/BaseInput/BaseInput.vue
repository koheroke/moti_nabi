<script setup lang="ts">
defineProps<{
  modelValue: string;
  type?: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="c-input"
    :type="type || 'text'"
    :value="modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped>
.c-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
</style>
