import { ref } from "vue"
import {type SignupInput } from "../type/SignUpType"
import { type User } from "@/store/user/userStore"
import { useUserStore } from "@/store/user/userStore"
const userStore = useUserStore()
const apiUrl = import.meta.env.VITE_API_URL

export const useSignup = () =>{
    const loading = ref(false)
    const error = ref<string | null>(null)
    const signup = async (signupInput:SignupInput) => {
      loading.value = true
      error.value = null
      const url = `${apiUrl} + /signup`;
      try {
        const singup_res = await fetch(
          url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupInput)
          }
        )
        const {userId,resBool} = await singup_res.json()
        const user:User ={
          id: userId,
          name: signupInput.name,
          email: signupInput.email
        }
        userStore.login(user,"token")
        return resBool
      } catch (e) {
        error.value = '登録失敗'
      } finally {
        loading.value = false
      }
    }
  
    return { signup, loading, error }
}

