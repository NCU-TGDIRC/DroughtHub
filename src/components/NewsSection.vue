<template>
  <section class="news-section py-5">
    <b-container>
      <h2 class="text-center display-5 fw-bold mb-5 text-white">最新消息</h2>
      <b-row>
        <b-col v-for="item in news" :key="item.id" md="6" lg="4" class="mb-4 d-flex align-items-stretch">
          <b-card no-body class="h-100 shadow-sm overflow-hidden card-hover-effect">
            <b-card-body class="d-flex flex-column p-4">
              <p class="small text-muted mb-2">{{ item.date }}</p>
              <b-card-title class="mb-3 card-title-custom">{{ item.title }}</b-card-title>
              <b-card-text class="flex-grow-1 mb-4">
                {{ item.excerpt }}
              </b-card-text>
              <div class="mt-auto">
                <router-link v-if="item.url && !item.url.startsWith('http')" :to="item.url" class="read-more-link">
                  閱讀更多 &rarr;
                </router-link>
                <a v-else-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="read-more-link">
                  閱讀更多 &rarr;
                </a>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      news: [
        { id: 1, date: '2025-09-27', title: 'CESR 2025 開放報名與投稿', excerpt: '首屆「氣候極端與社會韌性國際論壇 (CESR 2025)」官網已於今日開放報名與摘要投稿。論壇將於 2025 年 11 月 24-26 日於國立中央大學舉行，聚焦於乾旱、熱害、水資源...', url: '/icqab' },
        { id: 2, date: '2025-09-28', title: '本中心劉說安教授主編國際專刊徵稿', excerpt: '本研究中心劉說安講座教授現正主編國際期刊 Earth’s Future 與 GeoHealth 專刊：「極端高溫、熱浪與都市熱島對公共健康的衝擊：脆弱性、韌性與調適策略」。專刊徵稿至 2026 年 6 月 30 日截止，誠摯邀請相關領域研究者踴躍投稿...', url: 'https://agupubs.onlinelibrary.wiley.com/hub/journal/24711403/homepage/call-for-papers/si-2025-001141' },
        { id: 3, date: '2025-09-30', title: '本中心發表 RSETI 新指標', excerpt: '由劉說安教授團隊提出「相對地表蒸發散指數」（RSETI），突破現有遙測乾旱監測的限制。成功描繪 2001–2022 年澳洲乾旱演變，並驗證其在農業管理與氣候調適上的應用潛力。成果刊登於Remote Sensing of Environment...', url: 'https://spec.ntu.edu.tw/research/research-detail271' },
      ]
    }
  }
}
</script>

<style scoped>
.news-section {
  background-color: #1a2a3a; /* Preserving the original dark blue background */
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
  box-shadow: 0 8px 20px rgba(0,0,0,0.12) !important;
}

.read-more-link {
  color: #d4a373;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.read-more-link:hover {
  color: #c8925a; /* A slightly darker shade for hover */
}
</style>
