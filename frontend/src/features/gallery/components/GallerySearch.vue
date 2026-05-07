<template>
  <div class="container">
    <Search />
    <BaseInput v-model="modelValue" class="gallery-search" />
  </div>
  <section class="tags">
    <GalleryTags @addtag="onUpdateSearch"></GalleryTags>
  </section>
</template>
<script setup lang="ts">
import BaseInput from "@/components/ui/form/BaseInput/BaseInput.vue";
import { ref, watch } from "vue";
import GalleryTags from "./GalleryTags.vue";
import { Search } from "lucide-vue-next";
const emit = defineEmits(["update:modelValue"]);
const modelValue = ref("");
const onUpdateSearch = (newSearch: string) => {
  modelValue.value += newSearch;
};
watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>
<style lang="css" scoped>
.gallery-search {
  min-height: 40px;
  width: 80%;
}
.container {
  min-height: 40px;
  min-width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
}
.tags {
  display: flex;
}
</style>
