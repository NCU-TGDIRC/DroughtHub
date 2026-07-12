import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const SITE_NAME = '國立中央大學台灣與全球乾旱調查研究中心'

const routes = [
  {
    path: '/',
    redirect: '/cesr2026'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: `首頁 | ${SITE_NAME}`,
      description: '國立中央大學台灣與全球乾旱調查研究中心，致力於乾旱監測、氣候變遷調查與跨國研究合作，提供最新研究成果與中心消息。'
    }
  },
  {
    path: '/en',
    name: 'english',
    component: () => import('../views/EnglishView.vue'),
    meta: {
      title: `Home | ${SITE_NAME}`,
      description: 'Taiwan Global Drought Investigation Research Center (TGDIRC) at National Central University, dedicated to drought monitoring and climate change research.'
    }
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('../views/ResearchView.vue'),
    meta: {
      title: `研究方向 | ${SITE_NAME}`,
      description: '了解本中心在乾旱調查、水資源與氣候變遷領域的研究方向與最新學術著作。'
    }
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue'),
    meta: {
      title: `研究團隊 | ${SITE_NAME}`,
      description: '認識國立中央大學台灣與全球乾旱調查研究中心的指導教授與研究團隊成員。'
    }
  },
  {
    path: '/research-data',
    name: 'researchData',
    component: () => import('../views/ResearchDataView.vue'),
    meta: {
      title: `研究成果 | ${SITE_NAME}`,
      description: '瀏覽本中心發表之乾旱與水資源相關研究論文與出版品。'
    }
  },
  {
    path: '/conferences',
    name: 'conferences',
    component: () => import('../views/ConferenceListView.vue'),
    meta: {
      title: `研討會 | ${SITE_NAME}`,
      description: '查看本中心歷年舉辦與參與之國內外研討會資訊。'
    }
  },
  {
    path: '/cesr2026',
    name: 'cesr2026',
    component: () => import('../views/ConferenceView2026.vue'),
    meta: {
      title: `CESR 2026 研討會 | ${SITE_NAME}`,
      description: '2026 年氣候與環境永續研究研討會（CESR 2026）議程、報名與相關資訊。'
    }
  },
  {
    path: '/icqab',
    name: 'icqab',
    component: () => import('../views/ConferenceView.vue'),
    meta: {
      title: `ICQAB 研討會 | ${SITE_NAME}`,
      description: 'ICQAB 國際研討會議程、報名與相關資訊。'
    }
  }
  // --------------------
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始終滾動到頂部
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || SITE_NAME

  const description = to.meta.description || '國立中央大學台灣與全球乾旱調查研究中心官方網站。'
  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
    descTag = document.createElement('meta')
    descTag.setAttribute('name', 'description')
    document.head.appendChild(descTag)
  }
  descTag.setAttribute('content', description)
})

export default router