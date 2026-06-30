<template>
  <div class="closeArea" @click="setIconUrl">
    <div class="tab">
      {{ "linkを入力" }}
      <BaseInput
        @click.stop=""
        v-model="iconUrl"
        style="z-index: 20"
      ></BaseInput>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BaseInput } from "@/components/ui/form/BaseInput";
import { ref } from "vue";
import { useUserProfileStore } from "../store/userProfileStore";
const userProfileStore = useUserProfileStore();
const props = defineProps<{
  iconType: string;
}>();

const iconUrl = ref(
  userProfileStore.getUserProfile.snsAccounts.find(
    (sns) => sns.type === props.iconType,
  )?.link ?? "",
);

const setIconUrl = () => {
  const links = userProfileStore.getUserProfile.snsAccounts;
  const snsAcount = links.find((link) => link.type === props.iconType);
  if (!snsAcount) {
    links.push({ type: props.iconType, link: iconUrl.value });
  } else {
    snsAcount.link = iconUrl.value;
  }
  userProfileStore.editPrepareProfile({
    snsAccounts: links,
  });
  emit("close");
};
const emit = defineEmits<{
  (e: "close"): void;
  (e: "setIconUrl", iconUrl: string): void;
}>();
</script>
<style lang="css" scoped>
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}
.closeArea {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.203);
}
</style>
