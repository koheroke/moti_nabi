<template>
  <div class="basePage">
    <SplitQr2fa :otpauthUrl="use2faResponse?.otpauthUrl"></SplitQr2fa>
    <AuthProcedureScreen
      v-model="otp"
      @completion:model-value="sendOtp"
    ></AuthProcedureScreen>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { use2fa, type Setup2FAResponse } from "@/features/auth/composables/2fa";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import SplitQr2fa from "@/features/auth/components/2fa/left/SplitQr2fa.vue";
import AuthProcedureScreen from "@/features/auth/components/2fa/right/AuthProcedureScreen.vue";
import { onMounted } from "vue";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useRouter } from "vue-router";

const router = useRouter();
const alertStore = useAlertStore();
const use2faResponse = ref<Setup2FAResponse | null>(null);
const otp = ref("");
const this_2fa = use2fa();
const redirect = router.options.history.state.back;

const sendOtp = async (otp: string) => {
  const verificationBool = await this_2fa.verification2fa(otp);
  if (verificationBool) {
    alertStore.showAlert("2段階認証に成功しました");
    if (redirect == undefined) {
      router.push("/");
    }
    router.push(`${redirect}`);
  } else {
    alertStore.showAlert("2段階認証に失敗しました", true);
  }
};

onMounted(async () => {
  if (!userAuthstore.isAuthenticated) {
    router.push("/login");
    alertStore.showAlert("ログイン情報の取得に失敗しました", true);
    return;
  }
  use2faResponse.value = await this_2fa.setup();
});
const userAuthstore = useUserAuthStore();
</script>
<style lang="css" scoped>
.basePage {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

@media screen and (min-width: 800px) {
  .basePage {
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .basePage {
    flex-direction: column;
    gap: 40px;
  }
  .right {
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
  }
  .left {
    width: 100%;
    padding-top: 0%;
    margin: 0;
  }
}
.custom-otp {
  width: 100%;
  padding: 24px;
}

.custom-otp :deep(.v-otp-input__content) {
  width: 100%;
}

.custom-otp :deep(.v-field:nth-child(4)) {
  margin-left: 16px;
}

.custom-otp :deep(.v-field) {
  flex: 1;
  height: 146px;
}

.custom-otp :deep(input) {
  font-size: 24px;
  text-align: center;
}
</style>
