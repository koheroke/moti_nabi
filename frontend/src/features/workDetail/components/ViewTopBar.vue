<template>
  <div class="view-topbar">
    <section class="tags">
      <Tag fill="orange" style="margin-right: 20px" />
      <div class="tag" v-for="tag in tags">
        {{ tag }}
      </div>
    </section>
    <section class="work-about">
      <ThumbsUp :stroke-width="0.5" fill="yellowgreen" color="green" />
      {{ likes }}
      <Copy />
      {{ commits }}
    </section>
  </div>
</template>
<script setup lang="ts">
import { Tag } from "lucide-vue-next";
import { ThumbsUp } from "lucide-vue-next";
import { Copy } from "lucide-vue-next";
const props = defineProps<{
  tags: string[] | undefined;
  likes: number | undefined;
  commits: number | undefined;
}>();
</script>
<style lang="css" scoped>
.view-topbar {
  display: flex;
}
.tags {
  display: flex;
  margin-right: auto;
  align-items: center;
  gap: 10px;
}
.tag {
  border: 1px solid rgb(223, 218, 218);
  border-radius: 10px;
  font-size: 15px;
  padding: 1px 5px;
  font-weight: 700;
}
.work-about {
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 5px;
}
</style>
