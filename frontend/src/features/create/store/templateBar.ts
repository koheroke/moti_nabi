import type { thumbnail } from '../type/templateType';
import type { Case } from '../type/casetype';
import { defineStore } from 'pinia'
import { type previewSvgCase } from './createStore';

export const useTemplateBarStore = defineStore("template", {
  state: () => ({
    templateThumbnails: {} as Record<string, thumbnail>,
    selectedTemplateData: { id: "", data: {} } as {
      id: string, data: Record<string, Case>
    },
    selectedPocket: { caseId: "", id: "" },
    draggedCaseData: { caseId: "" },

  }),
  getters: {
    templateThumbnailsGetter: (state) => state.templateThumbnails,
    selectedTemplateDataGetter: (state) => state.selectedTemplateData,
    getSelectedPocketId: (state) => state.selectedPocket,
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
      console.log("res", res)
      return res
    },
  },
  actions: {
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