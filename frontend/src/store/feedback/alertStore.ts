import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    title: "",
    error: false,
    count: 0
  }),
  getters:{
    getAlert: (state) => ({
      title:state.title,
      error:state.error,
      count: state.count
    }),
  },
  actions:{
    showAlert(newTitle:string, error:boolean = false){
     this.title = newTitle 
     this.error = error
     this.count++
    }
  },
  
})