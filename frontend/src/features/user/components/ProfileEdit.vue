<template>
  <div v-if="userProfile" class="profile">
    <div class="header">
      <section class="right">
        <div class="icon">
          <img :src="userProfile.iconUrl" class="icon_image" />
          <div class="icon-edit">
            <Camera fill="white" :size="100" color="#1514143d"></Camera>
          </div>
        </div>
        <div class="user-info">
          <BaseInput v-model="name" class="name"></BaseInput>
          <div class="user-id">@{{ userProfile.id }}</div>
        </div>
      </section>
      <section class="left">
        <div class="title">{{ "プロフィール" }}</div>
        <div class="profile-description">
          {{ "自己紹介 :" }}
          <div class="bio">
            <BaseTextArea v-model="bio"> </BaseTextArea>
          </div>
          <div class="sns">
            <a
              v-for="sns in userProfile.snsLinks"
              :key="sns.url"
              :href="sns.url"
              target="_blank"
              class="sns"
            >
              <img :src="sns.icon" class="icon" />
              {{ sns.type }}
            </a>
          </div>
          <div class="meta">
            <span>📅 {{ userProfile.createdAt }}</span>
            <span>📊 投稿数：{{ userProfile.postCount }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="profile">読み込み中...</div>
</template>
<style src="../Profile.css"></style>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchUserProfile } from "@/features/user/composables/user";
import type { UserProfile } from "@/features/user/types/profile";
import { BaseTextArea } from "@/components/ui/form/BaseTextArea/index.ts";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { Camera } from "lucide-vue-next";
const bio = ref("");
const name = ref("");
const userProfile = ref<UserProfile | null>(null);
const props = defineProps<{
  userId: string;
}>();

onMounted(async () => {
  userProfile.value = await fetchUserProfile(props.userId);
  bio.value = userProfile.value?.bio || "";
  name.value = userProfile.value?.name || "";
});
</script>
<style lang="css" scoped>
.icon-edit {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    background-color 0.2s ease;
}
.name {
  text-align: center;
}
.icon_image {
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1/1;
}
.icon-edit:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.145);
}
</style>
