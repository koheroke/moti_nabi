<template>
  <div v-if="userProfile" class="profile">
    <div class="header">
      <img :src="userProfile.iconUrl" class="icon" />

      <div class="user-info">
        <div class="name">{{ userProfile.name }}</div>
        <div class="user-id">@{{ userProfile.id }}</div>
      </div>
    </div>

    <div class="bio">
      {{ userProfile.bio }}
    </div>

    <div class="sns">
      <a
        v-for="sns in userProfile.snsLinks"
        :key="sns.url"
        :href="sns.url"
        target="_blank"
      >
        {{ sns.type }}
      </a>
    </div>

    <div class="meta">
      <span>📅 {{ userProfile.createdAt }}</span>
      <span>📊 投稿数：{{ userProfile.postCount }}</span>
    </div>
  </div>

  <div v-else class="profile">読み込み中...</div>
</template>

<style scoped>
.profile {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.user-id {
  color: #666;
  font-size: 14px;
}

.bio {
  margin-top: 12px;
  font-size: 14px;
}

.sns {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}

.sns a {
  text-decoration: none;
  font-size: 14px;
}

.meta {
  margin-top: 12px;
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #666;
}
</style>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchUserProfile } from "@/features/user/composables/user";
import type { UserProfile } from "@/features/user/types/profile";

const userProfile = ref<UserProfile | null>(null);

onMounted(async () => {
  userProfile.value = await fetchUserProfile();
});
</script>
