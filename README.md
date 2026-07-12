# NCU-TGDIRC Website (國立中央大學台灣與全球乾旱調查研究中心)

This project is the official website for the National Central University Center for Taiwan and Global Drought Investigation Research center(TGI), including information about the center's research and the CESR conference series.

Website: [https://ncu-tgdirc.github.io/DroughtHub/](https://ncu-tgdirc.github.io/DroughtHub/)

## Tech Stack

- [Vue 3](https://vuejs.org/) + [Vue CLI](https://cli.vuejs.org/)
- [Vue Router](https://router.vuejs.org/) (clean URLs via history mode)
- [Vue I18n](https://vue-i18n.intlify.dev/) (Chinese / English)
- [Bootstrap Vue 3](https://cdmoro.github.io/bootstrap-vue-3/)
- Deployment: GitHub Pages + GitHub Actions (automated build & deploy)

## Project Structure

- `public/` — static files copied as-is into the build (`index.html`, `robots.txt`, `sitemap.xml`, etc.)
- `src/` — application source: `views/` (pages), `components/` (shared UI), `router/`, `locales/` (zh-TW / en text content), `assets/` (images, organized by purpose)
- `scripts/prerender.js` — runs automatically after `npm run build` to pre-render each route for search engine indexing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate into the project directory:
    ```sh
    cd NCU-TGDIRC
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## Deployment

Deployment is fully automated: pushing to the `main` branch triggers a GitHub Actions workflow that builds the project and publishes it to the `gh-pages` branch. No manual steps are required.

## Copyright

© 2026 國立中央大學台灣暨全球乾旱調查與研究中心 (TGDIRC), National Central University. All rights reserved.

The source code, content, images, and other materials in this repository are the property of TGDIRC / National Central University. Reproduction, distribution, or reuse without prior permission is not permitted.
