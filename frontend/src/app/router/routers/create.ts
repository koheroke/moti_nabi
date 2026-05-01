  import type { RouteRecordRaw } from 'vue-router'
  export const createRoutes: RouteRecordRaw[] = [
    {
      path: '/create',
      name: 'create',
      component: () => import('@/page/create/CreatePage.vue'),
    },
  ]