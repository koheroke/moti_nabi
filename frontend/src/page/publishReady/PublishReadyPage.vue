<template>
  <div class="page">
    <div class="titlle">
      <h1>持ち物リストを公開する</h1>
      <p>
        公開された持ち物リストはギャラリー画面から誰でも閲覧できる状態になります
      </p>
    </div>
    <div class="form">
      <li class="inputList">
        <section class="input">
          <h2>名前＊</h2>
          <BaseInput
            label="名前"
            v-model="name"
            type="text"
            required="required"
            @update:modelValue="
              workDetailEditStore.addEdit({ name: workDetailEdit.name })
            "
          ></BaseInput>
          <p>名前検索される時も使用されます</p>
          <p :class="{ error: name.length >= nameMax }">
            文字数制限 : {{ nameMax }}/{{ name.length }}
          </p>
        </section>
        <section class="input">
          <h2>説明</h2>
          <BaseTextArea
            v-model="bio"
            @update:modelValue="
              workDetailEditStore.addEdit({ bio: workDetailEdit.bio })
            "
          ></BaseTextArea>

          <p :class="{ error: bio.length >= bioMax }">
            文字数制限 : {{ bioMax }}/{{ bio.length }}
          </p>
        </section>
        <section class="input" style="margin-top: 40px">
          <h2 style="padding-bottom: 10px">タグを追加</h2>
          <div v-for="tag in tags" :key="tag">
            <div class="tag">
              <Tag :size="17"></Tag>
              {{ tag }}
            </div>
          </div>

          <p :class="{ error: tags.length >= tagMax }">
            制限 : {{ tagMax }}/{{ tags.length }}
          </p>
          <BaseInput
            placeholder="タグを検索または追加"
            label="名前"
            type="text"
            v-model="tagInput"
            class="tagInput"
            @handleEnter="
              tags.push(tagInput);
              workDetailEditStore.addEdit({ tags: workDetailEdit.tags });
            "
          ></BaseInput>
          <suggest
            v-model:search="tagInput"
            :suggestDatas="allTags"
            @onsuggest="tags.push($event)"
            @update:modelValue="
              workDetailEditStore.addEdit({ bio: workDetailEdit.bio })
            "
          ></suggest>
        </section>
      </li>
      <section class="thumbnail">
        <h2 style="padding-bottom: 10px">サムネイル画像を設定</h2>
        <img :src="thumbnailImage" class="icon_image" />
        <div class="icon-edit" @click="editThumbnailShow = true">
          <Camera fill="white" :size="100" color="#1514143d"></Camera>
        </div>
        <imageDropTab
          v-if="editThumbnailShow"
          @close="editThumbnailShow = false"
          :aspectRatio="{ x: 7, y: 5 }"
          :size="'700x500'"
          :outputType="'png'"
          @getNewIcon="thumbnailImage = $event"
        ></imageDropTab>
      </section>

      <div class="publich">
        <BaseButton style="margin-left: auto" @click="onPublich"
          >公開する
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { imageDropTab } from "@/components/ui/form/imageDropTab/index.ts";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { BaseTextArea } from "@/components/ui/form/BaseTextArea/index.ts";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { Tag } from "lucide-vue-next";
import suggest from "@/features/suggest/components/suggest.vue";
import { Camera } from "lucide-vue-next";
import { storeToRefs } from "pinia";
import { publicWork } from "./publichAPi/publich";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useWorkDetailEditStore } from "@/features/workDetailEdit/store/useworkDetail";
import { type editAboutType } from "@/features/workDetailEdit/store/useworkDetail";
const workDetailEditStore = useWorkDetailEditStore();
const alertStore = useAlertStore();
const editThumbnailShow = ref(false);
const name = ref<string>("");
const tagInput = ref<string>("");
const thumbnailUrl = ref<string>("");
const thumbnailImage = ref<string>("");
const tags = ref<string[]>([]);
const bio = ref<string>("");
const allTags = ref<string[]>([]);
const bioMax = ref(250);
const nameMax = ref(10);
const tagMax = ref(10);
const { AboutGetter } = storeToRefs(workDetailEditStore);
const workDetailEdit = ref<editAboutType>({
  name: "",
  bio: "",
  tags: [],
  thumbnailUrl: "",
});

import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
const workPackageStore = useWorkPackageStore();
const { selectedPackageIdGetter } = storeToRefs(workPackageStore);
onMounted(async () => {
  const baseTag = await fetch("/json/work/baseTags.json");
  allTags.value = await baseTag.json();
  workPackageStore.workPackageStoreGetter.map((work) => {
    work.tags.forEach((tag) => {
      if (allTags.value.includes(tag) === false) allTags.value.push(tag);
    });
  });
});

watch(
  AboutGetter,
  (profile) => {
    if (!profile) return;
    workDetailEdit.value = {
      name: profile.name,
      bio: profile.bio,
      tags: profile.tags,
      thumbnailUrl: profile.thumbnailUrl,
    };
  },
  { immediate: true },
);
const onPublich = async () => {
  // const normalizedName = name.value.normalize("NFKC");
  // if (
  //   tags.value.length < tagMax.value ||
  //   bio.value.length < bioMax.value ||
  //   name.value.length < nameMax.value ||
  //   normalizedName.length == 0
  // ) {
  //   return;
  // }

  const id = selectedPackageIdGetter.value;
  //メールサーバーに画像を送ってurlをもらう
  thumbnailUrl.value = "";
  workDetailEditStore.addEdit({
    thumbnailUrl: thumbnailUrl.value,
  });

  const publichToken = {
    id: id,
    name: name.value,
    bio: bio.value,
    tags: tags.value,
    thumbnailUrl: thumbnailUrl.value,
  };

  const res = await publicWork(publichToken);
  if (res.success == true) {
    alertStore.showAlert("公開できました");
  } else {
    alertStore.showAlert("公開に失敗しました", true);
  }
};
</script>
<style lang="css" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.form {
  width: 50%;
}
.inputList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input h2 {
  font-size: 15px;
  padding-left: 2px;
  font-weight: 600;
}
.input p {
  font-size: 12px;
  color: rgb(78, 77, 77);
}

.titlle {
  width: 50%;
  padding-bottom: 40px;
}
.titlle h1 {
  font-size: 20px;
  font-weight: 600;
}
.titlle p {
  font-size: 15px;
  color: rgb(78, 77, 77);
}
.publich {
  display: flex;
  padding-top: 50px;
  padding-bottom: 30px;
}
.tagInput {
  border: 0ch;
  border-radius: 0px;
  padding: 10px;
  border-bottom: 1px solid rgb(171, 170, 170);
  margin-top: 30px;
  font-size: 15px;
}
.tag {
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;
  padding-left: 20px;
  border: 1px solid rgb(171, 170, 170);
  color: rgb(139, 138, 138);
  margin-left: 2px;
}
.error {
  color: red !important;
}

.icon-edit {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    background-color 0.2s ease;
  height: 500px;
}
.thumbnail {
  margin-top: 30px;
  position: relative;
}
.icon_image {
  border-radius: 10px;
  width: 100%;
  height: 500px;
  aspect-ratio: 1/1;
}
.icon-edit:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.145);
}
</style>
