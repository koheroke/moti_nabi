import type { RouteRecordRaw } from 'vue-router'
export const publishReadyRouters: RouteRecordRaw[] = [
  {
    path: '/publishReady',
    name: 'publishReady',
    component: () => import('@/page/publishReady/PublishReadyPage.vue')
  },
]