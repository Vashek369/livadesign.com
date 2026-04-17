# LIVA Design — DESIGN.md

> Design system document for the LIVA Design studio website.
> Based on the Stitch DESIGN.md 9-section format.
> Inspired by Linear (precision), Runway/Framer (creative confidence), Resend/Vercel (typographic clarity).

---

## 1. Visual Theme & Atmosphere

**Mood.** Confident, crafted, a little cinematic. A working studio's site — not a portfolio template. Dark canvas with a single hot accent that earns its presence. Feels tactile: grain, grid, real photography, real logos — never "stock-y".

**Density.** Editorial, not dashboard. Generous vertical rhythm, large display headlines, intentional whitespace. Sections breathe; one idea per screen.

**Philosophy.**
- **Show the work, don't sell it.** Visual proof over adjectives.
- **Motion with a reason.** Every transition signals state or hierarchy — never decoration.
- **Hot accent as punctuation.** Orange #FF5500 is a verb: CTAs, highlighted words, interactive states. Never a background wash.
- **Swiss bones, studio soul.** Strict grid underneath, expressive type and imagery on top.

---

## 2. Color Palette & Roles

### Core surfaces (dark-first)

| Token | Hex | Role |
|------|-----|------|
| `--ink-0` | `#0A0A0A` | Page background. The deepest surface. |
| `--ink-1` | `#111111` | Cards, elevated blocks. |
| `--ink-2` | `#181818` | Hover / pressed cards, secondary surfaces. |
| `--ink-3` | `#222222` | Borders, dividers. |

### Foreground

| Token | Hex | Role |
|------|-----|------|
| `--fg-0` | `#F5F5F5` | Display type, primary headings. |
| `--fg-1` | `#E8E8E8` | Body text. |
| `--fg-2` | `#A0A0A0` | Secondary text, captions, inactive nav. |
| `--fg-3` | `#6B6B6B` | Tertiary, metadata, section labels. |

### Accent (the one hot color)

| Token | Hex | Role |
|------|-----|------|
| `--accent` | `#FF5500` | Primary accent — CTA fill, highlighted words, link underlines on hover, focus ring. |
| `--accent-hi` | `#FF7A33` | Hover brighten on accent surfaces. |
| `--accent-lo` | `#CC4400` | Pressed state, deep accent. |
| `--accent-wash` | `rgba(255,85,0,0.08)` | Subtle accent tint for selected rows, grid pulses. |

### Semantic

| Token | Hex | Role |
|------|-----|------|
| `--success` | `#3DDC97` | Form success, confirmations. |
| `--danger` | `#FF4D4D` | Validation errors, destructive. |
| `--selection-bg` | `#FF5500` | Text selection background. |
| `--selection-fg` | `#FFFFFF` | Text selection foreground. |

### Rules

- **One accent at a time.** Never combine orange with any other chromatic hue in the same component.
- **Accent is not a background.** Use on text, 1–2px borders, small icons, and <40% of button surface area. Large orange fills only on primary CTAs.
- **Grain, not noise.** A subtle film-grain overlay (opacity ≤4%) may live over hero / dark sections to break up flat blacks.

---

## 3. Typography Rules

### Families

| Token | Family | Usage |
|------|--------|-------|
| `--font-display` | `Indivisible` (Klim) | Display, headlines, brand logo, section titles. |
| `--font-body` | `Poppins` | Body, UI, nav, forms, buttons, captions. |
| `--font-mono` | `ui-monospace, "JetBrains Mono", monospace` | Section labels, project indices, technical metadata. |

Weights in use: **300, 400, 500, 600, 700**. No italics in display.

### Hierarchy

| Style | Family | Size (desktop / mobile) | Weight | Line-height | Tracking |
|-------|--------|-------------------------|--------|-------------|----------|
| `display-xl` (hero) | display | `clamp(72px, 9vw, 128px)` | 600 | 0.95 | −0.03em |
| `display-l` (section title) | display | `clamp(48px, 5.5vw, 80px)` | 600 | 1.00 | −0.025em |
| `display-m` (sub-section) | display | `clamp(36px, 3.5vw, 56px)` | 500 | 1.05 | −0.02em |
| `heading-s` (card title) | display | `24px / 20px` | 600 | 1.15 | −0.01em |
| `body-l` (hero sub, about) | body | `20px / 18px` | 400 | 1.55 | 0 |
| `body-m` (default) | body | `16px / 16px` | 400 | 1.6 | 0 |
| `body-s` (caption) | body | `14px / 14px` | 400 | 1.5 | 0 |
| `label` (section label, kicker) | mono | `12px / 12px` | 500 | 1.2 | `0.12em` uppercase |
| `metadata` (year, index) | mono | `13px / 12px` | 500 | 1.2 | `0.04em` |

