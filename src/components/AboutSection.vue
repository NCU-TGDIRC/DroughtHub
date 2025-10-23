<template>
  <section class="bg-white py-5">
    <b-container>
      <b-row class="justify-content-center text-center">
        <b-col lg="10" xl="9">
          <h2 class="display-5 fw-bold mb-4" style="color: #003366;">{{ $t('about.title') }}</h2>
          <p class="about-text">
            {{ $t('about.paragraph1') }}
          </p>
          <p class="about-text">
            {{ $t('about.paragraph2') }}
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
