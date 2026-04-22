<script setup lang="ts">
import LoginForm from "@features/auth/components/left/LoginForm.vue";
import AuthHero from "@/features/auth/components/right/AuthHero.vue";
import { BaseLabel } from "@/components/ui/form/BaseLabel";
</script>

<template>
  <div class="l-auth">
    <div class="l-auth__left">
      <AuthHero />
    </div>

    <div class="l-auth__right">
      <BaseLabel>持ちナビ</BaseLabel>
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
.l-auth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
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
}
</style>
