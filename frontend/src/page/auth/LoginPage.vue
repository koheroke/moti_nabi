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
  grid-template-columns: minmax(0, 1fr) 500px;
  min-height: 100vh;
  width: 100%;
}

.l-auth__left {
  min-width: 0;
  overflow: hidden;
  background: #3b82f6;
  color: white;
}

.l-auth__right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  gap: 20px;
}
</style>
