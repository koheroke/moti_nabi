<template>
  <div class="container">
    <div class="flexCanter">
      <BaseInput
        v-model="modelValue"
        class="gallery-search"
        :placeholder="placeholder"
        style="flex: 1"
        @focus="suggestClose = false"
        data-tutorial="preview-search"
      />
    </div>
    <div class="coverWindow" v-if="!suggestClose" @click="closeSuggest"></div>

    <suggest
      v-if="!suggestClose"
      v-model:search="modelValue"
      :suggestDatas="candidate"
      @onsuggest="onUpdateSearch"
      class="suggest"
      :filterBool="true"
      @close="closeSuggest"
      name="name"
      value="path"
    ></suggest>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import suggest from "@/features/suggest/components/suggest.vue";
import { useCreateWork } from "../composables/useCreateWork";
import { useCreateStore } from "../store/createStore";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { usePocketStore } from "../store/pocketStore.ts";
import { useSearchStore } from "../store/searchStore.ts";
import { useSideBarStore } from "../store/sideBarStore";
import { useTemplateBarStore } from "../store/templateBar.ts";
const templateBarStore = useTemplateBarStore();
const suggestClose = ref(true);
const closeSuggest = () => {
  suggestClose.value = true;
};

const placeholder = ref("プレビュー内を検索");
const searchStore = useSearchStore();
const pocketStore = usePocketStore();
const createStore = useCreateStore();
const { PreviewItemNumberOfChanges, ListItemNumberOfChanges, listItemGetter } =
  storeToRefs(createStore);
const createWork = useCreateWork();
const selectedSideBarId = ref("");
const modelValue = ref("");
const candidate = ref();

// ref<{ name: string; value: any; id: string }[]>([]);

const sideBarStore = useSideBarStore();
const { nowSideBarGetter } = storeToRefs(sideBarStore);

watch(nowSideBarGetter, (newSideBarId) => {
  createStore.setSearchText("");
  selectedSideBarId.value = newSideBarId;
  console.log("newSideBarId", newSideBarId);
  const list = switchAction(selectedSideBarId.value);
  candidate.value = list ? list : [];
});

const switchAction = (newSideBarId: string) => {
  switch (newSideBarId) {
    case "template":
      const templates = templateBarStore.templateThumbnailsGetter;
      const templateList = Object.values(templates).map((template) => ({
        name: template.name,
        value: "",
        id: template.id,
      }));

      placeholder.value = "テンプレートを検索";
      onUpdateSearch.value = listSearch;
      return templateList;
      break;
    case "item":
      placeholder.value = "持ち物を検索";
      console.log("placeholder", placeholder.value);
      onUpdateSearch.value = listSearch;
      return listCandidate.value;
      break;
    case "case":
      placeholder.value = "ケースを検索";
      const cases = createStore.staticCasesGetter;
      const caseList = Object.values(cases).map((this_case) => ({
        name: this_case.name,
        id: this_case.id,
        value: "",
      }));
      onUpdateSearch.value = listSearch;
      return caseList;
      break;
    case "preview":
      placeholder.value = "プレビュー内を検索";
      onUpdateSearch.value = previewSearch;
      return previewCandidate.value;
      break;
    default:
      return [];
  }
};

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
        detail: item.detail,
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
