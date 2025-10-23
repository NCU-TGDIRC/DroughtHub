<template>
  <div class="icqab-page">
    <!-- Page Header -->
    <div class="page-header position-relative text-center text-white">
      <div class="bg-overlay"></div>
      <b-container class="position-relative py-5">
        <p class="h4 fw-normal conference-date">November 23-25, 2025 | National Central University, Taoyuan, Taiwan</p>
        <h1 class="display-4 fw-bold">The First International Forum on Climate Extremes and Societal Resilience:<br>Drought, Heat Stress, and Human Livability in a Warming World</h1>
        <h2 class="h1 fw-normal mt-3">(CESR 2025)</h2>
      </b-container>
    </div>

    <!-- Main Content -->
    <main class="py-5 bg-white">
      <b-container>
        <!-- Accordion -->
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

        <!-- Info Sections -->
        <div class="info-sections mt-5">
          
          <!-- New Registration Section -->
          <div class="registration-section my-5 py-5">
            <b-card no-body class="shadow-lg border-0 overflow-hidden">
              <b-row no-gutters>
                <b-col md="7" class="p-5 d-flex flex-column justify-content-center">
                  <h3 class="mb-4 fs-2 fw-bold" style="color: #003366;">Conference Registration & Contact Info</h3>
                  <p class="text-muted mb-4 fs-5">
                    Welcome to register online for CESR 2025. Click the button below or scan the QR code on the right to go to the registration page. If you have any questions, please feel free to contact us.
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
                        <img :src="getImageUrl('campus-map.jpg')" alt="Campus Map" class="img-fluid">
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
export default {
  name: 'EnglishView',
  data() {
    return {
      sections: [
        {
          title: 'Important Dates',
          content: `<div><ul class="styled-list">
           <li><b>Abstract submission deadline:</b> October 22, 2025</li>
            <li><b>Notification of abstract acceptance:</b> October 29, 2025</li>
            <li><b>Registration Deadline:</b> November 10, 2025</li>
            <li><b>Conference date:</b> November 23, 2025</li>
            </ul></div>`
        },
        {
          title: 'Introduction',
          content: `<p>The Taiwan and Global Drought Investigation and Research Center (TGDIRC / DroughtHub), established in 2024 and led by the Center for Space and Remote Sensing Research at National Central University, is dedicated to integrating research and development for global drought monitoring, early warning, and adaptation strategies. The center's core mission is to address the increasingly severe challenges of global climate change, particularly the profound impacts of extreme climate events such as drought and heat stress on human society.</p><p>The Sixth Assessment Report of the United Nations Intergovernmental Panel on Climate Change (IPCC) clearly states that global warming will lead to more frequent and severe drought events, with a projection that by 2050, over 5 billion people worldwide will face water shortages. As a high-risk region for climate change, Taiwan has acutely experienced this trend in recent years: the centennial drought in 2021 caused a nationwide water supply crisis with economic losses exceeding one hundred billion NT dollars; the consecutive record-breaking extreme heat events in 2023 not only impacted the energy system but also directly threatened public health and quality of life.</p><p>In the face of these unprecedented challenges, the efforts of a single nation or institution are no longer sufficient. The international scientific community widely recognizes that only through cross-border, interdisciplinary collaborative research and knowledge sharing can effective solutions be developed. TGDIRC was born against this backdrop, committed to establishing an integrated international research platform.</p><p>Since its inception, TGDIRC has actively established cooperative relationships with top international institutions such as the National Drought Mitigation Center (NDMC) in the United States, the Commonwealth Scientific and Industrial Research Organisation (CSIRO) in Australia, and the European Climate Adaptation Platform, and participates in initiatives of the United Nations Office for Disaster Risk Reduction (UNDRR) and the World Meteorological Organization (WMO). At the same time, the center has also established research partnerships with countries in the Asia-Pacific region facing similar challenges, including Japan, South Korea, Australia, India, and Vietnam.</p><p>To establish a permanent platform for international academic exchange and policy dialogue, and to gather the wisdom of top global experts in the fields of climate extremes, societal resilience, and human livability, TGDIRC has specially planned the inaugural "International Forum on Climate Extremes and Societal Resilience." This forum aims to become a major annual event in the field of climate science in the Asia-Pacific region and globally, establishing a long-term mechanism for promoting international cooperation, fostering knowledge innovation, and strengthening the scientific basis for policymaking.</p><p>Through this forum, we hope not only to showcase Taiwan's strength and international contributions in the field of climate science research but also to provide innovative solutions for the global community to face the challenges of climate change, working together to maintain a livable environment for humanity in a warming world.</p>`
        },
        {
          title: 'Objectives',
          content: `<p>This forum is dedicated to developing the world's most influential exchange platform for research on climate extremes and societal resilience, gathering interdisciplinary top expert wisdom to provide innovative solutions for humanity's sustainable survival in a warming world. It will be held as an in-person conference, emphasizing deep face-to-face communication and the development of collaborative networks. Paper submissions will be in the form of English abstracts to ensure a high degree of integration in international academic exchange.</p><p>The forum focuses on core issues such as drought monitoring and early warning, health impacts of heat stress, water resource security, agricultural resilience, ecosystem adaptation, energy system stability, urban climate governance, and disaster risk management, establishing a complete knowledge chain from scientific research to policy implementation. Based on TGDIRC's founding mission to "promote global climate resilience and protect a livable future for humanity," this forum has the following strategic objectives and core values:</p><ol><li><b>Leading Global Climate Science</b><br>Special emphasis is placed on the integration of cutting-edge technologies such as artificial intelligence, satellite remote sensing, and big data analytics to establish a next-generation, long-term, and real-time climate monitoring and early warning system. We invite top global scientists to jointly discuss the theoretical and practical optimization, and through promoting forward-thinking practical technology applications and deep dialogue with theory, set a new benchmark for global research on climate extreme events, and drive scientific innovation from being a follower to a leader. Moving from responding to challenges to predicting them and establishing diverse solutions.</li><li><b>Building an International Scientific Research Ecosystem</b><br>Taiwan possesses a unique geographical location and research advantages in climate studies. This forum will connect with the international academic community, establish interdisciplinary strategic partnerships, and build Taiwan into an Asia-Pacific climate science hub. Through the TGDIRC platform, we will deepen strategic partnerships with top research institutions in the US, Europe, and Australia, establish a permanent global expert network, promote long-term research cooperation, and encourage dialogue between young scholars and the international community. The goal is to shape Taiwan into a bridge for knowledge and policy exchange in global climate governance and to enhance Taiwan's voice and influence on international climate governance issues.</li><li><b>Strengthening National Climate Resilience</b><br>Establish a complete transformation mechanism from "science to policy to practice," effectively translating scientific achievements into practical policy recommendations and assisting the government in implementing them in society and industry. Provide the government with forward-looking climate adaptation strategies, shifting from passive response to proactive prevention. In the event of future climate change disasters, Taiwan can transform from a mere victim to a solution provider, becoming a model case for global climate resilience governance.</li><li><b>Promoting the Realization of Sustainable Development Goals</b><br>Closely align with the UN 2030 Agenda for Sustainable Development, particularly proposing breakthrough solutions in areas such as water resources, urban resilience, climate change response, and environmental protection for SDG 6 (Clean Water and Sanitation), SDG 11 (Sustainable Cities and Communities), SDG 13 (Climate Action), and SDG 15 (Life on Land). This ensures that the conference outcomes have a substantial impact on the sustainable development agenda and demonstrate Taiwan's tangible contribution to global sustainable development.</li><li><b>Catalyzing Interdisciplinary Innovation and Integration</b><br>Solutions to climate challenges rely not only on in-depth exploration within a single discipline. By breaking traditional disciplinary boundaries, we will promote the deep integration of climate science, public health, sociology, economics, and engineering technology, cultivate a new generation of climate experts with systemic thinking, and foster new research frontiers and innovative policy strategy frameworks, driving solutions from single-point breakthroughs to systemic innovation.</li><li><b>Establishing a Global Knowledge Sharing Mechanism</b><br>Establish an open international research platform to incentivize communication and collaboration among multinational research teams, promote data sharing, technology transfer, and talent exchange, ensuring that climate science research results can be quickly transformed into global public welfare, allowing scientific knowledge to truly serve the construction of a community with a shared future for mankind.</li></ol>`
        },
        {
          title: 'Expected Impacts',
          content: `<ol><li><b>Constructing a Global Climate Resilience Research Ecosystem</b><br>Deepen Taiwan's strategic partnerships with top global climate research institutions, including the US National Drought Mitigation Center, the European Climate Adaptation Platform, and Australia's CSIRO, to establish a permanent international expert network. The forum platform is expected to facilitate the launch of at least 5 major international cooperation projects, positioning Taiwan as a core hub for climate extreme event research in the Asia-Pacific region and significantly enhancing our nation's voice and influence in the international climate science field.</li><li><b>Catalyzing Breakthroughs in Interdisciplinary Innovative Research</b><br>Through in-depth breakout sessions on eight core themes (drought monitoring and early warning, health impacts of heat stress, water resource resilience, agricultural adaptation, ecosystem protection, energy security, urban climate governance, disaster risk management), we will break traditional disciplinary boundaries and promote innovative integration between climate science and fields like public health, sociology, economics, and artificial intelligence. We anticipate generating over 10 breakthrough interdisciplinary research proposals, providing original Taiwanese solutions to global climate challenges.</li><li><b>Enhancing National Climate Adaptation Governance Capacity</b><br>Focusing on the dual threats of drought and heat stress faced by Taiwan, the forum will conduct in-depth discussions on key issues such as the establishment of early warning systems, smart water resource management, urban heat island mitigation, agricultural resilience enhancement, and health protection mechanisms. By establishing a complete transformation mechanism from "scientific research to policy-making to practical application," we will provide the government with forward-looking and actionable climate adaptation strategies. This is expected to reduce socioeconomic losses from extreme climate events by over 30% and develop Taiwan into a model case for global climate resilience governance.</li><li><b>Promoting a Leap in International Academic Influence</b><br>Establish a rigorous international peer-review mechanism and publish a "Special Issue on Climate Extremes and Societal Resilience," meeting the standards of top international journals. Outstanding research results will be recommended for publication in high-impact journals, with an expectation of producing 5 or more SCI papers with a total impact factor exceeding 10. Simultaneously, an annual TGDIRC report mechanism will be established to serve as an important reference for global climate policy-making, significantly elevating the international academic status and practical influence of Taiwan's climate science research.</li><li><b>Cultivating the Next Generation of Climate Science Leaders</b><br>Provide opportunities for graduate students and young scholars from home and abroad to engage in deep exchanges with top international experts, building a global talent cultivation network for climate science. Establish a "Best Paper Award for Young Scholars" and "International Exchange Scholarships" to support outstanding talents for collaborative research abroad for periods of 6 months or more. We expect to cultivate over 50 climate experts with an international perspective and systemic thinking, laying a solid talent foundation for the long-term development of climate science in Taiwan.</li><li><b>Establishing a Sustainable Knowledge Sharing Mechanism</b><br>Construct an open online research platform to promote the real-time sharing of global climate data, monitoring technologies, and adaptation strategies. Establish a TGDIRC digital knowledge base to house research findings related to global drought and heat stress, becoming a vital resource center for the international climate science community. Through the regular publication of the "Global Climate Extreme Events Monitoring Report," we will provide scientific decision-making support to international organizations such as the United Nations and the World Bank, demonstrating Taiwan's substantial contribution to global climate governance.</li></ol>`
        },
        {
          title: 'Conference Themes',
          content: `<p>This forum will also feature 5 thematic sessions, covering the following topics:</p>
            <ul class="themes-list">
                <li class="accent-box"><h4>Theme 1: Drought Monitoring and Early Warning Technologies</h4><p><br>
                    Drought is one of the most destructive natural disasters globally, with impacts spanning agricultural production, water resource management, and energy supply, potentially causing huge damage to ecosystem stability and socioeconomic development. As extreme climate change leads to drastic environmental shifts, the frequency and intensity of drought events are gradually increasing. Establishing systematic and scientific drought monitoring and early warning technologies has become an urgent international research and policy need. This theme will focus on the integration and application of multi-source data, including satellite monitoring, ground observation networks, and climate change simulations, to enhance real-time monitoring and prediction capabilities of the drought development process.<br>
                    Topics will include, but are not limited to:<br>
                    1. Innovative applications of monitoring technologies<br>
                    2. Design, comparison, and improvement of drought indices<br>
                    3. Application of AI and big data analytics in drought monitoring and early warning<br>
                    4. Establishment of cross-regional drought monitoring platforms and decision support systems<br>
                    5. Methods for assessing drought impacts on agriculture and ecosystems<br>
                    6. Climate model simulation and drought event prediction<br>
                    </p></li>
                <li class="accent-box"><h4>Theme 2: Urban Heat Island Effect and Urban Climate Adaptation</h4><p><br>
                    Rapid urbanization and intensifying global warming have made the Urban Heat Island (UHI) effect a major challenge for densely populated areas, as it exacerbates energy demand, strains infrastructure, and affects residents' health and social safety. This theme focuses on the causes of the UHI effect, monitoring technologies, and multi-level adaptation strategies, aiming to establish a comprehensive response that integrates scientific foundations, engineering techniques, and social governance.<br>
                    Topics will include, but are not limited to:<br>
                    1. Mechanisms and driving factors of the UHI effect<br>
                    2. Application of digital technologies in urban heat monitoring<br>
                    3. Urban climate simulation and heatwave impact prediction models<br>
                    4. The role of smart city technologies in cooling and energy conservation<br>
                    5. Effectiveness evaluation of urban renewal and land use planning in mitigating the UHI effect<br>
                    6. Sustainable development through the combination of digital technology and green architecture<br>
                    </p></li>
                <li class="accent-box"><h4>Theme 3: Climate Policy, Water Resource Management, and Societal Resilience</h4><p><br>
                    Climate change is drastically affecting the stability of the water cycle system, with water resource issues becoming increasingly severe due to droughts, floods, and environmental pollution. How to enhance societal resilience and adaptability through forward-looking climate policies and effective water resource management has become a crucial issue for all nations. This theme will focus on interdisciplinary governance and collaboration among multiple stakeholders, addressing policy, management, and social innovation to establish a fair and sustainable water resource governance framework.<br>
                    Topics will include, but are not limited to:<br>
                    1. Water resource governance policies and institutional design under climate change; interdisciplinary resilience integrating hydrology, public policy, economics, and sociology<br>
                    2. Cooperative mechanisms for trans-basin or transnational water resource management<br>
                    3. Application of smart water grids, IoT, and AI in water resource regulation<br>
                    4. Adaptation strategies involving groundwater development, reclaimed water use, and non-conventional water resources<br>
                    5. Water resource risk management and social equity<br>
                    6. Resilience assessment and decision support methods for water resources in the face of extreme droughts and floods<br>
                    </p></li>
                <li class="accent-box"><h4>Theme 4: Health Impacts of Climate Change</h4><p><br>
                    Climate change has become one of the most severe public health challenges of the 21st century. Extreme heat, droughts, water shortages, and other extreme weather events are directly or indirectly threatening human health and social development. Climate impacts lead to issues such as heatstroke, cardiovascular diseases, the spread of infectious diseases, and deteriorating food and nutrition security, exacerbating health inequalities and placing vulnerable populations at higher risk, which can cause potential fluctuations and impacts on social stability. This theme focuses on scientific research, health risk assessment, and policy implementation, soliciting interdisciplinary research findings and case studies to promote the development of health-oriented climate adaptation strategies.<br>
                    Topics will include, but are not limited to:<br>
                    1. Impact assessment of high temperatures and heatwaves on cardiovascular and respiratory diseases<br>
                    2. Climate change and the epidemiology of infectious diseases<br>
                    3. Research on mental health and social stress under climate impacts<br>
                    4. Building the climate resilience of healthcare systems<br>
                    5. The relationship between climate change and public health management risks<br>
                    6. Application of protective measures for vulnerable populations' health<br>
                    </p></li>
                <li class="accent-box"><h4>Theme 5: Economic Impact Assessment of Extreme Climate Events</h4><p><br>
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
        content: `
            <div>
            <p>
                2025 International Forum on Climate Extremes and Societal Resilience: Drought, Heat, and Human Livability in a Warming World
            </p>
            <ul class="styled-list">
                <li>
                <b>Conference Time</b><br>
                November 23 (Sun) to November 25 (Tue), 2025
                </li>
                <li>
                <b>Conference Venue</b><br>
                General Teaching and Research Building, National Central University
                </li>
                <li>
                <b>Organizers</b><br>
                Taiwan and Global Drought Information and Research Center (TGDIRC / DroughtHub)<br>
                National Central University
                </li>
                <li>
                <b>Conference Chairs</b><br>
                Prof. Yuei-An Liou <br>
                Prof. Hsiao-Ting Tseng
                </li>
            </ul>
            </div>
        `
        },
        {
          title: 'Speakers',
          content: `
                  <h3 class="speakers-subtitle">Plenary Session Speakers</h3>
                  <ul class="styled-list">
                    <li>
                      <a href="https://cee.mit.edu/people_individual/dara-entekhabi/" target="_blank">
                        <b>Dara Entekhabi</b>
                      </a><br>
                      <p>
                        <b>Chair Professor/Academician</b><br>
                        Bacardi and Stockholm Water Foundations Chair Professor at Massachusetts Institute of Technology (<b>MIT</b>), USA<br>
                        Member of the US National Academy of Engineering (NAE)<br>
                        <b>Lead Scientist of NASA's Soil Moisture Active Passive (SMAP) mission</b><br>
                        Globally influential in the field of hydroclimatology
                      </p>
                      
                      <div class="accent-box">
                        <h4>Lecture Title 1.1: Linkages Between the Water, Energy, and Carbon Cycles in the Earth System</h4>
                      </div>
                      <div class="accent-box">
                        <h4>Lecture Title 1.2: The Drought Cascade and Drought Amplification Due to Heat Waves</h4>
                      </div>
                    </li>

                    <li>
                      <a href="https://engineering.virginia.edu/faculty/venkataraman-lakshmi" target="_blank">
                        <b>Venkataraman (Venkat) Lakshmi</b>
                      </a><br>
                      <p>
                        <b>Chair Professor/President</b><br>
                        <b>John L. Newcomb Chair Professor</b> at the University of Virginia, USA<br>
                        President of the Hydrology Section of the American Geophysical Union (AGU)<br>
                        Specializes in <b>hydrological remote sensing</b> and <b>climate change impact assessment</b><br>
                        <em>(Lecture title to be provided soon)</em>
                      </p>
                    </li>

                    <li>
                      <a href="https://www.k.u-tokyo.ac.jp/en/gsfs/faculty/takashi_oguchi/" target="_blank">
                        <b>Takashi Oguchi</b>
                      </a><br>
                      <p>
                        <b>Professor/President</b><br>
                        Professor at the University of Tokyo, Japan<br>
                        Current <b>Vice President of the International Association of Geomorphologists (IAG)</b>, <b>Vice President of the Japan Geoscience Union (JpGU)</b>, and <b>President of the Association of Japanese Geographers</b><br>
                        Former President of the Japanese Geomorphological Union and the Geographic Information Systems Association of Japan<br>
                        Profound expertise and international influence in geomorphology and spatial information science<br>
                        <em>(Lecture title to be provided soon)</em>
                      </p>
                    </li>

                    <li>
                      <a href="https://www.researchgate.net/profile/Tien-Minh-2" target="_blank">
                        <b>Trần Minh Tiến</b>
                      </a><br>
                      <p>
                        <b>Professor / Vice President</b><br>
                        Vice President, Vietnam Academy of Agricultural Sciences (VAAS)<br>
                        This forum is part of the “DroughtHub Research Program for Drought Resilience.”<br>
                        Professor Tiến will lead a delegation to participate in bilateral meetings and academic exchanges, 
                        focusing on collaborative research in drought adaptation and agricultural innovation.<br>
                        <em>(Lecture title to be announced soon)</em>
                      </p>
                    </li>

                  </ul>

                  
                  <h3 class="speakers-subtitle">Invited speakers</h3>
                  <ul class="styled-list">
                    <li>
                      <a href="https://www.cesbio.cnrs.fr/author/yann-kerr/" target="_blank">
                        Yann H. Kerr
                      </a>,
                      Researcher, Centre d'Etudes Spatiales de la Biosphère (CESBIO)
                    </li>
                    <li>
                      <a href="https://www.stir.ac.uk/people/1967536" target="_blank">
                        Michael Roy
                      </a>,
                      Professor of Economic Sociology and Social Policy, 
                      Yunus Centre for Social Business and Health, 
                      Glasgow Caledonian University
                    </li>
                    <li>
                      <a href="https://repo.ur.krakow.pl/info/author/UR25c3c523d4774275bc32f0af7c96ad24?r=author&tab=&title=Person%2Bprofile%2B%25E2%2580%2593%2BPiotr%2BW%25C4%2599%25C5%25BCyk%2B%25E2%2580%2593%2BUniversity%2Bof%2BAgriculture%2Bin%2BKrakow&lang=en&qp=" target="_blank">
                        Piotr Wężyk
                      </a>,
                      Professor, Faculty of Forestry, University of Agriculture in Krakow
                    </li>
                    <li>
                      <a href="https://vneat.org/?page_id=286&utm_source=chatgpt.com&lang=en" target="_blank">
                        Nguyen Kim Anh
                      </a>,
                      Senior Researcher, Institute of Earth Sciences, 
                      Vietnam Academy of Science and Technology
                    </li>
                    <li>
                      <a href="https://aasb.gov.au/board-members/prof-carolyn-cordery/" target="_blank">
                        Carolyn Cordery
                      </a>,
                      Professor, School of Accounting and Commercial Law, 
                      Victoria University of Wellington
                    </li>
                    <li>
                      <a href="https://schulich.yorku.ca/faculty/charles-cho/" target="_blank">
                        Charles H. Cho
                      </a>,
                      Professor of Sustainability Accounting, 
                      Erivan K. Haub Chair in Business & Sustainability, 
                      Schulich School of Business, York University
                    </li>
                    
                    <li>
                      <a href="https://www.tesaf.unipd.it/en/paolo-tarolli" target="_blank">
                        Paolo Tarolli
                      </a>,
                      Professor, Department of Land, Environment, Agriculture and Forestry, 
                      University of Padua
                    </li>
                    <li>
                      <a href="https://english.hi.is/staff/benedikt?utm_source=chatgpt.com" target="_blank">
                        Jón Atli Benediktsson
                      </a>,
                      Professor, Faculty of Electrical and Computer Engineering, 
                      University of Iceland
                    </li>
                    <li>
                      <a href="https://eratosthenes.org.cy/team/barbara-ryan/" target="_blank">
                        Barbara Ryan
                      </a>,
                      Executive Director, World Geospatial Industry Council (WGIC)
                    </li>
                    <li>
                      <a href="https://portfolio.jcu.edu.au/researchers/ben.jarihani/" target="_blank">
                        Ben Jarihani
                      </a>,
                      Associate Professor, College of Science and Engineering, 
                      James Cook University
                    </li>
                    <li>
                      <a href="https://cde.nus.edu.sg/cee/staff/he-xiaogang/" target="_blank">
                        Xiaogang He
                      </a>,
                      Assistant Professor, Department of Civil and Environmental Engineering, 
                      National University of Singapore
                    </li>
                  </ul>
                `
      },
      {
        title: 'Agenda',
        content: `
            <div class="agenda-container">
            <p>CESR 2025 Agenda</p>

            <!-- Day 1 -->
            <h4 class="agenda-day-title">Day 1 - Nov 23 (Sun.) | Opening & Keynote Speeches</h4>
            <table class="agenda-table">
                <thead>
                <tr>
                    <th>Time</th>
                    <th colspan="3">Event</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>13:20-13:50</td>
                    <td colspan="3">Registration</td>
                </tr>
                <tr>
                    <td>13:50-14:00</td>
                    <td colspan="3">Opening Ceremony</td>
                </tr>
                <tr>
                    <td>14:00-14:30</td>
                    <td colspan="3">Keynote Speaker 1</td>
                </tr>
                <tr>
                    <td>14:30-15:00</td>
                    <td colspan="3">Keynote Speaker 2</td>
                </tr>
                <tr>
                    <td>15:30-16:00</td>
                    <td colspan="3">Keynote Speaker 3</td>
                </tr>
                <tr class="break-row">
                    <td>16:00-16:20</td>
                    <td colspan="3">Tea Break / Poster Exhibition</td>
                </tr>
                <tr>
                    <td rowspan="2">16:30-18:00</td>
                    <td><b>Session A-2</b></td>
                    <td><b>Session B-2</b></td>
                    <td><b>Session C-1</b></td>
                </tr>
                <tr>
                    <td>Chair:<br>Speakers:</td>
                    <td>Chair:<br>Speakers:</td>
                    <td>Chair:<br>Speakers:</td>

                </tr>
                <tr class="meal-row">
                    <td>18:00-20:00</td>
                    <td colspan="3">Conference Dinner</td>
                </tr>
                </tbody>
            </table>

            <!-- Day 2 -->
            <h4 class="agenda-day-title">Day 2 - Nov 24 (Mon.) | Thematic Sessions & Discussions</h4>
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
                </tbody>
            </table>

            <!-- Day 3 -->
            <h4 class="agenda-day-title">Day 3 - Nov 25 (Tue.) | General Discussion & Closing</h4>
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
                    <td>Summary reports of each session</td>
                </tr>
                <tr class="break-row">
                    <td>10:30-11:00</td>
                    <td>Tea time</td>
                </tr>
                <tr>
                    <td>11:00-12:00</td>
                    <td>Drafting and discussion of the forum declaration</td>
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
                    <td>See you again Banquet</td>
                </tr>
                </tbody>
            </table>
            </div>
        `
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
          dates: '2025/11/24(MON) ~ 2025/11/26(WED)',
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

/* --- Page Styles (Unchanged) --- */
.page-header { background-image: url('../assets/icqab-bg.jpg'); background-size: cover; background-position: center; padding-top: 50px; }
.bg-overlay { background-color: rgba(10, 25, 47, 0.7); }
.qr-code { max-width: 180px; }
.venue-icon-wrapper { font-size: 1.5rem; color: var(--bs-primary); padding-top: 5px; margin-right: 1rem; }

/* --- Custom Accordion Styles --- */
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
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.8;
  background-color: #fff;
}

/* --- :deep selector to style v-html content --- */
:deep(.accordion-content-inner p) { margin-bottom: 1rem; }
:deep(.accordion-content-inner ol) { padding-left: 2rem; }
:deep(.accordion-content-inner li) { margin-bottom: 1rem; }
:deep(.accordion-content-inner strong) { color: #212529; }
:deep(.accordion-content-inner ul a) { font-weight: bold; color: #007ACC; text-decoration: underline; transition: color 0.3s; }
:deep(.accordion-content-inner ul a:hover) { color: #007bff; }

/* New: Speaker subtitle style */
:deep(.speakers-subtitle) {
  font-size: 1.8rem;
  font-weight: 700;
  color: #003366;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #003366;
}

/* Reusable .accent-box style */
:deep(.accent-box) {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #007bff;
  background-color: #f8f9fa;
  border-radius: 0 8px 8px 0;
}
:deep(.accent-box h4) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #003366;
  margin-top: 0;
  margin-bottom: 0.75rem;
}
:deep(.accent-box p) {
  margin-bottom: 0;
  line-height: 1.7;
  font-size: 1.1rem;
  font-weight: 500;
}

:deep(.accordion-content-inner .themes-list) { list-style-type: none; padding-left: 0; margin-top: 2rem; }
:deep(.accordion-content-inner .themes-list li.accent-box) {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #007bff;
  background-color: #f8f9fa;
  border-radius: 0 8px 8px 0;
}
:deep(.accordion-content-inner .themes-list h4) { font-size: 1.25rem; font-weight: 600; color: #003366; margin-top: 0; margin-bottom: 0.75rem; }
:deep(.accordion-content-inner .themes-list p) { margin-bottom: 0; line-height: 1.7; font-size: 1.2rem; font-weight: 600; }

:deep(.accordion-content-inner .styled-list) { list-style-type: revert; padding-left: 25px; }

:deep(.accordion-content-inner .agenda-table) { width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.9rem; }
:deep(.accordion-content-inner .agenda-table th),
:deep(.accordion-content-inner .agenda-table td) { border: 1px solid #dee2e6; padding: 8px 12px; text-align: center; vertical-align: middle; }
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
