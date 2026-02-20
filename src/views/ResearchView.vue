<template>
  <div>
    <PageBanner title="research.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <b-row class="justify-content-center text-center mb-5">
          <b-col lg="10">
            <h1 class="display-5 fw-bold mb-4" style="color: #003366;">{{ $t('research.mainTitle') }}</h1>
            <p class="lead text-muted">
              {{ $t('research.description') }}
            </p>

            <div class="publication-cta-wrapper mt-5">
              <div class="cta-background-deco"></div>
              <div class="publication-content">
                <p class="cta-hint">{{ $t('research.exploreWork') || 'Explore our scholarly work' }}</p>
                <a @click="showReports" class="premium-launch-btn">
                  <div class="btn-icon-box">
                    <i class="fas fa-book-reader"></i>
                  </div>
                  <div class="btn-text-content">
                    <span class="main-label">{{ $t('research.viewPublications') }}</span>
                    <span class="sub-label">{{ $t('research.viewPublicationsSub') }}</span>
                  </div>
                  <div class="btn-arrow">
                    <i class="fas fa-chevron-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col v-for="area in researchAreas" :key="area.title" md="6" lg="4">
            <b-card no-body class="h-100 shadow-sm text-center research-card">
              <b-card-body class="p-4 d-flex flex-column">
                <div class="icon-wrapper mb-4">
                  <i :class="area.icon"></i>
                </div>
                <h4 class="card-title-custom">{{ area.title }}</h4>
                <p class="text-muted small flex-grow-1">{{ area.description }}</p>
                <div class="mt-4 keywords-section">
                  <h6 class="fw-bold">{{ $t('research.keywordsTitle') }}</h6>
                  <div class="keywords-tags">
                    <b-badge v-for="keyword in area.keywords" :key="keyword" pill variant="primary" class="me-1 mb-1 fw-normal">{{ keyword }}</b-badge>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>

    <b-modal v-model="reportsModal" size="xl" centered :title="$t('reports.bannerTitle')" hide-footer>
      <div class="reports-modal-body">
        <div v-for="group in publications" :key="group.year" class="mb-5">
          <h2 class="year-title">{{ group.year }}</h2>
          <div class="publications-list">
            <b-card v-for="(paper, index) in group.papers" :key="index" no-body class="publication-item mb-3">
              <b-card-body class="p-4">
                <h5 class="publication-title mb-3">
                  <a :href="paper.doi" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a>
                </h5>
                <p class="publication-authors text-muted mb-2">{{ paper.authors }}</p>
                <p class="publication-journal mb-3">
                  <em>{{ paper.journal }}</em>, {{ paper.details }}
                </p>
                <div class="publication-tags">
                  <b-badge v-for="tag in paper.tags" :key="tag" pill class="me-2 fw-normal" :variant="getTagVariant(tag)">{{ tag }}</b-badge>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'ResearchView',
  components: {
    PageBanner
  },
  data() {
    return {
      reportsModal: false
    }
  },
  computed: {
    researchAreas() {
      return this.$tm('research.areas');
    },
    publications() {
      return this.$tm('reports.publications');
    }
  },
  methods: {
    showReports() {
      this.reportsModal = true;
    },
    getTagVariant(tag) {
      if (tag.startsWith('IF')) return 'success';
      if (tag.startsWith('RF')) return 'info';
      if (tag === 'SCI') return 'danger';
      return 'secondary';
    }
  }
}
</script>

<style scoped>
/* 頁面原有樣式保留，下方為新增/修改的按鈕區設計 */

.publication-cta-wrapper {
  position: relative;
  padding: 5rem 2rem;
  background-image: 
    /* 遮罩層：確保文字清晰，從左至右由深變淺 */
    linear-gradient(135deg, rgba(0, 26, 51, 0.95) 0%, rgba(0, 51, 102, 0.8) 100%),
    /* 替換為你的圖片路徑 */
    url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000');
  
  background-size: cover;
  background-position: center;
  /* 增加視差滾動感 */
  background-attachment: scroll; 
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 增加一個「光塵」特效，模擬顯微鏡下的微粒感 */
.cta-background-deco::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: radial-gradient(circle, #fff 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  pointer-events: none;
}

/* case2
.publication-cta-wrapper {
  position: relative;
  padding: 4rem 2rem;
  background-color: #001a33; 
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(0, 86, 179, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 123, 255, 0.3) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.cta-background-deco::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg at 50% 50%, transparent, rgba(0, 123, 255, 0.1), transparent);
  animation: rotateLight 15s linear infinite;
  z-index: -1;
}

@keyframes rotateLight {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
*/ 


/* 輔助文字 */
.cta-hint {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

/* 高級質感按鈕 */
.premium-launch-btn {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 30px;
  border-radius: 100px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
}

.premium-launch-btn:hover {
  background: rgba(255, 255, 255, 0.95);
  color: #003366;
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* 按鈕左側圖示盒 */
.btn-icon-box {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-right: 18px;
  box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
  transition: transform 0.5s ease;
}

.premium-launch-btn:hover .btn-icon-box {
  transform: rotate(360deg);
}

/* 按鈕文字區域 */
.btn-text-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 25px;
}

.main-label {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
}

.sub-label {
  font-size: 0.8rem;
  opacity: 0.8;
  font-weight: 400;
}

/* 右側小箭頭 */
.btn-arrow {
  font-size: 0.9rem;
  opacity: 0.5;
  transition: transform 0.3s ease;
}

.premium-launch-btn:hover .btn-arrow {
  transform: translateX(5px);
  opacity: 1;
}

/* 懸停時的發光效果 */
.premium-launch-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  box-shadow: 0 0 20px rgba(0, 210, 255, 0);
  transition: box-shadow 0.3s ease;
}

.premium-launch-btn:hover::after {
  box-shadow: 0 0 30px rgba(0, 210, 255, 0.4);
}

/* 響應式微調 */
@media (max-width: 768px) {
  .premium-launch-btn {
    padding: 10px 20px;
  }
  .main-label {
    font-size: 1.1rem;
  }
  .btn-icon-box {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>