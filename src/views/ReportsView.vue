<template>
  <div>
    <PageBanner title="成果報導" />
    <main class="py-5 bg-light">
      <b-container>
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
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'ReportsView',
  components: {
    PageBanner
  },
  data() {
    return {
      publications: [
        {
          year: 2025,
          papers: [
            {
              title: 'Characterizing the antecedent rainfall and ATI-MODIS-derived soil moisture content of shallow landslides in Taiwan.',
              authors: 'Liou, Y.-A., Lin, J.-J.*',
              journal: 'Landslides',
              details: 'pp. 1-36',
              doi: 'https://doi.org/10.1007/s10346-025-02495-x',
              tags: ['SCI', 'IF: 5.800', 'RF: 20/254', 'Geosciences, Multidisciplinary']
            },
            {
              title: 'The role of spectro-temporal remote sensing in vegetation classification: A comprehensive review integrating machine learning and bibliometric analysis.',
              authors: 'Rehman, A. U., Raziq, A., Shrestha, B., Nguyen, K. A., & Liou, Y.-A.*',
              journal: 'Computers and Electronics in Agriculture',
              details: 'Vol. 234, 110184',
              doi: 'https://doi.org/10.1016/j.compag.2025.110184',
              tags: ['SCI', 'IF: 7.700', 'RF: 2/89', 'Agriculture, Multidisciplinary']
            },
            {
              title: 'Enhancing Evacuation Shelter Suitability in Compound Hazard-Prone Regions with a Bayesian Optimized Convolutional Neural Network Approach.',
              authors: 'Bera, S., Talukdar, S., Nguyen, K. A., Liou, Y. A.*, Guru, B., Chatterjee, R., & Ramana, G. V.',
              journal: 'International Journal of Disaster Risk Reduction',
              details: 'Vol. 119, 105306',
              doi: 'https://doi.org/10.1016/j.ijdrr.2025.105306',
              tags: ['SCI', 'IF: 4.200', 'RF: 34/254', 'Geosciences, Multidisciplinary']
            },
            {
              title: 'Surface Water Availability-Temperature Index (SWATI) for Global Drought Monitoring.',
              authors: 'Thai, M.-T., Liou, Y.-A.*',
              journal: 'IEEE Transactions on Geoscience and Remote Sensing',
              details: 'Vol. 63, pp. 1-14, Art no. 4403714',
              doi: 'https://doi.org/10.1109/TGRS.2025.3541287',
              tags: ['SCI', 'IF: 7.500', 'RF: 25/352', 'Remote Sensing']
            }
          ]
        },
        {
          year: 2024,
          papers: [
            {
              title: 'Comprehensive drought risk assessment and mapping in Taiwan: An ANP-ANN ensemble approach.',
              authors: 'Liou, Y.-A.*, Vo, T.-H., Tran, D.-P., & Bui, H.-A.',
              journal: 'Science of the Total Environment',
              details: '175835',
              doi: 'https://doi.org/10.1016/j.scitotenv.2024.175835',
              tags: ['SCI', 'IF: 8.200', 'RF: 31/358', 'Environmental Sciences']
            },
            {
              title: 'Comparative analysis of machine learning models for tropical cyclone intensity estimation.',
              authors: 'Liou, Y.-A.*, Le, T.-V.',
              journal: 'Remote Sensing',
              details: '16, 3138',
              doi: 'https://doi.org/10.3390/rs16173138',
              tags: ['SCI', 'IF: 4.200', 'RF: 34/253', 'Remote Sensing']
            },
            {
              title: 'Revealing the intricate relationship: Droughts and typhoons in Taiwan using the Standardized Precipitation Index (SPI).',
              authors: 'Le, T.-V. and Y.-A. Liou*, and K.-A. Nguyen',
              journal: 'Journal of Hydrology: Regional Studies',
              details: 'Volume 55, 101917',
              doi: 'https://doi.org/10.1016/j.ejrh.2024.101917',
              tags: ['SCI', 'IF: 4.7', 'RF: 17/127', 'Water Resources']
            },
            {
              title: 'Assessing the impacts of temperature extremes on agriculture yield and projecting future extremes using machine learning and deep learning approaches with CMIP6 data.',
              authors: 'Khan, F., Y.-A. Liou*, G. Spöck, X. Wang, S. Ali',
              journal: 'International Journal of Applied Earth Observation and Geoinformation',
              details: '132, 104071',
              doi: 'https://doi.org/10.1016/j.jag.2024.104071',
              tags: ['SCI', 'IF: 7.600', 'RF: 6/62', 'Remote Sensing']
            }
          ]
        }
      ]
    };
  },
  methods: {
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
