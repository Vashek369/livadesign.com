---
name: liva-accessibility
description: Použij tento skill při práci s jakýmikoli interaktivními prvky (tlačítka, menu, formuláře, modály, dropdown), při přidávání obrázků (alt texty), při práci s navigací nebo fokus states. Trigger i když uživatel zmíní "accessibility", "a11y", "přístupnost", "screen reader", "klávesnice", "ARIA", nebo když kontroluje web před launch.
---

# Accessibility (a11y) pravidla

Portfolio webu si všímá klientela v oboru (UX agentury, korporace). Basic a11y je snadný win co zvyšuje vnímanou kvalitu.

## Obrázky
- Každý `<img>` má `alt` atribut
- **Obsahový obrázek** (foto zakladatele): `alt="Libor Jůzek, zakladatel LIVA"`
- **Dekorativní obrázek** (pattern, pozadí): `alt=""` (prázdný, screen reader ho přeskočí)
- **Funkční obrázek** (logo co je odkaz): `alt="LIVA — zpět na homepage"`
- SVG loga klientů: `alt="Český pekař"` (jméno brandu)

## Tlačítka & interakce
- `<button>` pro akce (submit, toggle menu), `<a>` pro navigaci
- **Hamburger menu**: `<button aria-label="Otevřít menu" aria-expanded="false">`
  - `aria-expanded` musí JS měnit na `"true"` když je menu otevřené
- **Cookie banner**: tlačítka mají aria-label pokud text není popisný
- Všechny interaktivní prvky min. 44×44px pro touch

## Klávesnice
- Všechny interaktivní prvky fungují na Tab + Enter/Space
- **Visible focus state** — nepotlačovat `outline: none` bez náhrady
```css
  button:focus-visible, a:focus-visible {
    outline: 2px solid var(--orange);
    outline-offset: 4px;
  }
```
- Tab order dává logický smysl (shora dolů, zleva doprava)
- ESC zavírá modály / mobile menu

## Formuláře
- Každý input má odpovídající `<label>` (ne jen placeholder)
- Pokud label schovaný: `<label class="sr-only">` (visually hidden, ne display:none)
- Error stavy mají `aria-describedby` propojené s error hláškou
- Required pole mají `required` atribut + vizuální indikaci

## Sémantika HTML
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Jedna `<h1>` na stránku, pak hierarchie h2 → h3 (nepřeskakovat)
- `<button>` pro akce, ne `<div onclick>`
- Odkazy v textu musí dávat smysl mimo kontext (ne "klikněte zde")

## Skip to content
Na začátku `<body>` přidat pro screen reader users:
```html
<a href="#main" class="skip-link">Přeskočit na obsah</a>
```
Schovat vizuálně, ale ukázat při focusu:
```css
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
}
.skip-link:focus {
  left: 16px;
  top: 16px;
  z-index: 9999;
  padding: 12px 16px;
  background: var(--orange);
  color: #fff;
}
```

## Kontrast
Tmavé pozadí `#0a0a0a` + světlý text `#f0f0f0` = kontrast 19.5:1 ✅ (AAA).
Oranžová `#FF5500` na `#0a0a0a` = 6.8:1 ✅ (AA large).
Muted text `#888` na `#0a0a0a` = 5.3:1 ✅ (AA).
**Neměnit** bez kontroly kontrastu (webaim.org/resources/contrastchecker/).

## Prefers-reduced-motion
Respektuj uživatele co nechtějí animace:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
