# LIVA Design — Deployment Guide

Tento dokument je pro kamoše, který dělá technický deploy webu Liva Design.

---

## Přehled

- **Statický web**: HTML + vanilla CSS + vanilla JS, žádný build step, žádný npm
- **Hosting**: Vercel (free tier stačí)
- **Doména**: livadesign.eu (registrovaná, Vašek dodá DNS přístup)
- **Formulář**: Vercel serverless function (`api/contact.js`) + Resend API pro posílání emailů
- **Repo**: nové, soukromé GitHub repo

---

## Co je hotové v projektu (Vašek udělal)

### Web — stránky
- `index.html` — hlavní stránka (hero, services, projects, about, founders, contact)
- `404.html` — custom 404 stránka se stylem webu
- `coming-soon.html` — "BAF!" placeholder pro portfolio sekci
- `privacy-policy.html` — GDPR privacy policy
- `terms.html` — obchodní podmínky

### Styly a skripty
- `assets/css/style.css` — jeden CSS soubor (~2100 řádků), desktop-first
- `assets/js/script.js` — vanilla JS (navigace, animace, formulář client-side validace)
- **Pozor**: Formulář má aktuálně fake success handler (neposílá data na server). Tvůj Claude Code to nahradí reálným fetch voláním na `/api/contact`.

### Assets
- `assets/images/og-image.jpg` — OG obrázek pro sociální sítě (1200×630px)
- `assets/images/logos/` — 4 SVG loga projektů (cesky-pekar, jagermeister, nik-tendo, deti-raje)
- `assets/images/team/` — fotky zakladatelů ve webp + jpg

### Favicons (všechny formáty)
- `favicon.ico` — v rootu (fallback)
- `assets/favicons/favicon.svg`
- `assets/favicons/favicon-96x96.png`
- `assets/favicons/apple-touch-icon.png`
- `assets/favicons/android-192x192.png` + `android-512x512.png`
- `site.webmanifest` — PWA manifest

### SEO & technical
- `robots.txt` — povoluje vše pro crawlery
- `sitemap.xml` — seznam stránek pro Google
- `vercel.json` — Vercel konfigurace: clean URLs, security headers (HSTS, CSP, X-Frame-Options...), cache pravidla, route pro `/api/contact`
- `.htaccess` — Apache fallback (Vercel ignoruje, ale ponech ho)

### Accessibility & security
- Skip link, `<main id="main-content">` na všech stránkách
- `aria-expanded` na hamburger menu, ESC handler
- Focus visible stavy (klávesová navigace)
- `prefers-reduced-motion` support (CSS + JS)
- Formulář s inline error stavy a honeypot polem
- Content Security Policy v HTML meta tagu každé stránky
- Security headers v `vercel.json`

---

## Co musíš udělat TY

### Část A — Git + GitHub

