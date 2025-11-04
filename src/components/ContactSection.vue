<template>
  <section class="bg-white py-5">
    <b-container>
      <h2 class="text-center display-5 fw-bold mb-5" style="color: #003366;">{{ $t('contact.title') }}</h2>
      <b-row class="align-items-center">
        <b-col md="6" class="mb-4 mb-md-0">
          <div class="contact-info">
            <h3 class="h4 fw-bold mb-4" style="color: #003366;">{{ $t('contact.centerName') }}</h3>
            <p class="contact-item">
              <strong class="me-2">{{ $t('contact.addressLabel') }}</strong> <a :class="$style.link" href="https://www.csrsr.ncu.edu.tw/" target="_blank">{{ $t('contact.addressLinkText') }}</a><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ $t('contact.addressValue') }}
            </p>
            <p class="contact-item">
              <strong class="me-2">{{ $t('contact.phoneLabel') }}</strong>{{ $t('contact.phoneValue') }}
            </p>
            <p class="contact-item">
              <strong class="me-2">{{ $t('contact.faxLabel') }}</strong>{{ $t('contact.faxValue') }}
            </p>
            <p class="contact-item">
              <strong class="me-2">{{ $t('contact.emailLabel') }}</strong>tgdirc.ncu@gmail.com
            </p>
          </div>
        </b-col>
        <b-col md="6">
          <div class="ratio ratio-16x9 rounded-3 shadow-sm">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.958075318055!2d121.18223309678957!3d24.967540999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c26571829b%3A0x4405dd3d60240444!2z5Lit5aSu5aSn5a245aSq56m65Y-K6YGZ5ris56CU56m25Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1761738883357!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

<style module scoped>
.link {
  color: #007bff;
  text-decoration: underline;
}

.link:hover {
  color: #0056b3;
}

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
