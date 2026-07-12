  <template>
  <div class="icqab-page">
    <!-- Page Header -->
    <div class="page-header position-relative text-center text-white">
      <div class="bg-overlay"></div>
      <b-container class="position-relative py-5">
        <p class="h4 fw-normal conference-date">{{ $t('conference2026.header.date') }}</p>
        <h1 class="display-4 fw-bold" v-html="$t('conference2026.header.title')"></h1>
        <h2 class="h1 fw-normal mt-3">{{ $t('conference2026.header.subtitle') }}</h2>
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
              <div v-if="item.isEditorialBoard">
                <!-- Advisors Section -->
                <h4 class="mb-4" style="color: #003366; border-left: 5px solid #d4a373; padding-left: 15px;">Advisors</h4>
                <b-row class="mb-5">
                  <b-col md="3" v-for="(advisor, idx) in item.content.advisors" :key="'adv'+idx" class="mb-4">
                    <div class="d-flex align-items-center h-100">
                      <div class="me-3 member-img-container">
                        <img :src="getImageUrl(advisor.image)" :alt="advisor.name" class="img-fluid rounded-circle member-img shadow-sm">
                      </div>
                      <div>
                        <h5 class="fw-bold mb-1" style="color: #003366;">{{ advisor.name }}</h5>
                        <small class="text-muted fw-normal">{{ advisor.title }}</small>
                      </div>
                    </div>
                  </b-col>
                </b-row>

                <!-- Team Members Section -->
                <h4 class="mb-4" style="color: #003366; border-left: 5px solid #d4a373; padding-left: 15px;">Team Members</h4>
                <b-row>
                  <b-col md="6" lg="6" v-for="(member, idx) in item.content.teamMembers" :key="'mem'+idx" class="mb-4">
                    <div class="d-flex align-items-center p-3 border rounded shadow-sm bg-white h-100 member-card">
                      <div class="me-3 member-img-container-sm flex-shrink-0">
                        <img :src="getImageUrl(member.image)" :alt="member.name" class="img-fluid rounded member-img-sm">
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1" style="color: #003366;">{{ member.name }}</h6>
                        <div class="small text-muted mb-1 fw-normal">{{ member.title }}</div>
                        <div class="small text-secondary fw-normal">{{ member.department }}</div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div v-else-if="!item.isStructured" v-html="item.content"></div>
              <div v-else>
                <p v-html="item.content.intro"></p>
                <ul class="styled-list">
                  <li v-for="(detail, detailIndex) in item.content.details" :key="detailIndex">
                    <b>{{ detail.label }}</b><br>
                    <div v-if="detail.value" v-html="detail.value"></div>
                    <div v-if="detail.isOrganizer">
                      <div v-for="(org, orgIndex) in detail.items" :key="orgIndex" class="d-flex align-items-center mb-3">
                        <div class="logo-container me-3">
                          <img :src="getImageUrl(org.logo)" :alt="org.alt" :style="org.style">
                        </div>
                        <a v-if="org.url" :href="org.url" target="_blank" rel="noopener noreferrer">{{ org.name }}</a>
                        <span v-else >{{ org.name }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
                  <h3 class="mb-4 fs-2 fw-bold" style="color: #003366;">{{ $t('conference2026.registration.title') }}</h3>
                  <p class="text-muted mb-4 fs-5">
                    {{ $t('conference2026.registration.description') }}
                  </p>
                  <div class="mb-4 d-flex align-items-center flex-wrap">
                    <b-button :href="info.registration.url" target="_blank" variant="primary" size="lg" class="me-3 mb-2">
                      <i class="fas fa-edit me-2"></i> {{ $t('conference2026.registration.button_register') }}
                    </b-button>
                    <b-button :href="info.registration.inquiryUrl" target="_blank" size="lg" class="mb-2 btn-contact">
                      <i class="fas fa-question-circle me-2"></i> {{ $t('conference2026.registration.button_inquiry') }}
                    </b-button>
                  </div>
                  <hr class="my-4">
                  <div>
                    <h5 class="h5 text-uppercase text-muted mb-3">{{ $t('conference2026.registration.contact_title') }}</h5>
                    <a href="mailto:tgdirc.ncu@gmail.com" class="link-dark text-decoration-none contact-link">
                      <i class="fas fa-envelope me-2 text-primary"></i> <span class="fs-5">tgdirc.ncu@gmail.com</span>
                    </a>
                  </div>
                </b-col>
                <b-col md="5" class="d-flex align-items-center justify-content-center p-5" style="background-color: #f8f9fa;">
                  <div class="text-center">
                    <img :src="getImageUrl('qr-registration-2026.png')" :alt="$t('conference2026.registration.qr_alt')" class="qr-code-large img-fluid rounded">
                    <p class="text-muted small mt-3">{{ $t('conference2026.registration.qr_caption') }}</p>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
          
          <!-- Online Meeting Link Section (commented out: no online meeting currently) -->
          <!--
          <div class="registration-section my-5 py-5">
            <b-card no-body class="shadow-lg border-0 overflow-hidden">
              <b-row no-gutters>
                <b-col md="12" class="p-5 d-flex flex-column justify-content-center">
                  <h3 class="mb-4 fs-2 fw-bold" style="color: #003366;">{{ $t('conference2026.online_participation.title') }}</h3>
                  <p class="text-muted mb-4 fs-5">
                    {{ $t('conference2026.online_participation.description') }}
                  </p>
                  <div class="mb-4 d-flex align-items-center flex-wrap">
                    <b-button href="https://meet.google.com/cnk-huti-jzq" target="_blank" size="lg" class="me-3 mb-2 btn-online-meeting">
                      <i class="fas fa-video me-2"></i> {{ $t('conference2026.online_participation.button_link') }}
                    </b-button>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
          -->

          
          <b-row class="py-5">
            <b-col>
              <h4 class="accordion-title-custom mb-4 fs-2">{{ $t('conference2026.venue.title') }}</h4>
              <b-row>
                <b-col>
                  <div class="h5 fw-bold text-primary mb-3">{{ info.host.venue }}</div>

                  <div class="d-flex mb-3">
                    <div class="venue-icon-wrapper"><i class="fas fa-chalkboard-teacher fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">{{ $t('conference2026.venue.main_hall_title') }}</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.mainVenue }}</p>
                    </div>
                  </div>

                  <h5 class="h5 mt-4 mb-2">{{ $t('conference2026.venue.host_by') }}</h5>
                  <ul class="list-unstyled host-list">
                    <li v-for="host in info.host.hosts" :key="host.name" class="d-flex align-items-center mb-2">
                      <div class="logo-container me-2">
                        <img :src="getImageUrl(host.logo)" :alt="host.alt" :style="host.style">
                      </div>
                      <a v-if="host.url" :href="host.url" target="_blank" rel="noopener noreferrer">{{ host.name }}</a>
                      <span v-else>{{ host.name }}</span>
                    </li>
                  </ul>

                  <h5 class="h5 mt-4 mb-2">{{ $t('conference2026.venue.co_hosted_by') }}</h5>
                  <ul class="list-unstyled host-list" v-if="info.host.coHosts">
                    <li v-for="coHost in info.host.coHosts" :key="coHost.name" class="d-flex align-items-center mb-2">
                      <div class="logo-container me-2">
                        <img :src="getImageUrl(coHost.logo)" :alt="coHost.alt" :style="coHost.style">
                      </div>
                      <a v-if="coHost.url" :href="coHost.url" target="_blank" rel="noopener noreferrer">{{ coHost.name }}</a>
                      <span v-else>{{ coHost.name }}</span>
                    </li>
                  </ul>

                  <h5 class="h5 mt-4 mb-2">{{ $t('conference2026.venue.advised_by') }}</h5>
                  <ul class="list-unstyled host-list" v-if="info.host.advisors">
                    <li
                      v-for="advisor in info.host.advisors"
                      :key="advisor.name"
                      class="d-flex align-items-center mb-2"
                    >
                      <div class="logo-container me-2">
                        <img :src="getImageUrl(advisor.logo)" :alt="advisor.alt" :style="advisor.style">
                      </div>
                      <a v-if="advisor.url" :href="advisor.url" target="_blank" rel="noopener noreferrer">{{ advisor.name }}</a>
                      <span v-else>{{ advisor.name }}</span>
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col cols="6" class="mb-4">
                  <b-card no-body class="shadow-sm map-card">
                    <b-card-header>{{ $t('conference2026.venue.surroundings_map') }}</b-card-header>
                    <img :src="getImageUrl('surroundings-map.jpg')" :alt="$t('conference2026.venue.surroundings_map')" class="img-fluid">
                  </b-card>
                </b-col>
                <b-col cols="6" class="mb-4">
                  <b-card no-body class="shadow-sm map-card">
                    <b-card-header>{{ $t('conference2026.venue.campus_map') }}</b-card-header>
                    <img :src="getImageUrl('campus-map.jpg')" :alt="$t('conference2026.venue.campus_map')" class="img-fluid">
                  </b-card>
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
  name: 'ConferenceView2026',
  computed: {
    sections() {
      return this.$tm('conference2026.sections');
    },
    info() {
      return this.$tm('conference2026.info');
    }
  },
  mounted() {
    this.loadCalendarScript();
  },
  beforeUnmount() {
    this.removeCalendarScript();
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return '';
      try { return require(`@/assets/${imageName}`); } catch (e) { console.error(e); return ''; }
    },
    loadCalendarScript() {
      const calendarScriptId = 'google-calendar-script';
      const calendarStyleId = 'google-calendar-style';

      if (document.getElementById(calendarScriptId)) {
        this.initializeCalendarButton();
        return;
      }

      const style = document.createElement('link');
      style.id = calendarStyleId;
      style.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      style.rel = 'stylesheet';
      document.head.appendChild(style);

      const script = document.createElement('script');
      script.id = calendarScriptId;
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = () => {
        this.initializeCalendarButton();
      };
      document.head.appendChild(script);
    },
    initializeCalendarButton() {
      console.log('initializeCalendarButton called.');
      console.log('window.calendar:', window.calendar);
      console.log('window.calendar.schedulingButton:', window.calendar ? window.calendar.schedulingButton : 'N/A');
      console.log('this.$refs.calendarButton:', this.$refs.calendarButton);

      if (window.calendar && window.calendar.schedulingButton && this.$refs.calendarButton) {
        console.log('Attempting to load Google Calendar button...');
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3J7AjNiv6lQZAEbQdYpk6S9tt_V85U5-NGhv_PsPOGOIay3Ncl-0AV6CI-MnteGDnskLu_HYFV?gv=true', // Changed URL to avoid previous error in case of bad URL
          color: '#039BE5',
          label: '進行預約',
          target: this.$refs.calendarButton,
        });
        console.log('Google Calendar button load attempt complete.');
      } else {
        console.warn('Google Calendar button not loaded. Missing dependencies or target element.');
      }
    },
    removeCalendarScript() {
      const calendarScriptId = 'google-calendar-script';
      const calendarStyleId = 'google-calendar-style';
      const script = document.getElementById(calendarScriptId);
      const style = document.getElementById(calendarStyleId);
      if (script) {
        script.remove();
      }
      if (style) {
        style.remove();
      }
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
  font-size: var(--fs-h3);
  color: #003366;
  font-weight: 700;
}

