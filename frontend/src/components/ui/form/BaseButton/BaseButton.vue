<script setup lang="ts">
import type { ButtonVariant, ButtonSize } from "./types";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    block?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    block: false,
  },
);
</script>

<template>
  <button
    class="c-button"
    :class="[
      `c-button--${variant}`,
      `c-button--${size}`,
      { 'is-loading': loading, 'is-block': block },
    ]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="c-button__spinner"></span>
    <span class="c-button__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.c-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-weight: 500;
  transition: 0.2s;
}

/* サイズ */
.c-button--sm {
  padding: 4px 10px;
  font-size: 12px;
}

.c-button--md {
  padding: 8px 16px;
  font-size: 14px;
}

.c-button--lg {
  padding: 12px 20px;
  font-size: 16px;
}

/* バリアント */
.c-button--primary {
  background: #3b82f6;
  color: white;
}

.c-button--secondary {
  background: #64748b;
  color: white;
}

.c-button--danger {
  background: #ef4444;
  color: white;
}

.c-button--ghost {
  background: transparent;
  border: 1px solid #ddd;
}

.c-button--text {
  background: transparent;
}

/* 状態 */
.c-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.is-block {
  width: 100%;
}

/* ローディング */
.c-button__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
