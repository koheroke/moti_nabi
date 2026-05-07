  import type { RouteRecordRaw } from 'vue-router'
  export const galleryRoutes: RouteRecordRaw[] = [
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/page/gallery/galleryPage.vue'),
    },
  ]
