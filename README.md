# NCU-TGDIRC Website (國立中央大學台灣與全球乾旱調查研究中心)

This project is the official website for the "NCU Center for Taiwan and Global Drought Research (CTGDR)", built with Vue.js and Vue CLI.

## Project Structure

The project follows a standard Vue CLI structure:

```
.
├── public/              # Static assets and the main HTML template
├── src/                 # Main application source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable Vue components
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page-level components
│   ├── App.vue          # Root application component
│   └── main.js          # Application entry point
├── package.json         # Project metadata and dependencies
├── vue.config.js        # Vue CLI configuration for deployment
├── deploy.sh            # Deployment script for GitHub Pages
└── README.md            # This file
```

-   **`public/`**: Contains the base `index.html` and other static assets that are copied directly to the build output.
-   **`src/`**: The main application source code.
-   **`package.json`**: Lists dependencies and defines scripts for running (`npm run serve`) and building (`npm run build`) the project.
-   **`vue.config.js`**: Configures the `publicPath` which is necessary for deploying the application to a subpath on a domain (e.g., `https://<user>.github.io/DroughtHub/`).
-   **`deploy.sh`**: A shell script that automates the process of building the project and deploying it to the `gh-pages` branch of the `NCU-TGDIRC/DroughtHub` GitHub repository.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm)
-   [Git](https://git-scm.com/)

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

## Deployment to GitHub Pages

The project includes a `deploy.sh` script to simplify deployment. This script will:
1.  Build the project for production.
2.  Create a new git repository inside the `dist` folder.
3.  Push the contents of the `dist` folder to the `gh-pages` branch of the `https://github.com/NCU-TGDIRC/DroughtHub.git` repository.

To deploy, simply run the script from the project root:

```sh
sh deploy.sh
```
