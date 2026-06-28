# ZianAshmiVaysage — Project Context for Claude Code

## What this repo is

A family website for Vaysage KV, his wife Ashmi, and their 3.5-year-old son Zian.
Live domain: **zianashmivaysage.in** (deployed on Vercel)

Primary purpose of the site: Vaysage is actively looking for **remote backend/Python engineering roles** and will share `zianashmivaysage.in/vaysage` as his personal page in job applications.

---

## Repo structure

```
ZianAshmiVaysage/
├── docs/
│   └── Vaysage_KV_Resume_v2.docx   ← source resume (binary, for reference)
├── family-site/                     ← Next.js 16 app (this is what Vercel deploys)
│   ├── app/
│   │   ├── layout.tsx               ← root layout (Geist font, base metadata)
│   │   ├── globals.css              ← Tailwind v4 import + all custom @keyframes
│   │   ├── page.tsx                 ← / → Zian's landing page
│   │   ├── vaysage/
│   │   │   └── page.tsx             ← /vaysage → Vaysage's professional portfolio
│   │   └── ashmi/
│   │       └── page.tsx             ← /ashmi → "Coming Soon" placeholder
│   ├── public/
│   │   └── Vaysage_KV_Resume.docx  ← resume download (served at /Vaysage_KV_Resume.docx)
│   ├── package.json                 ← next 16.2.9, react 19, tailwindcss 4
│   └── next.config.ts
└── CLAUDE.md                        ← this file
```

---

## Tech stack

| Layer     | Choice                          | Why                                                  |
|-----------|---------------------------------|------------------------------------------------------|
| Framework | Next.js 16 (App Router)         | Vercel-native, static generation, SEO metadata API   |
| Language  | TypeScript                      | Type safety                                          |
| Styles    | Tailwind CSS v4                 | No config file needed — just `@import "tailwindcss"` |
| Fonts     | Geist (global), Nunito (Zian)   | Loaded via `next/font/google`                        |
| Deploy    | Vercel                          | Root directory = `family-site/`                      |

> **Tailwind v4 note:** There is no `tailwind.config.ts`. Custom animations are defined as `@keyframes` + plain CSS classes in `app/globals.css`. The `@theme inline` block maps CSS vars to Tailwind tokens.

> **Next.js 16 note:** Uses `PageProps<'/route'>` and `LayoutProps<'/route'>` as global type helpers (no import needed). Params in dynamic routes are `Promise<{slug: string}>` and must be awaited.

---

## Pages

### `/` — Zian's landing page (`app/page.tsx`)
- Animated rainbow gradient background (CSS `rainbow-shift` keyframe)
- Nunito font for a playful, rounded feel
- 12 floating emoji elements (positioned absolutely, `animate-float` CSS class)
- Baby avatar, "Hi! I'm Zian! ✨" gradient heading, "3½ years old 🎂" badge
- Two parent link cards: Dad (`/vaysage`, blue-purple) and Mom (`/ashmi`, pink-rose)

### `/vaysage` — Professional portfolio (`app/vaysage/page.tsx`)
All content is inline in the file (no external data source). Key sections:
- **Fixed nav**: "← Back to Family" + glowing "● Open to Remote" badge + email
- **Hero**: name, title, summary, CTA buttons (Email / LinkedIn / GitHub / Resume download), 4 stat cards
- **About**: blockquote of resume summary
- **Skills**: 8 color-coded categories (Languages, Backend & APIs, Auth & Security, Real-time, Databases, ML/CV, DevOps, Frontend)
- **Experience**: vertical timeline, 6 roles from 2009→present (latest first)
- **Education & Certs**: B.E. ECE from Reva Institute (2005–2009), OCJP
- **Contact CTA**: "Let's build something together" section with email + phone

**SEO**: `metadata` export with title, description, keywords array, Open Graph `profile` type, Twitter card. Also a `<script type="application/ld+json">` with `Person` JSON-LD schema.

### `/ashmi` — Placeholder (`app/ashmi/page.tsx`)
Simple "Coming Soon" page in pink/rose gradient. Needs to be built out when Ashmi's content is ready.

---

## Vaysage's professional details (from resume)

**Vaysage KV**
- Email: kvvaysage@gmail.com | Phone: +91 73539 77190
- LinkedIn: linkedin.com/in/vaysage-kv-44b84a18
- GitHub: github.com/vaysagekv
- Location: Thrissur, Kerala, India | Open to remote (overlaps US time zones)

**Core skills:** Python, FastAPI, Java, Spring Boot, SQL, OAuth2/OIDC (Microsoft Entra ID, BFF pattern), WebSocket, gRPC, WebRTC, PostgreSQL, Docker, async/await, microservices, YOLOv8, ByteTrack, ArcFace, React

**Experience:**
1. Citrus Informatics, Kochi — Project Lead Engineer (Jan 2019–Present) — VisionLog AI computer-vision platform
2. Ridgecone Technologies, Alappuzha — Team Lead (May–Nov 2018) — SaaS for Halo (Spring Boot)
3. Mindcurv TSPL, Kochi — Software Engineer (Oct 2015–Feb 2018) — B2B e-commerce on ATG stack
4. LXI Technologies, Palakkad — Software Engineer (Oct 2012–Oct 2015) — POS system + mobile app
5. Robosoft Technologies, Udupi — Software Engineer (Jul 2010–Jul 2012) — NDTV News Reader (Windows Phone, C#)
6. OnMobile Global, Bangalore — Associate QA Engineer (Aug 2009–Feb 2010) — telecom VAS testing

**Education:** B.E. Electronics & Communication Engineering, Reva Institute, Bangalore (2005–2009)
**Certification:** Oracle Certified Java Professional (OCJP)

---

## Local development

```bash
cd family-site
npm install      # first time only
npm run dev      # → http://localhost:3000
npm run build    # production build check
```

---

## Vercel deployment

In Vercel dashboard:
1. Import `ZianAshmiVaysage` GitHub repo
2. **Root Directory → `family-site`**
3. Framework: Next.js (auto-detected)
4. Add domain `zianashmivaysage.in` in Settings → Domains

Or via CLI:
```bash
cd family-site
npx vercel --prod
```

---

## What's left / future work

- [ ] Build out Ashmi's page at `/ashmi` (content TBD)
- [ ] Add a profile photo for Vaysage to the hero section (put in `family-site/public/`)
- [ ] Consider adding a `/ashmi` page once Ashmi's content is ready
- [ ] Optionally convert resume to PDF and replace the .docx download link
- [ ] Add Google Analytics or Vercel Analytics to track recruiter visits
