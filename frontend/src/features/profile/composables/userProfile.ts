// features/user/user.ts
import { useUserProfileStore } from "../store/userProfileStore";
const userProfileStore = useUserProfileStore()
import { useAlertStore } from "@/store/feedback/alertStore";
const alertStore = useAlertStore()

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/user`;

export const useUserProfile = () => {

  const pushUserProfileEdit = async () => {
    const editdata = userProfileStore.getEditData
    const userId = userProfileStore.selectedUserId
    if (!editdata) return null
    const edit = async () => {
      const data = await fetch(
        `${url}/setProfileEdit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            editdata: editdata,
            userId: userId
          })
        })
      return await data.json()
    }

    const editres = await edit()
    if (editres == "success") {
      userProfileStore.clearEditData()
      alertStore.showAlert("保存しました")
      return "success"
    } else {
      alertStore.showAlert("変更に失敗しました", true)
      return "error"
    }
  }


  const getUserProfile = async () => {

    const id = userProfileStore.selectedUserId;
    if (id == '') return null;
    const res = await fetch(
      `${url}/getProfile`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: id
        })
      })

    const data = await res.json()
    userProfileStore.setUserProfile(data)
    return "getUserProfile"
  }
  return { getUserProfile, pushUserProfileEdit }
}
