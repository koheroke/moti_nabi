<script setup lang="ts">
import { ref } from "vue";
import { BaseInput } from "@components/ui/form/BaseInput";
import { FormField } from "@/components/ui/form/FormField";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { BaseLabel } from "@/components/ui/form/BaseLabel";
import { useLogin } from "@/features/auth/composables/useLogin";
import GoogleButton from "./GoogleButton.vue";
const email = ref("");
const passward = ref("");
const error = ref("");
const Login = useLogin();
const onLogin = () => {
  const res = Login.login({ email: email.value, password: passward.value });
};
const loginWithGoogle = () => {};
</script>

<template>
  <form class="form">
    <FormField label="メールアドレスでログイン" :error="error" required>
      <BaseInput v-model="email" type="name" />
    </FormField>
    <FormField label="パスワード" :error="error" required>
      <BaseInput
        v-model="passward"
        title="形式に合ったパスワードを入力してください"
        type="password"
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      />
    </FormField>
    <BaseButton @click="onLogin"> ログイン</BaseButton>
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
