---
name: liva-prelaunch
description: Použij tento skill při přípravě webu na deployment/hosting, kontrole před spuštěním, auditu co chybí před live verzí, nebo když uživatel zmíní "hosting", "deploy", "live", "launch", "spuštění", "publikovat". Použij i pro ad-hoc kontroly SEO, meta tagů, favicon, 404 stránky, nebo formulářů.
---

# Pre-launch checklist

Procházej systematicky. U každé položky řekni: ✅ OK / ⚠️ Problém / ❌ Chybí úplně.

## SEO & meta tagy (v <head> každé stránky)
- `<title>` — unikátní pro každou stránku, 50–60 znaků
- `<meta name="description">` — 150–160 znaků, přesvědčivý text
- `<meta name="viewport">` — už tam je, ověř že všude
- `<html lang="cs">` nebo `lang="en"` podle jazyka
- **Open Graph tagy** pro sdílení na sociálních sítích:
  - `og:title`, `og:description`, `og:image` (1200×630px), `og:url`, `og:type`
- **Twitter Card**: `twitter:card = summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- **Canonical URL**: `<link rel="canonical" href="...">`

## Favicon (všechny formáty)
- `favicon.ico` v rootu (fallback pro staré prohlížeče)
- `favicon-32x32.png`, `favicon-16x16.png`
- `apple-touch-icon.png` (180×180px)
- `site.webmanifest` pro PWA/Android
- Linky v `<head>`

## 404 stránka
- `404.html` v rootu, stylově odpovídá webu
- Obsahuje navigaci zpět + odkaz na homepage
- Pokud hosting umí (Netlify, Vercel), nakonfiguruj redirect

## Technical SEO
- `robots.txt` v rootu (allow all pro launch)
- `sitemap.xml` s listem všech stránek
- Všechny odkazy fungují — žádné broken linky
- Všechny obrázky mají `alt` atribut

## Formuláře (kritické!)
- Kontaktní formulář má REÁLNÝ backend — ne jen `action="#"`
- Doporučené řešení pro statický web: Formspree, Netlify Forms, Web3Forms
- Ověř že submit skutečně odesílá email
- Honeypot / captcha proti spamu
- Success / error stavy uživatel vidí

## Právní & cookies
- Privacy policy a Terms jsou odkazy ve footeru — ✅ máme
- Cookie banner funguje (pokud používáš GA / trackery)
- Pokud žádné cookies, banner nepotřebuješ

## Analytics (volitelné)
- Google Analytics / Plausible / Umami
- Vložený skript, ověřená doména
- GDPR compliance (pokud GA, potřebuješ cookie consent)

## Poslední check
- Otevři web na 3 zařízeních (mobile, tablet, desktop)
- Projdi všechny stránky a odkazy
- Otestuj formulář (skutečně odešli test email)
- Zkontroluj v DevTools Console že nejsou errory
- Lighthouse audit v Chrome (Performance > 80, Accessibility > 90, SEO = 100)
