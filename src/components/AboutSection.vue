<template>
  <section class="about-section-custom-padding custom-bg">
    <div class="container-fluid px-md-5"> 
      <div class="row align-items-center justify-content-center"> <!-- 增加居中 -->

        <!-- Left: Carousel -->
        <div class="col-md-6 px-lg-3"> <!-- 稍微縮小一點寬度，增加呼吸感 -->
          <div class="carousel-container">
            <div id="aboutCarousel" class="carousel slide professional-carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
              
              <!-- 1. 精緻化的指示器 -->
              <div class="carousel-indicators custom-indicators">
                <button
                  v-for="(image, index) in images"
                  :key="index"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  :data-bs-slide-to="index"
                  :class="{ active: index === 0 }"
                  aria-current="true"
                ></button>
              </div>

              <!-- 2. 圖片內容 -->
              <div class="carousel-inner shadow-ultimate rounded-4">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="carousel-item"
                  :class="{ active: index === 0 }"
                >
                  <div class="image-overlay"></div> <!-- 增加一個極淺的遮罩提升質感 -->
                  <img
                    :src="image.src"
                    class="d-block w-100 image-fit"
                    alt="carousel image"
                  >
                </div>
              </div>

              <!-- 3. 優雅的控制按鈕 -->
              <button class="carousel-control-prev custom-control" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
                <div class="control-icon-bg">
                  <span class="carousel-control-prev-icon"></span>
                </div>
              </button>
              <button class="carousel-control-next custom-control" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
                <div class="control-icon-bg">
                  <span class="carousel-control-next-icon"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Content (保持原樣或微調文字間距) -->
        <div class="col-md-5 ps-lg-5 mt-5 mt-md-0">
          <div class="text-center text-md-start">
            <h2 class="display-4 fw-bold mb-4" style="color:#003366; letter-spacing: -1px;">
              {{ $t('about.title') }}
            </h2>
            <div class="title-underline mb-4"></div> <!-- 增加一條專業感的裝飾線 -->
            <p class="about-text">
              {{ $t('about.paragraph1') }}
            </p>
            <p class="about-text">
              {{ $t('about.paragraph2') }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      images: [
        { src: require('@/assets/carousel/cesr_pic1.jpg') },
        { src: require('@/assets/carousel/cesr_pic2.jpg') },
        { src: require('@/assets/carousel/cesr_pic3.jpg') },
        { src: require('@/assets/carousel/cesr_pic4.jpg') },
        { src: require('@/assets/carousel/cesr_pic5.jpg') },
      ]
    }
  }
}
</script>

<style scoped>
/* 1. 背景與整體佈局 */
.custom-bg {
  background-color: #fcfcfc; /* 比原本更亮一點的灰，顯得乾淨 */
}

.about-section-custom-padding {
  padding-top: 120px;
  padding-bottom: 120px;
}

/* 2. 究極陰影：使用多層陰影模擬真實光澤感 */
.shadow-ultimate {
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.05), 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* 懸浮效果：滑鼠移入時照片輕微浮起 */
.carousel-container:hover .shadow-ultimate {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}
/* 調整淡入淡出速度與曲線 */
.carousel-fade .carousel-item {
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1); /* 增加到 1.2 秒，使用平滑曲線 */
  background-color: #000; /* 轉場時底部襯一點黑，增加深邃感 */
}
/* 讓圖片在進入時有一個極緩慢的放大效果，像電影鏡頭一樣 */
.carousel-item img {
  transition: transform 5s ease; /* 動畫持續時間比過場長，確保縮放不停止 */
  transform: scale(1.15); /* 初始狀態稍微放大 */
}
.carousel-item.active img {
  transform: scale(1); /* 變為 active 時縮回到原始大小 */
}
/* 3. 修正轉場時的層級關係，避免閃爍 */
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end,
.carousel-fade .carousel-item.active {
  opacity: 1;
}

.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}


/* 3. 圖片處理 */
.image-fit {
  width: 100%;
  aspect-ratio: 16 / 10; /* 比 16:9 稍微高一點，更顯大氣 */
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.05) 100%);
  z-index: 1;
  pointer-events: none;
}

/* 4. 自定義指示器 (線條狀比圓點更專業) */
.custom-indicators {
  bottom: 20px;
}
.custom-indicators button {
  width: 30px !important;
  height: 4px !important;
  border-radius: 2px;
  margin: 0 5px !important;
  background-color: rgba(255, 255, 255, 0.6) !important;
  border: none !important;
  transition: all 0.3s ease;
}
.custom-indicators button.active {
  width: 50px !important;
  background-color: #fff !important;
}

/* 5. 自定義控制按鈕 (半透明圓形感) */
.custom-control {
  width: 10%;
  opacity: 0; /* 預設隱藏，移入時顯示 */
  transition: opacity 0.3s ease;
}
.carousel-container:hover .custom-control {
  opacity: 1;
}
.control-icon-bg {
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px); /* 毛玻璃效果 */
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}
.control-icon-bg:hover {
  background-color: rgba(0, 51, 102, 0.7); /* 滑過時變成您的主題藍色 */
}

/* 6. 右側文字與裝飾 */
.title-underline {
  width: 60px;
  height: 5px;
  background-color: #003366;
  border-radius: 2px;
}

.about-text {
  line-height: 2;
  font-size: 1.1rem;
  color: #555;
  text-align: justify;
  margin-bottom: 1.5rem;
}

/* 寬螢幕限制 */
@media (min-width: 1400px) {
  .container-fluid {
    max-width: 1800px;
    margin: 0 auto;
  }
}

.rounded-4 {
  border-radius: 1.5rem !important;
}
</style>