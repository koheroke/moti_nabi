import type { RouteRecordRaw } from 'vue-router'
export const prepRoutes: RouteRecordRaw[] = [
  {
    path: '/prep',
    name: 'prep',
    component: () => import('@/page/prep/PrepPage.vue'),
  },
]