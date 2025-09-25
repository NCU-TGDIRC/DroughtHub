```html
<template>
  <div class="icqab-page">
    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <p class="conference-date">November 24-26, 2025 | National Central University, Taoyuan, Taiwan</p>
        <h1>1st International Forum on Climate Extremes and Societal Resilience: Drought, Heat, and Human Livability in a Warming World</h1>
        <h2>(CESR 2025)</h2>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="main-content">
      <div class="container">
        <!-- 1. Accordion Structure -->
        <div class="accordion">
          <div v-for="(item, index) in sections" :key="index" class="accordion-item">
            <div class="accordion-header" @click="toggleSection(index)">
              <h3>{{ item.title }}</h3>
              <span class="accordion-icon" :class="{ 'is-open': activeIndex === index }"></span>
            </div>
            <div class="accordion-content" :class="{ 'is-open': activeIndex === index }">
              <div class="accordion-content-inner" v-html="item.content"></div>
            </div>
          </div>
        </div>

        <!-- 2. Linear Layout Sections -->
        <div class="info-sections">
          
          <!-- Section 1: Conference Registration -->
          <section class="info-section">
            <div class="info-text">
              <h4>Conference Registration <span class="en-text"></span></h4>
              <a :href="info.registration.url" target="_blank" class="link">{{ info.registration.url }}</a>
            </div>
            <div class="info-media">
              <img :src="getImageUrl(info.registration.qrCode)" alt="Registration QR Code" class="qr-code">
            </div>
          </section>

          <!-- MODIFICATION START: Re-structured Location Section -->
          <section class="info-section location-section">
            <div class="location-wrapper">
              <h4>Venue & Location Information</h4>
              <div class="info-text host-info">
                <p class="conference-venue-main">{{ info.host.venue }}</p>

                <div class="venue-details">
                  <div class="venue-item">
                    <div class="venue-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                    <div class="venue-text">
                      <h5>Main Hall</h5>
                      <p>{{ info.host.mainVenue }}</p>
                    </div>
                  </div>
                  <div class="venue-item">
                    <div class="venue-icon"><i class="fas fa-users"></i></div>
                    <div class="venue-text">
                      <h5>Breakout Sessions & Poster Exhibition</h5>
                      <p>{{ info.host.subVenue }}</p>
                    </div>
                  </div>
                </div>
                
                <p class="host-by">Hosted by:</p>
                <ul class="host-list">
                  <li v-for="host in info.host.hosts" :key="host">{{ host }}</li>
                </ul>
              </div>

              <!-- Maps Gallery is now below the host info -->
              <div class="maps-gallery">
                <div class="map-item">
                  <h5>Surroundings Map</h5>
                  <img :src="getImageUrl('surroundings-map.jpg')" alt="Surroundings Map">
                </div>
                <div class="map-item">
                  <h5>Campus Building Map</h5>
                  <img :src="getImageUrl('campus-map.jpg')" alt="Campus Building Map">
                </div>
              </div>

              <!-- Google Map at the very bottom -->
              <div class="google-map-container">
                <iframe :src="info.location.mapUrl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </section>
          <!-- MODIFICATION END -->

        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ConferenceView',
  data() {
    return {
      activeIndex: 0,
      sections: [
        {
          title: 'Introduction',
          content: `<p>
                    The Taiwan & Global Drought Information Research Center (TGDIRC / DroughtHub), established in 2024 under the leadership of the Center for Space and Remote Sensing Research at National Central University, is dedicated to integrating research and development for global drought monitoring, early warning, and adaptation strategies. The core mission of the center is to address the increasingly severe challenges of global climate change, particularly the profound impacts of extreme weather events such as droughts and heatwaves on human society.<br><br>

                    The Sixth Assessment Report of the Intergovernmental Panel on Climate Change (IPCC) clearly states that global warming will lead to more frequent and severe drought events. It is projected that by 2050, over 5 billion people worldwide will face water scarcity. As a high-risk region for climate change, Taiwan has deeply experienced this trend in recent years: the century's worst drought in 2021 caused a nationwide water supply crisis with economic losses exceeding one hundred billion NT dollars; in 2023, consecutive record-breaking extreme high-temperature events not only impacted the energy system but also directly threatened public health and quality of life.<br><br>

                    In the face of these unprecedented challenges, the efforts of a single country or institution are no longer sufficient. The international scientific community widely recognizes that only through cross-border, interdisciplinary collaborative research and knowledge sharing can effective solutions be developed. TGDIRC was established against this backdrop, committed to creating an integrated international research platform.<br><br>

                    Since its inception, TGDIRC has actively established cooperative relationships with leading international institutions such as the National Drought Mitigation Center (NDMC) in the United States, the Commonwealth Scientific and Industrial Research Organisation (CSIRO) in Australia, and the European Climate Adaptation Platform (Climate-ADAPT). It also participates in initiatives led by The United Nations Office for Disaster Risk Reduction (UNDRR) and the World Meteorological Organization (WMO). Concurrently, the center has built research partnerships with countries in the Asia-Pacific region facing similar challenges, including Japan, South Korea, Australia, India, and Vietnam.<br><br>

                    To establish a permanent platform for international academic exchange and policy dialogue, and to gather the wisdom of top global experts in the fields of climate extremes, societal resilience, and human livability, TGDIRC has organized the inaugural "International Forum on Climate Extremes and Societal Resilience." This forum aims to become a major annual event in the field of climate science in the Asia-Pacific region and globally, establishing a long-term mechanism to promote international cooperation, foster knowledge innovation, and strengthen the scientific basis for policymaking.<br><br>

                    Through this forum, we hope not only to showcase Taiwan's strength and international contributions in climate science research but also to provide innovative solutions for the global community to address climate change challenges, working together to preserve a livable environment for humanity in a warming world.
                    </p>
                    `
        },
        {
          title: 'Objectives',
          content: `<p>
                    This forum is dedicated to developing the world's most influential exchange platform for research on climate extremes and societal resilience, bringing together top interdisciplinary experts to provide innovative solutions for humanity's sustainable survival in a warming world. The conference will be held in person to emphasize deep face-to-face communication and the development of collaborative networks. Paper submissions will be based on English abstracts to ensure a high degree of integration in international academic exchange.<br><br>

                    The forum focuses on core issues such as drought monitoring and early warning, health impacts of heatwaves, water security, agricultural resilience, ecosystem adaptation, energy system stability, urban climate governance, and disaster risk management, creating a complete knowledge chain from scientific research to policy implementation. Based on TGDIRC's founding mission to "promote global climate resilience and safeguard a livable future for humanity," this forum has the following strategic objectives and core values:<br><br>
                    <ol>
                    <li><b>Leading Global Climate Science</b><br>
                    We emphasize the integration of cutting-edge technologies like artificial intelligence, satellite remote sensing, and big data analytics to establish next-generation, real-time, and long-term climate monitoring and early warning systems. We will invite leading global scientists to discuss the optimization and best practices for both theory and application, setting new benchmarks for global climate extreme event research and transforming scientific innovation from a follower to a leader. We aim to shift from reacting to challenges to predicting them and developing diverse solutions.<br><br>

                    <li><b>Building an International Scientific Research Ecosystem</b><br>
                    Taiwan's unique geographical location and research advantages in climate studies will be leveraged to connect with the international academic community, establish interdisciplinary strategic partnerships, and position Taiwan as a hub for climate science in the Asia-Pacific. Through the TGDIRC platform, we will deepen strategic partnerships with top research institutions in the US, Europe, and Australia, create a permanent global expert network, promote long-term research cooperation, and encourage dialogue among young scholars internationally. The goal is to shape Taiwan into a bridge for knowledge and policy exchange in global climate governance, enhancing its voice and influence on international climate issues.<br><br>

                    <li><b>Strengthening National Climate Resilience</b><br>
                    We will establish a comprehensive "Science → Policy → Practice" conversion mechanism to effectively translate scientific findings into practical policy recommendations and assist the government in implementing them across society and industries. By providing forward-looking climate adaptation strategies, we will shift from reactive response to proactive prevention. In future climate change disasters, Taiwan can transform from a victim to a solution provider, becoming a model for global climate resilience governance.<br><br>

                    <li><b>Promoting the Achievement of Sustainable Development Goals (SDGs)</b><br>
                    We will closely align with the UN 2030 Agenda for Sustainable Development, particularly focusing on SDG 6 (Clean Water and Sanitation), SDG 11 (Sustainable Cities and Communities), SDG 13 (Climate Action), and SDG 15 (Life on Land). We will propose breakthrough solutions in areas such as water resources, urban resilience, climate change response, and environmental protection to ensure that the conference outcomes have a substantial impact on the sustainable development agenda and demonstrate Taiwan's tangible contributions to global sustainability.<br><br>

                    <li><b>Catalyzing Interdisciplinary Innovation and Integration</b><br>
                    Solutions to climate challenges depend on more than just in-depth study within single disciplines. By breaking down traditional academic boundaries, we will foster deep integration among climate science, public health, sociology, economics, and engineering. We aim to cultivate a new generation of climate experts with systems thinking, generate new research frontiers and innovative policy frameworks, and drive solutions from single-point breakthroughs to systemic innovation.<br><br>

                    <li><b>Establishing a Global Knowledge-Sharing Mechanism</b><br>
                    We will create an open international research platform to encourage exchange and collaboration among multinational research teams. This will promote data sharing, technology transfer, and talent exchange, ensuring that climate science research outcomes are rapidly translated into global public welfare and that scientific knowledge genuinely serves the construction of a shared future for humanity.
                    </ol>
                    </p>
                    `
        },
        {
          title: 'Expected Impacts',
          content: `<p>
                    <ol>
                    <li><b>Constructing a Global Climate Resilience Research Ecosystem</b><br>
                    Deepen Taiwan's strategic partnerships with leading global climate research institutions, including the National Drought Mitigation Center (USA), the European Climate Adaptation Platform, and CSIRO (Australia), to establish a permanent international expert network. Facilitate the launch of at least five major international collaborative projects through the forum platform, positioning Taiwan as a core hub for climate extreme event research in the Asia-Pacific region and significantly enhancing our nation's voice and influence in international climate science.<br><br>

                    <li><b>Catalyzing Breakthroughs in Interdisciplinary Innovative Research</b><br>
                    Through in-depth breakout sessions on eight core topics (drought monitoring and early warning, health impacts of heatwaves, water resilience, agricultural adaptation, ecosystem protection, energy security, urban climate governance, and disaster risk management), we will break down traditional disciplinary boundaries and promote innovative integration between climate science and fields such as public health, sociology, economics, and artificial intelligence. We expect to generate over 10 groundbreaking interdisciplinary research proposals, providing original Taiwanese solutions to global climate challenges.<br><br>

                    <li><b>Enhancing National Climate Adaptation Governance Capabilities</b><br>
                    Focus on the dual threats of drought and heatwaves facing Taiwan, with in-depth discussions on key issues such as the establishment of early warning systems, smart water resource management, urban heat island mitigation, agricultural resilience enhancement, and health protection mechanisms. Establish a complete "Research → Policy → Application" conversion mechanism to provide the government with forward-looking and actionable climate adaptation strategies. We anticipate reducing socioeconomic losses from extreme weather events by over 30% and developing Taiwan into a global model for climate resilience governance.<br><br>

                    <li><b>Boosting International Academic Influence</b><br>
                    Establish a rigorous international peer-review process and publish a "Special Issue on Climate Extremes and Societal Resilience" that meets the standards of top-tier international journals. Outstanding research will be recommended for publication in high-impact journals, with an expected output of over 5 SCI papers with a total impact factor exceeding 10. Simultaneously, establish a TGDIRC annual report mechanism to serve as a key reference for global climate policymaking, significantly raising the international academic standing and practical influence of Taiwan's climate science research.<br><br>

                    <li><b>Nurturing the Next Generation of Climate Science Leaders</b><br>
                    Provide opportunities for domestic and international graduate students and young scholars to engage deeply with leading international experts, building a global talent cultivation network in climate science. Establish a "Young Scholar Best Paper Award" and "International Exchange Scholarships" to support outstanding talent for collaborative research abroad for six months or more. We expect to cultivate over 50 climate experts with an international perspective and systems thinking, laying a solid foundation for the long-term development of climate science in Taiwan.<br><br>

                    <li><b>Establishing a Sustainable Knowledge-Sharing Mechanism</b><br>
                    Construct an open online research platform to facilitate the real-time sharing of global climate data, monitoring technologies, and adaptation strategies. Build a TGDIRC digital knowledge base to archive research findings on global drought and heatwaves, becoming a key resource center for the international climate science community. Through the regular publication of the "Global Climate Extreme Events Monitoring Report," we will provide scientific decision-making support to international organizations like the United Nations and the World Bank, demonstrating Taiwan's tangible contribution to global climate governance.
                    </ol> 
                    </p>`
        },
        {
          title: 'Conference Information',
          content: `<div>
            <p>
              1st International Forum on Climate Extremes and Societal Resilience: Drought, Heat, and Human Livability in a Warming World
            </p>

            <ul class="styled-list">
              <li><b>Dates</b><br>
              November 24 (Mon) - November 26 (Wed), 2025</li>

              <li><b>Venue</b><br>
              Teaching and Research Complex, National Central University</li>

              <li><b>Organizers</b><br>
              Taiwan & Global Drought Information Research Center (TGDIRC)<br>
              National Central University</li>

              <li><b>Conference Chairs</b><br>
              Prof. Yuei-An Liou<br> 
              Assoc. Prof. Hsiao-Ting Tseng</li>
            </ul>
          </div>`
        },
        {
          title: 'Speakers',
          content: `<div class="speaker-list-content">
                <h3>Keynote Speakers</h3>
                <p><i>(To be announced)</i></p>

                <h3>Invited Speakers</h3> 
                <ul class="styled-list">
                  <li>
                    <a href="https://cee.mit.edu/people_individual/dara-entekhabi/" target="_blank">Dara Entekhabi</a>
                    , Professor, Department of Civil and Environmental Engineering, Massachusetts Institute of Technology (MIT)
                  </li>
                  <li>
                    <a href="https://www.cesbio.cnrs.fr/author/yann-kerr/" target="_blank">Yann H. Kerr</a>
                    , Researcher, Centre d'Etudes Spatiales de la Biosphère (CESBIO)
                  </li>
                  <li>
                    <a href="https://www.stir.ac.uk/people/1967536" target="_blank">Michael Roy</a>
                    , Professor of Economic Sociology and Social Policy, Yunus Centre for Social Business and Health, Glasgow Caledonian University
                  </li>
                  <li>
                    <a href="https://repo.ur.krakow.pl/info/author/UR25c3c523d4774275bc32f0af7c96ad24?r=author&tab=&title=Person%2Bprofile%2B%25E2%2580%2593%2BPiotr%2BW%25C4%2599%25C5%25BCyk%2B%25E2%2580%2593%2BUniversity%2Bof%2BAgriculture%2Bin%2BKrakow&lang=en&qp=" target="_blank">Piotr Wężyk</a>
                    , Professor, Faculty of Forestry, University of Agriculture in Krakow
                  </li>
                  <li>
                    <a href="https://vneat.org/?page_id=286&utm_source=chatgpt.com&lang=en" target="_blank">Nguyen Kim Anh</a>
                    , Senior Researcher, Institute of Earth Sciences, Vietnam Academy of Science and Technology
                  </li>
                  <li>
                    <a href="https://www.k.u-tokyo.ac.jp/en/gsfs/faculty/takashi_oguchi/" target="_blank">Takashi Oguchi</a>
                    , Professor, Center for Spatial Information Science, The University of Tokyo
                  </li>
                  <li>
                    <a href="https://aasb.gov.au/board-members/prof-carolyn-cordery/" target="_blank">Carolyn Cordery</a>
                    , Professor, School of Accounting and Commercial Law, Victoria University of Wellington
                  </li>
                  <li>
                    <a href="https://schulich.yorku.ca/faculty/charles-cho/" target="_blank">Charles H. Cho</a>
                    , Professor of Sustainability Accounting, Erivan K. Haub Chair in Business & Sustainability, Schulich School of Business, York University
                  </li>
                  <li>
                    <a href="https://www.researchgate.net/profile/Tien-Minh-2" target="_blank">Trần Minh Tiến</a>
                    , Director General, Soils and Fertilizers Research Institute (SFRI)
                  </li>
                  <li>
                    <a href="https://engineering.virginia.edu/faculty/venkataraman-lakshmi" target="_blank">Venkataraman (Venkat) Lakshmi</a>
                    , John L. Newcomb Professor of Engineering, Department of Engineering Systems and Environment, University of Virginia
                  </li>
                  <li>
                    <a href="https://www.tesaf.unipd.it/en/paolo-tarolli" target="_blank">Paolo Tarolli</a>
                    , Professor, Department of Land, Environment, Agriculture and Forestry, University of Padua
                  </li>
                  <li>
                    <a href="https://english.hi.is/staff/benedikt?utm_source=chatgpt.com" target="_blank">Jón Atli Benediktsson</a>
                    , Professor, Faculty of Electrical and Computer Engineering, University of Iceland
                  </li>
                  <li>
                    <a href="https://eratosthenes.org.cy/team/barbara-ryan/" target="_blank">Barbara Ryan</a>
                    , Executive Director, World Geospatial Industry Council (WGIC)
                  </li>
                  <li>
                    <a href="https://portfolio.jcu.edu.au/researchers/ben.jarihani/" target="_blank">Ben Jarihani</a>
                    , Associate Professor, College of Science and Engineering, James Cook University
                  </li>
                  <li>
                    <a href="https://cde.nus.edu.sg/cee/staff/he-xiaogang/" target="_blank">Xiaogang He</a>
                    , Assistant Professor, Department of Civil and Environmental Engineering, National University of Singapore
                  </li>
                </ul>
              </div>
              `
        },
        {
          title: 'Agenda',
          content: `<div class="agenda-container">
                      <p>CESR 2025 Tentative Agenda</p>
                      
                      <h4 class="agenda-day-title">Day 1 - Nov 24 (Mon.) | Opening & Keynote Speeches</h4>
                      <table class="agenda-table">
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th colspan="2">Event</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>13:20-13:50</td>
                            <td colspan="2">Registration</td>
                          </tr>
                          <tr>
                            <td>13:50-14:00</td>
                            <td colspan="2">Opening Ceremony</td>
                          </tr>
                          <tr>
                            <td>14:00-14:30</td>
                            <td colspan="2">Keynote Speaker 1</td>
                          </tr>
                           <tr>
                            <td>14:30-15:00</td>
                            <td colspan="2">Keynote Speaker 2</td>
                          </tr>
                           <tr>
                            <td>15:30-16:00</td>
                            <td colspan="2">Keynote Speaker 3</td>
                          </tr>
                          <tr class="break-row">
                            <td>16:00-16:20</td>
                            <td colspan="2">Tea Break / Poster Exhibition</td>
                          </tr>
                          <tr>
                            <td rowspan="2">16:30-18:00</td>
                            <td><b>Session A-1</b></td>
                            <td><b>Session B-1</b></td>
                          </tr>
                          <tr>
                            <td>Chair:<br>Speakers:</td>
                            <td>Chair:<br>Speakers:</td>
                          </tr>
                          <tr class="meal-row">
                            <td>18:00-20:00</td>
                            <td colspan="2">Conference Dinner</td>
                          </tr>
                        </tbody>
                      </table>

                      <h4 class="agenda-day-title">Day 2 - Nov 25 (Tue.) | Parallel Sessions & Discussions</h4>
                      <table class="agenda-table">
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th colspan="3">Event</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>08:00-09:00</td>
                            <td colspan="3">Registration</td>
                          </tr>
                           <tr>
                            <td>10:00-16:00</td>
                            <td colspan="3">Poster Exhibition</td>
                          </tr>
                          <tr>
                            <td rowspan="2">09:00-10:30</td>
                            <td><b>Session A-2</b></td>
                            <td><b>Session B-2</b></td>
                            <td><b>Session C-2</b></td>
                          </tr>
                           <tr>
                            <td>Chair:<br>Speakers:</td>
                            <td>Chair:<br>Speakers:</td>
                            <td>Chair:<br>Speakers:</td>
                          </tr>
                          <tr class="break-row">
                            <td>10:30-10:50</td>
                            <td colspan="3">Tea Break</td>
                          </tr>
                           <tr>
                            <td rowspan="2">10:50-12:20</td>
                            <td><b>Session A-3</b></td>
                            <td><b>Session B-3</b></td>
                            <td><b>Session C-3</b></td>
                          </tr>
                           <tr>
                            <td>Chair:<br>Speakers:</td>
                            <td>Chair:<br>Speakers:</td>
                            <td>Chair:<br>Speakers:</td>
                          </tr>
                          <tr class="meal-row">
                            <td>12:20-13:30</td>
                            <td colspan="3">Lunch</td>
                          </tr>
                          <tr>
                            <td rowspan="2">13:30-15:00</td>
                            <td><b>Session A-4</b></td>
                            <td colspan="2"><b>Session B-4</b></td>
                          </tr>
                           <tr>
                            <td>Chair:<br>Speakers:</td>
                            <td colspan="2">Chair:<br>Speakers:</td>
                          </tr>
                          <tr>
                            <td>15:00-16:00</td>
                            <td colspan="3">Closing Ceremony</td>
                          </tr>
                        </tbody>
                      </table>

                      <h4 class="agenda-day-title">Day 3 - Nov 26 (Wed.) | Synthesis & Closing</h4>
                      <table class="agenda-table">
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Event</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>09:00-10:30</td>
                            <td>Summary Reports from Parallel Sessions</td>
                          </tr>
                          <tr class="break-row">
                            <td>10:30-11:00</td>
                            <td>Tea Break</td>
                          </tr>
                          <tr>
                            <td>11:00-12:00</td>
                            <td>Forum Declaration Drafting & Discussion</td>
                          </tr>
                          <tr>
                            <td>12:00-12:30</td>
                            <td>Closing Ceremony</td>
                          </tr>
                          <tr class="meal-row">
                            <td>12:30-14:00</td>
                            <td>Lunch</td>
                          </tr>
                           <tr>
                            <td>14:00-17:00</td>
                            <td>Field Trip</td>
                          </tr>
                          <tr class="meal-row">
                            <td>18:30-20:30</td>
                            <td>Farewell Banquet</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    `
        }
      ],
      // 2. Information Block Data
      info: {
        registration: {
          url: 'https://forms.gle/U2MU6NiGJbaqCfhu6',
          qrCode: 'qr-registration.png'
        },
        poster: {
          steps: [
            { text: 'Submission Deadline: 2025/03/14' },
            { text: 'Acceptance Notification: 2025/03/24' },
            { text: 'Poster Abstract Format: Please refer to the attached template.', url: 'poster-template.pdf' },
            { text: `Submission Link: <a href="https://forms.gle/xPCqDJJxyKqMJPUJA" target="_blank">https://forms.gle/xPCqDJJxyKqMJPUJA</a>` },
          ],
          qrCode: 'qr-poster.png',
        },
        location: {
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.940004663239!2d121.19271850928976!3d24.968155777766693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2sNational+Central+University!5e0!3m2!1sen!2stw!4v1758076938764!5m2!1sen!2stw'
        },
        host: {
          dates: 'Nov 24 (Mon) - Nov 26 (Wed), 2025',
          venue: 'National Central University',
          mainVenue: 'Luo Jialun Lecture Hall, 1F, Teaching and Research Complex',
          subVenue: '2F, Teaching and Research Complex (3 rooms)',
          hosts: [
            'Taiwan & Global Drought Information Research Center (TGDIRC / DroughtHub)'
          ]
        }
      }
    }
  },
  methods: {
    toggleSection(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
    getImageUrl(imageName) {
      if (!imageName) return '';
      try { return require(`@/assets/${imageName}`); } catch (e) { console.error(e); return ''; }
    },
    getAssetUrl(fileName) {
      if (!fileName) return '#';
      try { return require(`@/assets/${fileName}`); } catch (e) { return '#'; }
    }
  }
}
</script>

