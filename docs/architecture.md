# Architecture Overview

## Overview
The Musa.nyc site will be built on **[Astro](https://docs.astro.build/en/basics/project-structure/)** for performance and simplicity, with **[Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/astro)** for styling.

### Structure
- `/docs` - Documentation and project notes
- `/public` - non-code, unprocessed assets
- `/src` - project source code
- `package.json` - project manifest
- `astro.config.mjs` - Astro configuration file
- `content.config.mjs` - Content collection configuration file
- `tsconfig.json` - TypeScript configuration file

```text
musa.nyc/
.
├── README.md
├── astro.config.mjs
├── content.config.ts
├── docs/
│   ├── architecture.md
│   ├── roadmap.md
│   ├── ...
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── README.md
├── src
├── components
│         ├── layout
│         │         ├── Footer.astro
│         │         └── Navbar.astro
│         └── sections
│             ├── About.astro
│             ├── Contact.astro
│             ├── Hero.astro
│             └── Services.astro
├── layouts
│         ├── BaseLayout.astro
│         └── index.astro
└── styles
    └── global.css
└── tsconfig.json
```

