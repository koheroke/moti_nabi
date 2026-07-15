<script setup lang="ts">
import BaseAlert from "@components/feedback/alert/baseAlert/BaseAlert.vue";
import baseDialog from "./components/feedback/dialog/baseDialog/baseDialog.vue";
import tutorialDialog from "./features/tutorial/components/tutorialDialog.vue";
import target from "./features/tutorial/components/target.vue";
</script>
<template>
  <v-app>
    <baseDialog></baseDialog>
    <BaseAlert></BaseAlert>
    <router-view />
    <target></target>
    <tutorialDialog></tutorialDialog>
  </v-app>
</template>

<!-- <script setup lang="ts">
import baseDialog from "./components/feedback/dialog/baseDialog/baseDialog.vue";
import { useDialogStore } from "@/store/feedback/dialogStore";
import { onMounted } from "vue";
const dialogStore = useDialogStore();
onMounted(() => {
  dialogStore.showDialog("タイトル", "テキスト", () => {
    //console.log("OK");
  });
});
</script>
<template>
  <v-app>
    <baseDialog></baseDialog>
  </v-app>
</template> -->
