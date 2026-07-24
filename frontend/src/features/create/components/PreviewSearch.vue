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
      v-model:search="suggestModelValue"
      :suggestDatas="candidate"
      @onsuggest="onSuggest"
      class="suggest"
      :filterBool="true"
      @close="closeSuggest"
      name="name"
      value="path"
    ></suggest>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed, nextTick } from "vue";
import { storeToRefs } from "pinia";
import suggest from "@/features/suggest/components/suggest.vue";
import { type suggestData } from "@/features/suggest/components/suggest.vue";
import { useCreateWork } from "../composables/useCreateWork";
import { useCreateStore } from "../store/createStore";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { usePocketStore } from "../store/pocketStore.ts";
import { useSearchStore } from "../store/searchStore.ts";
import { useSideBarStore } from "../store/sideBarStore";
import { useTemplateBarStore } from "../store/templateBar.ts";
import { useCaseStore } from "../store/caseStore.ts";
const suggestModelValue = ref();
const caseStore = useCaseStore();
const templateBarStore = useTemplateBarStore();
const suggestClose = ref(true);
const closeSuggest = () => {
  //console.log("closeSuggest");
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
let useTag = false;

const sideBarStore = useSideBarStore();
const { nowSideBarGetter } = storeToRefs(sideBarStore);

watch(nowSideBarGetter, async (newSideBarId) => {
  await nextTick();
  createStore.setSearchText("");
  selectedSideBarId.value = newSideBarId;
  const list = await switchAction(selectedSideBarId.value);
  //console.log("list", list);
  candidate.value = list ? list : [];
});

const switchAction = async (newSideBarId: string) => {
  onSearch.value = () => {};
  suggestModelValue.value = modelValue.value;
  switch (newSideBarId) {
    case "template":
      const templates = templateBarStore.templateThumbnailsGetter;
      const templateList = Object.values(templates).map((template) => ({
        name: template.name,
        value: template.name,
        id: template.id,
      }));

      const tags: suggestData[] = templateBarStore.templateTagGetter.map(
        (tag) => ({
          name: "#" + tag,
          value: "#" + tag,
          id: "#" + tag,
        }),
      );
      placeholder.value = "テンプレートを検索";
      onSearch.value = (word: string) => {
        tagSearch(word, templateList, tags);
        templateSearch(word);
      };
      onSuggest.value = templateOnsuggest;
      return templateList;
      break;
    case "item":
      placeholder.value = "持ち物を検索";
      //console.log("placeholder", placeholder.value);
      onSuggest.value = listSearch;
      return listCandidate.value;
      break;
    case "case":
      placeholder.value = "ケースを検索";
      const cases = createStore.staticCasesGetter;
      const caseList = Object.values(cases).map((this_case) => ({
        name: this_case.name,
        id: this_case.id,
        value: this_case.name,
      }));
      onSuggest.value = caseSearch;
      onSearch.value = caseSearch;
      return caseList;
      break;
    case "preview":
      placeholder.value = "プレビュー内を検索";
      onSuggest.value = previewSearch;
      return previewCandidate.value;
      break;
    default:
      return [];
  }
};

const onSuggest = ref((value: any) => {});
const onSearch = ref((value: any) => {});

watch(modelValue, (newValue) => {
  onSearch.value(newValue);
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

const listSearch = (word: string) => {
  modelValue.value = word;
  createStore.setSearchText(word);
};

const templateSearch = (word: string) => {
  modelValue.value = word;
  templateBarStore.searchTextSetter(word);
};
const templateOnsuggest = (word: string) => {
  const cut = modelValue.value.split(" ");
  cut.pop();
  modelValue.value = cut.join(" ");
  const this_word = modelValue.value.length == 0 ? word : ` ${word}`;
  modelValue.value = modelValue.value + this_word;
  templateBarStore.searchTextSetter(word);
};

const caseSearch = (word: string) => {
  //console.log("word", word);
  modelValue.value = word;
  caseStore.searchTextSetter(word);
};

const previewCandidate = ref<{ name: string; value: any; id: string }[]>([]);
const listCandidate = ref<{ name: string; value: any; id: string }[]>([]);

const setPreviewCandidate = () => {
  //console.log("createWork.buildItemPathMap()", createWork.buildItemPathMap());
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
  if (sideBarStore.nowSideBarGetter == "preview") {
    candidate.value = previewCandidate.value;
  }
};
watch(PreviewItemNumberOfChanges, () => {
  setPreviewCandidate();
});

const tagModelValue = computed(() => {
  const ar = modelValue.value.split(" ");
  return ar[ar.length - 1];
});

const tagSearch = (text: string, tests: suggestData[], tags: suggestData[]) => {
  const result = text.split(" ");
  const word = result[result.length - 1];
  //console.log("word", word);
  if (word[0] == "#") {
    suggestModelValue.value = tagModelValue.value;
    candidate.value = tags;
  } else {
    suggestModelValue.value = tagModelValue.value;
    candidate.value = tests;
  }
};

const setItemCandidate = () => {
  if (!listItemGetter.value) return;
  Object.values(listItemGetter.value).forEach((item) => {
    listCandidate.value.push({
      id: item.id,
      value: item.name,
      name: item.name,
    });
  });
  //console.log("listCandidate", listCandidate.value);
  if (sideBarStore.nowSideBarGetter == "item") {
    candidate.value = listCandidate.value;
  }
};
watch(ListItemNumberOfChanges, () => {
  setItemCandidate();
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
