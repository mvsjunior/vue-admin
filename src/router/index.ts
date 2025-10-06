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
  ],
})

export default router
