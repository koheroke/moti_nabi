<template>
  <div class="container">
    <div class="flexCanter">
      <BaseInput
        v-model="modelValue"
        class="gallery-search"
        :placeholder="placeholder"
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
import { useSearchStore } from "../store/searchStore.ts";
import { useSideBarStore } from "../store/sideBarStore";
const placeholder = ref("プレビュー内を検索");
const searchStore = useSearchStore();
const pocketStore = usePocketStore();
const createStore = useCreateStore();
const { PreviewItemNumberOfChanges, ListItemNumberOfChanges, listItemGetter } =
  storeToRefs(createStore);
const createWork = UseCreateWork();
const modelValue = ref("");
const candidate = ref<{ name: string; value: any; id: string }[]>([]);
const sideBarStore = useSideBarStore();
const { nowSideBarGetter } = storeToRefs(sideBarStore);

watch(nowSideBarGetter, (newSideBarId) => {
  switch (newSideBarId) {
    case "template":
      placeholder.value = "テンプレートを検索";
      break;
    case "item":
      placeholder.value = "持ち物を検索";
      candidate.value = listCandidate.value;
      onUpdateSearch.value = listSearch;
      break;
    case "case":
      placeholder.value = "ケースを選択";
      break;
    default:
      placeholder.value = "プレビュー内を検索";
      candidate.value = previewCandidate.value;
      onUpdateSearch.value = previewSearch;
      break;
  }
});

const onUpdateSearch = ref((value: any) => {});

watch(modelValue, (newValue) => {
  if (nowSideBarGetter.value == "item") {
    createStore.setSearchText(newValue);
  }
});

const previewSearch = (itemPath: {
  pocketId: string;
  caseId: string;
  itemId: string;
  parentId?: string;
}) => {
  pocketStore.setSelectedPocketId({
    id: itemPath.pocketId,
    caseId: itemPath.caseId,
  });
  searchStore.searchItemSetter({
    id: itemPath.itemId,
    parentId: itemPath.parentId,
  });
};

const listSearch = (itemName: string) => {
  modelValue.value = itemName;
  createStore.setSearchText(itemName);
};

const previewCandidate = ref<{ name: string; value: any; id: string }[]>([]);
const listCandidate = ref<{ name: string; value: any; id: string }[]>([]);
watch(PreviewItemNumberOfChanges, () => {
  console.log("item");
  previewCandidate.value = Object.values(createWork.buildItemPathMap()).map(
    (item) => {
      return {
        id: item.id,
        value: item.pathData,
        name: item.name,
      };
    },
  );
});

watch(ListItemNumberOfChanges, () => {
  if (!listItemGetter.value) return;
  Object.values(listItemGetter.value).forEach((item) => {
    listCandidate.value.push({
      id: item.id,
      value: item.name,
      name: item.name,
    });
  });
  //console.log(candidate.value);
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
