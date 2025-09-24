<template>
  <section class="hero">
    <div class="hero-content">
      <!-- [修改處] 更新標題內容 -->
      <h2>NCU TGDIRC</h2>
      <h3>國立中央大學台灣暨全球乾旱調查與研究中心</h3>
      <p>Taiwan and Global Drought Investigation and Research Center(TGDIRC / DroughtHub)</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  /* 使用我們新的背景圖片 */
  background-image: url('../assets/banner.jpeg');
  height: 80vh; /* 增加高度以容納更多內容 */
  max-height: 800px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
}

/* [修改處] 加上斜向的漸層遮罩，重現圖片中的效果 */
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 從左上角的深藍色漸變到右下角的透明，-45deg 代表斜角方向 */
    background: linear-gradient(-45deg, rgba(15, 28, 45, 0.9) 30%, rgba(0, 0, 0, 0.1));
}

.hero-content {
    position: relative;
    z-index: 1;
    padding: 20px;
}

/* [修改處] 更新主要標題樣式 */
.hero h2 {
  font-size: 5rem; /* 加大字體 */
  margin-bottom: 25px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 4px; /* 增加字元間距 */
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

/* [新增處] 新增副標題 h3 的樣式 */
.hero h3 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 500;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.5);
}

/* [修改處] 更新段落文字 p 的樣式 */
.hero p {
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.5);
}
</style>