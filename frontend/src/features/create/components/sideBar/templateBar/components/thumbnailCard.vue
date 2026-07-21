<template>
  <div class="card" @click="emit('onThumbnail')">
    <h2 style="font-size: 20px; font-weight: 500">{{ thumbnail.name }}</h2>
    <div class="tags">
      <Tag :size="18"></Tag>
      <div v-for="tag in thumbnail.tags" class="tag">
        <p>{{ tag }}</p>
      </div>
    </div>
    <div class="thumbnail-json">
      <Thumbnail
        :scale="0.3"
        :thumbnailJson="thumbnail.thumbnailJson"
      ></Thumbnail>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Tag } from "lucide-vue-next";
import { type thumbnail } from "@/features/create/type/templateType";
import Thumbnail from "../../../Thumbnail.vue";
const emit = defineEmits(["onThumbnail"]);
const props = defineProps<{
  thumbnail: thumbnail;
}>();
</script>
<style lang="css" scoped>
.card {
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 270px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateX(3%);
}
.thumbnail-json {
  width: 100%;
  height: 160px;
  background-color: beige;
  border-radius: 5px;
}
.tags {
  display: flex;
  gap: 10px;
  font-size: 13px;
  align-items: center;
  padding-left: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
}
.tag {
  background-color: rgb(243, 241, 241);
  padding: 0px 5px;
  border-radius: 10px;
}
</style>
