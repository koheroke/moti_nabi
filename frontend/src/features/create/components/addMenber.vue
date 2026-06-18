<template>
  <div class="box">
    <div class="coEditorList">
      <div v-for="menber in menbersGetter" :key="menber.userId">
        <div v-if="menber.role != 'owner'" class="card">
          <h2>
            {{ menber.userId }}
          </h2>
          <p>
            {{ "権限_" + menber.role }}
          </p>
          <Delete color="red" @click="deleteMenber(menber.userId)"></Delete>
        </div>
      </div>
    </div>
    <div class="input">
      <BaseInput
        placeholder="ユーザーIDで追加"
        v-model="userId"
        type="name"
      ></BaseInput>
      <v-select
        v-model="selectedRole"
        :items="Roles"
        item-title="title"
        item-value="value"
        label="カテゴリーを選択"
        variant="outlined"
      >
      </v-select>
    </div>
    <BaseButton @click="addMenber" :class="{ blockBotton: pushBlock }"
      >追加</BaseButton
    >
  </div>
</template>
<script setup lang="ts">
import BaseInput from "@/components/ui/form/BaseInput/BaseInput.vue";
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
import { Delete } from "lucide-vue-next";
import { ref, computed } from "vue";
import { useCreateStore } from "../store/createStore";
import { storeToRefs } from "pinia";
import { useCreateApi } from "@/features/create/api/createApi";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useSocketApi } from "../api/createSocketApi";
const socketApi = useSocketApi();
const userAuthStore = useUserAuthStore();
const alertStore = useAlertStore();
const createApi = useCreateApi();
const createStore = useCreateStore();
const { menbersGetter } = storeToRefs(createStore);
const selectedRole = ref("");
const userId = ref("");
const emit = defineEmits(["close"]);

const pushBlock = computed(() => {
  return (
    userAuthStore.userIdGetter == userId.value ||
    userId.value.length == 0 ||
    selectedRole.value.length == 0 ||
    userId.value.length == 0 ||
    selectedRole.value.length == 0 ||
    createStore.roleGetter != "owner"
  );
});
const Roles = ref([
  { title: "編集者", value: "editor" },
  { title: "閲覧者", value: "viewer" },
]);
const addMenber = async () => {
  if (pushBlock.value) return;
  //console.log(userId.value, selectedRole.value);
  const res = await createApi.addMenber({
    userId: userId.value,
    role: selectedRole.value,
    workId: createStore.workId,
  });
  //console.log("feefe", res);
  if (res == "success") {
    createStore.addMenber({
      userId: userId.value,
      role: selectedRole.value as "viewer" | "editor" | "owner",
    });
  } else {
    alertStore.showAlert("ユーザーが存在しません", true);
  }

  userId.value = "";
  selectedRole.value = "";
  emit("close");
};

const deleteMenber = async (userId: string) => {
  if (createStore.roleGetter != "owner") return;

  const res = await createApi.deleteMenber({
    userId: userId,
    workId: createStore.workId,
  });
  if (res == "success") {
    createStore.deleteMenber(userId);
    socketApi.kick(userId);
  } else {
    alertStore.showAlert("ユーザーが存在しません", true);
  }
};
</script>
<style lang="css" scoped>
.box {
  position: absolute;
  top: calc(100% + 8px);
  height: 30px;
  display: flex;
  right: 0;
  z-index: 1000;
  width: 350px;
  height: auto;
  min-height: 100px;
  background: white;
  border: 1px solid #ddd;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}

.coEditorList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  gap: 10px;
}

.card h2 {
  font-size: 20px;
  width: 160px;
  overflow-x: auto;
}

.card p {
  margin-left: auto;
  font-size: 12px;
}

.input {
  display: flex;
  height: 58px;
}
</style>
