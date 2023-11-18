import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'threadShow',
      props: true,
      component: () => import('@/components/PageThreadShow.vue')
    }
  ]
})

export default router
