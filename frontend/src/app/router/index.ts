import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { authRoutes } from './routers/auth'
import { createRoutes } from "./routers/create"
import { userRoutes } from './routers/user'
// import { billingRoutes } from './routes/billing'
// import { systemRoutes } from './routes/system'

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...createRoutes,
  ...userRoutes
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})