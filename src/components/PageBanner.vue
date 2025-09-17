<template>
  <div class="page-banner">
    <div class="banner-content">
      <h1>{{ title }}</h1>
    </div>
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
  /* 使用您先前下載的 banner.jpg 作為背景 */
  background-image: url('../assets/banner.jpeg');
  height: 50vh; /* Banner 高度佔螢幕的一半 */
  min-height: 300px;
  max-height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
}

/* 加上斜向的漸層遮罩，讓視覺效果更好 */
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
    padding: 20px;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}
</style>