<script setup lang="ts">
import { ref } from "vue";
import { BaseInput } from "@components/ui/form/BaseInput";
import { FormField } from "@/components/ui/form/FormField";
import { BaseButton } from "@/components/ui/form/BaseButton";

const email = ref("");
const error = ref("");
</script>

<template>
  <form class="form">
    <FormField label="メール" :error="error" required>
      <BaseInput v-model="email" type="email" />
    </FormField>
    <FormField label="パスワード" :error="error" required>
      <BaseInput v-model="email" type="email" />
    </FormField>
    <div class="buttons">
      <BaseButton> ログイン</BaseButton>
      <BaseButton variant="text" size="sm"> 新規登録はこちら</BaseButton>
    </div>
  </form>
</template>

<style lang="css" scoped>
.form {
  gap: 20px;
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
