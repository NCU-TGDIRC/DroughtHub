<template>
  <div class="icqab-page">
    <!-- 頁首橫幅 -->
    <header class="page-header">
      <div class="container">
        <p class="conference-date">April 7-9, 2025 | Taipei, Taiwan</p>
        <h1>2025 International Conference on Drought, Climate Change and Water Sustainability (ICDCWS)</h1>
        <h2>2025 國際乾旱、氣候變遷與水資源永續研討會</h2>
      </div>
    </header>

    <!-- 主要內容區 -->
    <main class="main-content">
      <div class="container">
        <!-- 1. 手風琴結構 -->
        <div class="accordion">
          <div v-for="(item, index) in sections" :key="index" class="accordion-item">
            <div class="accordion-header" @click="toggleSection(index)">
              <h3>{{ item.title }}</h3>
              <span class="accordion-icon" :class="{ 'is-open': activeIndex === index }"></span>
            </div>
            <div class="accordion-content" :class="{ 'is-open': activeIndex === index }">
              <div class="accordion-content-inner" v-html="item.content"></div>
            </div>
          </div>
        </div>

        <!-- 2. 線性左右佈局區塊 -->
        <div class="info-sections">
          
          <!-- 區塊一：研討會報名 -->
          <section class="info-section">
            <div class="info-text">
              <h4>研討會報名 <span class="en-text">registration</span></h4>
              <a :href="info.registration.url" target="_blank" class="link">{{ info.registration.url }}</a>
            </div>
            <div class="info-media">
              <img :src="getImageUrl(info.registration.qrCode)" alt="Registration QR Code" class="qr-code">
            </div>
          </section>

          <!-- 區塊二：學生海報投稿 -->
          <section class="info-section">
            <div class="info-media">
              <img :src="getImageUrl(info.poster.qrCode)" alt="Poster Submission QR Code" class="qr-code">
            </div>
            <div class="info-text">
              <h4>學生海報投稿</h4>
              <ol class="poster-steps">
                <li v-for="(step, index) in info.poster.steps" :key="index">
                  <span v-html="step.text"></span>
                  <a v-if="step.url" :href="getAssetUrl(step.url)" download> (點我下載)</a>
                </li>
              </ol>
            </div>
          </section>

          <!-- 區塊三：地點與主辦資訊 -->
          <section class="info-section">
            <div class="info-media">
              <div class="map-container">
                <iframe :src="info.location.mapUrl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div class="info-text host-info">
              <p class="conference-dates">{{ info.host.dates }}</p>
              <p class="conference-venue">{{ info.host.venue }}</p>
              <p class="host-by">Host by:</p>
              <ul class="host-list">
                <li v-for="host in info.host.hosts" :key="host">{{ host }}</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import professorImage from '@/assets/professor.jpg';

