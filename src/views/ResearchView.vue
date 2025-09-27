<template>
  <div>
    <PageBanner title="研究領域" />
    <main class="py-5 bg-light">
      <b-container>
        <b-row class="justify-content-center text-center mb-5">
          <b-col lg="10">
            <h1 class="display-5 fw-bold mb-4" style="color: #003366;">核心研究方向</h1>
            <p class="lead text-muted">
              本中心整合跨領域科學，聚焦於氣候變遷下的極端災害，從技術監測、衝擊評估到社會韌性建構，致力於發展永續的解決方案，以應對全球乾旱、熱害與水資源挑戰。
            </p>
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
                  <h6 class="fw-bold">研究關鍵字</h6>
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
      researchAreas: [
        {
          icon: 'fas fa-satellite-dish fa-3x text-primary',
          title: '乾旱監測與預警技術',
          description: '發展高解析度、高精度的乾旱監測與預警系統，評估乾旱對水資源、農業、生態系統及社會經濟的連鎖衝擊。',
          keywords: ['衛星遙測', '乾旱指標', 'AI與大數據', '決策支持系統', '衝擊評估', 'GPS氣象學']
        },
        {
          icon: 'fas fa-city fa-3x text-primary',
          title: '熱島效應與都市氣候調適',
          description: '聚焦極端高溫對公共衛生的威脅，探討都市熱島效應的成因與監測，並研擬以自然為本的都市降溫與健康防護策略。',
          keywords: ['都市熱島', '都市氣候模擬', '智慧城市', '綠色建築', '公共衛生', '土地利用']
        },
        {
          icon: 'fas fa-tint fa-3x text-primary',
          title: '氣候政策與水資源管理',
          description: '分析氣候變遷對水循環的影響，探討水資源供需管理的創新策略，以及多方利害關係人的協作治理框架。',
          keywords: ['水資源治理', '社會韌性', '智慧水網', '再生水利用', '跨域管理', '決策科學']
        },
        {
          icon: 'fas fa-heartbeat fa-3x text-primary',
          title: '氣候變遷健康衝擊',
          description: '評估極端氣候對心血管疾病、傳染病、糧食安全與心理健康的影響，推動建構具備氣候韌性的醫療與公衛體系。',
          keywords: ['公共衛生', '健康風險評估', '傳染病流行', '醫療資訊管理', '奈米毒理', '感染與免疫']
        },
        {
          icon: 'fas fa-chart-line fa-3x text-primary',
          title: '極端氣候的經濟影響評估',
          description: '量化評估極端氣候對產業供應鏈、能源市場與金融的衝擊，並研擬創新的風險分擔機制與財務應對方案。',
          keywords: ['經濟風險評估', '供應鏈管理', '災害風險模型', 'ESG框架', '氣候金融', '消費者行為']
        },
        {
          icon: 'fas fa-microchip fa-3x text-primary',
          title: '跨領域技術整合應用',
          description: '整合太空光學、行星遙測、神經語言學與計算語言學等前沿技術，探索氣候數據分析與人機互動的新模式。',
          keywords: ['太空光學', '行星遙測', '神經語言學', '人機互動', '資訊創新', '構詞學']
        }
      ]
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
</style>