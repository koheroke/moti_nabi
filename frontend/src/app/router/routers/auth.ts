import type { RouteRecordRaw } from 'vue-router'
export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/auth/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/page/auth/SignUpPage.vue'),
  },
]