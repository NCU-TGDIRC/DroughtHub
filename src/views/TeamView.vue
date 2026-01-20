<template>
  <div>
    <PageBanner title="team.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <!-- Main Professor Section -->
        <section v-if="mainProfessor" class="mb-5">
          <h2 class="section-title">{{ $t('team.directorTitle') }}</h2>
          <b-row class="g-4 justify-content-center">
            <b-col md="8" lg="6" xl="5">
               <!-- Using a larger column for the main professor -->
              <b-card no-body class="text-center h-100 shadow-sm card-hover-effect main-professor-card p-3">
                <b-card-body class="d-flex flex-column p-4 h-100">
                  <div class="mb-4">
                    <b-img :src="getImageUrl(mainProfessor.image)" rounded="circle" :alt="mainProfessor.name" class="member-img-director"></b-img>
                  </div>
                  <div class="flex-grow-1">
                    <h3 class="card-title-custom">{{ mainProfessor.name }}</h3>
                    <p class="text-muted mb-3">{{ mainProfessor.title }} | {{ mainProfessor.department }}</p>
                    <div v-if="mainProfessor.expertise && mainProfessor.expertise.length" class="expertise-block mt-3 pt-3 border-top">
                      <h6 class="fw-bold text-primary-emphasis">{{ $t('team.expertiseTitle') }}</h6>
                      <div class="expertise-content d-inline-block" v-html="mainProfessor.expertise.join('')"></div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <b-button :href="mainProfessor.detailUrl" target="_blank" variant="primary" class="btn-read-more">{{ $t('team.readMore') }}</b-button>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </section>

        <!-- Other Members Section -->
        <section>
          <h2 class="section-title">{{ $t('team.researchTeamTitle') }}</h2>
          <b-row class="g-4 align-items-stretch">
            <b-col v-for="member in otherMembers" :key="member.name" md="6" lg="4">
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
        </section>
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
    mainProfessor() {
      const members = this.$tm('team.members') || [];
      return members.find(member => member.name === '劉說安 Yuei-An Liou');
    },
    otherMembers() {
      const members = this.$tm('team.members') || [];
      return members.filter(member => member.name !== '劉說安 Yuei-An Liou');
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
.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  color: #003366;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: #0056b3;
  border-radius: 2px;
}

.card-hover-effect {
  border: 1px solid #e9ecef;
  border-radius: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover-effect:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.main-professor-card {
  border-color: #003366;
  border-width: 2px;
  box-shadow: 0 10px 30px rgba(0, 51, 102, 0.15);
}

.member-img-director {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.member-img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card-hover-effect:hover .member-img,
.card-hover-effect:hover .member-img-director {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.card-title-custom {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
}

.main-professor-card .card-title-custom {
  font-size: 1.8rem; /* Larger font for the director */
}

.expertise-content {
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: left;
}

.btn-read-more {
  background-color: #003366;
  border-color: #003366;
  color: #fff;
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1.25rem;
  font-weight: 600;
}

.btn-read-more:hover {
  background-color: #002244;
  border-color: #002244;
  color: #fff;
  opacity: 1;
  transform: scale(1.05);
}
</style>