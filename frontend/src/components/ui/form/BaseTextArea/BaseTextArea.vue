<template>
  <div class="textarea-field">
    <label v-if="label" :for="id" class="textarea-label">
      {{ label }}
    </label>

    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :rows="rows"
      class="textarea"
      @input="onInput"
    />

    <div v-if="maxlength" class="textarea-count">
      {{ modelValue.length }} / {{ maxlength }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  id?: string;
  label?: string;
  modelValue: string;
  placeholder?: string;
  maxlength?: number;
  rows?: number;
  disabled?: boolean;
};

withDefaults(defineProps<Props>(), {
  id: "textarea",
  placeholder: "",
  rows: 4,
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped>
.textarea-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.textarea-label {
  font-size: 14px;
  font-weight: 600;
}

.textarea {
  width: 100%;
  min-height: 96px;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
}

.textarea:focus {
  outline: none;
  border-color: #2563eb;
}

.textarea:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
}

.textarea-count {
  text-align: right;
  font-size: 12px;
  color: #6b7280;
}
</style>
