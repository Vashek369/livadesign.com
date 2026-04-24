# LIVA Website — Project Rules

Tento soubor čteš automaticky při každé úloze v tomto projektu. Pravidla tady jsou závazná, neignoruj je.

## Stack (fakta, ne návrhy)
- Statický web: HTML + vanilla CSS + vanilla JS
- Žádný build step, žádný npm, žádný framework
- Styly: jeden soubor `style.css` (~2000 řádků), desktop-first přístup s `max-width` media queries
- Hosting: static hosting (připravujeme na deployment)
- Projekt je flat — vše v root složce

## Kdo s tebou pracuje
Uživatel je grafický designer, ne programátor. Přecházení do web designu. To znamená:
- Vysvětluj technické věci prostým jazykem, bez zbytečného žargonu
- Když navrhuješ řešení, řekni PROČ — propoj vizuální rozhodnutí s kódem
- U větších změn napiš i to, co ti pomáhá orientovat se vizuálně (např. "tohle posune tlačítko o 20px doprava")
- Neposílej mu 200 řádků kódu bez vysvětlení

## Komunikace
- Odpovídej česky, ale technické termíny nech v angličtině (breakpoint, grid, flexbox, viewport)
- Komentáře v kódu piš anglicky (průmyslový standard)
- Buď stručný. Žádné dlouhé úvody typu "Skvělá otázka!"
- Když si nejsi jistý, zeptej se — nehádej

## Workflow
- Pracuj po malých krocích. Po každé logické změně se zastav a napiš co jsi udělal, ať to může uživatel zkontrolovat v prohlížeči
- Před větší změnou (refaktoring, přepsání sekce) se zeptej než začneš
- Pokud narazíš na rozhodnutí kde není jednoznačné řešení, zeptej se — neponoř se do jedné cesty
- Nikdy nemaž kód co nechápeš proč tam je — zeptej se

## Kdy použít které skilly
Máš dostupné v `.claude/skills/`:
- `liva-responsive` — při jakékoli úpravě CSS nebo layoutu
- `liva-prelaunch` — při kontrole před deploymentem (SEO, meta, 404, formuláře)
- `liva-performance` — při práci s obrázky, fonty, nebo optimalizací rychlosti
- `liva-accessibility` — při práci s interaktivními prvky (formuláře, menu, tlačítka)

Skilly můžou být aktivní zároveň — pokud přidáváš obrázek, platí `liva-responsive` + `liva-performance` + `liva-accessibility` najednou.

## Co NIKDY nedělat v tomto projektu
- Nepřidávat CSS framework (Tailwind, Bootstrap)
- Nepřidávat build step (npm, webpack, vite)
- Nepřevádět na React/Vue/Next
- Neinstalovat nové závislosti bez schválení
- Nemazat existující komentáře v CSS (organizují strukturu)
