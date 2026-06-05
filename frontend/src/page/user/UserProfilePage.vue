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
import { useUserProfile } from "@/features/profile/composables/user";
import { onMounted } from "vue";
import { useUserProfileStore } from "@/features/profile/store/userProfileStore";
import { storeToRefs } from "pinia";
const userProfileStore = useUserProfileStore();
const { getEditBool } = storeToRefs(userProfileStore);
const userProfile = useUserProfile();
onMounted(async () => {
  userProfile.setUserProfile();
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