### Rules

- **Display type is tight.** Always negative tracking at display sizes. Break headlines on purpose using `<br />` — never leave to wrap.
- **Highlighted word trick.** One word per headline gets `color: var(--accent)` + optional `font-style` or weight shift. At most **one** highlighted span per headline.
- **Mono for labels only.** Uppercase mono labels sit above every section title and act as a kicker (`Selected Work`, `What We Do`). Max 2 words.
- **Body wrapping.** Body copy never exceeds `65ch`. Centered hero sub-text caps at `55ch`.

---

## 4. Component Stylings

### Buttons

Two variants only. No tertiary, no icon-only primary.

| State | `.btn--primary` | `.btn--ghost` |
|-------|-----------------|---------------|
| Default | bg `--accent`, fg `#fff`, no border | bg transparent, fg `--fg-0`, 1px border `--ink-3` |
| Hover | bg `--accent-hi`, arrow slides +2px | border `--accent`, fg `--accent` |
| Active | bg `--accent-lo` | bg `--accent-wash` |
| Focus | 2px outline `--accent`, offset 3px | same |
| Disabled | opacity 0.4, `cursor: not-allowed` | same |

**Shared:** `padding: 14px 24px`, `border-radius: 0` (flat, industrial), `font: 14px/1 Poppins 500`, `letter-spacing: 0.02em`, optional trailing arrow `↗` with `transition: transform 220ms cubic-bezier(.2,.7,.2,1)`.

### Cards (Project / Service)

- Surface: `--ink-1`, border `1px solid --ink-3`.
- Border radius: `0`. (Studio is flat, architectural.)
- Hover: border brightens to `--fg-3`, optional `--accent-wash` shine sweep, `transform: translateY(-2px)` with 280ms ease.
- Project card has a tall aspect image area (16:10) + info row below with index (mono), title (display-s), year (mono, muted).

### Inputs

- Transparent background, 1px bottom border `--ink-3` (underline-only style).
- Label: mono uppercase 12px, `--fg-3`.
- Focus: bottom border animates to `--accent` in 240ms, with a 1px line sweep left→right.
- Placeholder: `--fg-3`.
- Validation error: bottom border `--danger`, inline helper in mono 12px `--danger`.

### Navigation

- Fixed top, `--nav-h: 64px`, background `--ink-0` with a hairline bottom border that fades in on scroll.
- Links: body 14px, `--fg-2` default, `--fg-0` on hover, with a 1px orange underline that reveals from left over 200ms.
- CTA in nav uses `.btn--ghost` at 40px height.
- Scroll past hero → nav gains a subtle backdrop blur (`backdrop-filter: blur(12px)`) and `--ink-0/80` background.

### Section label (kicker)

- Mono 12px uppercase, `--fg-3`.
- Preceded by a 24px hairline `──` in `--accent` for section-level labels.

### Marquee

- Two speeds (slow service row, faster client row in reverse).
- Items separated by `●` dots in `--accent` at 4px.
- Fade mask on both edges (`mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)`).

### Custom cursor

- Custom `LV` symbol at 28px, fill `--fg-0`.
- Scales to 1.25× on hover of any interactive element; 0.85× on active.
- Hides on touch devices (`@media (pointer: coarse)`).

---

## 5. Layout Principles

### Spacing scale (4px base)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`

Use tokens `--space-1` … `--space-11`. Section vertical padding defaults to `--space-10` (128px desktop) / `--space-8` (64px mobile).

### Grid

- **Container:** `max-width: 1280px`, horizontal padding `--space-6` (32px) desktop, `--space-4` (16px) mobile.
- **12-column** CSS grid with `gap: 24px` desktop / `16px` mobile.
- **Bento layouts** for projects: 12-col, projects span `6/6`, `8/4`, `5/7` alternating — never four equal tiles.
- Background grid overlay on hero section: vertical hairlines every `1/12`, `--accent-wash` opacity.

### Whitespace philosophy

- **Breathe before the headline.** Minimum 96px above display headlines from section top.
- **One hero idea per screen.** Hero must be ≥ `100vh`, `min-height: 780px`.
- **Asymmetry over symmetry.** Offset section titles 1 column left; images can bleed to viewport edge.

### Vertical rhythm

