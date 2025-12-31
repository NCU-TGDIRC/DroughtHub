<template>
  <div>
    <PageBanner title="conferenceList.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <div class="conference-list">
          <b-card v-for="(item, index) in conferenceList" :key="index" no-body class="conference-card mb-5 shadow-sm overflow-hidden">
            <b-row no-gutters>
              <b-col md="5" lg="4" class="conference-img-col">
                <div class="conference-img-wrapper" :style="{ backgroundImage: 'url(' + getImageUrl(item.image) + ')' }"></div>
              </b-col>
              <b-col md="7" lg="8">
                <b-card-body class="p-4 d-flex flex-column h-100">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <b-badge variant="primary" class="year-badge">{{ item.year }}</b-badge>
                    <span class="text-muted small fw-bold"><i class="fas fa-calendar-alt me-2"></i>{{ item.date }}</span>
                  </div>
                  <h3 class="card-title fw-bold mb-3">{{ item.title }}</h3>
                  <p class="card-text text-secondary mb-4 flex-grow-1">{{ item.description }}</p>
                  
                  <div class="mt-auto d-flex justify-content-between align-items-center border-top pt-3">
                    <div class="location-info text-muted small">
                       <i class="fas fa-map-marker-alt me-2 text-danger"></i>{{ item.location }}
                    </div>
                    <b-button :to="item.link" variant="outline-primary" class="fw-bold px-4 rounded-pill">
                      {{ $t('conferenceList.buttonText') }} <i class="fas fa-arrow-right ms-2"></i>
                    </b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'ConferenceListView',
  components: {
    PageBanner
  },
  computed: {
    conferenceList() {
      return this.$tm('conferenceList.items');
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return '';
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        console.error(e);
        return '';
      }
    }
  }
}
</script>

<style scoped>
/* Ensure icons are available if not globally imported */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.conference-card {
  border: none;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.conference-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.12) !important;
}

.conference-img-col {
  min-height: 250px;
}

.conference-img-wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 40% 50%;;
  transition: transform 0.5s ease;
}

.conference-card:hover .conference-img-wrapper {
  transform: scale(1.05);
}

.year-badge {
  font-size: 1rem;
  padding: 0.5em 1em;
  background-color: #003366 !important;
}

.card-title {
  color: #003366;
  font-size: 1.5rem;
  line-height: 1.4;
}

.card-text {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Fix for no-gutters in BootstrapVue 3 if needed, though b-row no-gutters is deprecated in BS5, usage here relies on compat or custom classes. 
   Bootstrap 5 uses g-0. Let's try to align with standard Bootstrap 5 classes if possible, but keep b-row props. 
*/
:deep(.row.no-gutters) {
  margin-right: 0;
  margin-left: 0;
}
:deep(.row.no-gutters > .col),
:deep(.row.no-gutters > [class*="col-"]) {
  padding-right: 0;
  padding-left: 0;
}
</style>