<template>
  <div class="icqab-page">
    <!-- Page Header (保持不變) -->
    <div class="page-header position-relative text-center text-white">
      <div class="bg-overlay"></div>
      <b-container class="position-relative py-5">
        <p class="h4 fw-normal conference-date">2025年11月24-26日 | 國立中央大學，桃園，台灣</p>
        <h1 class="display-4 fw-bold">第一屆氣候極端與社會韌性國際論壇：<br>乾旱、熱害與暖化世界中的人類宜居性</h1>
        <h2 class="h1 fw-normal mt-3">(CESR 2025)</h2>
      </b-container>
    </div>

    <!-- Main Content -->
    <main class="py-5 bg-white">
      <b-container>
        <!-- 手風琴 (Accordion) - 使用自訂標頭樣式 -->
        <b-accordion class="mb-5 custom-accordion">
          <b-accordion-item v-for="(item, index) in sections" :key="index">
                            <template #title>
                              <h3 class="accordion-title-custom">{{ item.title }}</h3>
                            </template>            
                            <div  class="accordion-content-inner fs-5 fw-bolder">
              <div v-html="item.content"></div>
            </div>
          </b-accordion-item>
        </b-accordion>

        <!-- Info Sections (保持不變) -->
        <div class="info-sections mt-5">
          
          <!-- New Registration Section -->
          <div class="registration-section my-5 py-5">
            <b-card no-body class="shadow-lg border-0 overflow-hidden">
              <b-row no-gutters>
                <b-col md="7" class="p-5 d-flex flex-column justify-content-center">
                  <h3 class=" mb-4 fs-2 fw-bold" style="color: #003366;">研討會報名 & 聯絡資訊</h3>
                  <p class="text-muted mb-4 fs-5">
                    歡迎線上報名參加 CESR 2025。點擊下方按鈕或掃描右側 QR code 即可前往報名頁面。若有任何疑問，請隨時與我們聯繫。
                  </p>
                  <div class="mb-4 d-flex align-items-center flex-wrap">
                    <b-button :href="info.registration.url" target="_blank" variant="primary" size="lg" class="me-3 mb-2">
                      <i class="fas fa-edit me-2"></i> 線上報名
                    </b-button>
                    <b-button :href="info.registration.inquiryUrl" target="_blank" size="lg" class="mb-2 btn-contact">
                      <i class="fas fa-question-circle me-2"></i> 報名相關聯絡表單
                    </b-button>
                  </div>
                  <hr class="my-4">
                  <div>
                    <h5 class="h5 text-uppercase text-muted mb-3">聯絡窗口</h5>
                    <a href="mailto:tgdirc.ncu@gmail.com" class="link-dark text-decoration-none contact-link">
                      <i class="fas fa-envelope me-2 text-primary"></i> <span class="fs-5">tgdirc.ncu@gmail.com</span>

                    </a>
                  </div>
                </b-col>
                <b-col md="5" class="d-flex align-items-center justify-content-center p-5" style="background-color: #f8f9fa;">
                  <div class="text-center">
                    <img :src="getImageUrl('qr-registration.jpg')" alt="Registration QR Code" class="qr-code-large img-fluid rounded">
                    <p class="text-muted small mt-3">掃描 QR Code 報名</p>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
          
          <b-row class="py-5">
            <b-col>
              <h4 class="accordion-title-custom mb-4 fs-2">會議地點 & 場地資訊</h4>
              <b-row>
                <b-col lg="6" class="mb-5 mb-lg-0">
                  <div class="h5 fw-bold text-primary mb-3">{{ info.host.venue }}</div>
                  
                  <div class="d-flex mb-3">
                    <div class="venue-icon-wrapper"><i class="fas fa-chalkboard-teacher fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">主要場地 (Main Hall)</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.mainVenue }}</p>
                    </div>
                  </div>

                  <div class="d-flex mb-4">
                    <div class="venue-icon-wrapper"><i class="fas fa-users fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">分組討論 & 海報展示</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.subVenue }}</p>
                    </div>
                  </div>

                  <h5 class="h5 mt-4 mb-2">Host by:</h5>
                  <ul class=" list-unstyled">
                    <li v-for="host in info.host.hosts" :key="host">{{ host }}</li>
                  </ul>
                </b-col>
                <b-col lg="6">
                  <b-row>
                    <b-col sm="6" class="mb-4">
                      <b-card no-body class="shadow-sm">
                        <b-card-header>周邊路線圖</b-card-header>
                        <img :src="getImageUrl('surroundings-map.jpg')" alt="周邊路線圖" class="img-fluid">
                      </b-card>
                    </b-col>
                    <b-col sm="6" class="mb-4">
                      <b-card no-body class="shadow-sm">
                        <b-card-header>校園建物圖</b-card-header>
                        <img :src="getImageUrl('campus-map.jpg')" alt="校園建物圖" class="img-fluid">
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
      // activeIndex is no longer needed for b-accordion
      sections: [
        {
          title: '重要日程 (Inportant Dates)',
          content:`<div><ul class="styled-list">
            <li><b>Abstract submission deadline:</b>October 22, 2025</li>
            <li><b>Notification of abstract acceptation:</b>November 10, 2025</li>
            <li><b>Registration Deadline:</b>October 29, 2025</li>
            <li><b>Full text to be received:</b>???</li>
            <li><b>Full text revised:</b>???</li>
            <li><b>Conference date:</b>November 24, 2025</li>
            </ul></div>`
        },
        {
          title: '緣起 (Introduction)',
          content: `<p>台灣暨全球乾旱調查與研究中心（TGDIRC / DroughtHub）成立於2024年，由國立中央大學太空及遙測研究中心主導設立，致力於整合全球乾旱監測、預警及適應策略之研究發展。中心成立的核心使命在於因應日益嚴峻的全球氣候變遷挑戰，特別是乾旱與熱害等極端氣候事件對人類社會造成的深遠衝擊。</p><p>聯合國政府間氣候變化專門委員會（Intergovernmental Panel on Climate Change, IPCC）第六次評估報告明確指出，全球暖化將導致乾旱事件更加頻繁且嚴重，預計到2050年，全球將有超過50億人面臨水資源短缺問題。台灣作為氣候變遷高風險區域，近年來已深刻體驗到這一趨勢：2021年的百年大旱造成全台供水危機，經濟損失超過千億元；2023年連續破紀錄的極端高溫事件，不僅衝擊能源系統，更直接威脅民眾健康與生活品質。</p><p>面對這些前所未有的挑戰，單一國家或機構的努力已無法有效因應。國際科學界普遍認知，唯有透過跨國界、跨領域的合作研究與知識共享，才能發展出有效的解決方案。TGDIRC正是在此背景下應運而生，致力於建立一個整合型的國際研究平台。</p><p>自成立以來，TGDIRC積極與美國國家乾旱減緩中心（National Drought Mitigation Center, NDMC）、澳洲聯邦科學與工業研究組織(Commonwealth Scientific and Industrial Research Organisation, CSIRO）、歐盟氣候調適中心...等國際頂尖機構建立合作關係，並參與聯合國減災辦公室（The United Nations Office for Disaster Risk Reduction, UNDRR）及世界氣象組織（World Meteorological Organization, WMO）相關倡議。同時，中心也與亞太地區面臨相似挑戰的國家建立研究夥伴關係，包括日本、韓國、澳洲、印度、越南...等。</p><p>為建立一個常設性的國際學術交流與政策對話平台，匯聚全球在氣候極端事件、社會韌性及人類宜居性領域的頂尖專家智慧，TGDIRC特別規劃舉辦首屆「氣候極端與社會韌性國際論壇」。本論壇旨在成為亞太地區乃至全球氣候科學領域的重要年度盛會，為推動國際合作、促進知識創新、強化政策制定科學基礎建立長期機制。</p><p>透過此論壇的舉辦，我們期望不僅能展現台灣在氣候科學研究領域的實力與國際貢獻，更能為全球社會面對氣候變遷挑戰提供創新的解決途徑，共同為維護人類在暖化世界中的宜居環境而努力。</p>`
        },
        {
          title: '舉辦目的 (Objectives)',
          content: `<p>本論壇致力於發展全球最具影響力的氣候極端事件與社會韌性研究交流平台，匯聚跨領域頂尖專家智慧，為人類在暖化世界中的永續生存提供創新解決方案。採用實體會議形式舉行，強調面對面深度交流與合作網絡的發展，論文投稿採用英文摘要制，確保國際學術交流的高度整合性。</p><p>論壇聚焦於乾旱監測預警、熱害健康衝擊、水資源安全、農業韌性、生態系統調適、能源系統穩定性、都市氣候治理、災害風險管理等核心議題，建立從科學研究到政策實踐的完整知識鏈。基於TGDIRC「推動全球氣候韌性、守護人類宜居未來」的創立使命，本論壇具備以下戰略目的與核心價值：</p><ol><li><b>引領全球氣候科學</b><br>特別強調人工智慧、衛星遙測、大數據分析等尖端技術的整合，建立次世代兼具長期且即時的氣候監測預警系統，並邀請全球頂尖科學家共同探討理論與實務化的優化與最佳化，藉由推動前瞻性的實務技術應用以及與理論的深度對話交流，為全球氣候極端事件研究樹立新標竿，推動科學創新從跟隨者轉為引領者。從過去的回應挑戰，進一步轉型為預測挑戰，並建立多元解決方案。</li><li><b>打造國際科學研究生態圈</b><br>台灣在氣候研究上具備獨特的地理位置與研究優勢，本論壇將藉由與國際化學術界接軌，建立跨領域戰略夥伴關係，打造台灣成為亞太氣候科學樞紐，透過TGDIRC平台深化與美、歐、澳等頂尖研究機構的策略夥伴關係，建立常設性的全球專家網絡，促進長期研究合作並且提倡與鼓勵青年學者與國際間的交流對話，目的旨在將台灣塑造成全球氣候治理中的知識與政策交流橋樑的角色，並提升台灣在國際氣候治理議題上的話語權與影響力。</li><li><b>強化國家氣候韌性</b><br>建立「科學→政策→實踐」的完整轉化機制，將科學成果有效轉化成實務政策建議並且協助政府落實於社會與產業之中。為政府提供具前瞻性的氣候調適戰略，從被動因應轉為主動預防，在今後的氣候變遷災害發生時，台灣可從單純的受災者角色轉變為解方提供者，並且成為全球氣候韌性治理的典範案例。</li><li><b>促進永續發展目標實現</b><br>緊密結合聯合國2030永續發展議程，特別針對SDG 6（清潔飲水）、SDG 11（永續城市）、SDG 13（氣候行動）、SDG 15（陸域生態）提出水資源、都市韌性、氣候變遷因應以及自然環境保護等領域的突破性解決方案，確保會議成果能對永續發展議程產生實質影響，並展現台灣對全球永續發展的實質貢獻。</li><li><b>催化跨領域創新整合</b><br>氣候挑戰的解決方案不僅之依靠單一學科的深化探討，藉由突破傳統學科界線，促進氣候科學、公共衛生、社會學、經濟學、工程技術等領域的深度融合，培育具備系統思維的新世代氣候專家，並催生新的研究領域知識前沿與創新政策戰略框架，推動解決方案從單點突破轉向系統性創新。</li><li><b>建立全球知識共享機制</b><br>建立一開放式國際研究平台，激勵跨國研究團隊交流與協作，促進資料共享、技術轉移、人才交流，確保氣候科學研究成果能快速轉化為全球公共福祉，讓科學知識真正服務於人類命運共同體的建構。</li></ol>`
        },
        {
          title: '預期效益 (Expected Impacts)',
          content: `<ol><li><b>建構全球氣候韌性研究生態系</b><br>深化台灣與全球頂尖氣候研究機構的策略夥伴關係，包括美國國家乾旱減緩中心、歐盟氣候調適中心、澳洲CSIRO等，建立常設性的國際專家網絡。透過論壇平台促成至少5項大型國際合作計畫啟動，將台灣打造為亞太地區氣候極端事件研究的核心樞紐，顯著提升我國在國際氣候科學領域的話語權與影響力。</li><li><b>催化跨領域創新研究突破</b><br>藉由八大核心議題（乾旱監測預警、熱害健康衝擊、水資源韌性、農業調適、生態系統保護、能源安全、都市氣候治理、災害風險管理）的深度分組研討，突破傳統學科界線，促進氣候科學與公共衛生、社會學、經濟學、人工智慧等領域的創新整合。預期產出10項以上具突破性的跨領域研究提案，為全球氣候挑戰提供台灣原創的解決方案。</li><li><b>強化國家氣候調適治理能力</b><br>聚焦台灣面臨的乾旱與熱害雙重威脅，深入研討早期預警系統建置、水資源智慧管理、都市熱島緩解、農業韌性提升、健康防護機制等關鍵議題。建立「科學研究→政策制定→實務應用」的完整轉化機制，為政府提供具前瞻性與可操作性的氣候調適戰略，預期可減少極端氣候事件造成的社會經濟損失達30%以上，將台灣發展為全球氣候韌性治理的典範案例。</li><li><b>推動國際級學術影響力躍升</b><br>建立嚴格的國際同儕審查機制，編印《氣候極端與社會韌性研究專刊》，達到國際頂尖期刊標準。優秀研究成果將推薦至高影響力期刊發表，預期產出SCI論文5篇以上，總影響因子超過10。同時建立TGDIRC年度報告機制，成為全球氣候政策制定的重要參考依據，大幅提升台灣氣候科學研究的國際學術地位與實務影響力。</li><li><b>培育次世代氣候科學領袖</b><br>為國內外研究生與年輕學者提供與國際頂尖專家深度交流的機會，建立全球氣候科學人才培育網絡。設立「青年學者最佳論文獎」與「國際交流獎學金」，支持優秀人才赴國外進行為期6個月以上的合作研究。預期培育具備國際視野與系統思維的氣候專家50名以上，為台灣氣候科學的長期發展奠定堅實人才基礎。</li><li><b>建立永續知識共享機制</b><br>建構開放式線上研究平台，促進全球氣候數據、監測技術、調適策略的即時共享。建立TGDIRC數位知識庫，收錄全球乾旱與熱害相關研究成果，成為國際氣候科學界的重要資源中心。透過定期發布《全球氣候極端事件監測報告》，為聯合國、世界銀行等國際組織提供科學決策支持，展現台灣對全球氣候治理的實質貢獻。</li></ol>`
        },
        {
          title: '研討會主題 (Conference Themes)',
          content: `<p>本次論壇並規劃5個專題會議，專題會議主題涵蓋：
            </p><ul class="themes-list">
                <li><h4>專題一：乾旱監測與預警技術</h4><p><br>
                    乾旱是全球最具破壞性的自然災害之一，其影響因橫跨農業生產、水資源管理、能源供應，而可能對生態系統穩定性與社會經濟發展成巨大衝擊。隨著極端的氣候變遷對環境產生的劇烈變化，乾旱事件的發生頻率與強度正在逐漸增強，建立系統且科學化的乾旱監測與預警技術已成為國際迫切的研究與政策需求。本主題將聚焦於多來源的數據整合與應用，包含衛星監測、地面觀測網路、氣候變遷模擬等前沿尖端技術應用，提升對乾旱發展過程的即時監控與預測能力。<br>
                    主體內容將涵蓋但不限於：<br>
                    1.	監測技術的創新應用<br>
                    2.	乾旱指標的設計、比較與改良<br>
                    3.	人工智慧與大數據分析在乾旱監測與早期預警中的應用<br>
                    4.	跨區域乾旱監測平台與決策支持系統的建置<br>
                    5.	農業與生態系統層面的乾旱影響評估方法<br>
                    6.	氣候模式模擬與乾旱事件預測<br>
                    </p></li>
                <li><h4>專題二：熱島效應與都市氣候調適</h4><p><br>
                    都市化快速發展與全球暖化加劇，熱島效應因加劇能源需求與基礎設施負擔，影響居民健康與社會安全性，已成為高密度人口聚集區所面臨的重大挑戰。本主題聚焦於熱島效應的成因、監測技術與多層次調適策略，期望建立兼顧科學基礎、工程技術與社會治理的完整對策。<br>
                    主題內容將涵蓋但不限於：<br>
                    1.	熱島效應機制與驅動因素<br>
                    2.	數位技術在都市熱監測技術中的應用<br>
                    3.	都市氣候模擬與熱浪衝擊預測模型<br>
                    4.	智慧城市技術在降溫與節能中的角色<br>
                    5.	都市更新與土地利用規劃在緩解熱島效應上的成效評估<br>
                    6.	數位科技結合綠色建築的永續發展<br>
                    </p></li>
                <li><h4>專題三：氣候政策、水資源管理與社會韌性</h4><p><br>
                    氣候變遷為水循環系統的穩定性帶來劇烈的影響，乾旱、洪水與其他環境汙染導致水資源問題日益嚴峻。如何透過前瞻性的氣候政策與有效的水資源管理，來提升社會的韌性與適應能力，已成為各國共同面對的重要課題。本主題將聚焦於跨領域治理與多方利益相關者的協作，關注政策、管理、社會創新三種視角，建立兼具公平性與永續性的水資源治理策略框架。<br>
                    主題內容將涵蓋但不限於：<br>
                    1.	氣候變遷下的水資源治理政策與制度設計水文科學、公共政策、經濟學與社會學整合的跨領域韌性<br>
                    2.	跨流域或跨國水資源管理合作機制<br>
                    3.	智慧水網、物聯網與人工智慧在水資源調控中的應用<br>
                    4.	地下水開發、再生水利用與非常態水資源調適策略<br>
                    5.	水資源風險管理與社會公平<br>
                    6.	面對極端乾旱與洪災的水資源韌性評估與決策支持方法<br>
                    </p></li>
                <li><h4>專題四：氣候變遷健康衝擊</h4><p><br>
                    氣候變遷已成為21世紀最嚴峻的公共衛生挑戰之一。極端高溫、乾旱、水資源短缺及極端氣候事件，正直接或間接威脅人類健康與社會發展。氣候衝擊帶來中暑、心血管疾病、傳染病擴散、糧食與營養安全惡化等問題，加劇健康不平等，使弱勢族群承受更高風險，對社會穩定性造成潛在的波動與衝擊。本主題聚焦於科學研究、健康風險評估與政策實踐，徵求跨領域研究成果與案例分享，推動建構健康導向的氣候調適策略。<br>
                    主題內容將涵蓋但不限於：<br>
                    1.	高溫與熱浪對心血管、呼吸系統疾病的影響評估<br>
                    2.	氣候變遷與傳染病流行<br>
                    3.	氣候衝擊下的心理健康與社會壓力研究<br>
                    4.	醫療體系的氣候韌性建構<br>
                    5.	氣候變遷與公共衛生管理風險的關聯性<br>
                    6.	健康脆弱族群的保護措施應用<br>
                    </p></li>
                <li><h4>專題五：極端氣候的經濟影響評估</h4><p><br>
                    乾旱、洪水、熱浪與颶風等極端氣候事件不僅造成基礎設施與生產系統的直接損害，更透過供應鏈中斷、能源價格波動、勞動力損失與保險成本上升，對整體經濟造成深遠影響。如何量化並評估這些衝擊，並進一步提出具體的財務、政策與市場應對方案，是提升社會韌性的重要基礎。本主題會議聚焦於極端氣候下的多元產業的生產供應鏈以及市場環境的經濟風險評估與調適策略。<br>
                    主題內容將包含但不限於：<br>
                    1.	災害風險模型、保險精算與再保險機制設計<br>
                    2.	氣候事件對能源市場、農業產值與供應鏈的影響<br>
                    3.	ESG框架下的經濟風險評估<br>
                    4.	中小企業與地方社區面對極端氣候的經濟脆弱性與調適策略<br>
                    5.	氣候移民、人口遷徙對勞動市場與地方經濟的影響<br>
                    6.	都市、社群或市場環境在氣候衝擊下的韌性與復原力<br>
                    </p></li>
            </ul>`
        },
        {
          title: '會議資訊 (Conference Information)',
          content: `<div><p>2025 International Forum on Climate Extremes and Societal Resilience: Drought, Heat, and Human Livability in a Warming World <br>第一屆氣候極端與社會韌性國際論壇：乾旱、熱害與暖化世界中的人類宜居性</p><ul class="styled-list"><li><b>會議時間</b><br>中華民國 2025 年 11 月 24 日(一)至 11 月 26 日(三)</li><li><b>會議地點</b><br>國立中央大學教學研究綜合大樓</li><li><b>主、協辦單位</b><br>台灣暨全球乾旱調查與研究中心 <br>國立中央大學</li><li><b>大會主席</b><br>劉說安 教授 <br> 曾筱珽 副教授</li></ul></div>`
        },
        {
          title: '講者名單 (Keynote Speakers)',
          content: `<h3>Keynote Speakers</h3> <ul class="styled-list"><li><a href="https://cee.mit.edu/people_individual/dara-entekhabi/" target="_blank">Dara Entekhabi</a>, Professor, Department of Civil and Environmental Engineering, Massachusetts Institute of Technology (MIT)<br></li><li><a href="https://www.cesbio.cnrs.fr/author/yann-kerr/" target="_blank">Yann H. Kerr</a>, Researcher, Centre d'Etudes Spatiales de la Biosphère (CESBIO)<br></li><li><a href="https://www.stir.ac.uk/people/1967536" target="_blank">Michael Roy</a>, Professor of Economic Sociology and Social Policy, Yunus Centre for Social Business and Health, Glasgow Caledonian University<br></li><li><a href="https://repo.ur.krakow.pl/info/author/UR25c3c523d4774275bc32f0af7c96ad24?r=author&tab=&title=Person%2Bprofile%2B%25E2%2580%2593%2BPiotr%2BW%25C4%2599%25C5%25BCyk%2B%25E2%2580%2593%2BUniversity%2Bof%2BAgriculture%2Bin%2BKrakow&lang=en&qp=" target="_blank">Piotr Wężyk</a>, Professor, Faculty of Forestry, University of Agriculture in Krakow<br></li><li><a href="https://vneat.org/?page_id=286&utm_source=chatgpt.com&lang=en" target="_blank">Nguyen Kim Anh</a>, Senior Researcher, Institute of Earth Sciences, Vietnam Academy of Science and Technology<br></li><li><a href="https://www.k.u-tokyo.ac.jp/en/gsfs/faculty/takashi_oguchi/" target="_blank">Takashi Oguchi/</a>, Professor, Center for Spatial Information Science, The University of Tokyo<br></li><li><a href="https://aasb.gov.au/board-members/prof-carolyn-cordery/" target="_blank">Carolyn Cordery</a>, Professor, School of Accounting and Commercial Law, Victoria University of Wellington<br></li><li><a href="https://schulich.yorku.ca/faculty/charles-cho/" target="_blank">Charles H. Cho</a>, Professor of Sustainability Accounting, Erivan K. Haub Chair in Business & Sustainability, Schulich School of Business, York University<br></li><li><a href="https://www.researchgate.net/profile/Tien-Minh-2" target="_blank">Trần Minh Tiến</a>, Director General, Soils and Fertilizers Research Institute (SFRI)<br></li><li><a href="https://engineering.virginia.edu/faculty/venkataraman-lakshmi" target="_blank">Venkataraman (Venkat) Lakshmi</a>, John L. Newcomb Professor of Engineering, Department of Engineering Systems and Environment, University of Virginia<br></li><li><a href="https://www.tesaf.unipd.it/en/paolo-tarolli" target="_blank">Paolo Tarolli</a>, Professor, Department of Land, Environment, Agriculture and Forestry, University of Padua<br></li><li><a href="https://english.hi.is/staff/benedikt?utm_source=chatgpt.com" target="_blank">Jón Atli Benediktsson</a>, Professor, Faculty of Electrical and Computer Engineering, University of Iceland<br></li><li><a href="https://eratosthenes.org.cy/team/barbara-ryan/" target="_blank">Barbara Ryan</a>, Executive Director, World Geospatial Industry Council (WGIC)<br></li><li><a href="https://portfolio.jcu.edu.au/researchers/ben.jarihani/" target="_blank">Ben Jarihani</a>, Associate Professor, College of Science and Engineering, James Cook University<br></li><li><a href="https://cde.nus.edu.sg/cee/staff/he-xiaogang/" target="_blank">Xiaogang He</a>, Assistant Professor, Department of Civil and Environmental Engineering, National University of Singapore<br></li></ul></div>`
        },
        {
          title: '議程 (Agenda)',
          content: `<div class="agenda-container"><p>CESR 2025 議程大綱如下</p><h4 class="agenda-day-title">第一天 - Nov 24 (Mon.) | 開幕與主題演講</h4><table class="agenda-table"><thead><tr><th>Time</th><th colspan="2">Event</th></tr></thead><tbody><tr><td>13:20-13:50</td><td colspan="2">Registration</td></tr><tr><td>13:50-14:00</td><td colspan="2">Opening Ceremony</td></tr><tr><td>14:00-14:30</td><td colspan="2">Keynote Speaker 1</td></tr><tr><td>14:30-15:00</td><td colspan="2">Keynote Speaker 2</td></tr><tr><td>15:30-16:00</td><td colspan="2">Keynote Speaker 3</td></tr><tr class="break-row"><td>16:00-16:20</td><td colspan="2">Tea Break / Poster Exhibition</td></tr><tr><td rowspan="2">16:30-18:00</td><td><b>Session A-1</b></td><td><b>Session B-1</b></td></tr><tr><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td></tr><tr class="meal-row"><td>18:00-20:00</td><td colspan="2">Conference Dinner</td></tr></tbody></table><h4 class="agenda-day-title">第二天 - Nov 25 (Tue.) | 專題會議與討論</h4><table class="agenda-table"><thead><tr><th>Time</th><th colspan="3">Event</th></tr></thead><tbody><tr><td>08:00-09:00</td><td colspan="3">Registration</td></tr><tr><td>10:00-16:00</td><td colspan="3">Poster Exhibition</td></tr><tr><td rowspan="2">09:00-10:30</td><td><b>Session A-2</b></td><td><b>Session B-2</b></td><td><b>Session C-2</b></td></tr><tr><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td></tr><tr class="break-row"><td>10:30-10:50</td><td colspan="3">Tea Break</td></tr><tr><td rowspan="2">10:50-12:20</td><td><b>Session A-3</b></td><td><b>Session B-3</b></td><td><b>Session C-3</b></td></tr><tr><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td><td>Chair:<br>Speakers:</td></tr><tr class="meal-row"><td>12:20-13:30</td><td colspan="3">Lunch</td></tr><tr><td rowspan="2">13:30-15:00</td><td><b>Session A-4</b></td><td colspan="2"><b>Session B-4</b></td></tr><tr><td>Chair:<br>Speakers:</td><td colspan="2">Chair:<br>Speakers:</td></tr><tr><td>15:00-16:00</td><td colspan="3">Closing Ceremony</td></tr></tbody></table><h4 class="agenda-day-title">第三天 - Nov 26 (Wed.) | 綜合討論與閉幕</h4><table class="agenda-table"><thead><tr><th>Time</th><th>Event</th></tr></thead><tbody><tr><td>09:00-10:30</td><td>各專題會議總結報告</td></tr><tr class="break-row"><td>10:30-11:00</td><td>茶敘時間</td></tr><tr><td>11:00-12:00</td><td>論壇宣言起草與討論</td></tr><tr><td>12:00-12:30</td><td>閉幕典禮</td></tr><tr class="meal-row"><td>12:30-14:00</td><td>午餐</td></tr><tr><td>14:00-17:00</td><td>Field Trip</td></tr><tr class="meal-row"><td>18:30-20:30</td><td>See you again Banquet</td></tr></tbody></table></div>`
        }
      ],
      info: {
        registration: {
          url: 'https://forms.gle/VeZVkFrMfF1heW7P6',
          inquiryUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfDJ6RwJbj0kQ6NzxBLNIAsJFo_M1UF-Cx0QtacosAKqg48dQ/viewform?usp=sharing&ouid=108138815254155510678',
          qrCode: 'qr-registration.png'
        },
        poster: {
          steps: [
            { text: '投稿截止時間：114/3/14' },
            { text: '審查通過公告：114/3/24' },
            { text: '海報摘要格式：請參考附檔格式提供。', url: 'poster-template.pdf' },
            { text: `<a href="https://forms.gle/xPCqDJJxyKqMJPUJA" target="_blank">https://forms.gle/xPCqDJJxyKqMJPUJA</a>` },
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

/* --- 頁面既有樣式 (保持不變) --- */
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
  font-size: 1.25rem; /* 預設字體大小 */
  font-weight: 300;
  line-height: 1.8;
  background-color: #fff;
}

/* --- :deep 選擇器，用於修改 v-html 插入的內容樣式 --- */
:deep(.accordion-content-inner p) { margin-bottom: 1rem;  /* 調整內文段落字體大小 */ }
:deep(.accordion-content-inner ol) { padding-left: 2rem; }
:deep(.accordion-content-inner li) { margin-bottom: 1rem;  /* 調整列表項目字體大小 */ }
:deep(.accordion-content-inner strong) { color: #212529; }
:deep(.accordion-content-inner ul a) { font-weight: bold; color: #007ACC; text-decoration: underline; transition: color 0.3s; }
:deep(.accordion-content-inner ul a:hover) { color: #007bff; }

/* 沿用您原有的樣式，並確保它們在 .accordion-content-inner 內生效 */
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