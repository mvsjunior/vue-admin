import AdminLayout from '@/layouts/admin/AdminLayout.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import UsersView from '@/views/admin/UsersView.vue'
import LoginView from '@/views/guest/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from '@/middlewares/AuthMiddleware'

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
      beforeEnter: [isLoggedIn],
      meta: {
        layout: AdminLayout,
        path: [
          {title: 'Dashboard', path: '/admin/'}
        ]
      }
    },
    {
      path: '/admin/dashboard',
      name: 'admin.dashboard',
      component: DashboardView,
      beforeEnter: [isLoggedIn],
      meta: {
        layout: AdminLayout,
        path: [
          {title: 'Dashboard', path: '/admin/'}
        ]
      }
    },
    {
      path: '/admin/users',
      name: 'admin.users',
      component: UsersView,
      beforeEnter: [isLoggedIn],
      meta: {
        layout: AdminLayout,
        path: [
          {title: 'Usuários', path: {name: 'admin.users'}}
        ]
      }
    },
  ],
})

export default router
