<template>
  <div>
    <PageBanner title="團隊成員" />
    <main class="py-5 bg-light">
      <b-container>
        <b-row class="g-4 align-items-stretch">
          <b-col v-for="member in members" :key="member.name" md="6" lg="4">
            <b-card no-body class="text-center h-100 shadow-sm card-hover-effect">
              <b-card-body class="d-flex flex-column p-4 h-100">
                <div class="mb-4">
                  <b-img :src="getImageUrl(member.image)" rounded="circle" :alt="member.name" class="member-img"></b-img>
                </div>
                <div class="flex-grow-1">
                  <h4 class="card-title-custom">{{ member.name.split(' ')[0] }} <small class="text-muted fw-normal">{{ member.name.substring(member.name.indexOf(' ') + 1) }}</small></h4>
                  <p class="text-muted mb-3">{{ member.title }} | {{ member.department }}</p>
                  <div v-if="member.expertise && member.expertise.length" class="expertise-block mt-3 pt-3 border-top">
                    <h6 class="fw-bold text-primary-emphasis">專業領域</h6>
                    <div class="expertise-content d-inline-block" v-html="member.expertise.join('')"></div>
                  </div>
                </div>
                <div class="mt-4">
                  <b-button :href="member.detailUrl" target="_blank" size="sm" class="btn-read-more">READ MORE</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
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
          title: '太遙講座教授',
          department: '太空及遙測研究中心',
          expertise: ['<b>遙測</b>: 微波、熱紅外線及光學遙測; 衛載及空載遙測<br><b>科學</b>: 邊界層(微氣象)、大氣科學<br><b>工程</b>: 電機工程(電磁波)、GPS氣象'],
          detailUrl: 'https://sites.google.com/view/hrsl-ncu'
        },
        {
          image: 'Chien-wen Shen.png',
          name: '沈建文 Chien-wen Shen',
          title: '教授暨亞洲影響力衡量與管理研究總中心、社企中心、公益傳播中心主任',
          department: '企業管理學系',
          expertise: ['資訊創新技術應用、供應鏈管理、決策科學'],
          detailUrl: 'https://ba.mgt.ncu.edu.tw/faculty_txt.php?id=1054'
        },
        
        {
          image: 'Cheng-Ling Kou.png',
          name: '郭政靈 Cheng-Ling Kou',
          title: '教授',
          department: '太空科學與科技研究中心',
          expertise: ['<b>遙測</b>：高光譜以及多光譜儀資料融合、地物分類以及高溫分析<br><b>科學</b>：大氣電學和電漿物理<br><b>工程</b>：立方衛星以及太空光學儀器酬載'],
          detailUrl: 'https://sites.google.com/g.ncu.edu.tw/ncu-sol/'
        },
        {
          image: 'hsu_wen_chin.jpg',
          name: '許文錦 Wen-Chin Hsu',
          title: '教授',
          department: '資訊管理學系',
          expertise: ['醫療資訊管理、電子商務、人機互動、消費者行為、智慧型服務'],
          detailUrl: 'https://im.mgt.ncu.edu.tw/teacher'
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
          image: 'Yueh-Hsia Luo.jpg',
          name: '羅月霞 Yueh-Hsia Luo',
          title: '副教授',
          department: '生命科學系',
          expertise: ['感染與免疫、奈米粒子免疫毒理分析、腸道微生物與免疫系統'],
          detailUrl: 'https://nculs.in.ncu.edu.tw/index.php/Staff/more/id/20/cid/2.html'
        },
        {
          image: 'Chun-Hsien Hsu.jpg',
          name: '徐峻賢 Chun-Hsien Hsu',
          title: '副教授',
          department: '認知神經科學研究所',
          expertise: ['神經語言學、計算語言學、語音學、構詞學、語言習得、EEG/MEG訊號分析'],
          detailUrl: 'https://icn.ncu.edu.tw/2-1-detail.php?id=9'
        },
        {
          image: 'Shou-Hao Chiang.jpg',
          name: '姜壽浩 Shou-Hao Chiang',
          title: '副教授',
          department: '太空及遙測研究中心',
          expertise: ['空間模式、空間資訊分析、水文及崩塌模式、自然地理'],
          detailUrl: 'https://www.csrsr.ncu.edu.tw/about/professor_info.php?id=15'
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
.member-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}
.card-title-custom {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
}
.expertise-content {
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: left;
}
.card-hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover-effect:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12) !important;
}

.btn-read-more {
  background-color: #003366;
  border-color: #003366;
  color: #fff;
  opacity: 0.85;
  transition: all 0.2s ease-in-out;
}

.btn-read-more:hover {
  background-color: #002244;
  border-color: #002244;
  color: #fff;
  opacity: 1;
}
</style>
