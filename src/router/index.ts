import Counter1Page from '@/counter/pages/Counter1Page.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Counter1Page
    }, 
    {
      path: '/setup',
      name: 'setup',
      component: CounterSetupPage
    }, 
  ]
})

export default router
