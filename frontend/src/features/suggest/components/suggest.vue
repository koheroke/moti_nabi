<template>
  <div>
    <div v-for="word in narrowDownData" :key="word.id">
      <div @click="onsuggest(word.value)">
        <div class="wordBox">
          <Tag :size="17"></Tag>

          {{ word.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Tag } from "lucide-vue-next";

const props = defineProps<{
  suggestDatas: { name: string; value: any; id: string }[];
  search: string;
}>();
const emit = defineEmits(["onsuggest"]);
const onsuggest = (word: string) => {
  emit("onsuggest", word);
};
const narrowDownData = computed(() => {
  if (!props.search) return [];
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
}
.wordBox:hover {
  background-color: #dbd8d867;
  color: rgba(0, 0, 0, 0.943);
  border-radius: 10px;
}
</style>
