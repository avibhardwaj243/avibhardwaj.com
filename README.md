# Avi Bhardwaj — Personal Portfolio (Vite)

Static React site for **[avibhardwaj.com](https://avibhardwaj.com)** — Engineering Manager @ PaisaBazaar with 16+ years in FinTech.

## Stack

- **React 18** + **Vite** + Tailwind CSS
- **Web3Forms** for the contact form (no backend required)
- Fonts: Outfit + IBM Plex Sans + JetBrains Mono
- `HashRouter` so the site works on any static host

## Quick start

```bash
npm install
npm run dev          # opens http://localhost:3000
```

## Environment variables

`.env` already contains a working Web3Forms key. To use your own, edit:

```
VITE_WEB3FORMS_KEY=your-key-here
```

Get a free key at <https://web3forms.com>.

## Build

```bash
npm run build        # outputs to dist/
npm run preview      # serves the built site locally
```

## Deploy to GitHub Pages

```bash
npm run deploy       # builds + pushes dist/ to gh-pages branch
```

Then in GitHub repo → Settings → Pages → Source = `gh-pages` branch.

### Custom domain (avibhardwaj.com)

`public/CNAME` already contains `avibhardwaj.com`. At your registrar, set apex A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
And CNAME `www → <your-github-username>.github.io`.

## Editing content

- Copy: `src/data/content.js` (bio, experience, skills, projects, writing)
- Photo: replace `public/avi-bhardwaj.jpg` (square JPG/PNG, ≥ 400×400)
- Resume: replace `public/avi-bhardwaj-resume.pdf`

© Avi Bhardwaj. All rights reserved.
