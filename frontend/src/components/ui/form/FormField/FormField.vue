<template>
  <div class="c-form-field">
    <!-- Label -->
    <BaseLabel v-if="label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </BaseLabel>

    <!-- Input -->
    <div class="c-form-field__control">
      <slot />
    </div>

    <!-- Error -->
    <FormMessage v-if="error" :message="error" type="error" />
  </div>
</template>

<script setup lang="ts">
import { BaseLabel } from "@components/ui/form/BaseLabel";
import { FormMessage } from "@components/ui/form/FormMessage";
defineProps<{
  label?: string;
  error?: string;
  required?: boolean;
}>();
</script>

<style scoped>
.c-form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.required {
  color: red;
  margin-left: 4px;
}
</style>
