<template>
  <div class="sideArea">
    <div class="sideBar list">
      <div v-for="item in sidebar" :key="item.id">
        <section class="flexCanter">
          <div
            class="iconArea flexCanter"
            @click="
              onSelect(item.id);
              selectItemId = item.id;
            "
            style="flex-direction: column"
          >
            <div
              class="flexCanter icon"
              :class="{ shadow: selectItemId == item.id }"
            >
              <component
                :is="item.icon"
                v-if="selectItemId == item.id"
                :fill="item.onColor"
                :stroke-width="1.5"
                color="white"
                :size="26"
              />
              <component
                :is="item.icon"
                v-if="selectItemId != item.id"
                :stroke-width="1.5"
                :size="26"
              />
            </div>
            <p>
              {{ item.name }}
            </p>
          </div>
        </section>
      </div>
    </div>
    <div class="selectContent">
      <itemBar v-if="selectItemId == 'item'"></itemBar>
    </div>
  </div>
  <!-- <itemBar /> -->
</template>

<script setup lang="ts">
import { LayoutTemplate, Luggage, Boxes } from "lucide-vue-next";
import itemBar from "@/features/create/components/sideBar/itemBar/itemBar.vue";
import { ref, type Component } from "vue";
const selectItemId = ref<string>("template");
const onSelect = (id: string) => {};

type conponentId = "item";
interface SideBar {
  id: string;
  name: string;
  onColor: string;
  icon: Component;
}

const sidebar = ref<SideBar[]>([
  {
    id: "template",
    name: "テンプレート",
    onColor: "blue",
    icon: LayoutTemplate,
  },
  {
    id: "item",
    name: "持ち物",
    onColor: "orange",
    icon: Boxes,
  },
  {
    id: "case",
    name: "ケース",
    onColor: "green",
    icon: Luggage,
  },
]);
</script>

<style lang="css" scoped>
.sideArea {
  width: auto;
  height: 100%;
  display: flex;
}
.selectContent {
  display: flex;
  width: auto;
}
.sideBar {
  width: 70px;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
}
.iconArea {
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 8px;
}
p {
  font-size: 9px;
  font-weight: bold;
  text-align: center;
  text-wrap: nowrap;
}
.icon {
  border: 10px;
  height: 40px;
  padding: 3px;
  border-radius: 10px;
  aspect-ratio: 1/1;
  transition: background-color 0.3s;
}
.iconArea:hover .icon {
  background-color: rgb(246, 246, 246);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
.shadow {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
</style>
