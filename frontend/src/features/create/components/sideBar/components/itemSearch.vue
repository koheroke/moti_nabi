<template>
  <div class="container">
    <Search color="white" :size="25" />
    <BaseInput v-model="modelValue" class="gallery-search" />
  </div>
</template>
<script setup lang="ts">
import BaseInput from "@/components/ui/form/BaseInput/BaseInput.vue";
import { ref, watch } from "vue";
import { Search } from "lucide-vue-next";
import { useCreateStore } from "../../../store/createStore";
const createStore = useCreateStore();
const modelValue = ref("");

watch(modelValue, (newValue) => {
  createStore.setSearchText(newValue);
});
</script>
<style lang="css" scoped>
.gallery-search {
  height: 30px;
  width: 100%;
}
.container {
  min-height: 40px;
  min-width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0px 10px;
}
.tags {
  display: flex;
}
</style>
