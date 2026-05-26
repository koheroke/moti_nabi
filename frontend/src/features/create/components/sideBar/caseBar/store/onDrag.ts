import { defineStore } from 'pinia'

export const useCaseDragStore = defineStore('caseDragStore', {
  state: () => ({
    isDrag: false as boolean,
  }),
  getters: {
    isDragging: (state) => (
      state.isDrag
    ),
  },
  actions: {
    drag(bool: boolean) {
      this.isDrag = bool
    }
  },
})