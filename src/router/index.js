import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../views/HomeView.vue'),
        TopLayout: () => import('../layouts/MainLayout.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('../views/AuthView.vue'),
        TopLayout: () => import('../layouts/EmptyLayout.vue')
      }
    },
    {
      path: '/clients',
      name: 'clients',
      components: {
        default: () => import('../views/Clients.vue'),
        TopLayout: () => import('../layouts/MainLayout.vue')
      }
    },
    {
      path: '/history',
      name: 'history',
      components: {
        default: () => import('../views/History.vue'),
        TopLayout: () => import('../layouts/MainLayout.vue')
      }
    }
  ]
})

export default router
