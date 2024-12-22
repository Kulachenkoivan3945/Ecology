import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue'
import AirView from '@/views/AirView.vue'
import WastesView from '@/views/WastesView.vue'
import OtherView from '@/views/OtherView.vue'
import ReportingView from '@/views/ReportingView.vue'
import { PageLinks } from '@/enums';
const routes = [
  {
    path: PageLinks.MAIN, component: HomeView
  },
  {
    path: PageLinks.AIR, component: AirView
  },
  {
    path: PageLinks.WASTES, component: WastesView
  },
  {
    path: PageLinks.OTHER, component: OtherView
  },
  {
    path: PageLinks.REPORT, component: ReportingView
  },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
