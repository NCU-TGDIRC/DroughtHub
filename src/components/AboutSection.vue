<template>
  <section class="bg-white py-5">
    <b-container>
      <b-row class="justify-content-center text-center">
        <b-col lg="10" xl="9">
          <h2 class="display-5 fw-bold mb-4" style="color: #003366;">關於我們</h2>
          <p class="about-text">
            國立中央大學台灣暨全球乾旱調查與研究中心 ( Taiwan and Global Drought Investigation and Research Center,TGDIRC / DroughtHub)致力於整合跨領域的氣候科學、水文學與地理資訊技術研究，我們的目標是深入了解台灣與全球乾旱的成因與影響，推動水資源永續管理，並協助社會與產業提升面對氣候變遷的韌性。
          </p>
          <p class="about-text">
            本中心匯聚多位專家學者，並配備先進的觀測與分析系統。我們不僅重視基礎科學研究，更積極推動跨國合作與政策應用，將研究成果轉化為具體行動方案，為社會與全球永續發展貢獻價值。
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
/* Replaced most custom CSS with Bootstrap utility classes for responsiveness. */
.about-text {
  line-height: 1.8;
  font-size: 1.25rem; /* Using a more standard web font size, original was 1.8rem */
}
</style>
