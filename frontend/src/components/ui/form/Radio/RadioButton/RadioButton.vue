<template>
  <label class="radio-button">
    <input
      type="radio"
      :name="group?.name"
      :value="value"
      :checked="isChecked"
      @change="onChange"
    />

    <span class="radio-mark"></span>
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import type { RadioGroupContext } from "../RadioType";

const props = defineProps<{
  value: string;
  label: string;
}>();

const group = inject<RadioGroupContext>("radioGroup");

const isChecked = computed(() => {
  return group?.modelValue.value === props.value;
});

const onChange = () => {
  group?.updateValue(props.value);
};
</script>

<style scoped>
.radio-button {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.radio-button input {
  display: none;
}

.radio-mark {
  width: 14px;
  height: 14px;
  border: 2px solid #999;
  border-radius: 50%;
  position: relative;
}

.radio-button input:checked + .radio-mark {
  border-color: #333;
}

.radio-button input:checked + .radio-mark::after {
  content: "";
  width: 6px;
  height: 6px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
}
</style>
