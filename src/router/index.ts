import AdminLayout from '@/layouts/admin/AdminLayout.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import LoginView from '@/views/guest/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guest.home',
      component: LoginView,
    },
    {
      path: '/login',
      name: 'guest.login',
      component: LoginView,
    },
    {
      path: '/admin/',
      name: 'admin.home',
      component: DashboardView,
      meta: {
        layout: AdminLayout,
        path: [
          {title: 'Dashboard', path: '/admin/'}
        ]
      }
    },
  ],
})

export default router
