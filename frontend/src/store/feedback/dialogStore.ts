import { defineStore } from 'pinia'
export const useDialogStore = defineStore('dialog', {
  state: () => ({
    title: "",
    text:"",
    onClickOK: () => {},
    count: 0
  }),
  getters:{
    getDialog: (state) => ({
      title:state.title,
      text:state.text,
      onClickOK: state.onClickOK,
      count:state.count
    }),
  },
  actions:{
    showDialog(newTitle:string, newText:string ,onClickOK:() => void){
     this.title = newTitle 
     this.text = newText
     this.onClickOK = onClickOK,
     this.count++
    }
  },
  
})