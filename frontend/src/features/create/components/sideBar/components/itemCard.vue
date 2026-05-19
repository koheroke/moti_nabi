<!-- ItemCard.vue -->
<template>
  <div
    class="item-card"
    :class="{ storage: item.isStorage }"
    draggable="true"
    @dragstart="onDragStart"
  >
    <div class="item-icon" :style="{ color: categoryColor }">
      {{ icon }}
    </div>
    <div class="info">
      <div class="name">{{ item.name }}</div>
    </div>
    <div v-if="item.isStorage" class="storage-badge">
      {{ item.innerItems?.length || 0 }} items
    </div>
  </div>
</template>

<script setup lang="ts">
import type { itemCard } from "@/features/create/type/itemType";
const props = defineProps<{ item: itemCard }>();

const iconMap: Record<string, string> = {
  shirt: "👕",
  charger: "🔌",
  medicine: "💊",
  ziplock: "🟦",
  pouch: "👝",
};

const categoryColorMap: Record<string, string> = {
  clothes: "#3b82f6",
  gadget: "#8b5cf6",
  medicine: "#ef4444",
  toiletry: "#22c55e",
  storage: "#64748b",
};

const icon = iconMap[props.item.iconId] ?? "📦";
const categoryColor = categoryColorMap[props.item.category] ?? "#64748b";

function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData("itemId", props.item.id);
}
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
  font-size: 24px;
}

.info {
  flex: 1;
}

.name {
  font-size: 14px;
  font-weight: 600;
}

.meta {
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
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
</style>
