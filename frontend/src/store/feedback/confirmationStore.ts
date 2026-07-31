import { defineStore } from 'pinia'
type confirmationType = {
  text: string,
  onfunction: () => void
  show: boolean
}
export const useConfirmationStore = defineStore('confirmation', {
  state: () => ({
    text: "",
    onfunction: () => { },
    show: false
  }),
  getters: {
    getConfirmation: (state) => ({
      text: state.text,
      onfunction: state.onfunction,
      show: state.show,
    }),
  },
  actions: {
    close() {
      this.text = "";
      this.onfunction = () => { };
      this.show = false;
    },
    open(data: confirmationType) {
      this.text = data.text;
      this.onfunction = data.onfunction;
      this.show = data.show
    }
  },

})