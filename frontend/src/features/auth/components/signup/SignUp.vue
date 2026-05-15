<script setup lang="ts">
import { ref, computed } from "vue";
import { useSignup } from "../../composables/useSignUp";
import { FormField } from "@components/ui/form/FormField";
import { BaseInput } from "@components/ui/form/BaseInput";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useDialogStore } from "@/store/feedback/dialogStore";
import { useRecaptchaToken } from "../../composables/recaptcha";
const recaptchaToken = useRecaptchaToken();

const router = useRouter();
const dialogStore = useDialogStore();
const alertStore = useAlertStore();

const name = ref("azuma");
const email = ref("kouhei_24s1101798@nnn.ed.jp ");
const password = ref("azumax1000");
const passwordConfirm = ref("azumax1000");

const isEmailValid = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});

const isPasswordValid = computed(() => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value);
});

const { signup, loading } = useSignup();

const onSubmit = async () => {
  if (password.value !== passwordConfirm.value) {
    alertStore.showAlert("パスワードが一致しません", true);
    return;
  }
  if (!isEmailValid.value) {
    alertStore.showAlert("メールアドレスが正しくありません", true);
    return;
  }
  if (!isPasswordValid.value) {
    alertStore.showAlert("パスワードが正しくありません", true);
    return;
  }
  const token = await recaptchaToken.get("SIGNUP");
  const { error, loading } = await signup(
    {
      email: email.value,
      password: password.value,
      name: name.value,
    },
    token,
  );

  if (error) {
    alertStore.showAlert("登録に失敗しました", true); //errorBool
  }
  if (error == null && !loading) {
    onMounted(() => {
      alertStore.showAlert("アカウントが作成されました");
    });

    dialogStore.showDialog(
      "続けて2段階認証を行いますか",
      "機能の使用には2段階認証が必要です",
      () => {
        router.push("/2fa");
      },
    );
    router.push("/home"); //onboardingに後でかえる
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <FormField label="名前" required>
      <BaseInput v-model="name" />
    </FormField>
    <FormField label="メール" required>
      <BaseInput v-model="email" type="email" />
    </FormField>
    <FormField label="パスワード" required>
      <BaseInput
        v-model="password"
        title="8文字以上・英字と数字を含めてください"
        type="password"
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      />
    </FormField>
    <FormField label="パスワード確認" required>
      <BaseInput v-model="passwordConfirm" type="passwordConfirm" />
    </FormField>

    <button :disabled="loading">
      {{ loading ? "作成中..." : "アカウントを作成" }}
    </button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
}

button {
  margin-top: 8px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
