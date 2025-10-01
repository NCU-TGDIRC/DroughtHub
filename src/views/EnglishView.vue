<template>
  <div class="icqab-page">
    <!-- Page Header (Unchanged) -->
    <div class="page-header position-relative text-center text-white">
      <div class="bg-overlay"></div>
      <b-container class="position-relative py-5">
        <p class="h4 fw-normal conference-date">November 24-26, 2025 | National Central University, Taoyuan, Taiwan</p>
        <h1 class="display-4 fw-bold">The First International Forum on Climate Extremes and Societal Resilience:<br>Drought, Heat Stress, and Human Livability in a Warming World</h1>
        <h2 class="h1 fw-normal mt-3">(CESR 2025)</h2>
      </b-container>
    </div>

    <!-- Main Content -->
    <main class="py-5 bg-white">
      <b-container>
        <!-- Accordion - Using custom header styles -->
        <b-accordion class="mb-5 custom-accordion">
          <b-accordion-item v-for="(item, index) in sections" :key="index">
            <template #title>
              <h3 class="accordion-title-custom">{{ item.title }}</h3>
            </template>
            <div class="accordion-content-inner fs-5 fw-bolder">
              <div v-html="item.content"></div>
            </div>
          </b-accordion-item>
        </b-accordion>

        <!-- Info Sections (Unchanged) -->
        <div class="info-sections mt-5">
          
          <!-- New Registration Section -->
          <div class="registration-section my-5 py-5">
            <b-card no-body class="shadow-lg border-0 overflow-hidden">
              <b-row no-gutters>
                <b-col md="7" class="p-5 d-flex flex-column justify-content-center">
                  <h3 class="mb-4 fs-2 fw-bold" style="color: #003366;">Conference Registration & Contact Info</h3>
                  <p class="text-muted mb-4 fs-5">
                    Welcome to register online for CESR 2025. Click the button below or scan the QR code on the right to proceed to the registration page. If you have any questions, please feel free to contact us.
                  </p>
                  <div class="mb-4 d-flex align-items-center flex-wrap">
                    <b-button :href="info.registration.url" target="_blank" variant="primary" size="lg" class="me-3 mb-2">
                      <i class="fas fa-edit me-2"></i> Online Registration
                    </b-button>
                    <b-button :href="info.registration.inquiryUrl" target="_blank" size="lg" class="mb-2 btn-contact">
                      <i class="fas fa-question-circle me-2"></i> Registration Inquiry Form
                    </b-button>
                  </div>
                  <hr class="my-4">
                  <div>
                    <h5 class="h5 text-uppercase text-muted mb-3">Contact Person</h5>
                    <a href="mailto:tgdirc.ncu@gmail.com" class="link-dark text-decoration-none contact-link">
                      <i class="fas fa-envelope me-2 text-primary"></i> <span class="fs-5">tgdirc.ncu@gmail.com</span>
                    </a>
                  </div>
                </b-col>
                <b-col md="5" class="d-flex align-items-center justify-content-center p-5" style="background-color: #f8f9fa;">
                  <div class="text-center">
                    <img :src="getImageUrl('qr-registration.jpg')" alt="Registration QR Code" class="qr-code-large img-fluid rounded">
                    <p class="text-muted small mt-3">Scan QR Code to Register</p>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
          
          <b-row class="py-5">
            <b-col>
              <h4 class="accordion-title-custom mb-4 fs-2">Venue & Location</h4>
              <b-row>
                <b-col lg="6" class="mb-5 mb-lg-0">
                  <div class="h5 fw-bold text-primary mb-3">{{ info.host.venue }}</div>
                  
                  <div class="d-flex mb-3">
                    <div class="venue-icon-wrapper"><i class="fas fa-chalkboard-teacher fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">Main Hall</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.mainVenue }}</p>
                    </div>
                  </div>

                  <div class="d-flex mb-4">
                    <div class="venue-icon-wrapper"><i class="fas fa-users fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">Breakout Sessions & Poster Exhibition</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.subVenue }}</p>
                    </div>
                  </div>

                  <h5 class="h5 mt-4 mb-2">Hosted by:</h5>
                  <ul class="list-unstyled">
                    <li v-for="host in info.host.hosts" :key="host">{{ host }}</li>
                  </ul>
                </b-col>
                <b-col lg="6">
                  <b-row>
                    <b-col sm="6" class="mb-4">
                      <b-card no-body class="shadow-sm">
                        <b-card-header>Surroundings Map</b-card-header>
                        <img :src="getImageUrl('surroundings-map.jpg')" alt="Surroundings Map" class="img-fluid">
                      </b-card>
                    </b-col>
                    <b-col sm="6" class="mb-4">
                      <b-card no-body class="shadow-sm">
                        <b-card-header>Campus Map</b-card-header>
                        <img :src="getImageUrl('campus-map.jpg')" alt="Campus Building Map" class="img-fluid">
                      </b-card>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="mt-5">
                <b-col lg="8" offset-lg="2">
                  <div class="ratio ratio-16x9 rounded shadow-sm">
                     <iframe :src="info.location.mapUrl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
