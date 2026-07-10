<template>
  <b-navbar toggleable="lg" :container="false" :class="['site-header', { 'scrolled': isScrolled }]">
    <b-container fluid>
      <!-- Logo 品牌 -->
      <b-navbar-brand to="/">
        <img src="@/assets/logo.png" :alt="$t('header.logoAlt')" class="logo-img">
      </b-navbar-brand>

      <!-- 手機版的漢堡選單按鈕 -->
      <b-navbar-toggle @click="isNavOpen = !isNavOpen"></b-navbar-toggle>

      <!-- 選單開啟時的透明點擊區，點擊選單以外的地方可關閉 -->
      <div
        class="nav-backdrop"
        :class="{ 'nav-backdrop-open': isNavOpen }"
        @click="closeNav"
      ></div>

      <!-- 導航項目：從漢堡選單按鈕位置展開的浮動選單 -->
      <b-collapse id="nav-collapse" v-model="isNavOpen" is-nav :class="{ 'nav-drawer-open': isNavOpen }">
        <b-navbar-nav class="ms-auto mb-2 mb-lg-0 align-items-center">
          <b-nav-item to="/home" :active="$route.path === '/home'" @click="closeNav">{{ $t('header.nav.home') }}</b-nav-item>
          <b-nav-item to="/research" @click="closeNav">{{ $t('header.nav.research') }}</b-nav-item>
          <b-nav-item to="/team" @click="closeNav">{{ $t('header.nav.team') }}</b-nav-item>
          <b-nav-item to="/research-data" @click="closeNav">{{ $t('header.nav.researchData') }}</b-nav-item>
          <b-nav-item to="/conferences" @click="closeNav">{{ $t('header.nav.conferences') }}</b-nav-item>
          <b-nav-item to="/cesr2026" @click="closeNav">{{ $t('header.nav.icqab') }}</b-nav-item>
          <b-nav-item @click.prevent="switchLanguage" class="lang-switcher">{{ $t('header.nav.language') }}</b-nav-item>
          <b-nav-item class="search-icon-item ms-lg-3" @click.prevent="openSearch">
            <div class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>

    <!-- 全站搜尋 -->
    <div class="search-overlay" :class="{ 'search-overlay-open': isSearchOpen }" @click.self="closeSearch">
      <div class="search-box">
        <div class="search-input-wrap">
          <svg class="search-input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            class="search-input"
            :placeholder="$t('search.placeholder')"
            @keydown.esc="closeSearch"
          >
          <button type="button" class="search-close-btn" @click="closeSearch" aria-label="Close search">&times;</button>
        </div>

        <ul v-if="searchQuery.trim()" class="search-results">
          <li
            v-for="result in searchResults"
            :key="result.key"
            class="search-result-item"
            @click="goToResult(result)"
          >
            <span class="search-result-type">{{ result.typeLabel }}</span>
            <span class="search-result-body">
              <span class="search-result-title">{{ result.title }}</span>
              <span v-if="result.subtitle" class="search-result-subtitle">{{ result.subtitle }}</span>
            </span>
          </li>
          <li v-if="searchResults.length === 0" class="search-no-results">
            {{ $t('search.noResults') }}
          </li>
        </ul>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      isNavOpen: false,
      isSearchOpen: false,
      searchQuery: ''
    };
  },
  computed: {
    searchIndex() {
      const index = [];

      // 靜態頁面
      const pages = [
        { to: '/home', label: this.$t('header.nav.home') },
        { to: '/research', label: this.$t('header.nav.research') },
        { to: '/team', label: this.$t('header.nav.team') },
        { to: '/research-data', label: this.$t('header.nav.researchData') },
        { to: '/conferences', label: this.$t('header.nav.conferences') },
        { to: '/cesr2026', label: this.$t('header.nav.icqab') }
      ];
      pages.forEach((page) => {
        index.push({
          key: `page-${page.to}`,
          type: 'page',
          typeLabel: this.$t('search.typePage'),
          title: page.label,
          subtitle: '',
          to: page.to
        });
      });

      // 最新消息
      const newsItems = this.$tm('news.items') || [];
      newsItems.forEach((item, i) => {
        index.push({
          key: `news-${i}`,
          type: 'news',
          typeLabel: this.$t('search.typeNews'),
          title: item.title,
          subtitle: item.excerpt,
          to: item.url && !String(item.url).startsWith('http') ? item.url : null,
          href: item.url && String(item.url).startsWith('http') ? item.url : null
        });
      });

      // 團隊成員
      const members = this.$tm('team.members') || [];
      members.forEach((member, i) => {
        index.push({
          key: `member-${i}`,
          type: 'team',
          typeLabel: this.$t('search.typeTeam'),
          title: member.name,
          subtitle: [member.title, member.department].filter(Boolean).join(' | '),
          to: '/team'
        });
      });

      return index;
    },
    searchResults() {
      const q = this.searchQuery.trim().toLowerCase();
      if (!q) return [];
      return this.searchIndex
        .filter((item) =>
          (item.title && item.title.toLowerCase().includes(q)) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(q))
        )
        .slice(0, 8);
    }
  },
  watch: {
    $route() {
      this.isNavOpen = false;
      this.isSearchOpen = false;
    },
    isNavOpen(open) {
      document.body.style.overflow = open ? 'hidden' : (this.isSearchOpen ? 'hidden' : '');
    },
    isSearchOpen(open) {
      document.body.style.overflow = open ? 'hidden' : (this.isNavOpen ? 'hidden' : '');
      if (open) {
        this.$nextTick(() => {
          this.$refs.searchInput && this.$refs.searchInput.focus();
        });
      } else {
        this.searchQuery = '';
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.style.overflow = '';
  },
  methods: {
    closeNav() {
      // 延遲關閉，確保 router-link 自己的點擊導航先被瀏覽器處理完成
      setTimeout(() => {
        this.isNavOpen = false;
      }, 0);
    },
    switchLanguage() {
      this.isNavOpen = false;
      const newLocale = this.$i18n.locale === 'zh-TW' ? 'en' : 'zh-TW';
      localStorage.setItem('locale', newLocale);
      window.location.reload();
    },
    openSearch() {
      this.isNavOpen = false;
      this.isSearchOpen = true;
    },
    closeSearch() {
      this.isSearchOpen = false;
    },
    goToResult(result) {
      if (result.href) {
        window.open(result.href, '_blank', 'noopener,noreferrer');
      } else if (result.to) {
        this.$router.push(result.to);
      }
      this.closeSearch();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
      if (window.scrollY > 80) {
        this.isNavOpen = false;
      }
    }
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1030; /* Bootstrap's default z-index for navbars */
  padding-top: 0;
  padding-bottom: 0.5rem;
  transition: background-color 0.3s ease-in-out;
}

.site-header.scrolled {
  background-color: #0f1c2d;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

.logo-img {
  height: 65px; /* Slightly smaller for better navbar integration */
}

/* Customizing navbar link colors for the transparent theme */
:deep(.nav-link) {
  color: rgba(255, 255, 255, 0.8) !important;
  font-weight: 550;
  font-size: 1.1rem;
  transition: color 0.3s;
}

:deep(.nav-link:hover) {
  color: #ffffff !important;
}

:deep(.nav-link.active) {
  color: #ffffff !important;
  font-weight: 700;
}

.lang-switcher {
  cursor: pointer;
}

.search-icon {
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s;
}
.search-icon:hover {
  color: #ffffff;
}

/* Style for the navbar toggler (hamburger icon) on dark backgrounds */
:deep(.navbar-toggler) {
  border-color: rgba(255, 255, 255, 0.2);
}

:deep(.navbar-toggler-icon) {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.7)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* 透明點擊區，選單開啟時鋪滿全螢幕，點擊空白處可關閉選單（不做變暗效果） */
.nav-backdrop {
  position: fixed;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 1039;
}

.nav-backdrop-open {
  opacity: 1;
  visibility: visible;
}

/* 手機／平板：選單改為從選單按鈕位置展開的懸浮玻璃卡片 */
@media (max-width: 991.98px) {
  :deep(.navbar-collapse) {
    display: block !important;
    position: fixed;
    top: 4.7rem;
    right: 1rem;
    left: auto;
    width: min(215px, 72vw);
    height: auto !important;
    max-height: calc(100vh - 6rem);
    margin: 0;
    padding: 0.4rem;
    background: rgba(35, 48, 68, 0.72);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 22px;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1040;

    transform-origin: top right;
    transform: scale(0.85);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.28s cubic-bezier(0.34, 1.4, 0.64, 1),
                opacity 0.2s ease,
                visibility 0.28s;
  }

  :deep(.navbar-collapse.nav-drawer-open) {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  :deep(.navbar-nav) {
    align-items: stretch !important;
  }

  :deep(.nav-item) {
    border-radius: 14px;
    overflow: hidden;
  }

  :deep(.nav-link) {
    font-size: 1.05rem !important;
    padding: 0.6rem 0.8rem !important;
    border-radius: 12px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  :deep(.nav-link:hover) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  /* 目前所在頁面：圓角高亮底色，呼應玻璃選單的設計語彙 */
  :deep(.nav-link.active) {
    background-color: rgba(255, 255, 255, 0.16);
    color: #ffffff !important;
  }

  :deep(.search-icon-item) {
    margin-top: 0.15rem;
  }

  :deep(.search-icon-item .nav-link) {
    display: flex;
  }

  /* 內容若超出高度需要捲動時，隱藏捲軸本身避免右側留白 */
  :deep(.navbar-collapse) {
    scrollbar-width: none;
  }

  :deep(.navbar-collapse::-webkit-scrollbar) {
    width: 0;
    height: 0;
  }
}

/* ===== 全站搜尋 ===== */
.search-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 12vh;
  background-color: rgba(10, 18, 30, 0.55);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s;
}

.search-overlay-open {
  opacity: 1;
  visibility: visible;
}

.search-box {
  width: min(560px, 92vw);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  background: rgba(30, 43, 61, 0.85);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transform: translateY(-12px) scale(0.97);
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.search-overlay-open .search-box {
  transform: translateY(0) scale(1);
}

.search-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.search-input-icon {
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 1.1rem;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.search-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.3rem;
  line-height: 1;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease;
}

.search-close-btn:hover {
  background: rgba(255, 255, 255, 0.18);
}

.search-results {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  overflow-y: auto;
}

.search-result-item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.65rem 0.75rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-result-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.search-result-type {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #d4a373;
  min-width: 3.4rem;
}

.search-result-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.search-result-title {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.98rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-result-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-no-results {
  padding: 1.25rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.95rem;
}
</style>
