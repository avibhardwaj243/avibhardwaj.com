# Avi Bhardwaj — Personal Portfolio

Static React site for **[avibhardwaj.com](https://avibhardwaj.com)** — Engineering Manager @ PaisaBazaar with 16+ years in FinTech.

## Stack

- React 19 + Tailwind CSS + shadcn/ui
- **Web3Forms** for the contact form (no backend required)
- Fonts: Outfit + IBM Plex Sans + JetBrains Mono
- `HashRouter` so the site works on any static host

## Local development

```bash
npm install
npm start          # http://localhost:3000
```

## Environment variables

Create `frontend/.env`:

```bash
REACT_APP_WEB3FORMS_KEY=your-web3forms-access-key
```

Free Web3Forms key (no signup) at <https://web3forms.com>.

## Build

```bash
npm run build
```

Outputs a static site to `build/` — host on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3). No Node runtime required.

## Deploy to GitHub Pages

```bash
# one-time
npm install --save-dev gh-pages

# every deploy
npm run deploy
```

Builds the site and pushes `build/` to the `gh-pages` branch.

### Custom domain (avibhardwaj.com)

1. `public/CNAME` already contains `avibhardwaj.com`.
2. GitHub repo → Settings → Pages → Source = `gh-pages` branch.
3. DNS A records for apex `avibhardwaj.com`:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   CNAME for `www` → `<your-github-username>.github.io`.
4. Wait ~10 min for HTTPS.

## Editing content

- Copy: `src/data/content.js` (bio, experience, skills, projects, writing)
- Photo: replace `public/avi-bhardwaj.jpg` (square JPG/PNG, ≥ 400×400, ideally < 200 KB)
- Resume: replace `public/avi-bhardwaj-resume.pdf`

© Avi Bhardwaj. All rights reserved.
