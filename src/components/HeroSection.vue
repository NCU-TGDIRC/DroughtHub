<template>
  <div class="hero d-flex justify-content-center align-items-center text-center text-white">
    <b-container class="hero-content">
      <h1 class="display-2 fw-bold">{{ $t('hero.title') }}</h1>
      <h2 class="display-5 fw-bold">{{ $t('hero.subtitle') }}</h2>
      <p class="lead fs-4" v-if="$t('hero.description')">{{ $t('hero.description') }}</p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  background-image: url('../assets/banner.jpeg');
  height: 65vh;
  max-height: 800px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, rgba(15, 28, 45, 0.9) 30%, rgba(0, 0, 0, 0.1));
}

.hero-content {
  position: relative;
  z-index: 1;
}

/* Applying text-shadow to the text elements */
.hero-content * {
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
}
</style>
