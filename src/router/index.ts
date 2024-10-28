import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue'
import AirView from '@/views/AirView.vue'
const routes = [
  {
    path: '/', component: HomeView
  },
  {
    path: '/air', component: AirView
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
