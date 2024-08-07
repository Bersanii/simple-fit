import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      children: [
        // @ts-ignore
        { path: '', name: 'home', component: () => import('../pages/Index.vue') },
        { path: 'treinos', name: 'treinos', component: () => import('../pages/Treinos.vue') }
      ]
    },
  ]
})

export default router
