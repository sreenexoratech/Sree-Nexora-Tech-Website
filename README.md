# Sree Nexora Tech Pvt Ltd — Enterprise Corporate Website

Official modern, responsive, and performance-optimized corporate web platform for **Sree Nexora Tech Pvt Ltd** — IT Services, Custom Software Development, Enterprise SaaS, Digital Marketing, and Business Automation company headquartered in Tamil Nadu, India.

---

## 🚀 Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 19 + TypeScript 5 |
| **Build Tool** | Vite 8 (Hot Module Replacement, Rollup Bundling) |
| **Styling & Design System** | Tailwind CSS v4 (`@tailwindcss/vite`) + PostCSS |
| **Routing** | React Router DOM v7 (Route-level Code Splitting via `React.lazy`) |
| **Iconography** | Lucide React + Handcrafted Inline Brand SVGs |
| **SEO & Schemas** | Custom Dynamic Head Manager + JSON-LD (`Organization`, `LocalBusiness`, `Service`, `SoftwareApplication`, `BreadcrumbList`) |

---

## 📁 Complete Project Structure

```
e:\Nexora\
├── public/
│   ├── .htaccess              # Hostinger / Apache SPA rewrite & caching directives
│   ├── brand-logo.svg         # Single source of truth vector logo & wordmark
│   ├── favicon.svg            # Hexagonal tech favicon
│   ├── robots.txt             # Search engine crawl directives
│   └── sitemap.xml            # Canonical XML sitemap (24 URLs)
│
├── src/
│   ├── components/
│   │   ├── brand/
│   │   │   └── Logo.tsx       # Replaceable brand emblem & wordmark component
│   │   ├── cards/
│   │   │   ├── ProductCard.tsx# SaaS product card with interactive mockup & demo actions
│   │   │   └── ServiceCard.tsx# Service capability card with benefits & tech pills
│   │   ├── common/
│   │   │   ├── ContactCTA.tsx # Global conversion banner with direct booking triggers
│   │   │   ├── GoogleMapEmbed.tsx # Lazy-loaded responsive Google Maps embed
│   │   │   ├── PageLoader.tsx # Zero-CLS skeleton loader for lazy-loaded routes
│   │   │   ├── SEOHead.tsx    # Dynamic title, Open Graph, Twitter cards, and JSON-LD
│   │   │   ├── SocialLinks.tsx# SVG brand icons (Instagram, Facebook, LinkedIn, YouTube, WhatsApp)
│   │   │   └── WhatsAppButton.tsx # Floating speed dial with pre-filled inquiry text
│   │   ├── layout/
│   │   │   ├── Footer.tsx     # 4-column enterprise footer with legal & WhatsApp links
│   │   │   └── Navbar.tsx     # Sticky glassmorphic navbar with mega-menu & mobile drawer
│   │   ├── modals/
│   │   │   └── DemoRequestModal.tsx # Interactive live demo booking modal
│   │   └── ui/
│   │       ├── Button.tsx     # Polymorphic button (6 variants, 3 sizes)
│   │       └── SectionHeading.tsx # Badge pill and gradient headline formatter
│   │
│   ├── data/
│   │   ├── company.ts         # Centralized configuration (Contacts, Socials, Maps, Booking)
│   │   ├── navigation.ts      # Primary navigation tree & service sub-routes
│   │   ├── products.ts        # Centralized products catalog (6 enterprise software suites)
│   │   └── services.ts        # Centralized services dataset (10 IT service verticals)
│   │
│   ├── layouts/
│   │   └── RootLayout.tsx     # Scaffold layout with Navbar, Outlet, Footer & WhatsApp FAB
│   │
│   ├── lib/
│   │   ├── schema.ts          # JSON-LD structured schema generators
│   │   └── utils.ts           # Tailwind className merger (clsx + tailwind-merge)
│   │
│   ├── pages/
│   │   ├── AboutPage.tsx      # Corporate story, mission, vision, values, 6-stage lifecycle
│   │   ├── BookCallPage.tsx   # 30-min strategy call scheduler with WhatsApp fallback
│   │   ├── ContactPage.tsx    # 6-field validated inquiry form, Google Map & details
│   │   ├── HomePage.tsx       # Hero, services grid, product showcase, and metrics
│   │   ├── PrivacyPolicyPage.tsx # Official Privacy Policy compliant with Indian standards
│   │   ├── ProductDetailPage.tsx # Deep-dive product specification & interactive preview
│   │   ├── ProductsPage.tsx   # Filterable software products showcase
│   │   ├── ServiceDetailPage.tsx # Dedicated service architecture & deliverables page
│   │   ├── ServicesPage.tsx   # 10-service catalog with category filtering & live search
│   │   └── TermsPage.tsx      # Official Terms and Conditions & IP handover rules
│   │
│   ├── types/
│   │   └── index.ts           # Central TypeScript interfaces and data models
│   │
│   ├── App.tsx                # Client router with React.lazy code splitting
│   ├── index.css              # Design tokens, glassmorphism utilities & scrollbars
│   └── main.tsx               # Application DOM entry point
│
├── .env.example               # Documented environment variables template
├── index.html                 # HTML shell with Google Fonts & preconnects
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript compiler options
├── vercel.json                # Vercel deployment rewrites and caching headers
└── vite.config.ts             # Vite bundler & Tailwind v4 plugin configuration
```

