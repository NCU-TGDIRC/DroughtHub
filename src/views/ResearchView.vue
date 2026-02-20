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
            <b-button variant="primary" size="lg" @click="showReports" class="mt-4 publications-btn">
              <i class="fas fa-file-alt me-2"></i> {{ $t('research.viewPublications') }}
            </b-button>
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
.research-card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.research-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}
.icon-wrapper {
  margin: 0 auto;
}
.card-title-custom {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
  margin-bottom: 1rem;
}
.keywords-section {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}
.keywords-tags {
  margin-top: 0.5rem;
}
.badge.bg-primary {
  background-color: #0056b3 !important; /* A slightly more vibrant blue for tags */
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
}

.publications-btn {
  background-color: #0056b3;
  border-color: #0056b3;
  font-weight: 600;
  transition: background-color 0.3s, border-color 0.3s, transform 0.3s;
}

.publications-btn:hover {
  background-color: #003366;
  border-color: #003366;
  transform: translateY(-2px);
}

.reports-modal-body {
  max-height: 70vh;
  overflow-y: auto;
  padding: 1rem;
}

.year-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #003366;
  border-bottom: 3px solid #0056b3;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.publication-item {
  border: 1px solid #e9ecef;
  transition: box-shadow 0.3s ease;
}

.publication-item:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}

.publication-title a {
  color: #003366;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.publication-title a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.publication-authors {
  font-size: 0.9rem;
}

.publication-journal {
  font-size: 1rem;
}

.publication-tags .badge {
  font-size: 0.75rem;
  padding: 0.3em 0.6em;
}
</style>