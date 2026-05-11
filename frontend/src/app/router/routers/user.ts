  import type { RouteRecordRaw } from 'vue-router'
  export const userRoutes: RouteRecordRaw[] = [
    {
      path: '/user:userId',
      name: 'user',
      component: () => import('@/page/user/UserProfilePage.vue'),
    },
  ]