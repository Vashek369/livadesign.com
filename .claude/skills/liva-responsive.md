---
name: liva-responsive
description: Použij tento skill vždy, když upravuješ style.css, HTML layouty, nebo cokoli co má vliv na zobrazení na mobilu/tabletu/desktopu v tomto projektu. Trigger při jakékoli změně vizuálu, přidání sekce, úpravě komponenty, nebo práci s responsive chováním. Neignoruj ho ani u malých změn.
---

# Liva Website — Responsive pravidla

## Stack reality (drž se toho, nevymýšlej nové)
- Vanilla CSS v jednom souboru `style.css` (~2000 řádků)
- Desktop-first přístup — používáme `@media (max-width: X)`, NE `min-width`
- Žádný build step, žádný framework, žádné SCSS
- BEM-like naming — `.section__label`, `.btn--primary`, `.service`
- Spacing je hardcoded v px — nemáme `--space-*` tokeny, nevymýšlej je

## Existující breakpointy (drž se jich)
```css
@media (max-width: 960px) { /* tablet — gridy na 1 sloupec */ }
@media (max-width: 768px) { /* mobil — hamburger menu, container padding 24px */ }
@media (max-width: 480px) { /* malý mobil — CTA full-width, hero headline 42px */ }
```
Nové breakpointy nezakládat bez důvodu. Úpravy pro menší zařízení patří do existujících bloků.

## Kam psát nový CSS
`style.css` je rozdělen komentářovými bloky `/* === NÁZEV === */`. Responsive úpravy patří do sekce **Responsive** (cca řádek 1748+), seskupené podle breakpointu. Nerozhazovat media queries po celém souboru.

## CSS proměnné (používej, nepřepisuj)
`--orange`, `--orange-dim`, `--black`, `--surface`, `--surface2`, `--border`, `--text`, `--text-muted`, `--font-primary` (indivisible), `--font-secondary` (poppins), `--nav-h: 60px`

## Typografie na mobilu
- Body text minimálně 16px (iOS jinak zoomuje formuláře)
- Pro nadpisy používej `clamp()` — vzor hero headline: `clamp(52px, 8vw, 110px)`
- Line-height nesnižovat pod 1.4 pro čitelnost

## Obrázky (kritická oblast tohoto projektu)
- `libor.png` a `vasek.jpg` jsou momentálně příliš velké (1.53 MB + 758 KB) — vždy kontroluj velikost
- Ideál: WebP s JPG/PNG fallback přes `<picture>`, menší rozlišení pro mobil přes srcset
- Vždy přidávej `loading="lazy"`, `width`, `height`, `decoding="async"`
- SVG loga v project cards — přidat `width`, `height`, `loading="lazy"` (prevence CLS)

## Touch targety
Tlačítka a odkazy minimálně 44×44px včetně paddingu.

## Co NIKDY nedělat v tomto projektu
- Neobracet desktop-first CSS na mobile-first
- Nevytvářet nové CSS proměnné pokud už podobná existuje
- Nepřidávat CSS framework (Tailwind apod.)
- Nepřidávat build step (npm, webpack)
- Nepoužívat `display: none` pro mobilní skrývání obsahu — raději upravit layout
- Nesnižovat kontrast textu (`#0a0a0a` pozadí + `#f0f0f0` text je záměr)

## Před ukončením úpravy
1. Ověř funkčnost na 375px, 480px, 768px, 960px, 1440px
2. Desktop (>960px) se nesmí změnit, pokud to není v zadání
3. Ověř že hamburger menu stále funguje
4. Když měníš obrázky, zkontroluj velikost souboru (cíl <200 KB pro full-width foto na mobilu)
