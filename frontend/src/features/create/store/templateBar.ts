import type { thumbnail } from '../type/templateType';
import type { Case } from '../type/casetype';
import { defineStore } from 'pinia'
import { type previewSvgCase } from './createStore';
import { isSubset } from '@/composables/array/isSubset';

export const useTemplateBarStore = defineStore("template", {
  state: () => ({
    templateThumbnails: {} as Record<string, thumbnail>,
    selectedTemplateData: { id: "", data: {} } as {
      id: string, data: Record<string, Case>
    },
    selectedPocket: { caseId: "", id: "" },
    draggedCaseData: { caseId: "" },
    searchText: ""

  }),
  getters: {
    templateThumbnailsGetter: (state) => state.templateThumbnails,
    selectedTemplateDataGetter: (state) => state.selectedTemplateData,
    getSelectedPocketId: (state) => state.selectedPocket,
    searchTextGetter: (state) => state.searchText,
    draggedCaseDataGetter: (state) => state.draggedCaseData,
    selectedTemplateSvgDataGetter: (state): previewSvgCase[] => {
      const res = Object.entries(state.selectedTemplateData.data).map(([key, value]) => ({
        id: key,
        data: {
          id: value.id,
          name: value.name,
          case: value.case,
          canvas: value.canvas,
          handle: value.handle,
          pockets: Object.values(value.pockets).sort((a, b) => a.priority - b.priority).filter((thisPocket) => !thisPocket.logicalDelete),
          logicalDelete: value.logicalDelete
        },
      })).filter((thisCase) => !thisCase.data.logicalDelete);
      //console.log("res", res)
      return res
    },
    templateTagGetter: (state): string[] => {
      const taglist: string[] = []
      Object.values(state.templateThumbnails).forEach((thumbnail) => {
        thumbnail.tags.forEach((tag) => {
          if (taglist.includes(tag)) return;
          taglist.push(tag)
        })
      })
      return taglist
    },


    filteredTemplateThumbnailsGetter: (state) => {
      if (!state.templateThumbnails) return {}
      const keyword = state.searchText.trim().toLowerCase()
      if (keyword.length == 0) return state.templateThumbnails
      const result = keyword.split(' ');
      if (result.length == 1 && result[0][0] == "#") {
        return state.templateThumbnails
      }
      //console.log("result", result)
      const tags: string[] = []
      let word = ""
      result.forEach((st) => {
        if (st[0] == '#') {
          if (st.length != 1) tags.push(st.slice(1));
        } else {
          word += st
        }
      })


      const newThumbnail: Record<string, thumbnail> = {}
      //console.log("tags", tags)
      //console.log("word", word)
      Object.values(state.templateThumbnails).forEach((thumbnail) => {
        if (thumbnail.name.includes(word) && isSubset(
          tags, thumbnail.tags
        )
        ) {
          newThumbnail[thumbnail.id] = thumbnail
        }
      })
      return newThumbnail
    },
  },
  actions: {
    searchTextSetter(test: string) {
      this.searchText = test
    },
    setSelectedPocketId(ids: { id: string; caseId: string }) {
      this.selectedPocket = { id: ids.id, caseId: ids.caseId };
    },
    templateThumbnailsSetter(templateThumbnails: Record<string, thumbnail>) {
      this.templateThumbnails = templateThumbnails;
    },
    selectedTemplateDataSetter(selectedTemplateData: {
      id: string, data: Record<string, Case>
    },) {
      this.selectedTemplateData = selectedTemplateData;
    },
    draggedCaseDataSetter(id: string) {
      this.draggedCaseData = { caseId: id }
    }


  }
})