- Paragraph spacing = 1.5× line-height of parent.
- Between heading and following body: `--space-4` (16px).
- Between sub-sections: `--space-7` (48px).

---

## 6. Depth & Elevation

Minimal. This system favors **borders, not shadows.** Shadows appear only on floating elements.

| Token | Value | Usage |
|-------|-------|-------|
| `--elev-0` | none | Flat surfaces — 95% of the site. |
| `--elev-1` | `0 1px 0 rgba(255,255,255,0.04) inset` | Card top hairline. |
| `--elev-2` | `0 16px 48px -12px rgba(0,0,0,0.6)` | Hover lift on project cards. |
| `--elev-float` | `0 24px 64px -8px rgba(0,0,0,0.7), 0 0 0 1px var(--ink-3)` | Cookie banner, modals, toasts. |

### Surface hierarchy

1. `--ink-0` page.
2. `--ink-1` card / form block.
3. `--ink-2` nested interactive (input field, hover card).
4. `--ink-3` used **only** as a 1px border, never as a fill.

---

## 7. Do's and Don'ts

### Do

- Use **one** accent-highlighted word per headline.
- Keep buttons rectangular (`border-radius: 0`).
- Let images bleed to container edges for impact.
- Use mono labels as section kickers.
- Pair every hover state with a matching focus-visible state.
- Let motion last 200–320ms with `cubic-bezier(.2,.7,.2,1)`.

### Don't

- Don't mix orange with other chromatic accents (blue, green, purple).
- Don't round corners beyond `2px` outside of photos.
- Don't use drop shadows on text.
- Don't stack more than two font weights in the same heading.
- Don't use gradient text.
- Don't center body paragraphs longer than two lines.
- Don't animate on page load longer than 700ms total.
- Don't use stock illustrations. Real work or nothing.

---

## 8. Responsive Behavior

### Breakpoints

| Token | Width | Target |
|-------|-------|--------|
| `--bp-sm` | 480px | Small phones |
| `--bp-md` | 768px | Tablets |
| `--bp-lg` | 1024px | Small laptops |
| `--bp-xl` | 1280px | Desktop (design baseline) |
| `--bp-2xl` | 1536px | Large desktop |

### Rules

- **Mobile-first.** Base styles target 375px; scale up.
- **Touch targets ≥ 44×44px.** Buttons `min-height: 48px` on mobile.
- **Display type uses `clamp()`** — no hard size breakpoints for headlines.
- **Grid collapse strategy:** 12 → 8 (md) → 4 (sm). Bento projects become 1 column below `--bp-md`.
- **Nav:** desktop horizontal → hamburger + full-screen overlay below `--bp-lg`. Overlay is `--ink-0`, links in `display-m`.
- **Marquee speed:** halves on mobile for readability.
- **Custom cursor:** disabled under `(pointer: coarse)`; reveal native cursor.
- **Hover effects:** every hover must have a tap equivalent on touch (active state = same visual).

---

## 9. Agent Prompt Guide

### Quick color reference

```
Background:     #0A0A0A
Surface:        #111111
Border:         #222222
Text primary:   #F5F5F5
Text muted:     #A0A0A0
Accent:         #FF5500
```

### Fonts

- Display: **Indivisible** (Klim), weights 500/600, negative tracking.
- Body: **Poppins**, weights 400/500.
- Mono: **JetBrains Mono** or system monospace, uppercase for labels.

### Ready-to-use prompts

- *"Add a new section using LIVA DESIGN.md. Section label (mono uppercase 12px, `--fg-3`) + display-l headline with one accent-highlighted word + body-l sub. 128px vertical padding. No shadows, no rounded corners."*
- *"Design a project card per LIVA DESIGN.md: 16:10 image area, `--ink-1` surface, 1px `--ink-3` border, info row with mono index, display-s title, mono year. Hover: border `--fg-3`, translateY(-2px), 280ms ease."*
- *"Build a primary CTA per LIVA DESIGN.md: orange `#FF5500`, white text, `padding: 14px 24px`, `border-radius: 0`, trailing `↗` that slides +2px on hover."*

### Tone voice for UI copy

- Direct, lowercase-friendly for labels, Title Case for headings.
- Verbs over nouns: *"Start project"* beats *"Project inquiry form"*.
- Czech + English parity — keep both languages tight, same line counts where possible.

---

**Last updated:** 2026-04-13
**Maintainers:** Libor, Vašek
**Purpose:** Single source of truth for visual decisions when redesigning / extending the LIVA website. AI agents and designers should read this before touching `style.css` or adding sections.
