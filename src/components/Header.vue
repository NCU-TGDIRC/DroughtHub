<template>
  <header class="site-header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="網站 Logo">
        </router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/research">研究領域</router-link></li>
          <li><router-link to="/team">團隊成員</router-link></li>
          <li><router-link to="/reports">成果報導</router-link></li>
          <li><router-link to="/activities">活動</router-link></li>
          <li><router-link to="/icqab">2025CESR</router-link></li>
          <li><router-link to="/english">ENGLISH</router-link></li>
        </ul>
      </nav>
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.site-header {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  padding: 15px 30px;
}
.header-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
}
.logo {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.logo img {
  height: 50px;
  display: block;
}
nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
nav li {
  margin-left: 30px;
}
nav a, nav .router-link-exact-active, nav .router-link-active {
  text-decoration: none;
  color: #e0e0e0;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;
  display: flex;
  align-items: center;
}
nav a:hover, nav .router-link-active:hover {
  color: #ffffff;
}
nav .router-link-exact-active {
  color: #ffffff;
  font-weight: 700;
}

/* [修改] 移除不再需要的 .arrow-down 樣式 */

.search-icon {
    color: #e0e0e0;
    cursor: pointer;
    transition: color 0.3s;
    margin-left: 20px;
}
.search-icon:hover {
    color: #ffffff;
}
</style>