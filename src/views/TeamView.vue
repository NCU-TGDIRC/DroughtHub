<template>
  <div>
    <PageBanner title="team.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <!-- Main member row -->
        <b-row v-if="mainMember" class="g-4 justify-content-center mb-5">
          <b-col md="6" lg="4">
            <b-card no-body class="text-center h-100 shadow-sm card-hover-effect">
              <b-card-body class="d-flex flex-column p-4 h-100">
                <div class="mb-4">
                  <b-img :src="getImageUrl(mainMember.image)" rounded :alt="mainMember.name" class="member-img"></b-img>
                </div>
                <div class="flex-grow-1">
                  <h4 class="card-title-custom card-member-name">{{ mainMember.name }}</h4>
                  <p class="text-muted mb-1 card-member-title card-member-subtitle">{{ mainMember.title }} | {{ mainMember.department }}</p>
                  <template v-for="grp in [getMemberGroup(mainMember.name)]" :key="'mg'">
                    <span v-if="grp" class="group-badge" :class="grp.colorClass">{{ grp.name }}</span>
                  </template>
                  <div v-if="mainMember.expertise && mainMember.expertise.length" class="expertise-block mt-3 pt-3 border-top">
                    <h6 class="fw-bold text-primary-emphasis expertise-heading">{{ $t('team.expertiseTitle') }}</h6>
                    <div class="expertise-content d-inline-block" v-html="mainMember.expertise.join('')"></div>
                  </div>
                </div>
                <div class="mt-4">
                  <b-button :href="mainMember.detailUrl" target="_blank" size="sm" class="btn-read-more">{{ $t('team.readMore') }}</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!-- Other members row -->
        <b-row class="g-4 align-items-stretch">
          <b-col v-for="member in otherMembers" :key="member.name" md="6" lg="4">
            <b-card no-body class="text-center h-100 shadow-sm card-hover-effect">
              <b-card-body class="d-flex flex-column p-4 h-100">
                <div class="mb-4">
                  <b-img :src="getImageUrl(member.image)" rounded :alt="member.name" class="member-img"></b-img>
                </div>
                <div class="flex-grow-1">
                  <h4 class="card-title-custom card-member-name">{{ member.name }}</h4>
                  <p class="text-muted mb-1 card-member-title card-member-subtitle">{{ member.title }} | {{ member.department }}</p>
                  <template v-for="grp in [getMemberGroup(member.name)]" :key="'mg'">
                    <span v-if="grp" class="group-badge" :class="grp.colorClass">{{ grp.name }}</span>
                  </template>
                  <div v-if="member.expertise && member.expertise.length" class="expertise-block mt-3 pt-3 border-top">
                    <h6 class="fw-bold text-primary-emphasis expertise-heading">{{ $t('team.expertiseTitle') }}</h6>
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

        <!-- International Advisors -->
        <div class="text-center">
          <h2 class="my-5 section-title">{{ $t('team.internationalAdvisorsTitle') }}</h2>
        </div>
        <b-row class="g-4 align-items-stretch justify-content-center">
          <b-col v-for="advisor in internationalAdvisors" :key="advisor.name" md="6" lg="4">
            <b-card no-body class="text-center h-100 shadow-sm card-hover-effect">
              <b-card-body class="d-flex flex-column p-4 h-100">
                <div class="mb-4">
                  <b-img :src="getImageUrl(advisor.image)" rounded :alt="advisor.name" class="member-img"></b-img>
                </div>
                <div class="flex-grow-1">
                  <h4 class="card-title-custom">{{ advisor.name }}</h4>
                  <p class="text-muted mb-3">{{ advisor.title }}</p>
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
  data() {
    return {
      groupDefs: [
        {
          id: 1,
          zh: '極端氣候智慧監測與數據技術組',
          en: 'Climate Monitoring & Data Technology',
          colorClass: 'group-blue',
          members: ['劉說安', 'Yuei-An Liou', '郭政靈', 'Cheng-Ling Kuo', '姜壽浩', 'Shou-Hao Chiang', '任玄', 'Hsuan Ren'],
        },
        {
          id: 2,
          zh: '複合型氣候風險與健康韌性組',
          en: 'Climate Risk & Health Resilience',
          colorClass: 'group-green',
          members: ['龍世俊', 'Shih-Chun Candice Lung', '潘士群', 'Shih-Chun Pan', '羅月霞', 'Yueh-Hsia Luo', '黃佳瑜', 'Chia-Yu Huang', '徐峻賢', 'Chun-Hsien Hsu', '葉靖輝', 'Ching-Hui Yeh'],
        },
        {
          id: 3,
          zh: '風險治理與影響力評估組',
          en: 'Risk Governance & Impact Assessment',
          colorClass: 'group-purple',
          members: ['沈建文', 'Chien-Wen Shen', '許文錦', 'Wen-Chin Hsu', '曾筱珽', 'Hsiao-Ting Tseng', '葉錦徽', 'Jin-Huei Yeh'],
        },
      ],
    };
  },
  computed: {
    members() {
      return this.$tm('team.members');
    },
    mainMember() {
      return this.members.find(
        (member) => member.name.includes('Yuei-An Liou') || member.name.includes('劉說安')
      );
    },
    otherMembers() {
      return this.members.filter(
        (member) => !member.name.includes('Yuei-An Liou') && !member.name.includes('劉說安')
      );
    },
    internationalAdvisors() {
      const sections = this.$tm('conference2026.sections') || [];
      const board = sections.find(s => s.isEditorialBoard);
      return board ? board.content.advisors : [];
    },
  },
  mounted() {
    this.equalizeRows();
    window.addEventListener('resize', this.equalizeRows);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.equalizeRows);
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
    getMemberGroup(name) {
      const def = this.groupDefs.find(g => g.members.some(n => name.includes(n)));
      if (!def) return null;
      const isZh = this.$i18n.locale === 'zh-TW';
      return { name: isZh ? def.zh : def.en, colorClass: def.colorClass };
    },
    equalizeRows() {
      this.$nextTick(() => {
        ['card-member-name', 'card-member-title'].forEach(cls => {
          const els = Array.from(this.$el.querySelectorAll(`.${cls}`));
          els.forEach(el => { el.style.height = 'auto'; });
          const groups = new Map();
          els.forEach(el => {
            const card = el.closest('.card-hover-effect');
            if (!card) return;
            const top = Math.round(card.getBoundingClientRect().top / 5) * 5;
            if (!groups.has(top)) groups.set(top, []);
            groups.get(top).push(el);
          });
          groups.forEach(group => {
            const maxH = Math.max(...group.map(el => el.offsetHeight));
            group.forEach(el => { el.style.height = maxH + 'px'; });
          });
        });
      });
    },
  },
};
</script>

<style scoped>
.member-img {
  width: 200px;
  height: 260px;
  object-fit: cover;
  object-position: center top;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.card-hover-effect:hover .member-img {
  transform: scale(1.02);
}
.card-title-custom {
  font-size: 1.2rem;
  font-weight: 700;
  color: #003366;
}
.group-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.22rem 0.7rem;
  border-radius: 20px;
ㄡ4em;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
}
.group-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}
.group-blue  { background: #DBEAFE; color: #1D4ED8; border: 1px solid #93C5FD; }
.group-green { background: #DCFCE7; color: #166534; border: 1px solid #86EFAC; }
.group-purple{ background: #FEF3C7; color: #92400E; border: 1px solid #FCD34D; }
.card-member-subtitle {
  font-size: 0.875rem;
}
.expertise-heading {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.expertise-content {
  font-size: 0.85rem;
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

.section-title {
  font-weight: 700;
  color: #003366;
  border-bottom: 3px solid #0056b3;
  padding-bottom: 0.75rem;
  display: inline-block;
}
</style>