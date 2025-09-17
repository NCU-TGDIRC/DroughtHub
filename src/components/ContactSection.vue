<template>
  <section class="contact-section">
    <div class="container">
      <h2>聯絡我們</h2>
      <div class="contact-wrapper">
        <div class="contact-info">
          <h3>國立中央大學台灣與全球乾旱調查研究中心</h3>
          <p><strong>地址：</strong>320桃園市中壢區中大路300號</p>
          <p><strong>電話：</strong>(03) 4227151 分機：</p>
          <p><strong>傳真：</strong>(03) 2363-XXXX</p>
          <p><strong>電子郵件：</strong>contact@ctgdr.ncu.edu.tw</p>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.940004663239!2d121.19271850928976!3d24.968155777766693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2z5ZyL56uL5Lit5aSu5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1758077782430!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// <script> 內容維持不變
export default {
    name: 'ContactSection'
}
</script>

<style scoped>
.contact-section {
  background-color: #ffffff;
  padding: 60px 0;
}

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

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 40px;
    align-items: center;
}

.contact-info p {
    line-height: 2;
    font-size: 1.1rem;
}

.map iframe {
    border-radius: 8px;
}
</style>