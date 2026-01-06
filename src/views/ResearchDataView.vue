<template>
  <div>
    <PageBanner title="researchData.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <div v-for="group in publications" :key="group.year" class="mb-5">
          <h2 class="year-title">{{ group.year }}</h2>
          <div class="publications-list">
            <b-card v-for="(paper, index) in group.papers" :key="index" no-body class="publication-item mb-5 shadow-lg border-0 rounded-4 overflow-hidden">
              <b-card-body class="p-0">
                <!-- 1. Header Section (Title & Meta) -->
                <div class="p-4 p-lg-5 bg-white">
                  <h5 class="publication-title mb-3 text-center">
                    <a :href="paper.doi" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                      {{ paper.title }}
                      <i class="fas fa-external-link-alt ms-2 small text-muted opacity-50"></i>
                    </a>
                  </h5>
                  <div class="text-center mb-4">
                    <p class="publication-authors text-muted mb-2 d-inline-block me-3">
                      <i class="fas fa-user-friends me-2 text-primary opacity-75"></i>{{ paper.authors }}
                    </p>
                    <p class="publication-journal d-inline-block text-muted">
                      <i class="fas fa-book-open me-2 text-primary opacity-75"></i><em>{{ paper.journal }}</em>, {{ paper.details }}
                    </p>
                  </div>
                  <div class="text-center">
                    <b-badge v-for="tag in paper.tags" :key="tag" pill class="me-2 fw-normal py-2 px-3 shadow-sm" :variant="getTagVariant(tag)">{{ tag }}</b-badge>
                  </div>
                </div>

                <!-- 2. Image Section (Center & Prominent) - Only if image exists -->
                <div v-if="paper.image" class="publication-image-section position-relative">
                  <div class="image-backdrop"></div>
                  <div class="container-fluid px-0">
                    <div class="row justify-content-center g-0">
                      <div class="col-12">
                        <!-- 您可以調整下方的 max-width 數值 (例如 600px, 80%, 50rem) 來單獨更改照片顯示大小 -->
                        <div class="publication-image-container shadow-ultimate my-4 rounded-3 overflow-hidden mx-auto" style="max-width: 1300px;">
                          <img :src="getImgUrl(paper.image)" :alt="paper.title" class="img-fluid w-100 d-block">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 3. Summary Section - Only if summary exists -->
                <div v-if="paper.summary" class="p-4 p-lg-5 bg-light">
                  <div class="publication-summary mx-auto" style="max-width: 900px;">
                    <h6 class="fw-bold text-primary mb-3 text-uppercase text-center ls-1">
                      <i class="fas fa-quote-left me-2 text-secondary opacity-25"></i>Abstract<i class="fas fa-quote-right ms-2 text-secondary opacity-25"></i>
                    </h6>
                    <p class="mb-0 text-secondary lead text-center" style="line-height: 1.9;">
                      {{ paper.summary }}
                    </p>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'ResearchDataView',
  components: {
    PageBanner
  },
  computed: {
    publications() {
      const allPubs = this.$tm('reports.publications');
      if (Array.isArray(allPubs)) {
        return allPubs.filter(group => group.year === 2024);
      }
      return [];
    }
  },
  methods: {
    getTagVariant(tag) {
      if (tag.startsWith('IF')) return 'success';
      if (tag.startsWith('RF')) return 'info';
      if (tag === 'SCI') return 'danger';
      return 'secondary';
    },
    getImgUrl(path) {
      try {
        return require(`@/assets/${path}`);
      } catch (e) {
        return ''; 
      }
    }
  }
}
</script>

<style scoped>
.year-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #003366;
  border-bottom: 4px solid #0056b3;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
  letter-spacing: -0.5px;
  text-align: center;
}

.publication-item {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.publication-item:hover {
  transform: translateY(-8px);
}

.publication-title a {
  color: #003366;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.publication-title a:hover {
  color: #0056b3;
}

.publication-image-section {
  background: linear-gradient(to bottom, #ffffff 50%, #f8f9fa 50%); /* Seamless transition */
}

.publication-image-container {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease;
}

.publication-image-container:hover {
  transform: scale(1.02);
}

.ls-1 {
  letter-spacing: 2px;
}

.shadow-ultimate {
  box-shadow: 0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05);
}
</style>