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
        <likeBotton
          :liked="AboutGetter.userLike"
          :workId="AboutGetter.id"
          class="likeBotton"
        ></likeBotton>
        <p class="likes">{{ AboutGetter.likes }}</p>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Tag } from "lucide-vue-next";
import likeBotton from "@/features/work/components/likeBotton.vue";
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
.likes {
  font-size: 21px !important;
  font-weight: 400 !important;
  margin-right: 5px;
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
  align-items: center;
}

.likeBotton {
  height: 34px;
}
</style>
