import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { authRoutes } from './routers/auth'
// import { userRoutes } from './routes/user'
// import { billingRoutes } from './routes/billing'
// import { systemRoutes } from './routes/system'

const routes: RouteRecordRaw[] = [
  ...authRoutes,
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})