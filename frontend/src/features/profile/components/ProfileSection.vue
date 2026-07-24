<template>
  <div v-if="getUserProfile" class="profile">
    <section class="right">
      <img :src="getUserProfile.iconUrl" class="icon" />

      <div class="user-info">
        <div class="name">{{ getUserProfile.name }}</div>
        <div class="user-id">@{{ getUserProfile.userId }}</div>
      </div>
    </section>
    <section class="left">
      <div class="top">
        <h1>プロフィール</h1>
        <section v-if="editbool">
          <div class="bottons">
            <BaseButton @click="onEdit" variant="ghost">編集 </BaseButton>
            <BaseButton @click="deleteAcount" variant="danger"
              >アカウントを削除</BaseButton
            >
          </div>
          <popInput
            v-if="showRePassward"
            @text="rePassward"
            @close="showRePassward = false"
            text="パスワードを入力してください"
          ></popInput>
        </section>
      </div>
      <div class="profile-description">
        {{ "自己紹介" }}
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
      userAuthStore.logout();
      router.push("/login");
    }
  }
};
</script>

<style lang="css" scoped>
.name {
  text-align: center;
}
.icon {
  border-radius: 100%;
  aspect-ratio: 1/1;
  border: 1px solid rgb(221, 219, 219);
}

.snsicon {
  width: 40px;
  height: 40px;
}
.snsicon:hover {
  opacity: 0.5;
}
.bottons {
  display: flex;
  gap: 5px;
}
.profile {
  display: flex;
  width: 100%;
  height: 400px;
}

.left {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
}
.left .top {
  height: auto;
  gap: 5px;
}

.left .top h1 {
  margin: 14px 0px;
  padding: 0px;
  font-size: 28px;
  font-weight: 500;
}
.right {
  display: flex;
  flex-direction: column;
  height: 100%;
  aspect-ratio: 1/1;
}

@media screen and (max-width: 800px) {
  .top {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .user-introduction {
    height: 100%;
  }
  .left {
    flex-direction: column;
  }
}
</style>
