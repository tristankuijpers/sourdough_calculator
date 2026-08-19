# Sourdough Calculator

A single-page baker's-percentage calculator for sourdough bread and pizza dough. Pure HTML/CSS/JS, no build step, no dependencies.

## Deployment intent: GitHub Pages

This project is meant to be hosted as a static site on **GitHub Pages**. That means the entire app must keep working with nothing more than files served over plain HTTP(S) — there is no server, no backend, no build pipeline, and no database.

### Before adding any new feature

GitHub Pages only serves static files. Before implementing a follow-up feature, check that it is actually doable within these constraints:

- ✅ **Fine on GitHub Pages**: anything that runs client-side — HTML/CSS/JS, `localStorage`/`IndexedDB`, a service worker/PWA manifest for offline use, calls to third-party APIs that allow CORS and don't require a hidden secret.
- ⚠️ **Needs a workaround**: features that seem to need a server (e.g. saving/sharing recipes across devices, user accounts, contact forms) usually have a static-friendly alternative — encode state in the URL, use a free third-party service (e.g. Formspree for forms), or use a serverless function hosted elsewhere.
- ❌ **Not doable as-is**: anything requiring a persistent backend process, server-side secrets/API keys, or a real database. If a request needs this, say so explicitly and propose the closest static alternative instead of quietly adding server code.

When proposing or implementing a new feature, confirm it fits one of the first two categories first.

## Project structure

```
index.html                    the calculator (tabs, sliders, math)
assets/style.css               shared dark theme, used by index.html and the recipe pages
recipes/bread.html             standalone "Recipe & method" guide for bread
recipes/pizza.html             standalone "Recipe & method" guide for pizza
recipes/bread-content.js        bread guide content, injected into bread.html
recipes/pizza-content.js        pizza guide content, injected into pizza.html
```

Each product gets its own recipe page under `recipes/`, linked from its tab on the calculator ("📖 Recipe & method"). The step-by-step text lives in a small `*-content.js` file per product, so guides can be edited or new ones added without touching the page markup or the calculator itself. Content is injected via a plain `<script>` tag (not `fetch`), so it works both on GitHub Pages and when opening the HTML files directly from disk.

To add a guide for a new product: create `recipes/<product>.html` (copy an existing one) and `recipes/<product>-content.js`, then link to it from that product's tab in `index.html`.

## Adding a new product tab

The top tab strip (`.tabs`) is a horizontally scrollable segment control (`overflow-x:auto` with scroll-snap and edge fade), so it keeps working as more products are added — Bread and Pizza today, Focaccia next — without squeezing the calculator itself. Tab switching is generic: clicking any `.tab` shows the `.tabpanel` whose id is `panel-<data-tab>`, so no JS changes are needed to add one.

To add a new product tab:

1. Add a `.tab` button inside `.tabs` with a unique `data-tab="<name>"`, its label/tag text, and its accent colors via inline `--accent-soft`/`--accent-ring` (rgba versions of a `:root` color from `assets/style.css`).
2. Add a matching `<div class="tabpanel" id="panel-<name>">` with a `.card` inside.
3. If the ratios/recipe aren't ready yet, use a `.coming-soon` placeholder inside the card (see the Hot buns panel) instead of sliders — swap it for the real calculator UI once the math is defined.
4. Once ready, wire up sliders/JS following the Bread/Pizza pattern, and optionally add a `recipes/<name>.html` guide page.

## Local development

Open [index.html](index.html) directly in a browser, or serve it locally:

```sh
python3 -m http.server 8000
```

## Deploying

GitHub Pages serves `index.html` from the published branch/folder by default, and the file is already named accordingly. To publish this project:

1. Push to GitHub and enable Pages in **Settings → Pages** (source: `main` branch, root folder).
2. The site will be available at `https://<username>.github.io/<repo>/`.

## Contributing

Want to add a recipe or fix something? See [CONTRIBUTING.md](CONTRIBUTING.md).
