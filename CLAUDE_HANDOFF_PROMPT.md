# Prompt pro Claude Code — Deployment handoff

Tento soubor je pro kamoše, který dělá technický deploy webu LIVA Design.

## Jak použít

1. Otevři projekt ve svém editoru s Claude Code (VS Code, JetBrains, nebo terminal)
2. Zkopíruj **celý prompt níže** (od `--- START PROMPTU ---` do `--- KONEC PROMPTU ---`)
3. Vlož ho do Claude Code chatu a odešli
4. Claude Code tě provede krok za krokem

---

--- START PROMPTU ---

Ahoj, dostal jsem hotový statický web **LIVA Design** od kolegy. Web je připravený na deploy na Vercel. Potřebuji tvoji pomoc s těmito úkoly:

1. Vytvoření serverless function pro kontaktní formulář (`api/contact.js`)
2. Vytvoření `package.json` se závislostmi
3. Napojení na GitHub + Vercel
4. Nastavení Resend pro odesílání emailů
5. Otestování že formulář posílá emaily na správné adresy

Než začneš, přečti si prosím `DEPLOYMENT.md` v rootu projektu — tam je kompletní přehled co je hotové a co musím udělat.

---

## ÚLOHA 1 — Serverless function pro formulář

Vytvoř `api/contact.js` a `package.json` v rootu projektu dle následující specifikace.

### package.json

```json
{
  "name": "liva-website",
  "version": "1.0.0",
  "private": true,
  "engines": { "node": "20.x" },
  "dependencies": {
    "resend": "^4.0.0",
    "zod": "^3.24.0"
  }
}
```

### api/contact.js — specifikace

**Konvence**: CommonJS (`require`/`module.exports`), Node 20, async/await

#### Routing emailů podle hodnoty `service`

| Service hodnota | Cílový email |
|-----------------|-------------|
| `brand-identity` | `digital@livadesign.eu` |
| `ui-ux-design` | `digital@livadesign.eu` |
| `web-design` | `digital@livadesign.eu` |
| `design-system` | `digital@livadesign.eu` |
| `print` | `production@livadesign.eu` |
| `signage` | `production@livadesign.eu` |
| `merch` | `production@livadesign.eu` |
| `3d-modeling` | `production@livadesign.eu` |
| `other` | `hello@livadesign.eu` |
| `""` (prázdný string) | `hello@livadesign.eu` |

Cílové adresy jsou přepsatelné přes environment variables `EMAIL_DIGITAL`, `EMAIL_PRODUCTION`, `EMAIL_HELLO`.

#### Service labels pro email subject

```
brand-identity   → "Brand Identity"
ui-ux-design     → "UI/UX Design"
web-design       → "Web Design"
design-system    → "Design Systems"
print            → "Print"
signage          → "Signage & Banners"
merch            → "Merch Production"
3d-modeling      → "3D Modeling & Printing"
other            → "Other"
""               → "Unspecified"
```

#### Zod validační schema

```
name:       string, .trim(), min 2, max 100 znaků
email:      valid email formát, max 254 znaků
service:    enum z hodnot výše (including prázdný string "")
message:    string, .trim(), min 10, max 2000 znaků
hp_website: string, max 0 znaků (honeypot pole — musí být prázdné)
```

#### Rate limiting

- In-memory `Map` (přežije jen dokud běží serverless instance)
- Limit: **3 požadavky / IP / hodinu**
- IP adresa: `req.headers['x-forwarded-for'].split(',')[0].trim()` (Vercel forwarduje)
- Při překročení: HTTP 429 + header `Retry-After: 3600`

#### HTTP response kódy

| Kód | Kdy | Body |
|-----|-----|------|
| 200 | Email úspěšně odeslán | `{ "success": true }` |
| 400 | Zod validace selhala | `{ "success": false, "error": "validation", "details": [...] }` |
| 403 | Honeypot zachycen | `{ "success": false, "error": "forbidden" }` |
| 405 | Není POST | `{ "success": false, "error": "method_not_allowed" }` |
| 415 | Content-Type není `application/json` | `{ "success": false, "error": "invalid_content_type" }` |
| 429 | Rate limit překročen | `{ "success": false, "error": "rate_limit_exceeded" }` |
| 500 | Neočekávaná chyba | `{ "success": false, "error": "server_error" }` |
| 503 | `RESEND_API_KEY` chybí NEBO Resend selhal | `{ "success": false, "error": "email_unavailable" }` |

#### Email formát

```
Subject:  "Nová poptávka: {serviceLabel} — {name}"
From:     "LIVA Website <noreply@livadesign.eu>"
          (přepsatelné přes env var EMAIL_FROM)
Reply-To: email uživatele (z formuláře)
To:       dle routing tabulky výše
```

**HTML body šablona** — dark design, brand barvy:
- Header s oranžovým pruhem (`#FF5500`)
- Tabulka: Jméno, Email, Služba, Zpráva
- Footer s meta info: čas odeslání (ISO timestamp), IP adresa, User-Agent
- **Všechny user inputs musí být HTML-escapované** (ochrana před XSS v email klientech)

