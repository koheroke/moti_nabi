<script setup lang="ts">
import SignupForm from "@/features/auth/components/signup/SignUp.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.waves";
const vantaRef = ref<HTMLElement | null>(null);

let vantaEffect: any = null;

onMounted(() => {
  vantaEffect = WAVES({
    el: vantaRef.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
});

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});
</script>

<template>
  <div class="page" ref="vantaRef">
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
  background-color: rgb(255, 255, 255);
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
