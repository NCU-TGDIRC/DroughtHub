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

/* =====================================================================
   全站統一文字級距 (Site-wide typography scale)
   標題 (heading) 一律大於內文 (body)，桌機／平板／手機各自固定一組數值。
   使用 CSS 變數集中管理，任何頁面的標題／內文 class 都應該參照這裡的值，
   而不是各自發明新的字級，才能讓全站文字大小維持一致。
   ===================================================================== */
:root {
  /* 桌機 (預設) */
  --fs-h1: 2.75rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.85rem;
  --fs-h4: 1.5rem;
  --fs-h5: 1.25rem;
  --fs-h6: 1.1rem;
  --fs-body: 1rem;
}

@media (max-width: 768px) {
  :root {
    /* 平板 */
    --fs-h1: 2.1rem;
    --fs-h2: 1.75rem;
    --fs-h3: 1.5rem;
    --fs-h4: 1.3rem;
    --fs-h5: 1.15rem;
    --fs-h6: 1.05rem;
    --fs-body: 0.95rem;
  }
}

@media (max-width: 576px) {
  :root {
    /* 手機 */
    --fs-h1: 1.75rem;
    --fs-h2: 1.5rem;
    --fs-h3: 1.3rem;
    --fs-h4: 1.15rem;
    --fs-h5: 1.05rem;
    --fs-h6: 1rem;
    --fs-body: 0.9rem;
  }
}

h1, .h1 { font-size: var(--fs-h1) !important; }
h2, .h2 { font-size: var(--fs-h2) !important; }
h3, .h3 { font-size: var(--fs-h3) !important; }
h4, .h4 { font-size: var(--fs-h4) !important; }
h5, .h5 { font-size: var(--fs-h5) !important; }
h6, .h6 { font-size: var(--fs-h6) !important; }

body, p, .fs-4, .fs-5, .lead {
  font-size: var(--fs-body) !important;
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

  .fs-2 { font-size: 1.35rem !important; }
}

/* ===== 小手機響應式排版 (≤576px) ===== */
@media (max-width: 576px) {
  .display-1 { font-size: 2rem !important; }
  .display-2 { font-size: 1.75rem !important; }
  .display-3 { font-size: 1.5rem !important; }
  .display-4 { font-size: 1.3rem !important; }
  .display-5 { font-size: 1.15rem !important; }
  .display-6 { font-size: 1.05rem !important; }

  .fs-2 { font-size: 1.2rem !important; }

  /* 減少區塊上下間距 */
  .py-5 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
  .mb-5 { margin-bottom: 2rem !important; }
  .mt-5 { margin-top: 2rem !important; }

  /* 卡片內距縮小 */
  .card-body.p-4, .p-4 { padding: 1rem !important; }
}
</style>