<template>
  <div v-if="getUserProfile" class="profile">
    <section class="right">
      <div class="icon">
        <img :src="getUserProfile.iconUrl" class="icon_image" />
        <div class="icon-edit" @click="onIconEdit">
          <Camera fill="white" :size="100" color="#1514143d"></Camera>
        </div>
        <imageDropTab
          class="imageDropTab"
          v-if="editUserIconShow"
          @close="editUserIconShow = false"
          :aspectRatio="{ x: 1, y: 1 }"
          :size="'500x500'"
          :outputType="'png'"
          :image="getUserProfile.iconUrl"
          @getNewIcon="userProfileStore.editPrepareProfile({ iconUrl: $event })"
        ></imageDropTab>
      </div>
      <div class="user-info">
        <BaseInput
          v-model="editProfile.name"
          class="name"
          @update:modelValue="
            userProfileStore.editPrepareProfile({ bio: editProfile.bio })
          "
        ></BaseInput>
        <div class="user-id">@{{ getUserProfile.userId }}</div>
      </div>
    </section>
    <section class="left">
      <div class="top">
        <h1 style="font-size: 20px; margin: 0">プロフィール</h1>
        <BaseButton style="margin-left: auto" @click="pushEdit"
          >変更を保存
        </BaseButton>
      </div>
      <div class="profile-description">
        {{ "自己紹介" }}
        <div class="bio">
          <BaseTextArea
            v-model="editProfile.bio"
            @update:modelValue="
              userProfileStore.editPrepareProfile({ bio: editProfile.bio })
            "
          >
          </BaseTextArea>
        </div>
        <div class="sns">
          <div
            v-for="sns in getUserProfile.snsAccounts"
            :key="sns.link"
            :href="sns.link"
            class="sns"
          >
            <img
              :src="`/svgicons/sns/${sns.type}.svg`"
              alt="icon"
              class="snsicon"
              @click="onIcon(sns.type)"
            />
          </div>
          <EditSnsurlTab
            :iconType="iconType"
            v-if="iconUrlTabShow"
            @close="iconUrlTabShow = false"
          ></EditSnsurlTab>
        </div>
        <div class="meta"></div>
      </div>
    </section>
  </div>

  <div v-else class="profile">読み込み中...</div>
</template>
<style src="../Profile.css"></style>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { BaseTextArea } from "@/components/ui/form/BaseTextArea/index.ts";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { Camera } from "lucide-vue-next";
import { BaseButton } from "@/components/ui/form/BaseButton";
import imageDropTab from "@/components/ui/form/imageDropTab/imageDropTab.vue";
import EditSnsurlTab from "./EditSnsurlTab.vue";
import { useUserProfileStore } from "../store/userProfileStore.ts";
import { useUserProfile } from "../composables/userProfile.ts";
import { storeToRefs } from "pinia";
import { useAlertStore } from "@/store/feedback/alertStore.ts";
const alertStore = useAlertStore();
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useDialogStore } from "@/store/feedback/dialogStore";
import { useRouter } from "vue-router";
const dialogStore = useDialogStore();
const userAuthStore = useUserAuthStore();
const router = useRouter();

onMounted(() => {
  if (!userAuthStore.isAuthenticated) {
    dialogStore.showDialog(
      "2段階認証を行いますか",
      "この機能の使用には2段階認証が必要です",
      () => {
        router.push("/2fa");
      },
    );
  }
});

const editProfile = ref({
  name: "",
  bio: "",
});
const userProfile = useUserProfile();
const userProfileStore = useUserProfileStore();
const { getUserProfile } = storeToRefs(userProfileStore);
const editUserIconShow = ref(false);
const iconUrlTabShow = ref(false);
const onIconEdit = () => {
  editUserIconShow.value = true;
};
const onIcon = (type: string) => {
  iconType.value = type;
  iconUrlTabShow.value = true;
};
const iconType = ref("");

const pushEdit = async () => {
  if (!userAuthStore.isAuthenticated) {
    return;
  }
  const res = await userProfile.pushUserProfileEdit();
  if (res == "success") {
    userProfileStore.setEditBool(false);
    alertStore.showAlert("変更が保存されました", false);
  } else {
    alertStore.showAlert("認証がありません", true);
    return;
  }
};
watch(
  getUserProfile,
  (profile) => {
    if (!profile) return;

    editProfile.value = {
      name: profile.name,
      bio: profile.bio,
    };
  },
  { immediate: true },
);
</script>
<style lang="css" scoped>
.imageDropTab {
  z-index: 100;
}
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
.snsicon {
  width: 40px;
  height: 40px;
}
.snsicon:hover {
  opacity: 0.5;
}

.profile {
  display: flex;
  width: 100%;
  height: 100%;
}

.left {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
}
.left .top {
  display: flex;
  height: auto;

  gap: 5px;
}

.bottons {
  display: flex;
  gap: 5px;
  margin-left: auto;
}

.left .top h1 {
  margin: 0px;
  text-wrap: nowrap;
  padding: 0px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: auto;
}
.right {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.edit {
  margin-left: auto;
}

@media screen and (max-width: 800px) {
  .user-introduction {
    height: 100%;
  }

  .left {
    flex-direction: column;
    width: 100%;
  }
  .right {
    width: 100%;
  }
  .profile {
    flex-direction: column;
  }
}
</style>
