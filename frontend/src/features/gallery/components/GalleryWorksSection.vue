<template>
  <div class="worksSection">
    <WorksSection
      :works="visibleWorks"
      :wrap="true"
      :onMoreClick="onMoreClick"
      :onWorkCard="onWorkCard"
      :publicWork="true"
    >
      ></WorksSection
    >
  </div>
</template>
<script setup lang="ts">
import WorksSection from "@/features/work/components/WorksSection.vue";
import { useGalleryWorks } from "../composables/GalleryWork";
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import type { ParseSearchQuery, SortType } from "../type";
import { watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const step = 10;
const { visibleWorks, more, GalleryWorksSearch, GalleryWorksSort } =
  useGalleryWorks(step);
const props = defineProps<{
  search: ParseSearchQuery;
  sortType: SortType;
}>();
watch(
  () => props.search,
  (newValue) => {
    GalleryWorksSearch(newValue);
  },
);

watch(
  () => props.sortType,
  (newValue) => {
    GalleryWorksSort(newValue);
  },
);
const onWorkCard = (cardId: string) => {
  router?.push({ path: "/detail", query: { cardId: cardId } });
};

const onMoreClick = () => {
  more();
};

import { ref } from "vue";
const workPackageTestData = ref([
  {
    id: "work-001",
    name: "2泊3日 東京旅行",
    thumbnailUrl: "",
    public: true,
    likes: 125,
    tags: ["旅行", "東京", "2泊3日"],
    copies: 42,
    createdAt: "2026-06-20T10:30:00Z",
  },
  {
    id: "work-002",
    name: "キャンプ持ち物",
    thumbnailUrl: "",
    public: true,
    likes: 87,
    tags: ["キャンプ", "アウトドア"],
    copies: 19,
    createdAt: "2026-06-22T08:15:00Z",
  },
  {
    id: "work-003",
    name: "出張チェックリスト",
    public: false,
    likes: 0,
    tags: ["仕事", "出張"],
    copies: 3,
    createdAt: "2026-06-25T14:20:00Z",
    thumbnailUrl: "",
  },
  {
    id: "work-004",
    name: "修学旅行",
    thumbnailUrl: "",
    public: true,
    likes: 214,
    tags: ["修学旅行", "学校"],
    copies: 73,
    createdAt: "2026-06-27T09:45:00Z",
  },
  {
    id: "work-005",
    name: "海外旅行（韓国）",
    thumbnailUrl: "",
    public: true,
    likes: 156,
    tags: ["海外旅行", "韓国"],
    copies: 51,
    createdAt: "2026-06-29T18:00:00Z",
  },
]);
</script>
<style lang="css">
.worksSection {
  min-width: auto;
  min-height: auto;
}
</style>
