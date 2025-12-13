# musa.nyc

**Reliable Systems and Infrastructure Engineering**

This repository hosts the public landing page for Musa.nyc, built with  **[Astro](https://docs.astro.build/en/basics/project-structure/)** for performance and simplicity, with **[Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/astro)** for styling, and deployed via **[GitHub Pages](https://docs.github.com/en/pages/quickstart#creating-your-website)** using **[GitHub Actions](https://github.com/actions/deploy-pages)**.

---

## Architecture Overview
- [Astro](https://docs.astro.build/en/basics/project-structure/) - static site generator
- [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/astro) - CSS styling
- [Markdown](https://daringfireball.net/projects/markdown/) – content format
- [GitHub Pages](https://docs.github.com/en/pages) - public hosting provider
- [GitHub Actions](https://github.com/features/actions) - automated build and deploy

---

## Repository Structure

```
.
├── README.md
├── astro.config.mjs
├── docs/                 # Architecture notes and roadmap
├── package.json
├── package-lock.json
├── public/               # Static assets (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   └── sections/     # Hero, About, Services, Contact
│   ├── content/
│   │   └── notes/        # Markdown blog posts
│   ├── layouts/          # Base layout
│   ├── pages/
│   │   ├── index.astro   # Landing page
│   │   └── notes/        # Notes routing
│   └── styles/
│       └── global.css
├── tailwind.config.cjs
└── tsconfig.json
```

---

## Notes System

Technical notes are authored as Markdown files under:

```
src/content/notes/
```

Each note requires frontmatter:

```md
---
title: Identity at Scale
date: 2024-12-01
summary: Designing identity systems that survive growth and failure.
---
```

Astro Content Collections provide:

* Schema validation
* Typed access to frontmatter
* Static routing

### URLs

* Notes index: `/notes`
* Individual note: `/notes/<slug>`

Example:

```
identity-at-scale.md → /notes/identity-at-scale
```

---

## Development

### Prerequisites
- Node.js (LTS recommended)
- npm (bundled with Node)

``` shell
# Install dependencies
npm install

# Start local dev server
npm run dev

# Site will be available at: 
http://localhost:4321
```

### Production build
``` shell
npm run build

# Build output written to:
dist/
```

---

## Deployment

Deployment is handled via **GitHub Pages** using GitHub Actions.

On push to the default branch:

1. Dependencies are installed
2. Astro builds the site
3. Static files are published

No artifacts (`dist/`, `node_modules/`) are committed to the repository.

---

## Design Principles

* Static by default
* Minimal surface area
* Content-first
* Dark, flat, readable UI
* Predictable structure
* Documentation over tribal knowledge

---

## License

Personal project. All rights reserved unless otherwise noted.
