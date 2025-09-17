<template>
  <div>
    <PageBanner title="團隊成員" />

    <div class="team-page-wrapper">
      <div class="team-container">
        <div class="members-grid">
          <template v-for="member in members" :key="member.name">
            <div class="member-card">
              <div class="card-image-wrapper">
                <img :src="getImageUrl(member.image)" :alt="member.name + ' profile picture'">
              </div>

              <div class="member-info">
                <p class="title">{{ member.title }}</p>
                <div class="name-block">
                  <span class="name-chinese">{{ member.name.split(' ')[0] }}</span>
                  <span class="name-english">{{ member.name.substring(member.name.indexOf(' ') + 1) }}</span>
                </div>
                <p class="department">{{ member.department }}</p>

                <!-- [新增] 專長資訊區塊 -->
                <div v-if="member.expertise && member.expertise.length" class="expertise-block">
                  <div class="expertise-title">
                    <i class="fas fa-thumbs-up"></i>
                    <span>專長</span>
                  </div>
                  <div class="expertise-content">
                    {{ member.expertise.join('、') }}
                  </div>
                </div>

              </div>

              <div class="member-links">
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
// 請確認已安裝 font-awesome
// npm install --save @fortawesome/fontawesome-free
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
          image: 'hsu_wen_chin.jpg', 
          name: '許文錦 Hsu, Wen-Chin',
          title: '教授',
          department: '資訊管理學系',
          expertise: ['醫療資訊管理', '電子商務', '人機互動', '消費者行為', '智慧型服務'],
        //   detailUrl: 'https://cis.ncu.edu.tw/iTeacher/home/0x1b3ff38f73a45ebc184051fad8fdb17c'
          detailUrl: 'https://im.mgt.ncu.edu.tw/teacher'
        },
        {
          image: 'professor.jpg',
          name: '侯詠德 YUNG-TE HOU',
          title: '教授',
          department: '生物機電工程學系',
          // [新增] 補上專長資料
          expertise: ['生物感測器', '微流體晶片', '奈米技術', '生物材料'],
          detailUrl: '#'
        },
        {
          image: 'professor.jpg',
          name: '陳沛隆 PEI-LUNG CHEN',
          title: '教授兼所長',
          department: '台大醫學院 基因體暨蛋白體醫學研究所',
          // [新增] 補上專長資料
          expertise: ['基因體醫學', '癌症基因組學', '生物資訊', '次世代定序'],
          detailUrl: '#'
        },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) {
        return 'https://via.placeholder.com/200';
      }
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
.team-page-wrapper {
  background-color: #ffffff;
  padding: 60px 0;
  color: #333;
}
.team-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
.member-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.member-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.card-image-wrapper {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem auto;
  position: relative;
}
.card-image-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f0f0f0;
}
.member-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.member-info .title {
  font-size: 1.1rem; /* 從 0.9rem 放大 */
  color: #666;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  padding-left: 14px; /* 稍微增加內距以容納更大的點 */
}
.member-info .title::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}
.name-block {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 15px;
  text-align: left;
}
.name-block::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  bottom: 5px;
  width: 4px;
  background-color: #333;
}
.name-chinese {
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
}
.name-english {
  display: block;
  font-size: 0.9rem;
  color: #777;
  letter-spacing: 1px;
}
.department {
  font-size: 1rem; /* 從 0.9rem 放大 */
  color: #555;
  margin-bottom: 1.5rem;
}
.expertise-block {
  border-top: 1px solid #eeeeee;
  padding-top: 1.5rem;
  margin-top: auto;
  text-align: left;
}
.expertise-title {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.75rem;
}
.expertise-title .fa-thumbs-up {
  color: #868e96;
  margin-right: 10px;
}
.expertise-content {
  font-size: 1rem; /* 從 0.95rem 放大 */
  color: #212529;
  line-height: 1.6;
}

/* --- [修改处] --- */
.member-links {
  margin-top: auto;
  padding-top: 1.5rem;
  text-align: center; /* 新增这一行即可 */
}

.read-more-btn {
  display: inline-block;
  background-color: #5a6268;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s;
}
.read-more-btn:hover {
  background-color: #343a40;
}
</style>