import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome.vue'
import data from '@/data.json'

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
      component: () => import('@/pages/PageThreadShow.vue'),
      beforeEnter(to, from, next) {
        const threadExists = data.threads.find((thread) => thread.id === to.params.id)
        if (!threadExists) {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/PageNotFound.vue')
    }
  ]
})

export default router
