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
        <section class="publish-section">
          <h2>公開設定＊</h2>
          <div class="brief">
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
            @focus="suggestClose = false"
            @handleEnter="
              workDetailEdit.tags.push(tagInput);
              workDetailEditStore.addEdit({ tags: workDetailEdit.tags });
            "
          ></BaseInput>
          <div
            class="coverWindow"
            v-if="!suggestClose"
            @click="closeSuggest"
          ></div>
          <suggest
            v-if="!suggestClose"
            v-model:search="tagInput"
            :suggestDatas="allTags"
            @onsuggest="workDetailEdit.tags.push($event)"
            @close="closeSuggest"
          ></suggest>
        </section>
      </li>
      <div class="buttonBox">
        <BaseButton style="margin-left: auto" @click="onPublich"
          >変更を保存する
        </BaseButton>
      </div>

      <section style="margin-top: 20px" class="delete-section">
        <h2 style="color: red">削除</h2>
        <div class="brief" style="border: red 1px solid">
          <p style="color: red">この操作は取り消すことができません</p>
          <BaseButton
            style="margin-left: auto"
            class="deleteButton"
            @click="deleteConfirmation = true"
            variant="ghost"
            >作品を削除</BaseButton
          >
        </div>
        <confirmation
          @close="deleteConfirmation = false"
          v-if="deleteConfirmation"
          text="作品を削除しますか？"
          @yes="onDeleteWork"
        ></confirmation>
      </section>
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
import { storeToRefs } from "pinia";
import { publicWork } from "./publichAPi/publich";
import { useAlertStore } from "@/store/feedback/alertStore";
import { useWorkDetailEditStore } from "@/features/workDetailEdit/store/useworkDetail";
import { type editAboutType } from "@/features/workDetailEdit/store/useworkDetail";
import { Delete } from "lucide-vue-next";
import BaseDropdown from "@/components/ui/form/BaseDropdown/BaseDropdown.vue";
import { useRouter } from "vue-router";
import { useWork } from "@/features/work/composables/work";
const suggestClose = ref(true);
const closeSuggest = () => {
  suggestClose.value = true;
};
const work = useWork();
const router = useRouter();
const workDetailEditStore = useWorkDetailEditStore();
const alertStore = useAlertStore();
const tagInput = ref<string>("");

const allTags = ref<{ name: string; value: any; id: string }[]>([]);
const bioMax = ref(250);
const nameMax = ref(10);
const tagMax = ref(10);
const { AboutGetter } = storeToRefs(workDetailEditStore);
const deleteConfirmation = ref(false);
import confirmation from "@/components/feedback/confirmation/baseConfirmation/confirmation.vue";
const workDetailEdit = ref<editAboutType>({
  name: "",
  bio: "",
  tags: [],
  thumbnailJson: "",
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
  const tags = await baseTag.json();
  allTags.value = tags.map((tag: string) => {
    return {
      id: tag,
      value: tag,
      name: tag,
    };
  });
  workPackageStore.workPackageStoreGetter.map((work) => {
    work.tags.forEach((tag) => {
      if (allTags.value.map((tag) => tag.name).includes(tag) === false)
        allTags.value.push({ name: tag, value: tag, id: tag });
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
      thumbnailJson: profile.thumbnailJson,
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
  if (workDetailEdit.value.thumbnailJson) {
    //メールサーバーに画像を送ってurlをもらう
    workDetailEdit.value.thumbnailJson = "";
    workDetailEditStore.addEdit({
      thumbnailJson: workDetailEdit.value.thumbnailJson,
    });
  }

  const editData = workDetailEditStore.EditGetter;
  if (Object.keys(editData).length == 0) {
    return;
  }

  const id = selectedPackageIdGetter.value;
  const publichToken = { id: id, ...workDetailEditStore.EditGetter };
  const res = await publicWork(publichToken);
  if (res.success == true) {
    alertStore.showAlert("変更できました", false);
  } else {
    alertStore.showAlert("変更に失敗しました", true);
  }
};
const onDeleteWork = async () => {
  const id = selectedPackageIdGetter.value;
  const res = await work.deleteWork(id);
  if (res.success == false) {
    alertStore.showAlert("削除に失敗しました", true);
    return;
  }
  alertStore.showAlert("削除しました", false);
  router.push("/home");
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
.brief {
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
.buttonBox {
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

.thumbnail-edit:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.145);
}
.deleteButton:hover {
  background-color: red;
  color: white;
}

@media screen and (max-width: 800px) {
  .publish-section .brief {
    display: flex;
    flex-direction: column;
  }
  .delete-section .brief {
    display: flex;
    flex-direction: column;
  }
  .form {
    width: 80%;
  }
  .titlle {
    width: 80%;
  }
}
</style>
