<template>
  <div class="work-info">
    <section class="work-about">
      <h2>詳細</h2>
      <p class="content">
        {{ AboutGetter.bio }}
      </p>
    </section>

    <section class="work-menbers">
      <h2>作成メンバー</h2>
      <div class="userIcons">
        <div v-for="member in AboutGetter.members">
          <UserIcon
            :userid="member.user.profile.id"
            :thumbnailUrl="member.user.profile.iconUrl"
            size="medium"
          ></UserIcon>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useworkDetailStore } from "@/features/workDetail/store/useworkDetail";
import UserIcon from "@/features/profile/components/UserIcon.vue";
const workDetailStore = useworkDetailStore();
const { AboutGetter } = storeToRefs(workDetailStore);
</script>

<style scoped>
.work-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  text-align: left;
}
.work-about {
  flex: 1;
}
.content {
  border: 1px solid rgba(211, 207, 207, 0.691);
  border-radius: 10px;
  padding: 10px;
  height: 300px;
  overflow-y: auto;
}

.work-info h2 {
  font-size: 18px;
  font-weight: 600;
}
.work-info p {
  font-size: 15px;
  font-weight: 500;
}

.work-menbers {
  margin-top: auto;
  margin-bottom: 10px;
  box-shadow: 0px 0px 15px -5px #777777;
  border-radius: 10px;
  padding: 10px;
}
.userIcons {
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
