<template>
  <div>
    <div v-for="word in narrowDownData" :key="word.id">
      <div @click="onsuggest(word.value)">
        <div class="wordBox">
          <Tag :size="17"></Tag>

          <p style="margin-right: auto">{{ word.name }}</p>
          <p>{{ word.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Tag } from "lucide-vue-next";
export type suggestData = {
  name: string;
  value: any;
  id: string;
  detail?: string;
};
const props = defineProps<{
  suggestDatas: { name: string; value: any; id: string; detail?: string }[];
  search: string;
  filterBool?: boolean;
}>();

const emit = defineEmits<{
  (e: "onsuggest", word: string): void;
  (e: "close"): void;
}>();

const onsuggest = (word: any) => {
  emit("onsuggest", word);
  emit("close");
};
const narrowDownData = computed(() => {
  if (props.filterBool) {
    if (props.search.length == 0) {
      return props.suggestDatas;
    }
  }
  return props.suggestDatas.filter((data) => data.name.includes(props.search));
});
</script>
<style lang="css" scoped>
.wordBox {
  font-size: 15px;
  transition: background-color 0.3s;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 15px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 2;
}
.wordBox:hover {
  background-color: #dbd8d867;
  color: rgba(0, 0, 0, 0.943);
  border-radius: 10px;
}
</style>
