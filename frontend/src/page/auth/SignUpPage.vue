<script setup lang="ts">
import SignupForm from "@/features/auth/components/signup/SignUp.vue";
</script>

<template>
  <div class="page">
    <div class="auth-card">
      <h1 class="title">アカウント作成</h1>

      <SignupForm />

      <p class="login-link">
        すでにアカウントをお持ちですか？
        <RouterLink to="/login">ログイン</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-card {
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

.login-link {
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
}

.page {
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
  padding: 24px;
  background-color: aliceblue;
}
</style>
