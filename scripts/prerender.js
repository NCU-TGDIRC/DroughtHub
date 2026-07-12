// Runs after `vue-cli-service build`. Renders each client-side route with a
// real browser and writes the resulting HTML to disk, so GitHub Pages can
// serve a genuine 200 response with full content for every route instead of
// relying on the JS-based 404.html fallback (which Google's indexer treats
// as a real 404 and refuses to index).
const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const BASE_PATH = '/DroughtHub';
const PORT = 5050;

const ROUTES = [
  '/home',
  '/en',
  '/research',
  '/team',
  '/research-data',
  '/conferences',
  '/cesr2026',
  '/icqab',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer() {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (!urlPath.startsWith(BASE_PATH)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const relativePath = urlPath.slice(BASE_PATH.length) || '/';
    let filePath = path.join(DIST_DIR, relativePath);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `http://localhost:${PORT}${BASE_PATH}${route}`;
  await page.goto(url, { waitUntil: 'networkidle0' });

  // #app is empty until Vue mounts and the router resolves the route;
  // wait for real content so we don't capture a blank shell.
  await page.waitForFunction(
    () => {
      const app = document.querySelector('#app');
      return app && app.children.length > 0;
    },
    { timeout: 10000 }
  );

  const html = await page.content();
  await page.close();

  const outDir = path.join(DIST_DIR, route.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered ${route} -> ${path.relative(DIST_DIR, outDir)}/index.html`);
}

async function main() {
  const server = await startServer();
  // --no-sandbox is required in CI containers (e.g. GitHub Actions) where
  // Chrome's sandbox can't get the Linux user namespace permissions it wants.
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      await prerenderRoute(browser, route);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
