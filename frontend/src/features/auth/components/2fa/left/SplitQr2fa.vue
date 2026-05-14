<template>
  <div class="left">
    <QrcodeVue :value="otpauthUrl" :size="350" level="H" />
  </div>
</template>
<script setup lang="ts">
import QrcodeVue from "qrcode.vue";

const props = defineProps<{
  otpauthUrl: string | undefined;
}>();

import { onMounted } from "vue";
onMounted(() => {
  console.log("grCode:" + props.otpauthUrl);
});
</script>
<style lang="css" scoped>
.left {
  margin-right: auto;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
}
</style>
