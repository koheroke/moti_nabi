<script setup lang="ts">
import { ref, computed } from "vue";
import { BaseInput } from "@components/ui/form/BaseInput";
import { FormField } from "@/components/ui/form/FormField";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { BaseLabel } from "@/components/ui/form/BaseLabel";
import { useLogin } from "@/features/auth/composables/useLogin";
import GoogleButton from "./GoogleButton.vue";
import { useRecaptchaToken } from "@/features/auth/composables/recaptcha";
import { useRouter } from "vue-router";
const recaptchaToken = useRecaptchaToken();
const router = useRouter();
const Login = useLogin();
const email = ref("");
const password = ref("");
const error = ref("");

const isEmailValid = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});

const isPasswordValid = computed(() => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value);
});

const onLogin = async () => {
  const token = await recaptchaToken.get("SIGNUP");
  if (!isPasswordValid || !isEmailValid) return;
  const res = await Login.login(
    { email: email.value, password: password.value },
    token,
  );
  //console.log("res", res);
  if (res != null) {
    router.push("/home");
  }
};
const loginWithGoogle = async () => {
  window.location.href = "/auth/googleLogin";
};
</script>

<template>
  <form class="form">
    <FormField label="メールアドレスでログイン" :error="error" required>
      <BaseInput v-model="email" type="email" />
    </FormField>
    <FormField label="パスワード" :error="error" required>
      <BaseInput
        v-model="password"
        title="形式に合ったパスワードを入力してください"
        type="password"
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      />
    </FormField>
    <BaseButton @click.prevent="onLogin"> ここでログイン</BaseButton>
    <BaseLabel> ──────── または ──────── </BaseLabel>
    <GoogleButton @click="loginWithGoogle" />
  </form>
</template>

<style lang="css" scoped>
.form {
  gap: 20px;
  display: flex;
  flex-direction: column;
}
input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
}
</style>
