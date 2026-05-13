  import type { RouteRecordRaw } from 'vue-router'
  export const entryRoutes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'entry',
      component: () => import('@/page/entryPage/EntryPage.vue'),
    },
  ]