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
  {
    path: '/2fa',
    name: '2fa',
    component: () => import('@/page/auth/2faPage.vue'),
  },
  {
    path: '/forgotPassward',
    name: 'forgotPassward',
    component: () => import('@/page/auth/2faPage.vue'),
  },
  {
    path: '/session',
    name: '/session',
    component: () => import('@/page/auth/sessionPage.vue'),
  }
]