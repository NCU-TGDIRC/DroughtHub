<template>
  <!-- [修改] 讓 section 本身是滿版的深色背景 -->
  <section class="news-section">
    <!-- [新增] 內層加上 container 來限制內容寬度並置中 -->
    <div class="container">
      <h2>最新消息</h2>
      <div class="news-grid">
        <div class="news-item" v-for="item in news" :key="item.id">
          <div class="news-date">{{ item.date }}</div>
          <h3 class="news-title">{{ item.title }}</h3>
          <p class="news-excerpt">{{ item.excerpt }}</p>
          <a href="#" class="read-more">閱讀更多 &rarr;</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// <script> 內容維持不變
export default {
  name: 'NewsSection',
  data() {
    return {
      news: [
        { id: 1, date: '2025-09-15', title: '本中心成功開發新型益生菌，顯著提升豬隻免疫力', excerpt: '經過三年的努力，本中心研究團隊成功分離並培養出一株具備優異免疫調節功能的新型益生菌...' },
        { id: 2, date: '2025-08-22', title: '國際研討會「精準營養的未來」圓滿落幕', excerpt: '由本中心主辦的年度國際研討會，邀請了來自全球十多個國家的頂尖學者，共同探討動物精準營養的最新發展...' },
        { id: 3, date: '2025-07-30', title: '與頂尖飼料企業簽訂產學合作備忘錄', excerpt: '為加速研究成果的產業應用，本中心與國內龍頭飼料企業正式簽署合作備忘錄，共同開發次世代功能性飼料添加劑...' },
      ]
    }
  }
}
</script>

<style scoped>
/* [修改] 調整 section 樣式 */
.news-section {
  background-color: #1a2a3a; /* 深藍色背景 */
  padding: 60px 0;
}

/* [新增] container 的通用樣式 */
.container {
  max-width: 1200px; /* 內容最大寬度 */
  margin: 0 auto; /* 水平置中 */
  padding: 0 20px; /* 左右內距，避免貼邊 */
}

h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #ffffff; /* 標題改為白色以適應深色背景 */
    margin-bottom: 40px;
    font-weight: 600;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.news-item {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.news-date { font-size: 0.9rem; color: #888; margin-bottom: 10px; }
.news-title { font-size: 1.3rem; margin-bottom: 15px; color: #003366; }
.news-excerpt { font-size: 1rem; line-height: 1.6; color: #555; }
.read-more { display: inline-block; margin-top: 15px; color: #d4a373; text-decoration: none; font-weight: bold; }
</style>