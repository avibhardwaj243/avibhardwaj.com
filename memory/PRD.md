# Avi Bhardwaj — Personal Portfolio (avibhardwaj.com)

## Problem Statement
> "Hi i am Avi Bhardwaj and i have a domain for myself https://avibhardwaj.com/ So i want website for myself, Please create, also it should be mobile responsive and light weight and professional. Share few designs first."

## User & Persona
- **Owner**: Avi Bhardwaj
- **Role**: Engineering Manager @ PaisaBazaar Marketing and Consulting Pvt. Ltd.
- **Experience**: 16+ years in FinTech (PaisaBazaar 11 yrs, OTS Solutions, Vinove, Techpreneurs, TechnoApex)
- **Location**: Gurugram, India
- **Contact**: avibhardwaj243@gmail.com · https://www.linkedin.com/in/avibhardwaj243
- **Audience**: Recruiters, hiring managers, fellow engineering leaders, prospective collaborators

## Core Requirements (static)
- Light, professional aesthetic — Swiss / high-contrast
- Mobile responsive, lightweight, fast loading
- Sections: Hero, About, Experience timeline, Skills, Projects, Writing, Contact, Footer
- Contact form that emails Avi at avibhardwaj243@gmail.com
- LinkedIn link prominent, email visible
- Stack: React 19 (CRA + craco) + FastAPI + MongoDB + Resend

## Architecture
- **Frontend** (`/app/frontend`) — React SPA, Tailwind, shadcn-ready, sonner toasts, lucide-react icons. Fonts: Outfit (headings) + IBM Plex Sans (body) + JetBrains Mono.
- **Backend** (`/app/backend/server.py`) — FastAPI with `/api` prefix. Endpoints:
  - `GET /api/health` — service + Resend config status
  - `POST /api/contact` — validates payload, persists to MongoDB `contact_messages`, sends email via Resend if `RESEND_API_KEY` is set (uses `asyncio.to_thread`)
  - `GET /api/contact` — list all submissions (admin)
- **DB**: MongoDB collection `contact_messages` (uuid id + iso timestamps, no raw ObjectIds returned)
- **Email**: Resend SDK — gracefully degrades (saves + returns `delivered:false`) when key is absent

## Implemented (Dec 2025)
- Full single-page portfolio with sticky blurred nav, mobile hamburger menu
- Hero with name, role, stats (16+ yrs / 11 yrs / 40+ engineers / 12+ systems), grid background, professional photo placeholder
- About section (two-column editorial layout)
- Experience: grouped timeline across 5 companies / 10 roles
- Skills: 6-card bento (Leadership, Architecture, Data/Infra, Frontend, FinTech, Practices)
- Projects: 3 placeholder cards with stack chips
- Writing: 3-post placeholder list (editorial divider style)
- Contact form with validation, loading state, success banner, toast notifications
- Footer with email + LinkedIn icons, copyright
- Backend: contact API + persistence + Resend wiring (key pending)
- 100% testing_agent_v3 pass (7/7 backend pytest, all frontend flows desktop + mobile 390×844)
- Patched craco config so dev server starts under webpack-dev-server v5 (stripped deprecated `onAfterSetupMiddleware`, `https`)

## Backlog (P0 / P1 / P2)
- **P0** — Provide `RESEND_API_KEY` and verify a live email is delivered to avibhardwaj243@gmail.com
- **P0** — Replace placeholder hero photo with Avi's actual headshot (400×400+ JPG/PNG)
- **P1** — Replace placeholder project copy + images with real projects
- **P1** — Write the 3 blog posts (or wire to a CMS like Notion/Sanity)
- **P1** — Add real resume PDF and wire to a download button (currently the CTA points to LinkedIn)
- **P2** — Verify a sender domain on Resend (avibhardwaj.com) so emails come from `hello@avibhardwaj.com`
- **P2** — Add SEO meta + OpenGraph image, sitemap.xml, robots.txt
- **P2** — Light analytics (Plausible / Vercel Analytics)
- **P2** — Deploy and connect avibhardwaj.com domain

## Test Credentials
None — no authentication in this app.
