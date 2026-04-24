# Testing Checklist — LIVA Design Post-Deploy

Vyplňuje Vašek nebo kamoš po úspěšném deploymentu a nastavení formuláře.

Každá položka: **[ ]** = netestováno / **[x]** = OK / **[!]** = problém (popsat níže)

---

## 1. Základní funkčnost webu

- [ ] `livadesign.eu` načte homepage bez chyb
- [ ] `livadesign.eu/privacy-policy` funguje (bez `.html` v URL díky cleanUrls)
- [ ] `livadesign.eu/terms` funguje
- [ ] Všechny obrázky se zobrazují (fotky zakladatelů, project loga)
- [ ] Hamburger menu funguje na mobilu (otevře, zavře, ESC zavře)
- [ ] Smooth scroll při kliknutí na navigační linky funguje
- [ ] `livadesign.eu/coming-soon` funguje — zobrazí "BAF!" stránku s tlačítkem zpět
- [ ] Klik na "Brand Identity" v About sekci přesměruje na coming-soon
- [ ] Social linky v footeru otevírají Instagram / Dribbble / LinkedIn v novém tabu

---

## 2. Error stránka

- [ ] `livadesign.eu/neexistuje` zobrazí custom 404 stránku (ne Vercel default 404)
- [ ] 404 stránka má tlačítko zpět na homepage

---

## 3. SEO & technical soubory

- [ ] `livadesign.eu/robots.txt` načte se a obsah dává smysl
- [ ] `livadesign.eu/sitemap.xml` načte se a obsahuje správné URL
- [ ] Favicon se zobrazuje v záložce prohlížeče
- [ ] Záložka prohlížeče ukazuje "LIVA Design — Graphic Studio"

---

## 4. Social sharing preview

Zkontroluj OG preview (stránka musí být indexovatelná veřejně):

- [ ] **Facebook**: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) → zadej `livadesign.eu` → zobrazí se OG obrázek a titulek?
- [ ] **LinkedIn**: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/) → stejný check
- [ ] **Twitter/X**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) → zobrazí se large image card?

---

## 5. Security headers

- [ ] [securityheaders.com](https://securityheaders.com) → zadej `https://livadesign.eu` → skóre **A nebo A+**

---

## 6. Kontaktní formulář — routing emailů

Pro každou kategorii vyplň formulář s testovacími daty a ověř doručení na správný email.

**Testovací data**: Jméno: "Test Tester", Email: tvůj testovací email, Zpráva: "Testovací zpráva číslo X"

| Kategorie v dropdownu | Očekávaný email | Doručeno? |
|-----------------------|-----------------|-----------|
| Brand Identity | `digital@livadesign.eu` | [ ] |
| UI/UX Design | `digital@livadesign.eu` | [ ] |
| Web Design | `digital@livadesign.eu` | [ ] |
| Design Systems | `digital@livadesign.eu` | [ ] |
| Print | `production@livadesign.eu` | [ ] |
| Signage & Banners | `production@livadesign.eu` | [ ] |
| Merch Production | `production@livadesign.eu` | [ ] |
| 3D Modeling & Printing | `production@livadesign.eu` | [ ] |
| Other | `hello@livadesign.eu` | [ ] |
| (prázdná volba — nevybrána) | `hello@livadesign.eu` | [ ] |

---

## 7. Formulář — error stavy

- [ ] Odeslání prázdného formuláře → zobrazí inline chybové zprávy u polí
- [ ] Jméno kratší než 2 znaky → chyba u pole Jméno, scroll na pole, focus
- [ ] Neplatný email (např. "test@") → chyba u pole Email
- [ ] Zpráva kratší než 10 znaků → chyba u pole Zpráva
- [ ] Po opravení pole chybová hláška zmizí (live validation)
- [ ] 4× rychlý submit → UI zobrazí "Příliš mnoho pokusů, zkuste za hodinu" (429)

---

## 8. Formulář — success a loading state

- [ ] Při odeslání se tlačítko změní na "Odesílám…" a zablokuje se
- [ ] Po úspěšném odeslání tlačítko zezelená a ukáže "Zpráva odeslána ✓"
- [ ] Po 3 sekundách se formulář resetuje do výchozího stavu
- [ ] SVG šipka v tlačítku se po resetu obnoví (ne jen text)

---

## 9. Performance — Lighthouse

Chrome DevTools → záložka Lighthouse → Mobile → Generate Report

Otevři `livadesign.eu` a spusť audit:

| Metrika | Cíl | Výsledek |
|---------|-----|----------|
| Performance | > 85 | |
| Accessibility | > 90 | |
| Best Practices | > 90 | |
| SEO | > 95 | |

---

## 10. Mobilní zařízení (real device)

- [ ] **iPhone — Safari**: Homepage se načte, hero vejde do viewportu, hamburger funguje
- [ ] **Android — Chrome**: stejné
- [ ] Šipky v project kartách jsou čisté (ne emoji, ale SVG šipka)
- [ ] Formulář jde vyplnit a odeslat na mobilu

---

## 11. Klávesová přístupnost (a11y)

- [ ] Tabulátor projde celý web — focus outline (oranžový) je viditelný všude
- [ ] ESC klávesa zavře mobilní menu
- [ ] Chrome DevTools → Rendering → **Emulate CSS media feature prefers-reduced-motion: reduce** → animace (hero, marquee, rain) se zastaví nebo přeskočí

---

## 12. Cross-browser check

- [ ] Chrome (poslední verze)
- [ ] Firefox (poslední verze)
- [ ] Safari (Mac nebo iPhone)
- [ ] Edge

---

## Při nalezení problému

Pošli Vaškovi tyto informace:

1. **URL** kde nastal problém
2. **Screenshot** nebo screenrecording
3. **Browser Console** errory (F12 → Console záložka)
4. **Vercel Function Logs** pro problémy s formulářem (Vercel Dashboard → Functions → contact → Logs)
5. **Resend Dashboard → Emails** pro problémy s doručením

---

## Poznámky z testování

_(sem piš co nefungovalo nebo co bylo divné)_
