<template>
  <div class="view-topbar">
    <section class="tags">
      <Tag fill="orange" color="white" style="margin-right: 20px" :size="29" />
      <div class="tag" v-for="tag in AboutGetter.tags" :key="tag">
        {{ tag }}
      </div>
    </section>
    <section class="work-about">
      <div class="counts">
        <ThumbsUp :stroke-width="2" fill="yellowgreen" color="yellowgreen" />
        <p style="color: yellowgreen">likes {{ AboutGetter.copies }}</p>
      </div>
      <div class="counts">
        <Copy fill="#BEA82E" color="#BEA82E" />
        <p style="color: #bea82e">commits {{ AboutGetter.copies }}</p>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Tag } from "lucide-vue-next";
import { ThumbsUp } from "lucide-vue-next";
import { Copy } from "lucide-vue-next";

import { storeToRefs } from "pinia";
import { useworkDetailStore } from "@/features/workDetail/store/useworkDetail";
const workDetailStore = useworkDetailStore();
const { AboutGetter } = storeToRefs(workDetailStore);
</script>
<style lang="css" scoped>
.view-topbar {
  display: flex;
  width: 100%;
}
.tags {
  display: flex;
  margin-right: auto;
  align-items: center;
  gap: 10px;
}
.tag {
  border-radius: 5px;
  font-size: 15px;
  padding: 1px 5px;
  font-weight: 600;
  box-shadow: 0px 0px 15px -5px #777777;
}
.work-about {
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 15px;
}
.counts p {
  font-size: 15px;
  font-weight: 600;
}

.counts {
  display: flex;
  gap: 5px;
}
</style>
