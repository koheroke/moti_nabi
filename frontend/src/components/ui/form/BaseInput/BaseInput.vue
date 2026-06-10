<script setup lang="ts">
defineProps<{
  modelValue: string;
  type?: string;
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue", "handleEnter"]);
</script>

<template>
  <input
    class="c-input"
    :placeholder="placeholder || ''"
    :type="type || 'text'"
    :value="modelValue"
    @keydown.enter="emit('handleEnter')"
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
