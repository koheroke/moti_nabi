<script setup lang="ts">
import { ref } from "vue";
import { BaseInput } from "@components/ui/form/BaseInput";
import { FormField } from "@/components/ui/form/FormField";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { BaseLabel } from "@/components/ui/form/BaseLabel";
import GoogleButton from "./GoogleButton.vue";
const name = ref("");
const passward = ref("");
const error = ref("");
const onLogin = () => {};
const loginWithGoogle = () => {};
</script>

<template>
  <form class="form">
    <FormField label="名前" :error="error" required>
      <BaseInput v-model="name" type="name" />
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