<style scoped>
/* --- Font Awesome Icons (if not globally imported) --- */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

/* --- Background and Page Header Styles --- */
.icqab-page { background: #f4f6fc; color: #333; }
.container { max-width: 1540px; margin: 0 auto; padding: 0 20px; }
.page-header { padding: 120px 0 60px 0; text-align: center; color: #ffffff; background-image: url('../assets/icqab-bg.jpg'); background-size: cover; background-position: center; position: relative; }
.page-header::before { content: ''; position: absolute; top:0; left:0; width: 100%; height: 100%; background-color: rgba(10, 25, 47, 0.7); }
.page-header .container { position: relative; z-index: 1; }
.conference-date { font-size: 1.2rem; letter-spacing: 1px; margin-bottom: 1rem; }
.page-header h1 { font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem; }
.page-header h2 { font-size: 1.8rem; font-weight: 400; color: #ccc; }

/* --- Main Content Area Styles --- */
.main-content {
  padding: 50px 0 60px 0;
  background: white;
}

/* --- Accordion Styles --- */
.accordion { border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
.accordion-item { border-bottom: 1px solid #e0e0e0; }
.accordion-item:last-child { border-bottom: none; }
.accordion-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 25px; cursor: pointer; background-color: #f8f9fa; transition: background-color 0.3s; }
.accordion-header:hover { background-color: #f1f3f5; }
.accordion-header h3 { margin: 0; font-size: 1.7rem; color: #003366; font-weight:700; }
.accordion-icon { width: 12px; height: 12px; border-right: 3px solid #0056b3; border-bottom: 3px solid #0056b3; transform: rotate(45deg); transition: transform 0.4s ease; }
.accordion-icon.is-open { transform: rotate(-135deg); }
.accordion-content { display: grid;  grid-template-rows: 0fr;   transition: grid-template-rows 0.5s ease-in-out; }
.accordion-content.is-open { grid-template-rows: 1fr; }
.accordion-content-inner { overflow: hidden; padding:0 25px;transition: padding 0.5s ease-in-out;  font-size: 1.25rem; font-weight: 300; line-height: 1.8; }
.accordion-content.is-open .accordion-content-inner { padding: 25px; }
:deep(.accordion-content-inner ul) { list-style-type: none; padding-left: 0; }
:deep(.accordion-content-inner ul li) { margin-bottom: 1rem; }
:deep(.accordion-content-inner p) { margin-bottom: 1rem; }
:deep(.accordion-content-inner strong) { color: #212529; }
:deep(.speakers-grid-in-accordion) { display: flex; gap: 30px; text-align: center; }
:deep(.speaker-card-in-accordion img) { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px; }
:deep(.speaker-card-in-accordion h4) { font-size: 1.2rem; margin-bottom: 5px; }
:deep(.accordion-content-inner ul a) {  font-weight: bold;  color: #007ACC;   text-decoration: underline;   transition: color 0.3s; }
:deep(.accordion-content-inner ul a:hover) {  color: #007bff; }
:deep(.accordion-content-inner .styled-list) {
  list-style-type: revert;
  padding-left: 25px;
}
:deep(.accordion-content-inner .speaker-list-content) {
  font-weight: 400;
}
:deep(.accordion-content-inner .speaker-list-content h3) {
  font-weight: 700;
}
:deep(.accordion-content-inner .speaker-list-content li) {
  font-size: 1.1rem;
  line-height: 1.7;
}

/* --- Agenda Table Styles --- */
:deep(.agenda-container p) {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
:deep(.agenda-day-title) {
  font-size: 1.8rem;
  color: #003366;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #0056b3;
}
:deep(.agenda-table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
:deep(.agenda-table th), :deep(.agenda-table td) {
  border: 1px solid #dee2e6;
  padding: 12px 15px;
  text-align: left;
  vertical-align: middle;
}
:deep(.agenda-table thead th) {
  background-color: #003366;
  color: white;
  font-weight: 600;
}
:deep(.agenda-table tbody tr:nth-child(even)) {
  background-color: #f8f9fa;
}
:deep(.agenda-table td:first-child) {
  width: 150px;
  font-weight: 500;
  color: #495057;
}
:deep(.agenda-table .break-row) {
  background-color: #e9ecef;
  color: #495057;
  font-weight: bold;
}
:deep(.agenda-table .meal-row) {
  background-color: #d1ecf1;
  color: #0c5460;
  font-weight: bold;
}

/* --- Linear Layout Section Styles --- */
.info-sections {
  margin-top: 50px;
}
.info-section { 
  display: flex; 
  align-items: flex-start;
  gap: 40px; 
  padding: 40px 0; 
  border-bottom: 1px solid #e0e0e0; 
}
.info-section:last-child { border-bottom: none; }
.info-section:nth-child(even) { flex-direction: row-reverse; }
.info-text, .info-media { flex: 1; min-width: 0; }
.info-text h4  { font-size: 2rem;  color: #003366;  margin-bottom: 2rem;  padding-bottom: 1rem; }
.info-text h4 .en-text { font-size: 1.6rem;  color: #003366; margin-left: 10px; }
.info-text .link { font-size: 1.1rem; color: #007bff; word-break: break-all; }
.qr-code { width: 180px; height: 180px; background: white; padding: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: block; margin: 0 auto; }
.poster-steps { padding-left: 0; list-style: none; font-size: 1.1rem; line-height: 2; }
:deep(.poster-steps a) { color: #007bff; }
.host-info { color: #4a4a4a; }
.host-by { font-weight: bold; margin-bottom: 10px; }
.host-list { list-style: none; padding: 0; margin: 0; line-height: 1.8; }


/* --- MODIFICATION: Location Section Styles --- */
.location-section .location-wrapper {
  width: 100%;
}
.location-section .location-wrapper > h4 { /* Target the main h4 */
  font-size: 2rem;
  color: #003366;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #0056b3;
}
.conference-venue-main {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 2rem;
}
.venue-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 3px solid #0056b3;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}
.venue-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.venue-icon {
  font-size: 1.5rem;
  color: #007bff;
  padding-top: 5px;
}
.venue-text h5 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #212529;
}
.venue-text p {
  margin: 0;
  font-size: 1.1rem;
  color: #495057;
}

.maps-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2.5rem auto 0 auto;
  max-width: 90%; 
}
.map-item {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.07);
  text-align: center;
}
.map-item h5 {
  margin: 0;
  padding: 12px 15px;
  background-color: #f8f9fa;
  font-size: 1.1rem;
  font-weight: 600;
  color: #495057;
}
.map-item img {
  width: 100%;
  display: block;
  background: white;
}

.google-map-container {
  max-width: 90%; 
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border: 1px solid #dee2e6;
  margin: 2.5rem auto 0 auto;
}
</style>
```