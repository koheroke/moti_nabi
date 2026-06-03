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
          ></BaseInput>
          <p>名前検索される時も使用されます</p>
          <p :class="{ error: name.length >= nameMax }">
            文字数制限 : {{ nameMax }}/{{ name.length }}
          </p>
        </section>
        <section class="input">
          <h2>説明</h2>
          <BaseTextArea v-model="detale"></BaseTextArea>

          <p :class="{ error: detale.length >= detaleMax }">
            文字数制限 : {{ detaleMax }}/{{ detale.length }}
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
          ></BaseInput>
          <suggest
            v-model:search="tagInput"
            :suggestDatas="allTags"
            @onsuggest="tags.push($event)"
          ></suggest>
        </section>
      </li>
      <section class="thumbnail"></section>
      <div class="publich">
        <BaseButton style="margin-left: auto" @click="onPublich"
          >公開する
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { BaseInput } from "@/components/ui/form/BaseInput";
import { BaseTextArea } from "@/components/ui/form/BaseTextArea/index.ts";
import { BaseButton } from "@/components/ui/form/BaseButton";
import { Tag } from "lucide-vue-next";
import suggest from "@/features/suggest/components/suggest.vue";
import { storeToRefs } from "pinia";
const name = ref<string>("");
const tagInput = ref<string>("");
const thumbnailUrl = ref<string>("");
const tags = ref<string[]>([]);
const detale = ref<string>("");
const allTags = ref<string[]>([]);
const detaleMax = ref(250);
const nameMax = ref(10);
const tagMax = ref(10);
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
const workPackageStore = useWorkPackageStore();
const { selectedPackageGetter } = storeToRefs(workPackageStore);
onMounted(async () => {
  const baseTag = await fetch("/json/work/baseTags.json");
  allTags.value = await baseTag.json();
  workPackageStore.workPackageStoreGetter.map((work) => {
    work.tags.forEach((tag) => {
      if (allTags.value.includes(tag) === false) allTags.value.push(tag);
    });
  });
});
const onPublich = () => {
  const normalizedName = name.value.normalize("NFKC");
  if (
    tags.value.length >= tagMax.value &&
    detale.value.length >= detaleMax.value &&
    normalizedName.length != 0 &&
    name.value.length >= nameMax.value
  ) {
    return;
  }
  const id = selectedPackageGetter.value.id;
  const publichToken = {
    id: id,
    name: name.value,
    detale: detale.value,
    tags: tags.value,
    thumbnailUrl: thumbnailUrl.value,
  };
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
</style>
