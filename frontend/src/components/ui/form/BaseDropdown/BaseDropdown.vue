<template>
  <div class="relative inline-block">
    <BaseButton
      @click="openLabel"
      type="button"
      class="flex items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2 text-sm"
    >
      <span>{{ selectedLabel }}</span>
      <span> ⌄</span>
    </BaseButton>

    <div v-if="isOpen">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="option"
      >
        <span @click="onLabel(option)">{{ option.label }}</span>
        <span v-if="option.value === modelValue" :style="{ color: 'green' }">
          ✓</span
        >
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { BaseButton } from "../BaseButton";
const isOpen = ref(false);
const emit = defineEmits(["update:modelValue"]);
const selectedLabel = computed(() => {
  return props.options.find((option) => option.value === props.modelValue)
    ?.label;
});

type DropdownOption<T extends string> = {
  label: string;
  value: T;
};

const props = defineProps<{
  modelValue: string;
  options: DropdownOption<string>[];
}>();

const onLabel = (selectedLabel: DropdownOption<string>) => {
  emit("update:modelValue", selectedLabel.value);
  isOpen.value = false;
};

const openLabel = () => {
  isOpen.value = !isOpen.value;
};
</script>
<style lang="css" scoped>
.option {
  margin-top: 10px;
  padding-right: 5px;
  color: rgb(56, 54, 54);
  border: none;
  font-size: 15px;
  background-color: rgba(240, 239, 239, 0.431);
}
</style>
