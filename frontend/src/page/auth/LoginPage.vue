<script setup lang="ts">
import LoginForm from "@features/auth/components/login/left/LoginForm.vue";
import AuthHero from "@/features/auth/components/login/right/AuthHero.vue";
import { BaseLabel } from "@/components/ui/form/BaseLabel";
</script>

<template>
  <div class="l-auth">
    <div class="l-auth__left">
      <AuthHero />
    </div>

    <div class="l-auth__right">
      <BaseLabel class="title">持ちナビ</BaseLabel>
      <LoginForm />
      <p class="login-link">
        <RouterLink to="/signup">新規登録</RouterLink>
        はこちら
      </p>
    </div>
  </div>
</template>

<style scoped>
.l-auth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  min-width: 100vh;
}

.l-auth__left {
  background: #3b82f6;
  color: white;
  padding: 40px;
}

.l-auth__right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.title {
  font-weight: 900;
  font-size: 25px;
  color: #3b82f6;
}

.login-link {
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
}
</style>
