<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button class="google-btn" type="button" @click="handleClick">
    <img
      src="https://developers.google.com/identity/images/g-logo.png"
      alt="Google"
      class="icon"
    />
    <span>Googleでログイン</span>
  </button>
</template>

<style scoped>
.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 44px;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 500;
  color: #333;

  cursor: pointer;
  transition: all 0.2s ease;
}

.google-btn:hover {
  background: #f7f7f7;
}

.google-btn:active {
  transform: scale(0.98);
}

.icon {
  width: 18px;
  height: 18px;
}
</style>
