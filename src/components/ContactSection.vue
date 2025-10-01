<template>
  <section class="bg-white py-5">
    <b-container>
      <h2 class="text-center display-5 fw-bold mb-5" style="color: #003366;">聯絡我們</h2>
      <b-row class="align-items-center">
        <b-col md="6" class="mb-4 mb-md-0">
          <div class="contact-info">
            <h3 class="h4 fw-bold mb-4" style="color: #003366;">國立中央大學台灣暨全球乾旱調查與研究中心</h3>
            <p class="contact-item">
              <strong class="me-2">地址：</strong>320桃園市中壢區中大路300號
            </p>
            <p class="contact-item">
              <strong class="me-2">電話：</strong>(03) 4227151 分機：57697/57689
            </p>
            <p class="contact-item">
              <strong class="me-2">傳真：</strong>(03) 4255535
            </p>
            <p class="contact-item">
              <strong class="me-2">電子郵件：</strong>tgdirc.ncu@gmail.com
            </p>
          </div>
        </b-col>
        <b-col md="6">
          <div class="ratio ratio-16x9 rounded-3 shadow-sm">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.940004663239!2d121.19271850928976!3d24.968155777766693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2z5ZyL56uL5Lit5aSu5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1758077782430!5m2!1szh-TW!2stw" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
    name: 'ContactSection'
}
</script>

<style scoped>
.contact-item {
  font-size: 1.1rem;
  line-height: 1.9;
  margin-bottom: 1rem;
}

.contact-info h3 {
    font-size: 1.5rem;
}

.ratio {
    --bs-aspect-ratio: 75%; /* Adjust aspect ratio for a less tall map */
}
</style>
