<template>
  <div class="radio-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import type { RadioGroupContext } from "../RadioType";

const props = defineProps<{
  modelValue: string;
  name: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};

provide<RadioGroupContext>("radioGroup", {
  modelValue: computed(() => props.modelValue),
  name: props.name,
  updateValue,
});
</script>

<style scoped>
.radio-group {
  display: flex;
  gap: 8px;
}
</style>