export default {
  name: 'IcqabView',
  data() {
    return {
      activeIndex: 0, 
      // 1. 手風琴的資料
      sections: [
        {
          title: '緣起 (Introduction)',
          content: `<p>全球暖化導致極端氣候事件頻傳，乾旱是其中最嚴重且影響深遠的災害之一。本研討會旨在匯集國內外頂尖學者，共同探討乾旱、氣候變遷與水資源永續性之間的複雜關聯，尋求創新的解決方案。</p>`
        },
        {
          title: '舉辦目的 (Objectives)',
          content: `<ul><li>促進跨領域學術交流與合作。</li><li>分享最新的乾旱監測、預測與評估技術。</li><li>探討氣候變遷對水資源管理的挑戰與應對策略。</li><li>建立全球性的乾旱研究網絡。</li></ul>`
        },
        {
          title: '會議資訊 (Conference Information)',
          content: `<p><strong>日期：</strong>2025年4月7日 至 9日</p><p><strong>地點：</strong>國立中央大學，台灣桃園市</p><p><strong>主辦單位：</strong>國立中央大學台灣與全球乾旱調查研究中心 (NCU CTGDR)</p>`
        },
        {
          title: '講者名單 (Keynote Speakers)',
          content: `<div class="speakers-grid-in-accordion"><div class="speaker-card-in-accordion"><img src="${professorImage}" alt="Speaker 1"><h4>Dr. Evelyn Reed</h4><p>Drought Monitoring Lab, MIT</p></div><div class="speaker-card-in-accordion"><img src="${professorImage}" alt="Speaker 2"><h4>Prof. Kenji Tanaka</h4><p>Climate Change Institute, University of Tokyo</p></div></div>`
        },
        {
          title: '議程 (Agenda)',
          content: `<p>詳細議程將於2025年2月公布，敬請期待。</p><p><em>Preliminary agenda includes sessions on: Drought Modeling, Climate Impact Assessment, Water Resource Management, and International Collaboration.</em></p>`
        }
      ],
      // 2. 資訊區塊的資料
      info: {
        registration: {
          url: 'https://forms.gle/U2MU6NiGJbaqCfhu6',
          qrCode: 'qr-registration.png'
        },
        poster: {
          steps: [
            { text: '投稿截止時間：114/3/14' },
            { text: '審查通過公告：114/3/24' },
            { text: '海報摘要格式：請參考附檔格式提供。', url: 'poster-template.pdf' },
            { text: `投稿網址：<a href="https://forms.gle/xPCqDJJxyKqMJPUJA" target="_blank">https://forms.gle/xPCqDJJxyKqMJPUJA</a>` },
          ],
          qrCode: 'qr-poster.png',
        },
        location: {
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.940004663239!2d121.19271850928976!3d24.968155777766693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2z5ZyL56uL5Lit5aSu5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1758076938764!5m2!1szh-TW!2stw'
        },
        host: {
          dates: '2025/04/07(MON) ~ 2025/04/09(WED)',
          venue: '國立中央大學',
          hosts: [
            '國立中央大學台灣與全球乾旱調查研究中心 (NCU CTGDR)'
          ]
        }
      }
    }
  },
  methods: {
    toggleSection(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
    getImageUrl(imageName) {
      if (!imageName) return '';
      try { return require(`@/assets/${imageName}`); } catch (e) { return ''; }
    },
    getAssetUrl(fileName) {
      if (!fileName) return '#';
      try { return require(`@/assets/${fileName}`); } catch (e) { return '#'; }
    }
  }
}
</script>

<style scoped>
/* --- 背景和頁首橫幅樣式 --- */
.icqab-page { background: #f4f6fc; color: #333; }
.container { max-width: 960px; margin: 0 auto; padding: 0 20px; }
.page-header { padding: 120px 0 60px 0; text-align: center; color: #ffffff; background-image: url('../assets/icqab-bg.jpg'); background-size: cover; background-position: center; position: relative; }
.page-header::before { content: ''; position: absolute; top:0; left:0; width: 100%; height: 100%; background-color: rgba(10, 25, 47, 0.7); }
.page-header .container { position: relative; z-index: 1; }
.conference-date { font-size: 1.2rem; letter-spacing: 1px; margin-bottom: 1rem; }
.page-header h1 { font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem; }
.page-header h2 { font-size: 1.8rem; font-weight: 400; color: #ccc; }

/* --- 主要內容區樣式 --- */
.main-content {
  padding: 50px 0 60px 0;
  background: white; /* 讓主要內容區有白色背景 */
}

/* --- 手風琴樣式 --- */
.accordion { border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
.accordion-item { border-bottom: 1px solid #e0e0e0; }
.accordion-item:last-child { border-bottom: none; }
.accordion-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 25px; cursor: pointer; background-color: #f8f9fa; transition: background-color 0.3s; }
.accordion-header:hover { background-color: #f1f3f5; }
.accordion-header h3 { margin: 0; font-size: 1.5rem; color: #003366; font-weight: 500; }
.accordion-icon { width: 12px; height: 12px; border-right: 3px solid #0056b3; border-bottom: 3px solid #0056b3; transform: rotate(45deg); transition: transform 0.4s ease; }
.accordion-icon.is-open { transform: rotate(-135deg); }
.accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out; }
.accordion-content.is-open { max-height: 1000px; }
.accordion-content-inner { padding: 25px; font-size: 1.1rem; line-height: 1.8; }
:deep(.accordion-content-inner ul) { list-style-type: disc; padding-left: 25px; }
:deep(.accordion-content-inner p) { margin-bottom: 1rem; }
:deep(.accordion-content-inner strong) { color: #212529; }
:deep(.speakers-grid-in-accordion) { display: flex; gap: 30px; text-align: center; }
:deep(.speaker-card-in-accordion img) { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px; }
:deep(.speaker-card-in-accordion h4) { font-size: 1.2rem; margin-bottom: 5px; }

/* --- 線性左右佈局樣式 --- */
.info-sections {
  margin-top: 50px;
}
.info-section { display: flex; align-items: center; gap: 40px; padding: 40px 0; border-bottom: 1px solid #e0e0e0; }
.info-section:last-child { border-bottom: none; }
.info-section:nth-child(even) { flex-direction: row-reverse; }
.info-text, .info-media { flex: 1; min-width: 0; }
.info-text h4 { font-size: 1.8rem; font-weight: 600; color: #000; margin-top: 0; margin-bottom: 20px; }
.info-text h4 .en-text { font-size: 1.2rem; color: #555; margin-left: 10px; }
.info-text .link { font-size: 1.1rem; color: #007bff; word-break: break-all; }
.qr-code { width: 180px; height: 180px; background: white; padding: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: block; margin: 0 auto; }
.poster-steps { padding-left: 0; list-style: none; font-size: 1.1rem; line-height: 2; }
:deep(.poster-steps a) { color: #007bff; }
.poster-downloads { display: flex; align-items: flex-end; justify-content: center; gap: 30px; }
.file-download { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #333; width: 150px; }
.file-download img { width: 100%; border: 1px solid #ddd; margin-bottom: 10px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.map-container { width: 100%; height: 400px; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
.host-info { color: #4a4a4a; }
.conference-dates, .conference-venue { font-size: 1.5rem; font-weight: bold; color: #6a4c93; margin: 0; }
.conference-venue { font-size: 1.5rem; color: #333; margin-top: 5px; margin-bottom: 30px; }
.host-by { font-weight: bold; margin-bottom: 10px; }
.host-list { list-style: none; padding: 0; margin: 0; line-height: 1.8; }
</style>