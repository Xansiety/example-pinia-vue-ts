import Counter1Page from '@/counter/pages/Counter1Page.vue'
import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Counter1Page
    }, 
  ]
})

export default router
