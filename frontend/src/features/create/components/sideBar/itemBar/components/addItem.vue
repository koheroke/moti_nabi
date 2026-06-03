<template>
  <div>
    <div>
      <BaseButton @click="toggle" style="font-weight: 700" class="create-button"
        >+ 新しく持ち物を追加</BaseButton
      >
      <section
        class="add-item-setting"
        v-show="show"
        :class="{
          popup: open,
          popdown: !open,
        }"
      >
        <section
          class="setting-section"
          style="font-size: 14px; color: rgb(108, 106, 106)"
        >
          {{ "名前を記入" }}
          <BaseInput v-model="name"></BaseInput>
        </section>
        <section class="setting-section">
          <v-select
            v-model="selectedCategory"
            :items="categories"
            item-title="name"
            item-value="id"
            label="カテゴリーを選択"
            variant="outlined"
          >
            <template #item="{ props }">
              <v-list-item v-bind="props"> </v-list-item>
            </template>
          </v-select>
          <BaseButton
            class="icon-select-button"
            @click="iconSelectToggle"
            variant="ghost"
          >
            {{ selectedIcoSrc }} アイコンを選択</BaseButton
          >
          <iconSelect
            :selectedCategory="selectedCategory"
            @close="closeIconSelect"
            v-show="iconSelectShow"
            v-model:iconId="selectedIcon"
            :class="{
              popup: iconSelectOpen,
              popdown: !iconSelectOpen,
            }"
          ></iconSelect>
        </section>

        <section class="setting-section">
          <label
            style="font-size: 15px; text-align: left; color: rgb(108, 106, 106)"
          >
            <input type="checkbox" v-model="caseBool" />
            {{ "アイテムを収納にする" }}
          </label>
        </section>
        <BaseButton @click="onAddItem">追加</BaseButton>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import BaseInput from "@/components/ui/form/BaseInput/BaseInput.vue";
import { ref, watch } from "vue";
import type { Category } from "@/features/create/type/casetype.ts";
import type { CategoryId } from "@/features/create/type/categoryType.ts";
import type { addListItemToken } from "@/features/create/type/tokens.ts";
import { UseCreateWork } from "@/features/create/composables/useCreateWork";
import iconSelect from "./iconSelect.vue";
import { useCreateStore } from "../../../../store/createStore";
const createStore = useCreateStore();
const iconMap = createStore.iconMap;
const emit = defineEmits(["update:add-item"]);
const props = defineProps<{ categories: Category[] | undefined }>();
const open = ref<boolean>(false);
const selectedCategory = ref<CategoryId>();
const caseBool = ref<boolean>(false);
const show = ref<boolean>(false);
const selectedIcon = ref<string>();
const selectedIcoSrc = ref<string>();
const createWork = UseCreateWork();
const closeIconSelect = () => {
  iconSelectToggle();
};

watch(
  () => selectedIcon.value,
  (newValue) => {
    if (newValue) selectedIcoSrc.value = iconMap[newValue].src;
  },
);

const onAddItem = () => {
  if (!name.value) return;
  if (!selectedCategory.value) return;
  if (!selectedIcon.value) return;
  const token: addListItemToken = {
    name: name.value,
    category: [selectedCategory.value],
    createType: "userCreated",
    isStorage: caseBool.value,
    iconId: selectedIcon.value,
  };
  createWork.addListItem(token);
  name.value = "";
  selectedCategory.value = undefined;
  selectedIcon.value = undefined;
  caseBool.value = false;
  toggle();
};
const iconSelectOpen = ref(false);
const iconSelectShow = ref(false);

const iconSelectToggle = () => {
  if (!iconSelectOpen.value) {
    iconSelectShow.value = true;
    iconSelectOpen.value = true;
  } else {
    iconSelectOpen.value = false;

    setTimeout(() => {
      iconSelectShow.value = false;
    }, 200);
  }
};

const toggle = () => {
  if (!open.value) {
    show.value = true;
    open.value = true;
  } else {
    open.value = false;

    setTimeout(() => {
      show.value = false;
    }, 200);
  }
};
const name = ref<string>("");
</script>
<style lang="css" scoped>
.add-item-setting {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
}
.setting-section {
  display: flex;
  flex-direction: column;
}

.popup {
  animation: popup 0.18s ease-out;
  transform-origin: top center;
}

.popdown {
  animation: popdown 0.15s ease-in forwards;
  transform-origin: top center;
}
@keyframes popup {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes popdown {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
}
.icon-select-button {
  transition: transform 0.2s ease;
}

.icon-select-button:hover {
  transform: scale(1.03);
}
</style>
