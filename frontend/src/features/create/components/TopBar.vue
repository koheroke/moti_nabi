<template>
  <div class="topBar">
    <div class="right">
      <div style="color: black; font-size: 35px; font-weight: 400">
        {{ props.title }}
      </div>
      <div style="gap: 10px; display: flex; margin-left: auto">
        <CornerUpLeft />
        <CornerUpRight />
      </div>
    </div>
    <div class="left">
      <div
        class="buttons"
        style="margin-left: auto; display: flex; align-items: center; gap: 10px"
      >
        <UserIcon
          size="medium"
          :userid="1"
          style="margin-right: 20px"
        ></UserIcon>

        <BaseButton variant="ghost">招待</BaseButton>
        <BaseButton>公開</BaseButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { CornerUpLeft, CornerUpRight } from "lucide-vue-next";
import { MessageSquare } from "lucide-vue-next";
import UserIcon from "@/features/user/components/UserIcon.vue";

const props = defineProps<{
  title: string;
}>();
</script>
<style lang="css" scoped>
.topBar {
  box-sizing: border-box;
  height: 40px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right {
  margin-right: auto;
  display: flex;
  width: 50%;
}
.left {
  margin-left: auto;
  gap: 10px;
  display: flex;
  width: 50%;
}
</style>