1. V rootu projektu spusť:
   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "feat: initial project — static site ready for Vercel"
   ```

2. Vytvoř nové **soukromé** repo na github.com (bez README, bez .gitignore)

3. Napoj a pushni:
   ```bash
   git remote add origin https://github.com/TVOJE-USERNAME/liva-website.git
   git push -u origin main
   ```

---

### Část B — Serverless function pro formulář

Projekt obsahuje `CLAUDE_HANDOFF_PROMPT.md` — otevři ho ve svém Claude Code, zkopíruj celý prompt (od START do END markeru) a pošli ho.

Claude Code za tebe vytvoří:
- `api/contact.js` — Vercel serverless function
- `package.json` — závislosti (resend + zod)

Souhrn co function dělá:
- Přijme POST na `/api/contact`, validuje data pomocí Zod
- Rate limiting: 3 požadavky / IP / hodinu
- Honeypot: pokud je `hp_website` vyplněné, tiše zahodí
- Routing emailů podle kategorie formuláře:
  - Brand Identity, UI/UX, Web Design, Design Systems → `digital@livadesign.eu`
  - Print, Signage, Merch, 3D → `production@livadesign.eu`
  - Other, prázdná volba → `hello@livadesign.eu`
- Posílá přes Resend API s HTML šablonou

---

### Část C — Vercel napojení

1. Jdi na [vercel.com](https://vercel.com) → **Add New** → **Project**
2. Klikni **Import Git Repository** → vyber repo `liva-website`
3. Nastav:
   - **Framework Preset**: Other
   - **Build Command**: (nechej prázdné)
   - **Output Directory**: (nechej prázdné)
   - **Root Directory**: `./`
4. Ještě neklikej Deploy — nejdřív nastav Environment Variables (Část E)
5. Pak klikni **Deploy**

---

### Část D — Resend setup

1. Založ účet na [resend.com](https://resend.com) (free tier: 3000 emailů/měsíc)
2. Dashboard → **API Keys** → **Create API Key** → zkopíruj `re_xxx...`
3. Dashboard → **Domains** → **Add Domain** → zadej `livadesign.eu`
4. Resend ti ukáže DNS záznamy — přidej je u registrátora domény:
   - **DKIM** (CNAME nebo TXT) — autentizace odesílatele
   - **SPF** (TXT) — ověř, že nezpůsobí konflikt s existujícím SPF pro email hosting
   - **MX** — přidávej POUZE pokud ještě neexistuje (nemaž existující MX pro email schránky!)
5. Počkej na verification — bývá 5 minut až 24 hodin

> **Tip**: Stav ověření vidíš na Resend Dashboard → Domains.

---

### Část E — Environment variables ve Vercel

Vercel → Project → **Settings** → **Environment Variables** → přidej:

| Name | Value | Environments |
|------|-------|--------------|
| `RESEND_API_KEY` | `re_xxx...` | Production, Preview, Development |
| `EMAIL_FROM` | `noreply@livadesign.eu` | Production, Preview, Development |

Volitelně (pokud chceš jiné cílové adresy než default):

| Name | Default hodnota |
|------|----------------|
| `EMAIL_DIGITAL` | `digital@livadesign.eu` |
| `EMAIL_PRODUCTION` | `production@livadesign.eu` |
| `EMAIL_HELLO` | `hello@livadesign.eu` |

Po přidání proměnných: Vercel → **Deployments** → tři tečky u posledního deploye → **Redeploy**

---

### Část F — Email schránky

U svého email providera (Google Workspace, Zoho Mail, Wedos Mail, ...) vytvoř tyto schránky:

| Adresa | Pro koho |
|--------|----------|
| `hello@livadesign.eu` | Obecný kontakt, dotazy |
| `libor@livadesign.eu` | Libor |
| `vasek@livadesign.eu` | Vašek |
| `digital@livadesign.eu` | Poptávky — digital projekty |
| `production@livadesign.eu` | Poptávky — produkce / tisk |

Plus odesílací adresa pro formulář:
- `noreply@livadesign.eu` — nemusí být plná schránka, musí být jen verified v Resend (Část D)

> **DNS pozor**: Email hosting vyžaduje vlastní MX záznamy. Pokud je Resend přidává taky, upřesni u Resend že potřebuješ jen DKIM + SPF, bez MX. MX záznamy nechej na email hosting provideru.

---

### Část G — DNS pro doménu livadesign.eu (shrnutí)

U registrátora domény / DNS provideru budeš přidávat záznamy ze 2 zdrojů:

**Z Vercel:**
- A záznam nebo CNAME pro `livadesign.eu` → Vercel server (Vercel ti to ukáže po napojení domény)
- Případně www CNAME

**Z Resend:**
- DKIM záznam (CNAME)
- SPF (TXT) — přidej do existujícího SPF záznamu, nemaž

**Z email hosting providera:**
- MX záznamy

---

### Část H — Test po deploymentu

Projdi **TESTING.md** v projektu. Obsahuje kompletní checklist co otestovat.

---

## Troubleshooting

### Formulář vrací 503
- `RESEND_API_KEY` není nastaven ve Vercel Environment Variables
- Doména `livadesign.eu` není verified v Resend
- Překročen free tier limit Resend (3000 emailů/měsíc)

### Email nedorazí
- Resend Dashboard → **Emails** → zkontroluj Delivery status
- Zkontroluj spam složku u cílové schránky
- DNS záznamy (DKIM, SPF) nejsou verified

### Formulář vrací 429
- In-memory rate limiter: 3 požadavky / IP / hodinu
- Pro reset: Vercel → Deployments → Redeploy (resetuje in-memory stav)

### Web se nenačte na vlastní doméně
- DNS propagace může trvat až 48 hodin
- Ověř v Vercel → Project → Domains jestli je doména verified

### `cleanUrls` nefunguje (url `/privacy-policy` místo `/privacy-policy.html`)
- Toto řeší `vercel.json` automaticky — je součástí projektu

---

## Co Vašek dodá

- Aktuální verzi projektu (ZIP nebo složka)
- Přístup k Vercel účtu (nebo založ nový na jeho email)
- Přístup k DNS záznamu domény livadesign.eu
- Potvrzení email schránek (Část F)
