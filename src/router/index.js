import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import LoginForm from '../components/LoginForm.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../components/LoginForm.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
