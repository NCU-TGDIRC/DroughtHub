import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('../views/ResearchView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('../views/ReportsView.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/ActivitiesView.vue')
  },
  {
    path: '/icqab',
    name: 'icqab',
    component: () => import('../views/IcqabView.vue')
  },
  // --- [新增這一段] ---
  {
    path: '/english',
    name: 'english',
    component: () => import('../views/EnglishView.vue')
  }
  // --------------------
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router