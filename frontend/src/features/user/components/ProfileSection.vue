<template>
  <div v-if="profile" class="profile">
    <div class="header">
      <section class="right">
        <img :src="profile.iconUrl" class="icon" />

        <div class="user-info">
          <div class="name">{{ profile.name }}</div>
          <div class="user-id">@{{ profile.id }}</div>
        </div>
      </section>
      <section class="left">
        <div class="title">{{ "プロフィール" }}</div>
        <div class="profile-description">
          {{ "自己紹介 :" }}
          <div class="bio">
            {{ profile.bio }}
          </div>

          <div class="sns">
            <a
              v-for="sns in profile.snsLinks"
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
            <span>📅 {{ profile.createdAt }}</span>
            <span>📊 投稿数：{{ profile.postCount }}</span>
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
const profile = ref<UserProfile | null>(null);
const props = defineProps<{
  userId: string;
}>();
onMounted(async () => {
  profile.value = await fetchUserProfile(props.userId);
});
</script>
