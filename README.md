# 🌊 SEA - Website

Our static landing page features information for prospective members to learn about our organaization and enables members to see what events are currently happening. The website is written in [Astro](https://astro.build/), a lightweight static site generator to allow anyone to quickly contribute to our codebase with little prerequisite knowledge of a particular technology.

## ⭐ Getting Started

Download [Visual Studio Code](https://code.visualstudio.com/download) or any code editor of choice. It's recommended to use VS code for ease of use and [Astro language support](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

Download [Node & NPM](https://nodejs.org/en/download), NPM comes bundled with Node.

### Local Development

To start the local development server, run:

```
npm run dev
```

Any changes you make to files will automatically update on the server and refresh the page.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Made with ❤️ by SEA
