import { ref } from "vue"
import {type SignupInput } from "../type/SignUpType"
import { type User } from "@/store/user/userStore"
import { useUserStore } from "@/store/user/userStore"
const userStore = useUserStore()
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth/signup`;
export const useSignup = () =>{
    const loading = ref(false)
    const error = ref<string | null>(null)
    const signup = async (signupInput:SignupInput) => {
      loading.value = true
      error.value = null
      console.log("signupUrl",url)//consoleログ
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
        console.log("singup_res ",singup_res)//consoleログ
        const {userId,res} = await singup_res.json()
        console.log("userId",userId)//consoleログ
        console.log("res",res)//consoleログ
        const user:User ={
          id: userId,
          name: signupInput.name,
          email: signupInput.email
        }
        userStore.login(user,"token")
        return res
      } catch (e) {
        error.value = '登録失敗'
      } finally {
        loading.value = false
      }
    }
  
    return { signup, loading, error }
}

