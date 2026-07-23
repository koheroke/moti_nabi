<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);

const props = defineProps<{
  modelValue: string;
  type?: string;
  placeholder?: string;
  focus?: boolean;
}>();

watch(
  () => props.focus,
  async (focus) => {
    await nextTick();

    if (focus) {
      inputRef.value?.focus();
    } else {
      inputRef.value?.blur();
    }
  },
  {
    immediate: true,
  },
);
const emit = defineEmits(["update:modelValue", "handleEnter", "blur"]);
</script>

<template>
  <input
    class="c-input"
    ref="inputRef"
    :placeholder="placeholder || ''"
    :type="type || 'text'"
    :value="modelValue"
    @keydown.enter="emit('handleEnter')"
    @blur="emit('blur')"
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
