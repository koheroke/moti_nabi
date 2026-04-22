import type { RouteRecordRaw } from 'vue-router'
export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/page/auth/LoginPage.vue'),
  },
]