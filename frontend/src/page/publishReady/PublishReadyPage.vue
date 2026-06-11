<template>
  <div class="page">
    <div class="titlle">
      <h1>持ち物リストを編集する</h1>
      <p>ギャラリーから閲覧した時の情報を設定できます</p>
    </div>
    <div class="form">
      <li class="inputList">
        <section class="input">
          <h2>名前＊</h2>
          <BaseInput
            label="名前"
            v-model="workDetailEdit.name"
            type="text"
            required="required"
            @update:modelValue="
              workDetailEditStore.addEdit({ name: workDetailEdit.name })
            "
          ></BaseInput>
          <p>名前検索される時も使用されます</p>
          <p :class="{ error: workDetailEdit.name.length >= nameMax }">
            文字数制限 : {{ nameMax }}/{{ workDetailEdit.name.length }}
          </p>
        </section>
        <section class="publish">
          <h2>公開設定＊</h2>
          <div class="publishBrief">
            <p>
              公開された持ち物リストはギャラリー画面から誰でも閲覧できる状態になります
            </p>
            <BaseDropdown
              v-model="publish"
              :options="options"
              style="margin-left: auto"
            ></BaseDropdown>
          </div>
        </section>
        <section class="input">
          <h2>説明</h2>
          <BaseTextArea
            v-model="workDetailEdit.bio"
            @update:modelValue="
              workDetailEditStore.addEdit({ bio: workDetailEdit.bio })
            "
          ></BaseTextArea>

          <p :class="{ error: workDetailEdit.bio.length >= bioMax }">
            文字数制限 : {{ bioMax }}/{{ workDetailEdit.bio.length }}
          </p>
        </section>
        <section class="input" style="margin-top: 40px">
          <h2 style="padding-bottom: 10px">タグを追加</h2>
          <div v-for="tag in workDetailEdit.tags" :key="tag">
            <div class="tag">
              <Tag :size="17"></Tag>
              {{ tag }}
              <Delete
                style="margin-left: auto"
                :size="20"
                fill="red"
                color="white"
                @click="deleteTag(tag)"
              ></Delete>
            </div>
          </div>

          <p :class="{ error: workDetailEdit.tags.length >= tagMax }">
            制限 : {{ tagMax }}/{{ workDetailEdit.tags.length }}
          </p>
          <BaseInput
            placeholder="タグを検索または追加"
            label="名前"
            type="text"
            v-model="tagInput"
            class="tagInput"
            @handleEnter="
              workDetailEdit.tags.push(tagInput);
              workDetailEditStore.addEdit({ tags: workDetailEdit.tags });
            "
          ></BaseInput>
          <suggest
            v-model:search="tagInput"
            :suggestDatas="allTags"
            @onsuggest="workDetailEdit.tags.push($event)"
          ></suggest>
        </section>

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
      </li>
      <div class="publich">
        <BaseButton style="margin-left: auto" @click="onPublich"
          >変更を保存する
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
import { Delete } from "lucide-vue-next";
import BaseDropdown from "@/components/ui/form/BaseDropdown/BaseDropdown.vue";
const workDetailEditStore = useWorkDetailEditStore();
const alertStore = useAlertStore();
const editThumbnailShow = ref(false);
const tagInput = ref<string>("");
const thumbnailImage = ref<string>("");
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
  public: false,
});
const publish = ref<string>("private");
const options = [
  { label: "パブリック", value: "public" },
  { label: "プライベート", value: "private" },
];

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

const deleteTag = (tag: string) => {
  const index = workDetailEdit.value.tags.indexOf(tag);
  workDetailEdit.value.tags.splice(index, 1);
  workDetailEditStore.addEdit({ tags: workDetailEdit.value.tags });
};
watch(
  AboutGetter,
  (profile) => {
    if (!profile) return;

    workDetailEdit.value = {
      name: profile.name,
      public: profile.public,
      bio: profile.bio,
      tags: profile.tags,
      thumbnailUrl: profile.thumbnailUrl,
    };
    publish.value = workDetailEdit.value.public ? "public" : "private";
  },
  { immediate: true },
);

watch(
  () => publish.value,
  (publish) => {
    if (publish === "public") {
      workDetailEdit.value.public = true;
    } else {
      workDetailEdit.value.public = false;
    }
    workDetailEditStore.addEdit({ public: workDetailEdit.value.public });
  },
);
const onPublich = async () => {
  if (
    workDetailEdit.value.tags.length > tagMax.value ||
    workDetailEdit.value.bio.length > bioMax.value ||
    workDetailEdit.value.name.length > nameMax.value
  ) {
    return;
  }
  if (workDetailEdit.value.thumbnailUrl) {
    //メールサーバーに画像を送ってurlをもらう
    workDetailEdit.value.thumbnailUrl = "";
    workDetailEditStore.addEdit({
      thumbnailUrl: workDetailEdit.value.thumbnailUrl,
    });
  }

  const editData = workDetailEditStore.EditGetter;
  if (Object.keys(editData).length == 0) {
    return;
  }

  const id = selectedPackageIdGetter.value;
  const publichToken = { id: id, ...workDetailEditStore.EditGetter };
  console.log("publichToken", publichToken);
  const res = await publicWork(publichToken);
  console.log("res", res);
  if (res.success == true) {
    alertStore.showAlert("公開できました", false);
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
h2 {
  font-size: 15px;
  padding-left: 2px;
  font-weight: 600;
  margin: 0px;
}
p {
  font-size: 12px;
  color: rgb(78, 77, 77);
}
.publishBrief {
  border: 1px solid rgba(171, 170, 170, 0.603);
  border-radius: 10px;
  padding: 8px;
  display: flex;
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
