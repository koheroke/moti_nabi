<template>
  <div class="menu">
    <section
      v-for="value in values"
      :key="value.id"
      class="popMenu"
      @click="
        emit('onSection', value);
        emit('close');
      "
    >
      {{ value.name }}
    </section>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title?: string;
  values: { id: string; name: string }[];
}>();
const emit = defineEmits<{
  (e: "onSection", value: { id: string; name: string }): void;
  (e: "close"): void;
}>();
</script>
<style lang="css" scoped>
.menu {
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 10px;
  border-radius: 3px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-size: 11px;
}
.popMenu {
  padding: 2px 12px;
  border-radius: 3px;
}
.popMenu:hover {
  background-color: rgb(240, 240, 240);
}
</style>