**Text body** — plain text fallback se stejnými daty (pro email klienty bez HTML).

#### Security kontroly (v tomto pořadí)

1. Method check — pouze POST
2. Content-Type check — musí být `application/json`
3. JSON parse s try/catch
4. Honeypot check — `hp_website` musí být prázdné
5. Rate limit check
6. Zod validace
7. Env var check (`RESEND_API_KEY`)
8. Resend send

#### Environment variables

| Proměnná | Povinná | Default / popis |
|----------|---------|-----------------|
| `RESEND_API_KEY` | Ano | API klíč z resend.com |
| `EMAIL_FROM` | Ne | default: `noreply@livadesign.eu` |
| `EMAIL_DIGITAL` | Ne | default: `digital@livadesign.eu` |
| `EMAIL_PRODUCTION` | Ne | default: `production@livadesign.eu` |
| `EMAIL_HELLO` | Ne | default: `hello@livadesign.eu` |

---

## ÚLOHA 2 — Napojení formuláře v script.js na reálný backend

V souboru `assets/js/script.js` najdi form submit handler. Hledej: `contactForm` a `addEventListener('submit'`.

Nahraď stávající "fake success" logiku skutečným fetch voláním. Zachovej všechny existující věci:

**Co ZACHOVAT** (existuje, neměň):
- Honeypot check (tiché `return` bez alertu)
- Client-side rate limit (60s cooldown)
- `setFieldError()` funkci a její volání pro validaci polí
- Live clear errors při `input` eventu
- Scroll + focus na první pole s errorem
- Logiku `isValidEmail()`

**Co PŘIDAT / NAHRADIT** (stávající fake success nahraď tímto):

```
1. Sbírej data z formuláře (name, email, service, message, hp_website)
2. Disabled + text submit tlačítka na "Odesílám…"
   - POZOR: tlačítko obsahuje SVG šipku — ulož btn.innerHTML na začátku,
     obnov ho po resetu (ne btn.textContent)
3. fetch('POST', '/api/contact', JSON.stringify(data), Content-Type: application/json)
4. Podle HTTP statusu:
   - 200: zelený stav tlačítka "Zpráva odeslána ✓" + reset formuláře po 3s
   - 429: chybová zpráva "Příliš mnoho pokusů, zkuste za hodinu"
   - 503: "Služba dočasně nedostupná"
   - 400: "Neplatná data, zkontrolujte formulář"
   - 500 + ostatní: "Odeslání selhalo, zkuste znovu"
   - Network error (fetch selhal): "Chyba připojení"
5. Po chybě: obnov btn.innerHTML, odblokuj tlačítko
```

---

## ÚLOHA 3 — Git + GitHub + Vercel

### Git

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial project with Vercel serverless contact form"
```

### GitHub

Vytvoř nové soukromé repo na github.com (bez README, bez .gitignore):

```bash
git remote add origin https://github.com/TVOJE-USERNAME/liva-website.git
git push -u origin main
```

### Vercel

1. Jdi na vercel.com → **Add New → Project**
2. Importuj GitHub repo `liva-website`
3. Nastav:
   - **Framework Preset**: Other
   - **Build Command**: (prázdné)
   - **Output Directory**: (prázdné)
   - **Root Directory**: `./`
4. Ještě nespouštěj Deploy — napřed nastav Environment Variables (viz ÚLOHA 4)

---

## ÚLOHA 4 — Resend + Environment Variables

### Resend

1. Založ účet na [resend.com](https://resend.com)
2. Dashboard → **API Keys** → **Create API Key** → zkopíruj
3. Dashboard → **Domains** → **Add Domain** → `livadesign.eu`
4. Přidej DNS záznamy co Resend ukáže (DKIM + SPF) u registrátora domény
5. Počkej na Verified status

### Vercel Environment Variables

Vercel → Project → **Settings** → **Environment Variables**:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_xxx...` (z Resend) |
| `EMAIL_FROM` | `noreply@livadesign.eu` |

Apply to: **Production + Preview + Development**

Po uložení: Vercel → Deployments → **Redeploy**

---

## ÚLOHA 5 — Email schránky

U email providera (Google Workspace / Zoho / Wedos) vytvoř:

- `hello@livadesign.eu`
- `libor@livadesign.eu`
- `vasek@livadesign.eu`
- `digital@livadesign.eu`
- `production@livadesign.eu`

Detaily a DNS poznámky viz `DEPLOYMENT.md` → Část F.

---

## ÚLOHA 6 — Testování

Projdi `TESTING.md` v projektu. Nahlaste výsledky Vaškovi.

---

## Omezení a pravidla

- **NEMĚŇ** existující HTML, CSS, ani jinou JS logiku bez Vaškova souhlasu
- **Nikdy** nedávej API keys, hesla nebo tokeny do Git commitu — jen do Vercel Environment Variables
- Pokud narazíš na problém nebo nejasnost, zastav se a zeptej se Vaška
- Po každé velké fázi dej Vaškovi vědět co je hotové

---

Začni **ÚLOHOU 1** — vytvoř `api/contact.js` a `package.json`.

--- KONEC PROMPTU ---
