<template>
  <div class="page">
    <div v-if="getEditBool">
      <ProfileEdit></ProfileEdit>
    </div>
    <div v-else>
      <ProfileSection></ProfileSection>
    </div>
    <UserWorksPanel></UserWorksPanel>
  </div>
</template>
<script setup lang="ts">
import ProfileSection from "@/features/profile/components/ProfileSection.vue";
import UserWorksPanel from "@/features/profile/components/UserWorksPanel.vue";
import ProfileEdit from "@/features/profile/components/ProfileEdit.vue";
import { useUserProfile } from "@/features/profile/composables/userProfile";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useWork } from "@/features/work/composables/work.ts";
import { useUserProfileStore } from "@/features/profile/store/userProfileStore";
const userProfileStore = useUserProfileStore();
const getWorkPackages = useWork();
const { getEditBool } = storeToRefs(userProfileStore);
const userProfile = useUserProfile();

onMounted(async () => {
  userProfile.getUserProfile();
});
onMounted(() => {
  getWorkPackages.getUserworkPackages(userProfileStore.getSelectedUserId);
});
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
</style>
