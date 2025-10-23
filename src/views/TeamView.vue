<template>
  <div>
    <PageBanner title="team.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <b-row class="g-4 align-items-stretch">
          <b-col v-for="member in members" :key="member.name" md="6" lg="4">
            <b-card no-body class="text-center h-100 shadow-sm card-hover-effect">
              <b-card-body class="d-flex flex-column p-4 h-100">
                <div class="mb-4">
                  <b-img :src="getImageUrl(member.image)" rounded="circle" :alt="member.name" class="member-img"></b-img>
                </div>
                <div class="flex-grow-1">
                  <h4 class="card-title-custom">{{ member.name }}</h4>
                  <p class="text-muted mb-3">{{ member.title }} | {{ member.department }}</p>
                  <div v-if="member.expertise && member.expertise.length" class="expertise-block mt-3 pt-3 border-top">
                    <h6 class="fw-bold text-primary-emphasis">{{ $t('team.expertiseTitle') }}</h6>
                    <div class="expertise-content d-inline-block" v-html="member.expertise.join('')"></div>
                  </div>
                </div>
                <div class="mt-4">
                  <b-button :href="member.detailUrl" target="_blank" size="sm" class="btn-read-more">{{ $t('team.readMore') }}</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'TeamView',
  components: {
    PageBanner
  },
  computed: {
    members() {
      return this.$tm('team.members');
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return 'https://via.placeholder.com/200';
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        return 'https://via.placeholder.com/200';
      }
    },
  },
};
</script>

<style scoped>
.member-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}
.card-title-custom {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
}
.expertise-content {
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: left;
}
.card-hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover-effect:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12) !important;
}

.btn-read-more {
  background-color: #003366;
  border-color: #003366;
  color: #fff;
  opacity: 0.85;
  transition: all 0.2s ease-in-out;
}

.btn-read-more:hover {
  background-color: #002244;
  border-color: #002244;
  color: #fff;
  opacity: 1;
}
</style>