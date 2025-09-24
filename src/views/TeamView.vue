```html
<template>
  <div>
    <PageBanner title="團隊成員" />

    <div class="team-page-wrapper">
      <div class="team-container">
        <div class="members-grid">
          <template v-for="member in members" :key="member.name">
            <div class="member-card">
              <div class="card-header">
                <div class="card-image-wrapper">
                  <img :src="getImageUrl(member.image)" :alt="member.name + ' profile picture'">
                </div>
              </div>

              <div class="card-body">
                <!-- MODIFICATION START: Added a wrapper for consistent height -->
                <div class="info-wrapper">
                  <div class="name-block">
                    <span class="name-chinese">{{ member.name.split(' ')[0] }}</span>
                    <span class="name-english">{{ member.name.substring(member.name.indexOf(' ') + 1) }}</span>
                  </div>
                  <div class="title-department-block">
                    <span class="title">{{ member.title }}</span>
                    <span class="separator">|</span>
                    <span class="department">{{ member.department }}</span>
                  </div>
                </div>
                <!-- MODIFICATION END -->

                <div v-if="member.expertise && member.expertise.length" class="expertise-block">
                  <div class="expertise-title">
                    <i class="fas fa-star"></i> <!-- 改用星星圖示 -->
                    <span>專業領域</span>
                  </div>
                  <div class="expertise-content" v-html="member.expertise.join('')"></div>
                </div>
              </div>

              <div class="card-footer">
                <a :href="member.detailUrl" class="read-more-btn">READ MORE</a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'TeamView',
  components: {
    PageBanner
  },
  data() {
    return {
      members: [
        {
          image: 'Yuei-An Liou.jpg',
          name: '劉說安 Yuei-An Liou',
          title: '教授',
          department: '太空科學與工程學系',
          expertise: ['<b>遙測</b>: 微波、熱紅外線及光學遙測; 衛載及空載遙測<br><b>科學</b>: 邊界層(微氣象)、大氣科學<br><b>工程</b>: 電機工程(電磁波)、GPS氣象'],
          detailUrl: 'https://www.csrsr.ncu.edu.tw/about/professor_info.php?id=4'
        },
        {
          image: 'Hsiao-Ting Tseng.jpg',
          name: '曾筱珽 Hsiao-Ting Tseng',
          title: '副教授',
          department: '資訊管理學系',
          expertise: ['社群媒體與社群網路、電子商務、健康資訊系統、人機互動、服務科學、人工智慧應用與資料科學'],
          detailUrl: 'https://im.mgt.ncu.tw/teacher'
        },
        {
          image: 'hsu_wen_chin.jpg',
          name: '許文錦 Wen-Chin Hsu',
          title: '教授',
          department: '資訊管理學系',
          expertise: ['醫療資訊管理、電子商務、人機互動、消費者行為、智慧型服務'],
          detailUrl: 'https://im.mgt.ncu.edu.tw/teacher'
        },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return 'https://via.placeholder.com/200';
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        return 'https://via.placeholder.com/200';
      }
    },
  },
};
</script>

<style scoped>
/* === 全局與容器設定 === */
.team-page-wrapper {
  background-color: #f8f9fa; /* 改用淺灰色背景，增加質感 */
  padding: 80px 0;
  color: #343a40; /* 主要文字顏色加深 */
}
.team-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}
.members-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem; /* 稍微加大間距 */
}

/* === 卡片主體設計 === */
.member-card {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px; /* 增加圓角 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 確保內容不會超出圓角範圍 */
}
.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

/* === 卡片頂部 (圖片) === */
.card-header {
  padding: 2rem 2rem 1.5rem;
  text-align: center;
}
.card-image-wrapper {
  width: 160px; /* 放大頭像 */
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  border: 5px solid #fff; /* 增加白色邊框 */
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* 替頭像增加立體感 */
}
.card-image-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

/* === 卡片主體內容 (姓名、職稱、專長) === */
.card-body {
  padding: 0 2rem 1.5rem;
  text-align: center;
  flex-grow: 1; /* 讓此區塊填滿剩餘空間，將 footer 推至底部 */
  display: flex;
  flex-direction: column;
}
.name-block {
  margin-bottom: 0.5rem;
}
.name-chinese {
  font-size: 2rem; /* 放大中文姓名 */
  font-weight: 700;
  margin-right: 0.5rem;
}
.name-english {
  font-size: 1rem;
  color: #6c757d;
  letter-spacing: 0.5px;
}
.title-department-block {
  color: #495057;
  font-size: 1.1rem;
}
.title-department-block .separator {
  margin: 0 0.5rem;
  color: #ced4da;
}

/* === MODIFICATION START: CSS for the new wrapper === */
.info-wrapper {
  /* Set a min-height to accommodate the tallest content */
  /* You can fine-tune this value if needed */
  min-height: 110px; 
  /* Moved margin-bottom here to maintain spacing */
  margin-bottom: 1.5rem; 
}
/* === MODIFICATION END === */


/* === 專長區塊 === */
.expertise-block {
  border-top: 1px solid #e9ecef;
  padding-top: 1.5rem;
  text-align: left;
}
.expertise-title {
  display: flex;
  align-items: center;
  font-weight: 600; 
  color: #0056b3; 
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
.expertise-title .fa-star {
  margin-right: 10px;
}
.expertise-content {
  font-size: 1rem;
  color: #343a40;
  line-height: 1.8; /* 增加行高，提升閱讀性 */
  white-space: normal; /* 讓 v-html 的 <br> 生效 */
}

/* === 卡片底部 (按鈕) === */
.card-footer {
  padding: 0 2rem 2rem;
  margin-top: auto; /* Ensure footer is pushed to the bottom */
  text-align: center;
}
.read-more-btn {
  display: inline-block;
  background-color: #0056b3; /* 主題藍色 */
  color: white;
  border: none;
  padding: 14px 35px;
  font-size: 1rem; /* 放大字體 */
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}
.read-more-btn:hover {
  background-color: #0056b3; /* hover 時顏色加深 */
  transform: scale(1.05); /* 輕微放大效果 */
}
</style>
```