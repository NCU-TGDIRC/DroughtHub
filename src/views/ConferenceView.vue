```html
<template>
  <div class="icqab-page">
    <!-- 頁首橫幅 -->
    <header class="page-header">
      <div class="container">
        <p class="conference-date">2025年11月24-26日 | 國立中央大學，桃園，台灣</p>
        <h1>第一屆氣候極端與社會韌性國際論壇：乾旱、熱害與暖化世界中的人類宜居性</h1>
        <h2> (CESR 2025)</h2>
      </div>
    </header>

    <!-- 主要內容區 -->
    <main class="main-content">
      <div class="container">
        <!-- 1. 手風琴結構 -->
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

        <!-- 2. 線性左右佈局區塊 -->
        <div class="info-sections">
          
          <!-- 區塊一：研討會報名 -->
          <section class="info-section">
            <div class="info-text">
              <h4>研討會報名 <span class="en-text">registration</span></h4>
              <a :href="info.registration.url" target="_blank" class="link">{{ info.registration.url }}</a>
            </div>
            <div class="info-media">
              <img :src="getImageUrl(info.registration.qrCode)" alt="Registration QR Code" class="qr-code">
            </div>
          </section>

          <!-- MODIFICATION START: Re-structured Location Section -->
          <section class="info-section location-section">
            <div class="location-wrapper">
              <h4>會議地點 & 場地資訊</h4>
              <div class="info-text host-info">
                <p class="conference-venue-main">{{ info.host.venue }}</p>

                <div class="venue-details">
                  <div class="venue-item">
                    <div class="venue-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                    <div class="venue-text">
                      <h5>主要場地 (Main Hall)</h5>
                      <p>{{ info.host.mainVenue }}</p>
                    </div>
                  </div>
                  <div class="venue-item">
                    <div class="venue-icon"><i class="fas fa-users"></i></div>
                    <div class="venue-text">
                      <h5>分組討論 & 海報展示</h5>
                      <p>{{ info.host.subVenue }}</p>
                    </div>
                  </div>
                </div>
                
                <p class="host-by">Host by:</p>
                <ul class="host-list">
                  <li v-for="host in info.host.hosts" :key="host">{{ host }}</li>
                </ul>
              </div>

              <!-- Maps Gallery is now below the host info -->
              <div class="maps-gallery">
                <div class="map-item">
                  <h5>周邊路線圖</h5>
                  <img :src="getImageUrl('surroundings-map.jpg')" alt="周邊路線圖">
                </div>
                <div class="map-item">
                  <h5>校園建物圖</h5>
                  <img :src="getImageUrl('campus-map.jpg')" alt="校園建物圖">
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
          title: '緣起 (Introduction)',
          content: `<p>
                    台灣暨全球乾旱調查與研究中心（TGDIRC / DroughtHub）成立於2024年，由國立中央大學太空及遙測研究中心主導設立，致力於整合全球乾旱監測、預警及適應策略之研究發展。中心成立的核心使命在於因應日益嚴峻的全球氣候變遷挑戰，特別是乾旱與熱害等極端氣候事件對人類社會造成的深遠衝擊。<br><br>

                    聯合國政府間氣候變化專門委員會（Intergovernmental Panel on Climate Change, IPCC）第六次評估報告明確指出，全球暖化將導致乾旱事件更加頻繁且嚴重，預計到2050年，全球將有超過50億人面臨水資源短缺問題。台灣作為氣候變遷高風險區域，近年來已深刻體驗到這一趨勢：2021年的百年大旱造成全台供水危機，經濟損失超過千億元；2023年連續破紀錄的極端高溫事件，不僅衝擊能源系統，更直接威脅民眾健康與生活品質。<br><br>

                    面對這些前所未有的挑戰，單一國家或機構的努力已無法有效因應。國際科學界普遍認知，唯有透過跨國界、跨領域的合作研究與知識共享，才能發展出有效的解決方案。TGDIRC正是在此背景下應運而生，致力於建立一個整合型的國際研究平台。<br><br>

                    自成立以來，TGDIRC積極與美國國家乾旱減緩中心（National Drought Mitigation Center, NDMC）、澳洲聯邦科學與工業研究組織(Commonwealth Scientific and Industrial Research Organisation, CSIRO）、歐盟氣候調適中心...等國際頂尖機構建立合作關係，並參與聯合國減災辦公室（The United Nations Office for Disaster Risk Reduction, UNDRR）及世界氣象組織（World Meteorological Organization, WMO）相關倡議。同時，中心也與亞太地區面臨相似挑戰的國家建立研究夥伴關係，包括日本、韓國、澳洲、印度、越南...等。<br><br>

                    為建立一個常設性的國際學術交流與政策對話平台，匯聚全球在氣候極端事件、社會韌性及人類宜居性領域的頂尖專家智慧，TGDIRC特別規劃舉辦首屆「氣候極端與社會韌性國際論壇」。本論壇旨在成為亞太地區乃至全球氣候科學領域的重要年度盛會，為推動國際合作、促進知識創新、強化政策制定科學基礎建立長期機制。<br><br>

                    透過此論壇的舉辦，我們期望不僅能展現台灣在氣候科學研究領域的實力與國際貢獻，更能為全球社會面對氣候變遷挑戰提供創新的解決途徑，共同為維護人類在暖化世界中的宜居環境而努力。
                    </p>
                    `
        },
        {
          title: '舉辦目的 (Objectives)',
          content: `<p>
                    本論壇致力於發展全球最具影響力的氣候極端事件與社會韌性研究交流平台，匯聚跨領域頂尖專家智慧，為人類在暖化世界中的永續生存提供創新解決方案。採用實體會議形式舉行，強調面對面深度交流與合作網絡的發展，論文投稿採用英文摘要制，確保國際學術交流的高度整合性。<br><br>

                    論壇聚焦於乾旱監測預警、熱害健康衝擊、水資源安全、農業韌性、生態系統調適、能源系統穩定性、都市氣候治理、災害風險管理等核心議題，建立從科學研究到政策實踐的完整知識鏈。基於TGDIRC「推動全球氣候韌性、守護人類宜居未來」的創立使命，本論壇具備以下戰略目的與核心價值：<br><br>
                    <ol>
                    <li><b>引領全球氣候科學</b><br>
                    特別強調人工智慧、衛星遙測、大數據分析等尖端技術的整合，建立次世代兼具長期且即時的氣候監測預警系統，並邀請全球頂尖科學家共同探討理論與實務化的優化與最佳化，藉由推動前瞻性的實務技術應用以及與理論的深度對話交流，為全球氣候極端事件研究樹立新標竿，推動科學創新從跟隨者轉為引領者。從過去的回應挑戰，進一步轉型為預測挑戰，並建立多元解決方案。<br><br>

                    <li><b>打造國際科學研究生態圈</b><br>
                    台灣在氣候研究上具備獨特的地理位置與研究優勢，本論壇將藉由與國際化學術界接軌，建立跨領域戰略夥伴關係，打造台灣成為亞太氣候科學樞紐，透過TGDIRC平台深化與美、歐、澳等頂尖研究機構的策略夥伴關係，建立常設性的全球專家網絡，促進長期研究合作並且提倡與鼓勵青年學者與國際間的交流對話，目的旨在將台灣塑造成全球氣候治理中的知識與政策交流橋樑的角色，並提升台灣在國際氣候治理議題上的話語權與影響力。<br><br>

                    <li><b>強化國家氣候韌性</b><br>
                    建立「科學→政策→實踐」的完整轉化機制，將科學成果有效轉化成實務政策建議並且協助政府落實於社會與產業之中。為政府提供具前瞻性的氣候調適戰略，從被動因應轉為主動預防，在今後的氣候變遷災害發生時，台灣可從單純的受災者角色轉變為解方提供者，並且成為全球氣候韌性治理的典範案例。<br><br>

                    <li><b>促進永續發展目標實現</b><br>
                    緊密結合聯合國2030永續發展議程，特別針對SDG 6（清潔飲水）、SDG 11（永續城市）、SDG 13（氣候行動）、SDG 15（陸域生態）提出水資源、都市韌性、氣候變遷因應以及自然環境保護等領域的突破性解決方案，確保會議成果能對永續發展議程產生實質影響，並展現台灣對全球永續發展的實質貢獻。<br><br>

                    <li><b>催化跨領域創新整合</b><br>
                    氣候挑戰的解決方案不僅之依靠單一學科的深化探討，藉由突破傳統學科界線，促進氣候科學、公共衛生、社會學、經濟學、工程技術等領域的深度融合，培育具備系統思維的新世代氣候專家，並催生新的研究領域知識前沿與創新政策戰略框架，推動解決方案從單點突破轉向系統性創新。<br><br>

                    <li><b>建立全球知識共享機制</b><br>
                    建立一開放式國際研究平台，激勵跨國研究團隊交流與協作，促進資料共享、技術轉移、人才交流，確保氣候科學研究成果能快速轉化為全球公共福祉，讓科學知識真正服務於人類命運共同體的建構。
                    </ol>
                    </p>
                    `
        },
        {
          title: '預期效益 (Expected Impacts)',
          content: `<p>
                    <ol>
                    <li><b>建構全球氣候韌性研究生態系</b><br>
                    深化台灣與全球頂尖氣候研究機構的策略夥伴關係，包括美國國家乾旱減緩中心、歐盟氣候調適中心、澳洲CSIRO等，建立常設性的國際專家網絡。透過論壇平台促成至少5項大型國際合作計畫啟動，將台灣打造為亞太地區氣候極端事件研究的核心樞紐，顯著提升我國在國際氣候科學領域的話語權與影響力。<br><br>

                    <li><b>催化跨領域創新研究突破</b><br>
                    藉由八大核心議題（乾旱監測預警、熱害健康衝擊、水資源韌性、農業調適、生態系統保護、能源安全、都市氣候治理、災害風險管理）的深度分組研討，突破傳統學科界線，促進氣候科學與公共衛生、社會學、經濟學、人工智慧等領域的創新整合。預期產出10項以上具突破性的跨領域研究提案，為全球氣候挑戰提供台灣原創的解決方案。<br><br>

                    <li><b>強化國家氣候調適治理能力</b><br>
                    聚焦台灣面臨的乾旱與熱害雙重威脅，深入研討早期預警系統建置、水資源智慧管理、都市熱島緩解、農業韌性提升、健康防護機制等關鍵議題。建立「科學研究→政策制定→實務應用」的完整轉化機制，為政府提供具前瞻性與可操作性的氣候調適戰略，預期可減少極端氣候事件造成的社會經濟損失達30%以上，將台灣發展為全球氣候韌性治理的典範案例。<br><br>

                    <li><b>推動國際級學術影響力躍升</b><br>
                    建立嚴格的國際同儕審查機制，編印《氣候極端與社會韌性研究專刊》，達到國際頂尖期刊標準。優秀研究成果將推薦至高影響力期刊發表，預期產出SCI論文5篇以上，總影響因子超過10。同時建立TGDIRC年度報告機制，成為全球氣候政策制定的重要參考依據，大幅提升台灣氣候科學研究的國際學術地位與實務影響力。<br><br>

                    <li><b>培育次世代氣候科學領袖</b><br>
                    為國內外研究生與年輕學者提供與國際頂尖專家深度交流的機會，建立全球氣候科學人才培育網絡。設立「青年學者最佳論文獎」與「國際交流獎學金」，支持優秀人才赴國外進行為期6個月以上的合作研究。預期培育具備國際視野與系統思維的氣候專家50名以上，為台灣氣候科學的長期發展奠定堅實人才基礎。<br><br>

                    <li><b>建立永續知識共享機制</b><br>
                    建構開放式線上研究平台，促進全球氣候數據、監測技術、調適策略的即時共享。建立TGDIRC數位知識庫，收錄全球乾旱與熱害相關研究成果，成為國際氣候科學界的重要資源中心。透過定期發布《全球氣候極端事件監測報告》，為聯合國、世界銀行等國際組織提供科學決策支持，展現台灣對全球氣候治理的實質貢獻。<br><br>                
                    </ol> 
                    </p>`
        },
        {
          title: '會議資訊 (Conference Information)',
          content: `<div>
            <p>
              2025 International Forum on Climate Extremes and Societal Resilience: Drought, Heat, and Human Livability in a Warming World <br>
              第一屆氣候極端與社會韌性國際論壇：乾旱、熱害與暖化世界中的人類宜居性
            </p>

            <ul class="styled-list">
              <li><b>會議時間</b><br>
              中華民國 2025 年 11 月 24 日(一)至 11 月 26 日(三)</li>

              <li><b>會議地點</b><br>
              國立中央大學教學研究綜合大樓</li>

              <li><b>主、協辦單位</b><br>
              台灣暨全球乾旱調查與研究中心 <br>
              國立中央大學</li>

              <li><b>大會主席</b><br>
              劉說安 教授 <br> 
              曾筱珽 副教授</li>
            </ul>
          </div>`
        },
        {
          title: '講者名單 (Keynote Speakers)',
          content: `<div>
                <h3>Keynote Speakers</h3>

                <h3>Invited Speakers</h3> 
                <ul class="styled-list">
                  <li>
                    <a href="https://cee.mit.edu/people_individual/dara-entekhabi/" target="_blank">Dara Entekhabi</a>
                    , Professor, Department of Civil and Environmental Engineering, Massachusetts Institute of Technology (MIT)<br>
                  </li>

                  <li>
                    <a href="https://www.cesbio.cnrs.fr/author/yann-kerr/" target="_blank">Yann H. Kerr</a>
                    , Researcher, Centre d'Etudes Spatiales de la Biosphère (CESBIO)<br>
                  </li>

                  <li>
                    <a href="https://www.stir.ac.uk/people/1967536" target="_blank">Michael Roy</a>
                    , Professor of Economic Sociology and Social Policy, Yunus Centre for Social Business and Health, Glasgow Caledonian University<br>
                  </li>

                  <li>
                    <a href="https://repo.ur.krakow.pl/info/author/UR25c3c523d4774275bc32f0af7c96ad24?r=author&tab=&title=Person%2Bprofile%2B%25E2%2580%2593%2BPiotr%2BW%25C4%2599%25C5%25BCyk%2B%25E2%2580%2593%2BUniversity%2Bof%2BAgriculture%2Bin%2BKrakow&lang=en&qp=" target="_blank">Piotr Wężyk</a>
                    , Professor, Faculty of Forestry, University of Agriculture in Krakow<br>    
                  </li>

                  <li>
                    <a href="https://vneat.org/?page_id=286&utm_source=chatgpt.com&lang=en" target="_blank">Nguyen Kim Anh</a>
                    , Senior Researcher, Institute of Earth Sciences, Vietnam Academy of Science and Technology<br>
                  </li>

                  <li>
                    <a href="https://www.k.u-tokyo.ac.jp/en/gsfs/faculty/takashi_oguchi/" target="_blank">Takashi Oguchi/</a>
                    , Professor, Center for Spatial Information Science, The University of Tokyo<br>
                  </li>

                  <li>
                    <a href="https://aasb.gov.au/board-members/prof-carolyn-cordery/" target="_blank">Carolyn Cordery</a>
                    , Professor, School of Accounting and Commercial Law, Victoria University of Wellington<br>
                  </li>

                  <li>
                    <a href="https://schulich.yorku.ca/faculty/charles-cho/" target="_blank">Charles H. Cho</a>
                    , Professor of Sustainability Accounting, Erivan K. Haub Chair in Business & Sustainability, Schulich School of Business, York University<br>
                  </li>

                  <li>
                    <a href="https://www.researchgate.net/profile/Tien-Minh-2" target="_blank">Trần Minh Tiến</a>
                    , Director General, Soils and Fertilizers Research Institute (SFRI)<br>
                  </li>

                  <li>
                    <a href="https://engineering.virginia.edu/faculty/venkataraman-lakshmi" target="_blank">Venkataraman (Venkat) Lakshmi</a>
                    , John L. Newcomb Professor of Engineering, Department of Engineering Systems and Environment, University of Virginia<br>
                  </li>

                  <li>
                    <a href="https://www.tesaf.unipd.it/en/paolo-tarolli" target="_blank">Paolo Tarolli</a>
                    , Professor, Department of Land, Environment, Agriculture and Forestry, University of Padua<br>
                  </li>

                  <li>
                    <a href="https://english.hi.is/staff/benedikt?utm_source=chatgpt.com" target="_blank">Jón Atli Benediktsson</a>
                    , Professor, Faculty of Electrical and Computer Engineering, University of Iceland<br>
                  </li>

                  <li>
                    <a href="https://eratosthenes.org.cy/team/barbara-ryan/" target="_blank">Barbara Ryan</a>
                    , Executive Director, World Geospatial Industry Council (WGIC)<br>
                  </li>

                  <li>
                    <a href="https://portfolio.jcu.edu.au/researchers/ben.jarihani/" target="_blank">Ben Jarihani</a>
                    , Associate Professor, College of Science and Engineering, James Cook University<br>
                  </li>

                  <li>
                    <a href="https://cde.nus.edu.sg/cee/staff/he-xiaogang/" target="_blank">Xiaogang He</a>
                    , Assistant Professor, Department of Civil and Environmental Engineering, National University of Singapore<br>
                  </li>
                </ul>
                </div>
              `
        },
        {
          title: '議程 (Agenda)',
          content: `<div class="agenda-container">
                      <p>CESR 2025 議程大綱如下</p>
                      
                      <h4 class="agenda-day-title">第一天 - Nov 24 (Mon.) | 開幕與主題演講</h4>
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

                      <h4 class="agenda-day-title">第二天 - Nov 25 (Tue.) | 專題會議與討論</h4>
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

                      <h4 class="agenda-day-title">第三天 - Nov 26 (Wed.) | 綜合討論與閉幕</h4>
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
                            <td>各專題會議總結報告</td>
                          </tr>
                          <tr class="break-row">
                            <td>10:30-11:00</td>
                            <td>茶敘時間</td>
                          </tr>
                          <tr>
                            <td>11:00-12:00</td>
                            <td>論壇宣言起草與討論</td>
                          </tr>
                          <tr>
                            <td>12:00-12:30</td>
                            <td>閉幕典禮</td>
                          </tr>
                          <tr class="meal-row">
                            <td>12:30-14:00</td>
                            <td>午餐</td>
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
      // 2. 資訊區塊的資料
      info: {
        registration: {
          url: 'https://forms.gle/U2MU6NiGJbaqCfhu6',
          qrCode: 'qr-registration.png'
        },
        poster: {
          steps: [
            { text: '投稿截止時間：114/3/14' },
            { text: '審查通過公告：114/3/24' },
            { text: '海報摘要格式：請參考附檔格式提供。', url: 'poster-template.pdf' },
            { text: `投稿網址：<a href="https://forms.gle/xPCqDJJxyKqMJPUJA" target="_blank">https://forms.gle/xPCqDJJxyKqMJPUJA</a>` },
          ],
          qrCode: 'qr-poster.png',
        },
        location: {
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.940004663239!2d121.19271850928976!3d24.968155777766693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2z5ZyL56uL5Lit5aSu5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1758076938764!5m2!1szh-TW!2stw'
        },
        host: {
          dates: '2025/11/24(MON) ~ 2025/11/26(WED)',
          venue: '國立中央大學',
          mainVenue: '教學研究綜合大樓 羅家倫講堂 1F',
          subVenue: '教學研究綜合大樓 2F 會議廳周遭 (共3個場地)',
          hosts: [
            '台灣暨全球乾旱調查與研究中心 (TGDIRC / DroughtHub)'
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

/* --- 背景和頁首橫幅樣式 --- */
.icqab-page { background: #f4f6fc; color: #333; }
.container { max-width: 1540px; margin: 0 auto; padding: 0 20px; }
.page-header { padding: 120px 0 60px 0; text-align: center; color: #ffffff; background-image: url('../assets/icqab-bg.jpg'); background-size: cover; background-position: center; position: relative; }
.page-header::before { content: ''; position: absolute; top:0; left:0; width: 100%; height: 100%; background-color: rgba(10, 25, 47, 0.7); }
.page-header .container { position: relative; z-index: 1; }
.conference-date { font-size: 1.2rem; letter-spacing: 1px; margin-bottom: 1rem; }
.page-header h1 { font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem; }
.page-header h2 { font-size: 1.8rem; font-weight: 400; color: #ccc; }

/* --- 主要內容區樣式 --- */
.main-content {
  padding: 50px 0 60px 0;
  background: white; /* 讓主要內容區有白色背景 */
}

/* --- 手風琴樣式 --- */
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
  list-style-type: revert; /* 恢復成原本的樣式 (數字或圓點) */
  padding-left: 25px;      /* 恢復內距，給項目符號空間 */
}

/* --- 議程表格樣式 --- */
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

/* --- 線性左右佈局樣式 --- */
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
  margin-top: 2.5rem; /* Space from host-list */
  margin: 2.5rem auto 0 auto; /* 修改 margin 實現置中 */
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
  width: 100%;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border: 1px solid #dee2e6;
  margin-top: 2.5rem; /* Space from maps-gallery */
  margin: 2.5rem auto 0 auto;
}
</style>