<template>
  <section class="news-section py-5">
    <b-container>
      <h2 class="text-center display-5 fw-bold mb-5 text-white">最新消息</h2>
      
      <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="news.length > 3">
        <slide v-for="item in news" :key="item.id">
          <div class="carousel__item">
            <b-card no-body class="h-100 shadow-sm overflow-hidden card-hover-effect">
              <b-card-body class="d-flex flex-column p-4">
                <p class="small text-muted mb-2">{{ item.date }}</p>
                <b-card-title class="mb-3 card-title-custom">{{ item.title }}</b-card-title>
                <b-card-text class="flex-grow-1 mb-4">
                  {{ item.excerpt }}
                </b-card-text>
                <div class="mt-auto">
                  <router-link v-if="item.url && !item.url.startsWith('http')" :to="item.url" class="read-more-link">
                    閱讀更多 &rarr;
                  </router-link>
                  <a v-else-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="read-more-link">
                    閱讀更多 &rarr;
                  </a>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </slide>

        <!-- 將導航和分頁元件放在插槽中 -->
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </b-container>
  </section>
</template>

<script>
// 1. 引入 vue3-carousel 的 CSS 和元件
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'NewsSection',
  // 2. 註冊新版本的元件
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      news: [
        { id: 1, date: '2025-09-27', title: 'CESR 2025 開放報名與投稿', excerpt: '首屆「氣候極端與社會韌性國際論壇 (CESR 2025)」官網已於今日開放報名與摘要投稿。論壇將於 2025 年 11 月 24-26 日於國立中央大學舉行，聚焦於乾旱、熱害、水資源...', url: '/icqab' },
        { id: 2, date: '2025-09-28', title: '本中心劉說安教授主編國際專刊徵稿', excerpt: '本研究中心劉說安講座教授現正主編國際期刊 Earth’s Future 與 GeoHealth 專刊：「極端高溫、熱浪與都市熱島對公共健康的衝擊：脆弱性、韌性與調適策略」。專刊徵稿至 2026 年 6 月 30 日截止，誠摯邀請相關領域研究者踴躍投稿...', url: 'https://agupubs.onlinelibrary.wiley.com/hub/journal/24711403/homepage/call-for-papers/si-2025-001141' },
        { id: 3, date: '2025-09-30', title: '本中心發表 RSETI 新指標', excerpt: '由劉說安教授團隊提出「相對地表蒸發散指數」（RSETI），突破現有遙測乾旱監測的限制。成功描繪 2001–2022 年澳洲乾旱演變，並驗證其在農業管理與氣候調適上的應用潛力。成果刊登於Remote Sensing of Environment...', url: 'https://spec.ntu.edu.tw/research/research-detail271' },
        { id: 4, date: '2025-10-01', title: '第四則新聞標題', excerpt: '這是第四則新聞的摘要', url: '#' },
        { id: 5, date: '2025-10-02', title: '第五則新聞標題', excerpt: '這是第五則新聞的摘要', url: '#' },
        { id: 6, date: '2025-10-03', title: '第六則新聞標題', excerpt: '這是第六則新聞的摘要', url: '#' },
      ],
      // 3. 輪播的基本設定
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 4. 響應式斷點設定
      breakpoints: {
        // 768px and up
        768: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        // 992px and up
        992: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    };
  },
};
</script>

<style scoped>
.news-section {
  background-color: #1a2a3a;
}

/* 5. 針對 vue3-carousel 的結構進行樣式調整 */
.carousel__item {
  padding: 0 10px;
  width: 100%;
  height: 100%;
}

.card-title-custom {
  color: #003366;
  font-size: 1.25rem;
  font-weight: 600;
}

.card-hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12) !important;
}

.read-more-link {
  color: #d4a373;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.read-more-link:hover {
  color: #c8925a;
}

/* 6. 使用 :deep() 客製化箭頭和分頁圓點 */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(26, 42, 58, 0.8);
  border: 1px solid #d4a373;
  color: #d4a373;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
}
:deep(.carousel__prev) {
  left: -90px;
}
:deep(.carousel__next) {
right: -90px;
}

:deep(.carousel__prev):hover,
:deep(.carousel__next):hover {
  background-color: #d4a373;
  color: white;
}

:deep(.carousel__icon) {
  transform: scale(1.5); /* 放大 SVG 圖示 */
}

:deep(.carousel__pagination-button) {
  background-color: rgba(212, 163, 115, 0.4);
}

:deep(.carousel__pagination-button--active) {
  background-color: #d4a373;
}
</style>