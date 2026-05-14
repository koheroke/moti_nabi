<template>
  <div class="page">
    <div v-if="edit">
      <ProfileEdit :userId="userId"></ProfileEdit>
    </div>
    <div v-else="edit">
      <ProfileSection :userId="userId" v-model="profile"></ProfileSection>
    </div>
    <UserWorksPanel></UserWorksPanel>
  </div>
</template>
<script setup lang="ts">
import ProfileSection from "@features/user/components/ProfileSection.vue";
import UserWorksPanel from "@/features/user/components/UserWorksPanel.vue";
import ProfileEdit from "@/features/user/components/ProfileEdit.vue";
import { useRoute } from "vue-router";
import type { UserProfile } from "@/features/user/types/profile";
import { ref } from "vue";
import { useUserStore } from "@/store/user/userStore";
const userstore = useUserStore();
const route = useRoute();
const profile = ref<UserProfile>();
const editbool = route.query.edit;
const userId = Array.isArray(route.params.userId)
  ? route.params.userId[0]
  : route.params.userId;
const edit = ref(userId == userstore.userId ? editbool : false);
</script>
<style lang="css" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
</style>
