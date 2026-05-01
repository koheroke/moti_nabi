<script setup lang="ts">
import { ref } from "vue";
import { useSignup } from "../../composables/useSignUp";
import { FormField } from "@components/ui/form/FormField";
import { BaseInput } from "@components/ui/form/BaseInput";

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const { signup, loading, error } = useSignup();

const onSubmit = async () => {
  if (password.value !== passwordConfirm.value) {
    alert("パスワードが一致しません");
    return;
  }

  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute(
      "6LerNccsAAAAABAI5TvYl4D2gN4ByCej9jbXavs1",
      { action: "SIGNUP" },
    );
    await signup({
      email: email.value,
      password: password.value,
      name: name.value,
      recaptchaToken: token,
    });
  });
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

    <p v-if="error" class="error">{{ error }}</p>
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

.error {
  color: red;
  font-size: 14px;
}
</style>
