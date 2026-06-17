<template>
  <div class="container">
    <div class="flexCanter">
      <BaseInput
        v-model="modelValue"
        class="gallery-search"
        placeholder="プレビュー内を検索"
        style="flex: 1"
      />
    </div>
    <suggest
      v-model:search="modelValue"
      :suggestDatas="candidate"
      @onsuggest="onUpdateSearch"
      class="suggest"
      name="name"
      value="path"
    ></suggest>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import suggest from "@/features/suggest/components/suggest.vue";
import { UseCreateWork } from "../composables/useCreateWork";
import { useCreateStore } from "../store/createStore";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { usePocketStore } from "../store/pocketStore.ts";
const pocketStore = usePocketStore();
const createStore = useCreateStore();
const { previewItemGetter } = storeToRefs(createStore);
const createWork = UseCreateWork();
const modelValue = ref("");
const candidate = ref<{ name: string; value: any; id: string }[]>([]);
const onUpdateSearch = (itemPath: {
  pocketId: string;
  caseId: string;
  itemId: string;
  parentId?: string;
}) => {
  pocketStore.setSelectedPocketId({
    id: itemPath.pocketId,
    caseId: itemPath.caseId,
  });
};
watch(previewItemGetter, () => {
  candidate.value = Object.values(createWork.buildItemPathMap()).map((item) => {
    return {
      id: item.id,
      value: item.pathData,
      name: item.name,
    };
  });
  console.log(candidate.value);
});
</script>
<style lang="css" scoped>
.container {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.suggest {
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  z-index: 4;
  top: 100%;
  background-color: white;
}
.flexCanter {
  width: 100%;
  gap: 5px;
}
</style>
