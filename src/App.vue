<template>
  <div id="app">
    <Header />
    <main>
      <!-- [關鍵] 這裡是路由的出口，會根據當前網址顯示對應的 View 組件 -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* 全域樣式 (維持不變) */
body {
  font-family: 'Helvetica Neue', Arial, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  margin: 0;
  color: #333;
  /* 根據您最新的設計，背景可能是深色的 */
  background-color: #0f1c2d;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>