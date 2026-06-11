<template>
  <div class="dropdown">
    <BaseButton @click="openLabel" type="button">
      <span>{{ selectedLabel }}</span>
      <span> ⌄</span>
    </BaseButton>

    <div v-if="isOpen" class="list">
      <div
        v-for="option in options"
        :key="option.value"
        type="button"
        class="option"
        @click="onLabel(option)"
      >
        <p>{{ option.label }}</p>
        <span v-if="option.value === modelValue" :style="{ color: 'green' }">
          ✓</span
        >
      </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: rgb(56, 54, 54);
  font-weight: 400;
  border: none;
  font-size: 15px;
}
.option:hover {
  background-color: rgba(244, 244, 244, 0.953);
}
.list {
  position: absolute;
  background-color: rgb(250, 250, 250);
  width: 100%;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
}
.dropdown {
  position: relative;
}
</style>
