---
name: liva-performance
description: Použij tento skill při práci s obrázky (optimalizace, formáty, velikosti), fonty (loading strategie), JavaScript/CSS loading, lazy loading, nebo když uživatel zmíní že se web pomalu načítá, pomalá stránka, performance, rychlost, LCP, optimalizace. Trigger i při auditu výkonu před launch.
---

# Performance pravidla

## Obrázky — největší zdroj pomalosti

### Formáty (priorita)
1. **SVG** pro loga, ikony, ilustrace
2. **WebP** pro fotky (70–80% menší než PNG/JPG při stejné kvalitě)
3. **JPEG** fallback pro starší prohlížeče (přes `<picture>`)
4. **AVIF** pokud cílíš na moderní prohlížeče (ještě menší než WebP)
5. **PNG** jen když potřebuješ průhlednost a SVG nejde

### Vždy aplikuj
```html
<img src="photo.webp"
     alt="popis"
     loading="lazy"
     decoding="async"
     width="1200"
     height="800">
```
- `loading="lazy"` — kromě hero obrázku (ten musí načíst hned, je nad foldem)
- `decoding="async"` — nepozdržuje render
- `width` + `height` — prevence CLS (layout shift)

### Responzivní obrázky
Pro fotky použitelné na desktop i mobil dělej aspoň 2 velikosti:
```html
<picture>
  <source media="(max-width: 768px)" srcset="foto-mobile.webp" type="image/webp">
  <source srcset="foto-desktop.webp" type="image/webp">
  <img src="foto-fallback.jpg" alt="..." loading="lazy" width="1200" height="800">
</picture>
```

### Cílové velikosti souborů
- Hero obrázek: < 200 KB
- Obsahové fotky (about, portfolio): < 150 KB
- Thumbnails: < 50 KB
- SVG ikony: < 10 KB

## Fonty

### Preload kritických fontů
```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

### font-display: swap
V @font-face vždy `font-display: swap` — zobrazí fallback dokud se font načte. Bez toho uživatel vidí prázdný text.

### Používej jen varianty co potřebuješ
Ne všechny weighty + italics — každá varianta je další soubor. Portfolio typicky stačí 2–3 weights.

## JavaScript
- `<script defer>` pro non-kritický JS — spouští se po parsování HTML
- `<script async>` pro nezávislé skripty (analytics)
- Event listenery přidávej na existující elementy, ne na `document` zbytečně
- Pokud má element `display: none` na mobilu, nepřidávej na něj event listenery (viz hero__scroll issue v projektu)

## CSS
- Kritické CSS (above-fold) může být inline v `<head>` pro rychlejší první render
- Pro projekt bez build stepu je to OK nechat externí, ale minifikace před launch pomůže

## Měření (musíš mít data, ne odhady)
- Chrome DevTools > Lighthouse (Performance tab)
- PageSpeed Insights: https://pagespeed.web.dev/
- Cíl: LCP < 2.5s, CLS < 0.1, FID/INP < 200ms
