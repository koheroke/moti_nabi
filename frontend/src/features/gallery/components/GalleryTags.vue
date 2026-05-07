<template>
  <div class="container">
    <div v-for="tag in tags" :key="tag">
      <div class="tag" @click="onTag(tag)">{{ "#" + tag }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const testTag = ["旅行", "キャンプ", "料理", "ゲーム", "映画"];
const tags = testTag;
const emit = defineEmits(["addtag"]);
const onTag = (tag: string) => {
  emit("addtag", " #" + tag);
};
</script>
<style lang="css" scoped>
.tag {
  color: rgb(94, 94, 227);
  font-size: 15px;
  font-weight: 600;
}
.tag:hover {
  text-decoration: underline;
}
.container {
  display: flex;
  gap: 15px !important;
}
</style>
