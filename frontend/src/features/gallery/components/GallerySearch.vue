<template>
  <div class="search-area">
    <div class="container">
      <div style="display: flex; width: 100%; gap: 5px" class="flexCanter">
        <Search></Search>
        <BaseInput
          v-model="modelValue"
          class="gallery-search"
          placeholder="#タグまたは名前で検索"
        />
      </div>
      <suggest
        v-model:search="nowInput"
        :suggestDatas="candidate"
        @onsuggest="onsuggest"
        class="suggest"
      ></suggest>
    </div>
    <section class="tags">
      <GalleryTags :tags="popularityTag" @addtag="onUpdateSearch"></GalleryTags>
    </section>
  </div>
</template>
<script setup lang="ts">
import BaseInput from "@/components/ui/form/BaseInput/BaseInput.vue";
import { ref, watch, onMounted, computed } from "vue";
import GalleryTags from "./GalleryTags.vue";
import suggest from "@/features/suggest/components/suggest.vue";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import { Search } from "lucide-vue-next";
const emit = defineEmits(["update:modelValue"]);
const workPackageStore = useWorkPackageStore();
const allNames = ref<string[]>([]);
const candidate = ref<{ name: string; value: any; id: string }[]>([]);
const modelValue = ref("");
const popularityTag = ref<string[]>([]);
const nowInput = computed(() => {
  const arr = modelValue.value.split(" ");
  const now = arr[arr.length - 1];
  if (now[0] == "#") {
    candidate.value = allTags.value.map((tag) => {
      return {
        id: tag,
        value: tag,
        name: tag,
      };
    });
    return now.substring(1);
  } else {
    candidate.value = allNames.value.map((name) => {
      return {
        id: name,
        value: name,
        name: name,
      };
    });
    return now;
  }
});
const allTags = ref<string[]>([]);

onMounted(async () => {
  const tagMap = {} as Record<string, number>;
  const baseTag = await fetch("/json/work/baseTags.json");
  allTags.value = await baseTag.json();
  workPackageStore.workPackageStoreGetter.map((work) => {
    work.tags.forEach((tag) => {
      if (allTags.value.includes(tag) === false) {
        allTags.value.push(tag);
      }
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });
  let count = 0;
  Object.keys(tagMap)
    .sort((a, b) => tagMap[b] - tagMap[a])
    .map((tag) => {
      count++;
      if (count > 5) return;
      popularityTag.value.push(tag);
    });

  workPackageStore.workPackageStoreGetter.map((work) => {
    if (allNames.value.includes(work.name) === false)
      allNames.value.push(work.name);
  });
});
const onUpdateSearch = (newSearch: string) => {
  modelValue.value += newSearch;
};
watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});
const onsuggest = (word: string) => {
  const arr = modelValue.value.split(" ");
  const now = arr.pop();
  if (!now) return;
  const hash = now[0] == "#" ? "#" : "";
  arr.push(hash + word);
  modelValue.value = arr.join(" ");
};
</script>
<style lang="css" scoped>
.gallery-search {
  min-height: 40px;
  width: 100%;
  border-radius: 50px;
}
.container {
  width: 100%;
  min-height: 40px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
}
.tags {
  margin-top: 5px;
  display: flex;
  text-wrap: none;
}
.suggest {
  width: 100%;
}
.search-area {
  width: 100%;
}
</style>
