import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/cesr2026'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'english',
    component: () => import('../views/EnglishView.vue')
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
    path: '/research-data',
    name: 'researchData',
    component: () => import('../views/ResearchDataView.vue')
  },
  {
    path: '/conferences',
    name: 'conferences',
    component: () => import('../views/ConferenceListView.vue')
  },
  {
    path: '/cesr2026',
    name: 'cesr2026',
    component: () => import('../views/ConferenceView2026.vue')
  },
  {
    path: '/icqab',
    name: 'icqab',
    component: () => import('../views/ConferenceView.vue')
  }
  // --------------------
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始終滾動到頂部
    return { top: 0 }
  },
})

export default router