---

## 🛠️ Commands & Local Development

### 1. Installation
Install all project dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 3. Type Checking
Perform strict TypeScript verification across all components:
```bash
npx tsc --noEmit
```

### 4. Production Build
Compile and bundle the production assets into the `dist/` directory:
```bash
npm run build
```

### 5. Local Production Preview
Preview the production build locally:
```bash
npm run preview
```
Access the preview server at `http://localhost:4173/`.

---

## ⚙️ Environment Variables Documentation

Copy `.env.example` to `.env` to configure your production settings:
```bash
cp .env.example .env
```

| Variable | Description | Default Fallback |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical domain for SEO and XML sitemap | `https://sreenexoratech.com` |
| `VITE_COMPANY_EMAIL` | Official contact and inquiry email | `contact@sreenexoratech.com` |
| `VITE_COMPANY_SALES_EMAIL` | Sales and quotation inquiry email | `sales@sreenexoratech.com` |
| `VITE_COMPANY_PHONE` | Direct office telephone number | `+919876543210` |
| `VITE_COMPANY_DISPLAY_PHONE` | Formatted phone number displayed in UI | `+91 98765 43210` |
| `VITE_COMPANY_WHATSAPP` | WhatsApp phone number without special characters | `919876543210` |
| `VITE_COMPANY_WHATSAPP_DISPLAY` | Formatted WhatsApp number displayed in UI | `+91 98765 43210` |
| `VITE_COMPANY_ADDRESS` | Verified physical business address | `Tamil Nadu, India` |
| `VITE_GOOGLE_MAPS_EMBED_URL` | Google Maps iframe embed URL | Tamil Nadu regional embed |
| `VITE_GOOGLE_MAPS_DIRECTIONS_URL` | Turn-by-turn Google Maps directions URL | Tamil Nadu navigation |
| `VITE_BOOKING_CALENDAR_URL` | Calendly or Cal.com appointment URL | Auto-falls back to WhatsApp |
| `VITE_CONTACT_API_URL` | Backend REST / Web3Forms / Resend API endpoint | Documented placeholder |
| `VITE_SOCIAL_INSTAGRAM` | Official Instagram profile URL | Nexora Tech Instagram |
| `VITE_SOCIAL_FACEBOOK` | Official Facebook page URL | Nexora Tech Facebook |
| `VITE_SOCIAL_LINKEDIN` | Official LinkedIn company page URL | Nexora Tech LinkedIn |
| `VITE_SOCIAL_YOUTUBE` | Official YouTube channel URL | Nexora Tech YouTube |

---

## 🌐 Deployment Instructions

### Option A: Deploy to Vercel (Recommended)

1. **Via Vercel Git Integration:**
   - Push your codebase to GitHub, GitLab, or Bitbucket.
   - Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
   - Import your repository.
   - Vercel automatically detects **Vite** and uses:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Under **Environment Variables**, paste the keys from `.env.example`.
   - Click **Deploy**.
   - The included `vercel.json` automatically configures SPA rewrites so direct links (e.g. `/services/billing-software`) load without 404 errors.

2. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   vercel --prod
   ```

---

### Option B: Deploy to Hostinger (or any Apache/cPanel Host)

1. **Build the Project:**
   ```bash
   npm run build
   ```
2. **Upload Assets:**
   - Log into your Hostinger hPanel.
   - Navigate to **File Manager** -> `public_html`.
   - Upload all files and folders located inside the `dist/` folder (including `index.html`, `assets/`, `brand-logo.svg`, `sitemap.xml`, `robots.txt`, and `.htaccess`).
3. **Verify SPA Routing:**
   - The included `public/.htaccess` file guarantees that direct URL navigation (e.g., `/products/erp-software`) works seamlessly via Apache `mod_rewrite`.
4. **SSL / HTTPS:**
   - Ensure **Force HTTPS** is toggled ON under Hostinger's SSL section.

---

## 🔒 Security & Code Integrity
- **Zero Fabricated Content**: Strictly respects enterprise integrity with zero invented awards, certifications, or statistics.
- **Honeypot Spam Protection**: Form submissions include hidden bot-detection traps and timestamp validation.
- **Client Code Ownership**: Handover ready for immediate commercial production.
# Sree-Nexora-Tech-Website
