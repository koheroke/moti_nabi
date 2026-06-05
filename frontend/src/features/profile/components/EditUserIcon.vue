<template>
  <div class="closeArea" @click="emit('close')">
    <div class="editImage" v-if="option.img" @click.stop="">
      <div style="display: flex; margin-right: auto">
        <h2 style="text-align: left; font-weight: 700">
          プロフィール画像を編集
        </h2>
      </div>
      <div class="cropperArea">
        <cropper
          :src="option.img"
          @change="change"
          :stencil-props="{
            aspectRatio: 1 / 1,
          }"
        />
      </div>
      <section style="display: flex; margin-left: auto; gap: 10px">
        <BaseButton variant="ghost" @click="emit('close')"
          >キャンセル</BaseButton
        >
        <BaseButton @click="setIconUrl">確定</BaseButton>
      </section>
    </div>

    <div
      class="DropArea"
      v-else
      @drop.prevent="dropImage"
      @dragleave.prevent
      @dragover.prevent
      @click.stop=""
    >
      {{ "画像をドロップ" }}
      <Image :size="50"></Image>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { Image } from "lucide-vue-next";
import { ref } from "vue";
import { useAlertStore } from "@/store/feedback/alertStore";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { useUserProfileStore } from "@/features/profile/store/userProfileStore";

const userProfileStore = useUserProfileStore();
const alertStore = useAlertStore();
type optionType = {
  img: string | null;
  size: string;
  outputType: string;
};
const option = ref<optionType>({
  img: null,
  size: "500x500",
  outputType: "blob",
});

const croppedImage = ref<string | null>(null);

const change = ({ canvas }: { canvas: HTMLCanvasElement }) => {
  if (!canvas) return;
  croppedImage.value = canvas.toDataURL("image/png");
};
const emit = defineEmits<{
  (e: "close"): void;
  (e: "getNewIcon", image: string): void;
}>();

const setIconUrl = () => {
  if (!croppedImage.value) return;
  userProfileStore.editPrepareProfile({ iconUrl: croppedImage.value });
  emit("close");
};

const dropImage = (event: DragEvent) => {
  event.preventDefault();
  if (!event.dataTransfer) return;
  const file = event.dataTransfer.files[0];
  if (event.dataTransfer.files.length > 1) {
    alertStore.showAlert("2枚以上選択しないでください", true);
    return;
  }
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alertStore.showAlert("画像ファイルを選択してください", true);
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    if (!e.target) return;
    option.value.img = e.target.result as string | null;
  };

  reader.readAsDataURL(file);
};
</script>
<style lang="css" scoped>
.closeArea {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.203);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.editImage {
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
}

.cropperArea {
  width: 100%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
}

.DropArea {
  width: 80%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.881);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  gap: 10px;
  color: rgb(86, 86, 86);
}
</style>
