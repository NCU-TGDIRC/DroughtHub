<template>
  <div>
    <HeroSection />
    <AboutSection />
    <NewsSection />
    <ContactSection />
  </div>
</template>

<script>
// 我們需要重新引入這些區塊組件
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import NewsSection from '../components/NewsSection.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutSection,
    NewsSection,
    ContactSection
  }
}
</script>