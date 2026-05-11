<template>
  <div class="detail-topbar">
    <section class="title">
      {{ title }}
    </section>
    <section class="Buttons" style="display: flex; gap: 10px">
      <BaseButton>いいね</BaseButton>
      <BaseButton>コミット</BaseButton>
    </section>
  </div>
</template>
<script setup lang="ts">
import { BaseButton } from "@/components/ui/form/BaseButton";
const props = defineProps<{
  title: string | undefined;
}>();
</script>
<style scoped>
.detail-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.title {
  font-size: 28px;
  font-weight: 700;
}
</style>
