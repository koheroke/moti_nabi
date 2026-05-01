import { ref } from "vue"
import {type SignupInput } from "../type/SignUpType"

export const useSignup = () =>{
    const loading = ref(false)
    const error = ref<string | null>(null)
  
    const signup = async (signupInput:SignupInput) => {
      loading.value = true
      error.value = null
      console.log("登録")
      console.log(signupInput)
      try {
      } catch (e) {
        error.value = '登録失敗'
      } finally {
        loading.value = false
      }
    }
  
    return { signup, loading, error }
}