.accordion-content-inner {
  padding: 25px;
  font-size: var(--fs-body);
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

.btn-online-meeting {
  background-color: #039BE5;
  border-color: #039BE5;
  color: white;
  transition: all 0.3s ease;
}

.btn-online-meeting:hover {
  background-color: #0277bd;
  border-color: #0277bd;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
/* 巢狀講者表格的樣式 */
.speaker-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

/* 表格標題 (th) 和儲存格 (td) 的通用樣式 */
.speaker-table th, 
.speaker-table td {
  padding: 10px 8px; /* 增加上下內邊距，讓文字更舒適 */
  text-align: left;    /* 確保所有文字都靠左對齊 */
  vertical-align: top;
}

/* 標題列的專屬樣式 */
.speaker-table th {
  border-bottom: 2px solid #ddd; /* 標題底部的分隔線加粗 */
  font-size: 0.95em;
  color: #333;
}

/* 內容儲存格的樣式 */
.speaker-table td {
  border-top: 1px solid #eee; /* 講者之間的分隔線 */
}

.speaker-table tr:first-child td {
  border-top: none; /* 第一位講者上方不需要分隔線 */
}

/* 第一欄 (講者) 的寬度設定 */
.speaker-table td:first-child,
.speaker-table th:first-child {
  width: 40%; 
}

/* 講者職稱的樣式 */
.speaker-table small {
  display: block;
  font-weight: normal;
  color: #666;
  margin-top: 3px;
}

.logo-container {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.logo-container img {
  max-width: 100% !important;
  max-height: 100% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain;
}

/* Editorial Board Styles */
.member-img-container {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.member-img-container-sm {
  width: 80px;
  height: 80px;
}

.member-img-sm {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;
}

.member-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1) !important;
  border-color: #d4a373;
}

:deep(.abstract-submit-btn) {
  display: inline-block;
  background-color: #003366;
  color: #fff !important;
  padding: 13px 40px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none !important;
  letter-spacing: 0.04em;
  border: 2px solid #003366;
  transition: background-color 0.25s ease, color 0.25s ease;
}
:deep(.abstract-submit-btn:hover) {
  background-color: #fff;
  color: #003366 !important;
}

/* ── Abstract Submission Section ── */
:deep(.abstract-submission-section) { font-weight: 400; }
:deep(.section-intro-text) { font-size: 1.05rem; color: #495057; line-height: 1.75; margin-bottom: 1.5rem; }

:deep(.info-blocks-row) { display: flex; gap: 1.25rem; margin-bottom: 2rem; flex-wrap: wrap; }
:deep(.info-date-card) {
  flex: 1; min-width: 220px;
  display: flex; align-items: center; gap: 1rem;
  padding: 1.1rem 1.4rem; border-radius: 10px;
  background: #f8f9fa; border-left: 4px solid #003366;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
:deep(.info-date-card.accent) { border-left-color: #d4a373; background: #fdf9f5; }
:deep(.info-date-icon) { font-size: 1.5rem; color: #003366; flex-shrink: 0; }
:deep(.info-date-card.accent .info-date-icon) { color: #d4a373; }
:deep(.info-date-label) { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.07em; color: #6c757d; margin-bottom: 4px; font-weight: 600; }
:deep(.info-date-value) { font-size: 1.05rem; font-weight: 700; color: #003366; }
:deep(.date-red) { color: #dc3545 !important; }

:deep(.subsection-heading) {
  font-size: 1.1rem; font-weight: 700; color: #003366;
  border-bottom: 2px solid #e9ecef; padding-bottom: 0.5rem;
  margin: 2rem 0 1.1rem;
}

:deep(.format-req-list) {
  list-style: none; padding: 0; margin-bottom: 1.5rem;
  border: 1px solid #e0e7f0; border-radius: 10px; overflow: hidden;
}
:deep(.format-req-list li) {
  display: flex; align-items: baseline; gap: 0.6rem;
  padding: 0.78rem 1.4rem; font-size: 0.97rem; color: #343a40;
  border-bottom: 1px solid #edf0f5; line-height: 1.5;
}
:deep(.format-req-list li:last-child) { border-bottom: none; }
:deep(.format-req-list li:nth-child(even)) { background: #f8f9fc; }
:deep(.format-req-list li::before) {
  content: ""; display: inline-block; flex-shrink: 0;
  width: 7px; height: 7px; border-radius: 50%;
  background: #003366; margin-top: 5px;
}
:deep(.format-req-list li b) { color: #003366; font-weight: 700; white-space: nowrap; }

:deep(.req-info-box) {
  background: #e8f4fd; border-left: 4px solid #007ACC;
  border-radius: 0 8px 8px 0; padding: 0.85rem 1.2rem;
  font-size: 0.88rem; color: #155a7d; margin-bottom: 2rem; font-weight: 500;
}
:deep(.template-dl-link) {
  color: #003366; font-weight: 700; text-decoration: underline;
  text-underline-offset: 3px; transition: color 0.2s;
}
:deep(.template-dl-link:hover) { color: #c18951; }

:deep(.submit-cta-box) {
  text-align: center; padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #f0f4ff 0%, #e9ecef 100%);
  border-radius: 12px; border: 1px solid #d0d9e8;
}
:deep(.submit-cta-btn) {
  display: inline-block; background: #003366; color: #fff !important;
  padding: 14px 42px; border-radius: 6px; font-size: 1rem; font-weight: 600;
  text-decoration: none !important; letter-spacing: 0.04em;
  border: 2px solid #003366; transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(0,51,102,0.28);
}
:deep(.submit-cta-btn:hover) {
  background: #fff; color: #003366 !important;
  box-shadow: 0 6px 20px rgba(0,51,102,0.15); transform: translateY(-2px);
}
:deep(.submit-footnote) { font-size: 0.82rem; color: #999; margin-top: 1rem; margin-bottom: 0; }

/* ── Registration Fee Section ── */
:deep(.registration-fee-section) { font-weight: 400; }

:deep(.fee-table-wrapper) { overflow-x: auto; margin: 1.5rem 0 2.25rem; border-radius: 12px; box-shadow: 0 4px 18px rgba(0,0,0,0.08); }
:deep(.fee-table) { width: 100%; border-collapse: collapse; }
:deep(.fee-table thead tr) { background: #003366; color: #fff; }
:deep(.fee-th-cat) {
  padding: 1rem 1.5rem; text-align: left;
  font-size: 0.9rem; font-weight: 700; letter-spacing: 0.04em; width: 40%;
}
:deep(.fee-th-price) {
  padding: 1rem 1.25rem; text-align: center;
  font-size: 0.9rem; font-weight: 700; letter-spacing: 0.04em;
}
:deep(.fee-th-sub) { font-size: 0.75rem; font-weight: 400; opacity: 0.85; }
:deep(.fee-table tbody tr) { border-bottom: 1px solid #e9ecef; transition: background 0.18s; }
:deep(.fee-table tbody tr:last-child) { border-bottom: none; }
:deep(.fee-table tbody tr:hover) { background: #eef3ff !important; }
:deep(.fee-tr-alt) { background: #f8f9fa; }
:deep(.fee-td-cat) { padding: 1.1rem 1.5rem; font-size: 1rem; color: #343a40; font-weight: 500; }
:deep(.fee-td-early) { padding: 1.1rem 1.25rem; text-align: center; font-size: 1.2rem; font-weight: 800; color: #1a6b2f; }
:deep(.fee-td-regular) { padding: 1.1rem 1.25rem; text-align: center; font-size: 1.05rem; font-weight: 700; color: #adb5bd; }

:deep(.payment-methods-row) { display: flex; gap: 1.1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
:deep(.payment-method-card) {
  flex: 1; min-width: 270px;
  background: #f8f9fa; border-radius: 10px; border: 1px solid #e9ecef;
  padding: 1.4rem;
}
:deep(.payment-method-header) {
  font-size: 0.95rem; font-weight: 700; color: #003366;
  padding-bottom: 0.7rem; border-bottom: 2px solid #dee2e6; margin-bottom: 1rem;
}
:deep(.payment-detail-list) { list-style: none; padding: 0; margin: 0; font-size: 0.88rem; color: #495057; }
:deep(.payment-detail-list li) { padding: 0.38rem 0; border-bottom: 1px solid #e9ecef; }
:deep(.payment-detail-list li:last-child) { border-bottom: none; }
:deep(.detail-label) { font-weight: 600; color: #343a40; }
:deep(.payment-note-inline) { font-size: 0.82rem; color: #6c757d; margin-top: 0.75rem; margin-bottom: 0; }

:deep(.fee-includes-box) {
  background: #eaf7ec; border-left: 4px solid #28a745;
  border-radius: 0 8px 8px 0; padding: 0.95rem 1.25rem;
  font-size: 0.9rem; color: #1e5128; font-weight: 500;
}
:deep(.fee-includes-box i) { color: #28a745; }

@media (max-width: 768px) {
  .accordion-content-inner {
    padding: 16px;
  }

  :deep(.speakers-subtitle) {
    font-size: 1.3rem;
  }

  .qr-code-large {
    max-width: 150px;
  }

  .speaker-table td:first-child,
  .speaker-table th:first-child {
    width: auto;
  }

  :deep(.payment-method-card) {
    min-width: 100%;
  }

  /* Registration & Contact / Online Participation / Venue sections */
  .registration-section .fs-2 {
    font-size: 1.4rem !important;
  }

  .registration-section .p-5 {
    padding: 2rem !important;
  }

  .venue-icon-wrapper {
    font-size: 1.2rem !important;
  }

  .host-list a,
  .host-list span {
    font-size: var(--fs-body);
  }

  .logo-container {
    width: 34px;
    height: 34px;
  }

  .map-card .card-header {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 576px) {
  .registration-section .fs-2 {
    font-size: 1.2rem !important;
  }

  .registration-section .p-5 {
    padding: 1.25rem !important;
  }

  .qr-code-large {
    max-width: 120px;
  }

  .host-list a,
  .host-list span {
    font-size: var(--fs-body);
  }

  .logo-container {
    width: 26px;
    height: 26px;
  }

  .map-card .card-header {
    font-size: 0.75rem;
    padding: 0.4rem 0.5rem;
  }

  :deep(.accordion-content-inner .agenda-table) {
    font-size: 0.75rem;
  }
}
</style>