<template>
  <!-- [修改] 移除 section 上的 container class -->
  <section class="about-section">
    <!-- [新增] 內層加上 container 來限制內容寬度並置中 -->
    <div class="container">
      <h2>關於我們</h2>
      <div class="about-content">
        <p>
          國立中央大學台灣暨全球乾旱調查與研究中心 ( Taiwan and Global Drought Investigation and Research Center,TGDIRC / DroughtHub)致力於整合跨領域的氣候科學、水文學與地理資訊技術研究，我們的目標是深入了解台灣與全球乾旱的成因與影響，推動水資源永續管理，並協助社會與產業提升面對氣候變遷的韌性。
        </p>
        <p>
          本中心匯聚多位國內外專家學者，並配備先進的觀測與分析系統。我們不僅重視基礎科學研究，更積極推動跨國合作與政策應用，將研究成果轉化為具體行動方案，為社會與全球永續發展貢獻價值。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
    background-color: #fff;
    padding: 60px 0; /* 修改 padding */
}

/* [新增] container 的通用樣式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 40px;
    font-weight: 600;
}

.about-content {
  max-width: 1400px; /* 這部分維持不變，讓文字段落更窄，易於閱讀 */
  margin: 0 auto;
  text-align: center;
  line-height: 1.8;
  font-size: 1.5rem;
}
</style>