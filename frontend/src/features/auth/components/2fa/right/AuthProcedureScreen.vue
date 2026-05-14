<template>
  <div class="right">
    <div class="top">
      <h1>2段階認証の手順</h1>
      <li>
        <p>
          <a target="_blank" :href="href">Google Authenticator</a
          >を使ってQRコードを読み取る
        </p>
      </li>

      <li><p>表示された6桁のコードを入力する</p></li>
      <h3 style="margin-top: 30px">Authenticator DL用QRコード</h3>
      <section class="qrcode-section">
        <div class="qrcode" style="margin-right: auto">
          <img src="/images/qr/authenticator-google.png" class="qr-image" />
          <div>{{ "Andoroid用" }}</div>
        </div>
        <div class="qrcode" style="margin-left: auto">
          <img src="/images/qr/authenticator-apple.png" class="qr-image" />
          {{ "IOS/Apple用" }}
        </div>
      </section>
    </div>
    <div class="bottom">
      <v-otp-input
        v-model="otp"
        :length="otpLength"
        variant="outlined"
        type="number"
        class="custom-otp"
      />
      <BaseButton class="button" @click="onOtp">確認する</BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/ui/form/BaseButton/BaseButton.vue";
const emit = defineEmits(["completion:modelValue"]);
import { ref, onMounted } from "vue";
const otp = ref("");
const otpLength = 6;
const href = ref();
const onOtp = () => {
  if (otp.value.length == otpLength) emit("completion:modelValue", otp.value);
};
onMounted(() => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("iphone") > 0 || ua.indexOf("ipad") > 0) {
    href.value =
      "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ja";
  } else if (ua.indexOf("android") > 0) {
    href.value =
      "https://apps.apple.com/jp/app/google-authenticator/id388497605";
  } else {
    href.value =
      "https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=ja";
  }
});
</script>
<style lang="css" scoped>
.right {
  margin-left: auto;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgb(221, 218, 218);
}
.right h1 {
  color: #3b82f6;
  font-size: 35px;
  text-align: center;
  padding: 10px;
  padding-bottom: 25px;
  font-weight: 700;
}
.right p {
  padding-left: 20px;
  padding-bottom: 30px;
  font-weight: 400;
}
.custom-otp :deep(.v-otp-input__content) {
  width: 100%;
}
.custom-otp :deep(.v-field:nth-child(4)) {
  margin-left: 16px;
}

.top {
  padding-top: 40px;
  margin-bottom: auto;
}
.bottom {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
}
.qr-image {
  width: 120px;
  height: 120px;
  padding: 5px;
}
.qrcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 12px;
}
.qrcode-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  padding: 0px 30px;
}
.button {
  transition: Scale 0.5s ease-in;
}
.button:hover {
  transform: scale(1.02);
}
</style>
