# Sourdough Calculator

A single-page baker's-percentage calculator for any sourdough product — bread, pizza, focaccia, and more. Pure HTML/CSS/JS, no build step, no dependencies.

## The whole idea

Every product — its name, default portion, baker's percentages, preset chips, and recipe instructions — lives in **one JSON-shaped file: [`products.js`](products.js)**. The page builds the tab strip, calculator, and recipe pages automatically from that file. Adding a product means **adding one entry to that array** and nothing else.

That keeps contributions easy and the site static:

- No `fetch`, no build step, no server. The data loads via a plain `<script>` tag, so it works on **GitHub Pages** and when opening `index.html` directly from disk.
- Everything runs client-side, which is the only thing GitHub Pages can serve.

## Project structure

```
index.html              # generic calculator (tabs + sliders + panels), driven by products.js
products.js             ← single source of truth: every product's data + recipe text
assets/style.css        shared dark theme, used by index.html and the recipe page
recipes/recipe.html     one template that renders any product's "recipe & method"
sw.js                   PWA service worker (offline cache)
site.webmanifest
assets/*.png            favicon / app icons
```

## Deployment intent: GitHub Pages

This project is hosted as a static site on **GitHub Pages** — no server, no backend, no build pipeline, no database.

### Before adding any new feature

GitHub Pages only serves static files. Check that a feature actually fits:

- **Fine on GitHub Pages**: anything client-side — HTML/CSS/JS, `localStorage`, a service worker / PWA manifest for offline use, and third-party APIs that allow CORS and need no hidden secret.
- **Needs a workaround**: features that seem to need a server (e.g. saving/sharing recipes across devices, user accounts, contact forms) usually have a static-friendly alternative — encode state in the URL, use a free third-party service (like Formspree for forms), or a serverless function hosted elsewhere.
- **Not doable as-is**: anything needing a persistent backend process, server-side secrets/API keys, or a real database. If a request needs this, say so and propose the closest static alternative instead of quietly adding server code.

When proposing or implementing a new feature, confirm it fits one of the first two categories first.

## Adding a new product

Append one object to the `PRODUCTS` array in `products.js`. The fresh tab, calculator panel, and `recipe.html?product=<id>` page appear automatically.

### Schema (per product)

```js
{
  id: "myproduct",                  // unique; used in ids and recipe URLs
  label: "My Product",              // tab label
  emoji: "🥐",                      // optional (null to hide)
  tag: null,                        // optional tiny uppercase tag, e.g. "coming soon"
  disabled: true,                   // true renders a "coming soon" placeholder instead

  accent: {
    color: "var(--amber)",          // accent used inside the card
    soft: "rgba(207,159,66,0.16)",  // tab active fill
    ring: "rgba(207,159,66,0.35)"   // tab active ring
  },

  base: { starter:100, flour:450, water:300, salt:8, oil:0, total:858 },
  portionName: "full loaf",
  slider: { min:300, max:2500, step:50, def:858 },

  // "base"    = preset chips snap to `base` scaled to that weight (Bread, Pizza)
  // "percent" = chips just set total weight; ratios always drive (Focaccia)
  chipsSwitchTo: "base",
  chips: [
    { text: "half loaf",  weight: 429 },
    // { text: "4 balls", balls: 4 }   // ball-count chip (see widget)
  ],

  // baker's percentages as % of total flour (which includes the 50/50 starter).
  advanced: {
    salt: 2,
    hydration: { key:"hydration", label:"Hydration", min:50, max:90, step:1, def:70 },
    starter:   { key:"starter",   label:"Starter",   min:10, max:35, step:1, def:20 },
    extras: [ { key:"oil", name:"Olive oil", label:"Olive oil", min:0, max:6, step:0.5, def:1.5 } ]
  },

  // Optional interactive widget. Only "balls" (Pizza) is currently supported:
  // "≈ N dough balls of <input> g", where N = base total / defaultCount.
  widget: null,   // or { type:"balls", defaultCount:4, defaultBallWeight:237.5 }

  recipe: {
    eyebrow: "my product · method",
    title: "My Product: recipe &amp; method",
    tagline: "A short description.",
    tip: "A sizing tip.",
    steps: [ { h: "Step title", p: "Plain HTML for the step." } ]
  },

  comingSoon: "…"   // for disabled products only: the placeholder copy
}
```

### Adding a product — checklist

1. Fork, clone, open `products.js`, append your object (copy an existing product as a template).
2. Make the ratios come from a recipe you've actually baked — not a guess. Tell us about it in the PR.
3. Open `index.html`. If it opens with no console errors and the numbers look right, it's ready.

## Existing products

- **Bread** — portion presets `half / full / double loaf`.
- **Pizza** — ball-count presets (2/4/6/8) via the `balls` widget.
- **Focaccia** — percentage-driven; pan-size presets.
- **Hot buns** — disabled placeholder awaiting a real recipe.

## Local development

Open [index.html](index.html) in a browser, or serve it locally:

```sh
python3 -m http.server 8000
```

## Deploying

GitHub Pages serves `index.html` from the published branch/folder by default, and the file is already named accordingly:

1. Push to GitHub and enable Pages in **Settings → Pages** (source: `main` branch, root folder).
2. The site will be available at `https://<username>.github.io/<repo>/`.

## Contributing

Want to add a recipe or fix something? See [CONTRIBUTING.md](CONTRIBUTING.md).