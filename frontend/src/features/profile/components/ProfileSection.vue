<template>
  <div v-if="getUserProfile" class="profile">
    <div class="header">
      <section class="right">
        <img :src="getUserProfile.iconUrl" class="icon" />

        <div class="user-info">
          <div class="name">{{ getUserProfile.name }}</div>
          <div class="user-id">@{{ getUserProfile.userId }}</div>
        </div>
      </section>
      <section class="left">
        <div
          style="display: flex; justify-content: center; margin-bottom: 10px"
        >
          <h1 style="font-size: 20px; margin: 0; margin-right: auto">
            プロフィール
          </h1>
          <section
            style="margin-left: auto; gap: 10px; display: flex"
            v-if="editbool"
          >
            <BaseButton @click="onEdit" variant="ghost">編集 </BaseButton>
            <BaseButton @click="deleteAcount" variant="danger"
              >アカウントを削除</BaseButton
            >
            <popInput
              v-if="showRePassward"
              @text="rePassward"
              @close="showRePassward = false"
              text="パスワードを入力してください"
            ></popInput>
          </section>
        </div>
        <div class="profile-description">
          {{ "自己紹介 :" }}
          <div class="bio">
            {{ getUserProfile.bio }}
          </div>

          <div class="sns">
            <a
              v-for="sns in getUserProfile.snsAccounts"
              :key="sns.link"
              :href="sns.link"
              target="_blank"
              class="sns"
            >
              <img
                :src="`/svgicons/sns/${sns.type}.svg`"
                alt="icon"
                class="snsicon"
              />
            </a>
          </div>
          <div class="meta"></div>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="profile">読み込み中...</div>
</template>
<style src="../Profile.css"></style>
<script setup lang="ts">
import { useUserProfileStore } from "../store/userProfileStore";
import { storeToRefs } from "pinia";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { useRouter } from "vuetify/lib/composables/router.mjs";
import { userDelete } from "@/features/auth/composables/userDelete";
import popInput from "@/components/ui/form/popInput/popInput.vue";
import { ref } from "vue";
const router = useRouter();
const showRePassward = ref(false);
const userAuthStore = useUserAuthStore();
const userProfileStore = useUserProfileStore();
const { getUserProfile } = storeToRefs(userProfileStore);
const editbool =
  userAuthStore.userId === userProfileStore.selectedUserId ? true : false;

const onEdit = () => {
  userProfileStore.setEditBool(true);
};
const deleteAcount = async () => {
  showRePassward.value = true;
};
const rePassward = async (text: string) => {
  if (!router) return;
  const password = text;
  const passwordBool = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  if (passwordBool) {
    const res = await userDelete(password);
    if (res.success == true) {
      router.push("/login");
    }
  }
};
</script>

<style lang="css" scoped>
.name {
  text-align: center;
}
.icon_image {
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  border: 2px solid black;
}

.snsicon {
  width: 40px;
  height: 40px;
}
.snsicon:hover {
  opacity: 0.5;
}
</style>
