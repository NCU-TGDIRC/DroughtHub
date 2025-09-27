<template>
  <div class="page-banner d-flex justify-content-center align-items-center text-center text-white">
    <b-container class="banner-content">
      <h1 class="display-4 fw-bold">{{ title }}</h1>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    title: {
      type: String,
      required: true,
      default: '頁面標題'
    }
  }
}
</script>

<style scoped>
.page-banner {
  background-image: url('../assets/banner.jpeg');
  height: 50vh;
  min-height: 300px;
  max-height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.page-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, rgba(15, 28, 45, 0.8) 20%, rgba(0, 0, 0, 0.2));
}

.banner-content {
    position: relative;
    z-index: 1;
}

.banner-content h1 {
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}
</style>
