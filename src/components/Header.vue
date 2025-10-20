<template>
  <b-navbar toggleable="lg" class="site-header">
    <b-container fluid>
      

      <!-- 手機版的漢堡選單按鈕 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- 導航項目，會被漢堡選單包裹 -->
      <b-collapse id="nav-collapse" is-nav>
        <!-- 加上 'ms-auto' class 將導航項目推到右邊 -->
         <!-- Logo 品牌 -->
      <b-navbar-brand to="/home">
        <img src="@/assets/logo.png" alt="網站 Logo" class="logo-img">
      </b-navbar-brand>
        <b-navbar-nav class="ms-auto mb-2 mb-lg-0 align-items-center">
          <b-nav-item to="/home" :active="$route.path === '/home'">首頁</b-nav-item>
          <b-nav-item to="/research">研究領域</b-nav-item>
          <b-nav-item to="/team">團隊成員</b-nav-item>
          <b-nav-item to="/reports">成果報導</b-nav-item>
          <b-nav-item to="/icqab">2025CESR</b-nav-item>
          <b-nav-item to="/english">ENGLISH</b-nav-item>
          <b-nav-item class="search-icon-item ms-lg-3">
            <div class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.site-header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1030; /* Bootstrap's default z-index for navbars */
  padding-top: 0;
  padding-bottom: 0.5rem;
}

.logo-img {
  height: 80px; /* Slightly smaller for better navbar integration */
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

/* When the menu is collapsed, give it a dark background */
@media (max-width: 991.98px) {
  :deep(.navbar-collapse) {
    background-color: rgba(26, 42, 58, 0.95); /* Semi-transparent dark blue */
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 0.5rem;
  }
}
</style>