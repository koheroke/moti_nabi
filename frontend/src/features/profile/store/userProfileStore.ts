import { defineStore } from 'pinia'
import type { UserProfile, editData } from '../types'
import type { RequireAtLeastOne } from "@/types/RequireAtLeastOne"
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthstore = useUserAuthStore();
type editPrepareProfile = RequireAtLeastOne<UserProfile>
type editProfile = RequireAtLeastOne<editData>


const useUserProfileStore = defineStore('userProfile', {
  state: () => ({
    userProfile: {
      userId: '',
      name: '',
      iconUrl: "/images/user/defaultIcon.png",
      bio: '',
      snsAccounts: [],
      followUserIds: [],
      bookmarkWorkIds: []
    } as UserProfile,
    editData: {} as editProfile,
    selectedUserId: '',
    editBool: false
  }),
  getters: {
    getUserProfile: (state) => state.userProfile,
    getSelectedUserId: (state) => state.selectedUserId,
    getEditData: (state) => state.editData,
    getEditBool: (state) => {
      if (userAuthstore.userId === state.selectedUserId) {
        return state.editBool;
      } else {
        return false;
      }
    }
  },
  actions: {
    setUserProfile(userProfile: UserProfile) {
      this.userProfile = { ...this.userProfile, ...userProfile }
    },
    editPrepareProfile(editPrepareProfile: editPrepareProfile) {
      this.userProfile = { ...this.userProfile, ...editPrepareProfile }
      this.editData = { ...this.editData, ...editPrepareProfile }
    },
    setSelectedUserId(selectedUserId: string) {
      this.selectedUserId = selectedUserId
    },
    clearEditData() {
      this.editData = {} as editProfile
    },
    setEditBool(bool: boolean) {
      this.editBool = bool
    }

  }
})
export { useUserProfileStore }