// Font Awesome is imported globally via @import in <style>
export default {
  name: 'ConferenceView',
  data() {
    return {
      sections: [
        {
          title: 'Important Dates',
          content: `<div><ul class="styled-list">
            <li><b>Abstract submission deadline:</b> October 22, 2025</li>
            <li><b>Notification of abstract acceptance:</b> October 29, 2025</li>
            <li><b>Registration Deadline:</b> November 10, 2025</li>
            <li><b>Conference date:</b> November 24, 2025</li>
            </ul></div>`
        },
        {
          title: 'Introduction',
          content: `<p>The Taiwan and Global Drought Information and Research Center (TGDIRC / DroughtHub), established in 2024 and led by the Center for Space and Remote Sensing Research at National Central University, is dedicated to integrating research and development for global drought monitoring, early warning systems, and adaptation strategies. The core mission of the center is to address the increasingly severe challenges of global climate change, particularly the profound impacts of extreme climate events like droughts and heat stress on human society.</p><p>The Sixth Assessment Report of the Intergovernmental Panel on Climate Change (IPCC) clearly states that global warming will lead to more frequent and severe drought events. It is projected that by 2050, over 5 billion people worldwide will face water shortages. As a high-risk region for climate change, Taiwan has deeply experienced this trend in recent years: the centennial drought in 2021 caused a nationwide water supply crisis with economic losses exceeding NT$100 billion; the record-breaking extreme heat events in 2023 not only impacted the energy system but also directly threatened public health and quality of life.</p><p>In the face of these unprecedented challenges, the efforts of a single country or institution are no longer sufficient. The international scientific community widely recognizes that only through cross-border, interdisciplinary collaborative research and knowledge sharing can effective solutions be developed. TGDIRC was established against this backdrop, aiming to build an integrated international research platform.</p><p>Since its inception, TGDIRC has actively established cooperative relationships with top international institutions such as the National Drought Mitigation Center (NDMC) in the United States, the Commonwealth Scientific and Industrial Research Organisation (CSIRO) in Australia, and the European Climate Adaptation Platform. It also participates in relevant initiatives by the United Nations Office for Disaster Risk Reduction (UNDRR) and the World Meteorological Organization (WMO). Simultaneously, the center has established research partnerships with countries in the Asia-Pacific region facing similar challenges, including Japan, South Korea, Australia, India, and Vietnam.</p><p>To establish a permanent international platform for academic exchange and policy dialogue, and to gather the wisdom of top global experts in the fields of climate extremes, societal resilience, and human livability, TGDIRC is specially organizing the first "International Forum on Climate Extremes and Societal Resilience." This forum aims to become a major annual event in the field of climate science in the Asia-Pacific region and globally, establishing a long-term mechanism to promote international cooperation, foster knowledge innovation, and strengthen the scientific basis for policymaking.</p><p>Through this forum, we hope not only to showcase Taiwan's strength and international contributions in climate science research but also to provide innovative solutions for the global community in facing the challenges of climate change, working together to preserve a livable environment for humanity in a warming world.</p>`
        },
        {
          title: 'Objectives',
          content: `<p>This forum is committed to developing the world's most influential research exchange platform on climate extremes and societal resilience, bringing together top interdisciplinary expert wisdom to provide innovative solutions for human sustainability in a warming world. The conference will be held in-person, emphasizing deep face-to-face exchanges and the development of collaborative networks. Paper submissions will use an English abstract system to ensure a high degree of integration in international academic exchange.</p><p>The forum focuses on core issues such as drought monitoring and early warning, health impacts of heat stress, water resource security, agricultural resilience, ecosystem adaptation, energy system stability, urban climate governance, and disaster risk management, aiming to establish a complete knowledge chain from scientific research to policy implementation. Based on TGDIRC's founding mission to "promote global climate resilience and safeguard a livable future for humanity," this forum has the following strategic objectives and core values:</p><ol><li><b>Leading Global Climate Science</b><br>Special emphasis is placed on integrating cutting-edge technologies like artificial intelligence, satellite remote sensing, and big data analytics to establish a next-generation, long-term, and real-time climate monitoring and early warning system. We invite top global scientists to jointly explore the theoretical and practical optimization of these systems. By promoting forward-looking practical technology applications and deep dialogue with theory, we aim to set a new benchmark for global research on climate extremes, transitioning from a follower to a leader in scientific innovation. We will shift from responding to challenges to predicting them and establishing diverse solutions.</li><li><b>Building an International Scientific Research Ecosystem</b><br>Taiwan holds a unique geographical and research advantage in climate studies. This forum will connect with the international academic community to build interdisciplinary strategic partnerships, making Taiwan a hub for climate science in the Asia-Pacific. Through the TGDIRC platform, we will deepen strategic partnerships with top research institutions in the US, Europe, and Australia, establishing a permanent global expert network. We will promote long-term research cooperation and encourage dialogue between young scholars and the international community, aiming to position Taiwan as a bridge for knowledge and policy exchange in global climate governance and enhance its voice and influence on international climate governance issues.</li><li><b>Strengthening National Climate Resilience</b><br>We will establish a complete transformation mechanism from "science to policy to practice," effectively translating scientific findings into practical policy recommendations and assisting the government in implementing them in society and industry. This will provide the government with forward-looking climate adaptation strategies, shifting from passive response to proactive prevention. In future climate change disasters, Taiwan can transform from a victim to a solution provider, becoming a model for global climate resilience governance.</li><li><b>Promoting the Achievement of Sustainable Development Goals (SDGs)</b><br>The forum will closely align with the UN 2030 Agenda for Sustainable Development, particularly addressing SDGs 6 (Clean Water and Sanitation), 11 (Sustainable Cities and Communities), 13 (Climate Action), and 15 (Life on Land). We will propose breakthrough solutions in areas such as water resources, urban resilience, climate change response, and environmental protection, ensuring that the conference outcomes have a substantial impact on the sustainable development agenda and demonstrating Taiwan's tangible contributions to global sustainable development.</li><li><b>Catalyzing Interdisciplinary Innovation and Integration</b><br>Solutions to climate challenges rely not only on in-depth exploration of single disciplines. By breaking through traditional disciplinary boundaries, we will promote deep integration between climate science, public health, sociology, economics, and engineering technology. We will cultivate a new generation of climate experts with systemic thinking and foster new research frontiers and innovative policy frameworks, driving solutions from single-point breakthroughs to systemic innovation.</li><li><b>Establishing a Global Knowledge Sharing Mechanism</b><br>We will build an open international research platform to inspire exchange and collaboration among multinational research teams, promoting data sharing, technology transfer, and talent exchange. This ensures that climate science research findings can be quickly translated into global public welfare, making scientific knowledge truly serve the construction of a community with a shared future for mankind.</li></ol>`
        },
        {
          title: 'Expected Impacts',
          content: `<ol><li><b>Constructing a Global Climate Resilience Research Ecosystem</b><br>Deepen strategic partnerships between Taiwan and top global climate research institutions, including the US National Drought Mitigation Center, the European Climate Adaptation Platform, and Australia's CSIRO, to establish a permanent international expert network. The forum platform is expected to initiate at least 5 major international cooperation projects, making Taiwan a core hub for climate extreme event research in the Asia-Pacific region and significantly enhancing our country's voice and influence in international climate science.</li><li><b>Catalyzing Breakthroughs in Interdisciplinary Innovative Research</b><br>Through in-depth group discussions on eight core themes (drought monitoring and early warning, health impacts of heat stress, water resource resilience, agricultural adaptation, ecosystem protection, energy security, urban climate governance, and disaster risk management), we will break traditional disciplinary boundaries. This will promote innovative integration between climate science and fields like public health, sociology, economics, and artificial intelligence. We anticipate generating over 10 breakthrough interdisciplinary research proposals, providing original Taiwanese solutions to global climate challenges.</li><li><b>Enhancing National Climate Adaptation Governance Capacity</b><br>Focusing on the dual threats of drought and heat stress faced by Taiwan, the forum will conduct in-depth discussions on key issues such as the establishment of early warning systems, smart water resource management, urban heat island mitigation, agricultural resilience enhancement, and health protection mechanisms. By establishing a complete transformation mechanism from "scientific research to policymaking to practical application," we will provide the government with forward-looking and actionable climate adaptation strategies. This is expected to reduce socioeconomic losses from extreme climate events by over 30%, developing Taiwan into a model for global climate resilience governance.</li><li><b>Boosting International Academic Influence</b><br>Establish a rigorous international peer-review mechanism and publish a special issue on "Climate Extremes and Societal Resilience," meeting the standards of top international journals. Outstanding research results will be recommended for publication in high-impact journals, with an expected output of over 5 SCI papers with a total impact factor exceeding 10. Concurrently, an annual TGDIRC report mechanism will be established, becoming an important reference for global climate policymaking and significantly elevating the international academic standing and practical influence of Taiwan's climate science research.</li><li><b>Cultivating the Next Generation of Climate Science Leaders</b><br>Provide opportunities for graduate students and young scholars from home and abroad to engage in deep exchanges with top international experts, building a global talent cultivation network in climate science. We will establish a "Young Scholar Best Paper Award" and "International Exchange Scholarships" to support outstanding talents for cooperative research abroad for periods of 6 months or more. We expect to cultivate over 50 climate experts with international perspectives and systemic thinking, laying a solid talent foundation for the long-term development of climate science in Taiwan.</li><li><b>Establishing a Sustainable Knowledge Sharing Mechanism</b><br>Construct an open online research platform to promote the real-time sharing of global climate data, monitoring technologies, and adaptation strategies. A TGDIRC digital knowledge base will be established to house research findings related to global drought and heat stress, becoming an important resource center for the international climate science community. Through the regular publication of the "Global Climate Extreme Event Monitoring Report," we will provide scientific decision-making support to international organizations such as the United Nations and the World Bank, demonstrating Taiwan's substantive contribution to global climate governance.</li></ol>`
        },
        {
          title: 'Conference Themes',
          content: `<p>This forum will feature 5 thematic sessions covering the following topics:</p>
            <ul class="themes-list">
                <li><h4>Theme 1: Drought Monitoring and Early Warning Technologies</h4><p><br>
                    Drought is one of the most destructive natural disasters globally, with impacts spanning agricultural production, water resource management, and energy supply, potentially causing huge damage to ecosystem stability and socioeconomic development. As extreme climate change leads to drastic environmental shifts, the frequency and intensity of drought events are gradually increasing. Establishing systematic and scientific drought monitoring and early warning technologies has become an urgent international research and policy need. This theme will focus on the integration and application of multi-source data, including satellite monitoring, ground observation networks, and climate change simulations, to enhance real-time monitoring and prediction capabilities of the drought development process.<br>
                    Topics will include, but are not limited to:<br>
                    1. Innovative applications of monitoring technologies<br>
                    2. Design, comparison, and improvement of drought indices<br>
                    3. Application of AI and big data analytics in drought monitoring and early warning<br>
                    4. Establishment of cross-regional drought monitoring platforms and decision support systems<br>
                    5. Methods for assessing drought impacts on agriculture and ecosystems<br>
                    6. Climate model simulation and drought event prediction<br>
                    </p></li>
                <li><h4>Theme 2: Urban Heat Island Effect and Climate Adaptation</h4><p><br>
                    Rapid urbanization and intensifying global warming have made the Urban Heat Island (UHI) effect a major challenge for densely populated areas, as it exacerbates energy demand, strains infrastructure, and affects residents' health and social safety. This theme focuses on the causes of the UHI effect, monitoring technologies, and multi-level adaptation strategies, aiming to establish a comprehensive response that integrates scientific foundations, engineering techniques, and social governance.<br>
                    Topics will include, but are not limited to:<br>
                    1. Mechanisms and driving factors of the UHI effect<br>
                    2. Application of digital technologies in urban heat monitoring<br>
                    3. Urban climate simulation and heatwave impact prediction models<br>
                    4. The role of smart city technologies in cooling and energy conservation<br>
                    5. Effectiveness evaluation of urban renewal and land use planning in mitigating the UHI effect<br>
                    6. Sustainable development through the combination of digital technology and green architecture<br>
                    </p></li>
                <li><h4>Theme 3: Climate Policy, Water Resource Management, and Societal Resilience</h4><p><br>
                    Climate change is drastically affecting the stability of the water cycle system, with water resource issues becoming increasingly severe due to droughts, floods, and environmental pollution. How to enhance societal resilience and adaptability through forward-looking climate policies and effective water resource management has become a crucial issue for all nations. This theme will focus on interdisciplinary governance and collaboration among multiple stakeholders, addressing policy, management, and social innovation to establish a fair and sustainable water resource governance framework.<br>
                    Topics will include, but are not limited to:<br>
                    1. Water resource governance policies and institutional design under climate change; interdisciplinary resilience integrating hydrology, public policy, economics, and sociology<br>
                    2. Cooperative mechanisms for trans-basin or transnational water resource management<br>
                    3. Application of smart water grids, IoT, and AI in water resource regulation<br>
                    4. Adaptation strategies involving groundwater development, reclaimed water use, and non-conventional water resources<br>
                    5. Water resource risk management and social equity<br>
                    6. Resilience assessment and decision support methods for water resources in the face of extreme droughts and floods<br>
                    </p></li>
                <li><h4>Theme 4: Health Impacts of Climate Change</h4><p><br>
                    Climate change has become one of the most severe public health challenges of the 21st century. Extreme heat, droughts, water shortages, and other extreme weather events are directly or indirectly threatening human health and social development. Climate impacts lead to issues such as heatstroke, cardiovascular diseases, the spread of infectious diseases, and deteriorating food and nutrition security, exacerbating health inequalities and placing vulnerable populations at higher risk, which can cause potential fluctuations and impacts on social stability. This theme focuses on scientific research, health risk assessment, and policy implementation, soliciting interdisciplinary research findings and case studies to promote the development of health-oriented climate adaptation strategies.<br>
                    Topics will include, but are not limited to:<br>
                    1. Impact assessment of high temperatures and heatwaves on cardiovascular and respiratory diseases<br>
                    2. Climate change and the epidemiology of infectious diseases<br>
                    3. Research on mental health and social stress under climate impacts<br>
                    4. Building the climate resilience of healthcare systems<br>
                    5. The relationship between climate change and public health management risks<br>
                    6. Application of protective measures for vulnerable populations' health<br>
                    </p></li>
                <li><h4>Theme 5: Economic Impact Assessment of Extreme Climate Events</h4><p><br>
                    Extreme climate events such as droughts, floods, heatwaves, and hurricanes not only cause direct damage to infrastructure and production systems but also have profound economic impacts through supply chain disruptions, energy price volatility, labor losses, and rising insurance costs. Quantifying and assessing these impacts, and further proposing specific financial, policy, and market response measures, is a crucial foundation for enhancing societal resilience. This thematic session focuses on the economic risk assessment and adaptation strategies for diverse industries, production supply chains, and market environments under extreme climate conditions.<br>
                    Topics will include, but are not limited to:<br>
                    1. Disaster risk models, actuarial science, and reinsurance mechanism design<br>
                    2. The impact of climate events on energy markets, agricultural output, and supply chains<br>
                    3. Economic risk assessment within the ESG framework<br>
                    4. Economic vulnerability and adaptation strategies for SMEs and local communities facing extreme climate events<br>
                    5. The impact of climate migration and population displacement on labor markets and local economies<br>
                    6. Resilience and recovery of urban, community, or market environments under climate impacts<br>
                    </p></li>
            </ul>`
        },
        {
          title: 'Conference Information',
          content: `<div><p>2025 International Forum on Climate Extremes and Societal Resilience: Drought, Heat, and Human Livability in a Warming World</p><ul class="styled-list"><li><b>Conference Time</b><br>November 24 (Mon) to November 26 (Wed), 2025</li><li><b>Conference Venue</b><br>General Teaching and Research Building, National Central University</li><li><b>Organizers</b><br>Taiwan and Global Drought Information and Research Center (TGDIRC / DroughtHub)<br>National Central University</li><li><b>Conference Chairs</b><br>Prof. Liu, Sue-Ann<br>Prof. Tzeng, Hsiao-Ting</li></ul></div>`
        },
        {
          title: 'Keynote Speakers',
          content: `<h3>Keynote Speakers</h3> <ul class="styled-list"><li><a href="https://cee.mit.edu/people_individual/dara-entekhabi/" target="_blank">Dara Entekhabi</a>, Professor, Department of Civil and Environmental Engineering, Massachusetts Institute of Technology (MIT)<br></li><li><a href="https://www.cesbio.cnrs.fr/author/yann-kerr/" target="_blank">Yann H. Kerr</a>, Researcher, Centre d'Etudes Spatiales de la Biosphère (CESBIO)<br></li><li><a href="https://www.stir.ac.uk/people/1967536" target="_blank">Michael Roy</a>, Professor of Economic Sociology and Social Policy, Yunus Centre for Social Business and Health, Glasgow Caledonian University<br></li><li><a href="https://repo.ur.krakow.pl/info/author/UR25c3c523d4774275bc32f0af7c96ad24?r=author&tab=&title=Person%2Bprofile%2B%25E2%2580%2593%2BPiotr%2BW%25C4%2599%25C5%25BCyk%2B%25E2%2580%2593%2BUniversity%2Bof%2BAgriculture%2Bin%2BKrakow&lang=en&qp=" target="_blank">Piotr Wężyk</a>, Professor, Faculty of Forestry, University of Agriculture in Krakow<br></li><li><a href="https://vneat.org/?page_id=286&utm_source=chatgpt.com&lang=en" target="_blank">Nguyen Kim Anh</a>, Senior Researcher, Institute of Earth Sciences, Vietnam Academy of Science and Technology<br></li><li><a href="https://www.k.u-tokyo.ac.jp/en/gsfs/faculty/takashi_oguchi/" target="_blank">Takashi Oguchi</a>, Professor, Center for Spatial Information Science, The University of Tokyo<br></li><li><a href="https://aasb.gov.au/board-members/prof-carolyn-cordery/" target="_blank">Carolyn Cordery</a>, Professor, School of Accounting and Commercial Law, Victoria University of Wellington<br></li><li><a href="https://schulich.yorku.ca/faculty/charles-cho/" target="_blank">Charles H. Cho</a>, Professor of Sustainability Accounting, Erivan K. Haub Chair in Business & Sustainability, Schulich School of Business, York University<br></li><li><a href="https://www.researchgate.net/profile/Tien-Minh-2" target="_blank">Trần Minh Tiến</a>, Director General, Soils and Fertilizers Research Institute (SFRI)<br></li><li><a href="https://engineering.virginia.edu/faculty/venkataraman-lakshmi" target="_blank">Venkataraman (Venkat) Lakshmi</a>, John L. Newcomb Professor of Engineering, Department of Engineering Systems and Environment, University of Virginia<br></li><li><a href="https://www.tesaf.unipd.it/en/paolo-tarolli" target="_blank">Paolo Tarolli</a>, Professor, Department of Land, Environment, Agriculture and Forestry, University of Padua<br></li><li><a href="https://english.hi.is/staff/benedikt?utm_source=chatgpt.com" target="_blank">Jón Atli Benediktsson</a>, Professor, Faculty of Electrical and Computer Engineering, University of Iceland<br></li><li><a href="https://eratosthenes.org.cy/team/barbara-ryan/" target="_blank">Barbara Ryan</a>, Executive Director, World Geospatial Industry Council (WGIC)<br></li><li><a href="https://portfolio.jcu.edu.au/researchers/ben.jarihani/" target="_blank">Ben Jarihani</a>, Associate Professor, College of Science and Engineering, James Cook University<br></li><li><a href="https://cde.nus.edu.sg/cee/staff/he-xiaogang/" target="_blank">Xiaogang He</a>, Assistant Professor, Department of Civil and Environmental Engineering, National University of Singapore<br></li></ul></div>`
        },
        {
          title: 'Agenda',
          content: `<div class="agenda-container"><p>The outline of the CESR 2025 agenda is as follows:</p><h4 class="agenda-day-title">Day 1 - Nov 24 (Mon.) | Opening & Keynote Speeches</h4><table class="agenda-table"><thead><tr><th>Time</th><th colspan="2">Event</th></tr></thead><tbody><tr><td>13:20-13:50</td><td colspan="2">Registration</td></tr><tr><td>13:50-14:00</td><td colspan="2">Opening Ceremony</td></tr><tr><td>14:00-14:30</td><td colspan="2">Keynote Speaker 1</td></tr><tr><td>14:30-15:00</td><td colspan="2">Keynote Speaker 2</td></tr><tr><td>15:30-16:00</td><td colspan="2">Keynote Speaker 3</td></tr><tr class="break-row"><td>16:00-16:20</td><td colspan="2">Tea Break / Poster Exhibition</td></tr><tr><td rowspan="2">16:30-18:00</td><td><b>Session A-1</b></td><td><b>Session B-1</b></td></tr><tr><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td></tr><tr class="meal-row"><td>18:00-20:00</td><td colspan="2">Conference Dinner</td></tr></tbody></table><h4 class="agenda-day-title">Day 2 - Nov 25 (Tue.) | Thematic Sessions & Discussions</h4><table class="agenda-table"><thead><tr><th>Time</th><th colspan="3">Event</th></tr></thead><tbody><tr><td>08:00-09:00</td><td colspan="3">Registration</td></tr><tr><td>10:00-16:00</td><td colspan="3">Poster Exhibition</td></tr><tr><td rowspan="2">09:00-10:30</td><td><b>Session A-2</b></td><td><b>Session B-2</b></td><td><b>Session C-2</b></td></tr><tr><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td></tr><tr class="break-row"><td>10:30-10:50</td><td colspan="3">Tea Break</td></tr><tr><td rowspan="2">10:50-12:20</td><td><b>Session A-3</b></td><td><b>Session B-3</b></td><td><b>Session C-3</b></td></tr><tr><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td></tr><tr class="meal-row"><td>12:20-13:30</td><td colspan="3">Lunch</td></tr><tr><td rowspan="2">13:30-15:00</td><td><b>Session A-4</b></td><td colspan="2"><b>Session B-4</b></td></tr><tr><td>Chair:<br>Speakers:</td><td colspan="2">Chair:<br>Speakers:</td></tr><tr><td>15:00-16:00</td><td colspan="3">Closing Ceremony</td></tr></tbody></table><h4 class="agenda-day-title">Day 3 - Nov 26 (Wed.) | General Discussion & Closing</h4><table class="agenda-table"><thead><tr><th>Time</th><th>Event</th></tr></thead><tbody><tr><td>09:00-10:30</td><td>Summary Reports from Thematic Sessions</td></tr><tr class="break-row"><td>10:30-11:00</td><td>Tea Break</td></tr><tr><td>11:00-12:00</td><td>Drafting and Discussion of Forum Declaration</td></tr><tr><td>12:00-12:30</td><td>Closing Ceremony</td></tr><tr class="meal-row"><td>12:30-14:00</td><td>Lunch</td></tr><tr><td>14:00-17:00</td><td>Field Trip</td></tr><tr class="meal-row"><td>18:30-20:30</td><td>See You Again Banquet</td></tr></tbody></table></div>`
        }
      ],
      info: {
        registration: {
          url: 'https://forms.gle/LfjM1nqKa47ufQvG6',
          inquiryUrl: 'https://forms.gle/VtF3gfEKZMBKY6pr8',
          qrCode: 'qr-registration.png'
        },
        poster: {
          steps: [
            { text: 'Submission Deadline: 2025/03/14' },
            { text: 'Acceptance Notification: 2025/03/24' },
            { text: 'Poster Abstract Format: Please refer to the attached template.', url: 'poster-template.pdf' },
            { text: `<a href="https://forms.gle/xPCqDJJxyKqMJPUJA" target="_blank">https://forms.gle/xPCqDJJxyKqMJPUJA</a>` },
          ],
          qrCode: 'qr-poster.png',
        },
        location: {
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.940004663239!2d121.19271850928976!3d24.968155777766693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2z5ZyL56uL5Lit5aSu5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1758076938764!5m2!1szh-TW!2stw'
        },
        host: {
          dates: '2025/11/24 (MON) ~ 2025/11/26 (WED)',
          venue: 'National Central University',
          mainVenue: '1F, Lo Chia-Luen Hall, General Teaching and Research Building',
          subVenue: '2F Conference Halls, General Teaching and Research Building (3 venues total)',
          hosts: [
            'Taiwan and Global Drought Information and Research Center (TGDIRC / DroughtHub)'
          ]
        }
      }
    }
  },
  methods: {
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

/* --- Existing Page Styles (Unchanged) --- */
.page-header { background-image: url('../assets/icqab-bg.jpg'); background-size: cover; background-position: center; padding-top: 50px; }
.bg-overlay { background-color: rgba(10, 25, 47, 0.7); }
.qr-code { max-width: 180px; }
.venue-icon-wrapper { font-size: 1.5rem; color: var(--bs-primary); padding-top: 5px; margin-right: 1rem; }

/* --- Custom Accordion Styles (Adapted for BootstrapVue 3) --- */
.custom-accordion {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.custom-accordion .accordion-item {
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
}
.custom-accordion .accordion-item:last-child {
  border-bottom: none;
}
.custom-accordion .accordion-button {
  padding: 20px 25px;
  background-color: #f8f9fa;
  transition: background-color 0.3s;
}
.custom-accordion .accordion-button:hover {
  background-color: #f1f3f5;
}
.custom-accordion .accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0,0,0,.125);
}
.custom-accordion .accordion-button:not(.collapsed) {
  color: #003366;
  background-color: #f1f3f5;
  box-shadow: none;
}
.accordion-title-custom {
  margin: 0;
  font-size: 1.7rem;
  color: #003366;
  font-weight: 700;
}

.accordion-content-inner {
  padding: 25px;
  font-size: 1.25rem; /* Default font size */
  font-weight: 300;
  line-height: 1.8;
  background-color: #fff;
}

/* --- :deep selector to style content inserted by v-html --- */
:deep(.accordion-content-inner p) { margin-bottom: 1rem;  /* Adjust paragraph font size */ }
:deep(.accordion-content-inner ol) { padding-left: 2rem; }
:deep(.accordion-content-inner li) { margin-bottom: 1rem;  /* Adjust list item font size */ }
:deep(.accordion-content-inner strong) { color: #212529; }
:deep(.accordion-content-inner ul a) { font-weight: bold; color: #007ACC; text-decoration: underline; transition: color 0.3s; }
:deep(.accordion-content-inner ul a:hover) { color: #007bff; }

/* Apply your original styles, ensuring they work inside .accordion-content-inner */
:deep(.accordion-content-inner .themes-list) { list-style-type: none; padding-left: 0; margin-top: 2rem; }
:deep(.accordion-content-inner .themes-list li) { margin-bottom: 2rem; padding: 1.5rem; border-left: 4px solid var(--bs-primary); background-color: #f8f9fa; border-radius: 0 8px 8px 0; }
:deep(.accordion-content-inner .themes-list h4) { font-size: 1.25rem; font-weight: 600; color: #003366; margin-top: 0; margin-bottom: 0.75rem; }
:deep(.accordion-content-inner .themes-list p) { margin-bottom: 0; line-height: 1.7; font-size: 1.2rem; font-weight: 600; }

:deep(.accordion-content-inner .styled-list) { list-style-type: revert; padding-left: 25px; }

:deep(.accordion-content-inner .agenda-table) { width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.9rem; }
:deep(.accordion-content-inner .agenda-table th),
:deep(.accordion-content-inner .agenda-table td) { border: 1px solid #dee2e6; padding: 8px 12px; text-align: left; vertical-align: middle; }
:deep(.accordion-content-inner .agenda-table thead th) { background-color: #003366; color: white; font-weight: 600; }
:deep(.accordion-content-inner .agenda-table .break-row) { background-color: #e9ecef; font-weight: bold; }
:deep(.accordion-content-inner .agenda-table .meal-row) { background-color: #d1ecf1; font-weight: bold; }

/* --- Registration Section Styles --- */
.qr-code-large {
  max-width: 220px;
  border: 6px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.contact-link {
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--bs-primary) !important;
}

.registration-section .btn-primary {
  background-color: #003366;
  border-color: #003366;
  transition: all 0.3s ease;
}

.registration-section .btn-primary:hover {
  background-color: #002244;
  border-color: #002244;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.btn-contact {
  background-color: #c18951;
  border-color: #d4a373;
  color: white;
  transition: all 0.3s ease;
}

.btn-contact:hover {
  background-color: #c8925a;
  border-color: #c8925a;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>