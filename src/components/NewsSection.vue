<template>
  <section class="news-section py-5">
    <b-container>
      <h2 class="text-center display-5 fw-bold mb-5 text-white">{{ $t('news.title') }}</h2>
      
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
                  <router-link v-if="item.url && !item.url.startsWith('http')" :to="item.url" class="read-more-link" v-html="$t('news.readMore')">
                  </router-link>
                  <a v-else-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="read-more-link" v-html="$t('news.readMore')">
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
  computed: {
    news() {
      return this.$tm('news.items');
    }
  },
  data() {
    return {
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