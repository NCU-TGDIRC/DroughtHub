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
* {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
body {
  font-family: 'Roboto', 'Helvetica Neue', Arial, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  color: #333;
  background-color: #0f1c2d;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
a {
  color: inherit;
  text-decoration: none;
}

/* ===== 平板響應式排版 (≤992px) ===== */
@media (max-width: 992px) {
  .display-1 { font-size: 3.5rem !important; }
  .display-2 { font-size: 2.8rem !important; }
  .display-3 { font-size: 2.3rem !important; }
  .display-4 { font-size: 2rem !important; }
  .display-5 { font-size: 1.7rem !important; }
  .display-6 { font-size: 1.4rem !important; }
}

/* ===== 手機響應式排版 (≤768px) ===== */
@media (max-width: 768px) {
  .display-1 { font-size: 2.5rem !important; }
  .display-2 { font-size: 2rem !important; }
  .display-3 { font-size: 1.75rem !important; }
  .display-4 { font-size: 1.5rem !important; }
  .display-5 { font-size: 1.35rem !important; }
  .display-6 { font-size: 1.15rem !important; }

  .lead { font-size: 1rem !important; }
  .fs-2 { font-size: 1.35rem !important; }
  .fs-4 { font-size: 1rem !important; }
  .fs-5 { font-size: 0.93rem !important; }

  h1, .h1 { font-size: 1.8rem; }
  h2, .h2 { font-size: 1.5rem; }
  h3, .h3 { font-size: 1.25rem; }
  h4, .h4 { font-size: 1.1rem; }
  h5, .h5 { font-size: 1rem; }
}

/* ===== 小手機響應式排版 (≤576px) ===== */
@media (max-width: 576px) {
  body { font-size: 0.9rem; }

  .display-1 { font-size: 2rem !important; }
  .display-2 { font-size: 1.75rem !important; }
  .display-3 { font-size: 1.5rem !important; }
  .display-4 { font-size: 1.3rem !important; }
  .display-5 { font-size: 1.15rem !important; }
  .display-6 { font-size: 1.05rem !important; }

  .lead { font-size: 0.93rem !important; }
  .fs-2 { font-size: 1.2rem !important; }
  .fs-4 { font-size: 0.95rem !important; }

  /* 減少區塊上下間距 */
  .py-5 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
  .mb-5 { margin-bottom: 2rem !important; }
  .mt-5 { margin-top: 2rem !important; }

  /* 卡片內距縮小 */
  .card-body.p-4, .p-4 { padding: 1rem !important; }
}
</style>