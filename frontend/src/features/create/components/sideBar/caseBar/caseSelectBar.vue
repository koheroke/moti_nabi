<template>
  <div class="case-bar">
    <div class="bar">
      <caseViewList />
    </div>
  </div>
</template>

<script setup lang="ts">
import caseViewList from "./components/caseViewList.vue";
</script>

<style scoped>
.case-bar {
  display: flex;
  position: relative; /* absolute の基準 */
  width: fit-content;
  height: 100%;
}

.bar {
  display: flex;
  width: 420px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
}
</style>
