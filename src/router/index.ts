import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SearchView from "@/views/SearchView.vue"
import StatisticView from "@/views/StatisticView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: StatisticView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
