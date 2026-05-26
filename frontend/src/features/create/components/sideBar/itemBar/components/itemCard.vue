<!-- ItemCard.vue -->
<template>
  <div
    class="item-card"
    :class="{ storage: item.isStorage }"
    draggable="true"
    @dragstart="onDragStart"
  >
    <div class="on-bookmark-area">
      <Star
        :size="20"
        @click="onBookMark"
        :stroke-width="1.5"
        v-if="item.bookmark"
        fill="black"
      ></Star>

      <Star
        :size="20"
        @click="onBookMark"
        :stroke-width="1.5"
        v-if="!item.bookmark"
      ></Star>
    </div>
    <div class="item-icon" :style="{ color: categoryColor }">
      {{ icon.src }}
    </div>
    <div class="info">
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { itemCard } from "@/features/create/type/itemType";
import { Star } from "lucide-vue-next";
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import type { addBookmarkToken } from "@/features/create/composables/useCreateWork";

const createWork = UseCreateWork();
const props = defineProps<{ item: itemCard }>();
import type { iconInfomation } from "@/features/create/type/itemType";

type iconColorType = Record<string, string>;
import { useCreateStore } from "../../../../store/createStore";
const createStore = useCreateStore();
const iconMap: Record<string, iconInfomation> = createStore.iconMap;
const categoryColorMap: iconColorType = createStore.categoryColor;

const icon = iconMap[props.item.iconId] ?? "📦";
const categoryColor = categoryColorMap[props.item.category[0]] ?? "#64748b";

function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData("itemId", props.item.id);
}
const onBookMark = () => {
  const token: addBookmarkToken = {
    itemId: props.item.id,
  };
  createWork.addBookmark(token);
};
</script>

<style scoped>
.item-card {
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e5e7eb;
  cursor: grab;
  user-select: none;
}

.item-card:hover {
  background: #f9fafb;
}

.item-card:active {
  cursor: grabbing;
}

.item-icon {
  font-size: 25px;
}

.info {
  flex: 1;
}

.name {
  font-size: 14px;
  font-weight: 600;
}

.storage {
  border: 2px solid #94a3b8;
  background: #f8fafc;
}

.storage-badge {
  font-size: 11px;
  color: #475569;
  background: #e2e8f0;
  padding: 3px 6px;
  border-radius: 999px;
}
.on-bookmark-area {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
