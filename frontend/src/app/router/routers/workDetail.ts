  import type { RouteRecordRaw } from 'vue-router'
  export const detailRoutes: RouteRecordRaw[] = [
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/page/workDetail/workDetailPage.vue'),
    },
  ]