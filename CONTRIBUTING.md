# Contributing 🍞

Got a starter that makes killer focaccia? A pizza dough ratio you're proud of? Bring it here. This project lives or dies by people sharing recipes that actually work, so if you've got one, we want it.

The best part: this is a plain HTML/CSS/JS page with zero dependencies and zero build step. No `npm install`, no waiting for webpack, no fighting a toolchain. Clone it, open it, and you're already contributing.

## Setup (it's genuinely this easy)

```sh
python3 -m http.server 8000
```

...or just double-click [index.html](index.html) and open it in your browser. That's it. That's the setup.

## The house rules

- **Keep it vanilla.** Plain HTML/CSS/JS only — no frameworks, no build tools, no npm dependencies. If it doesn't run by just opening the file, it doesn't belong here.
- **Static-hosting only.** This lives on GitHub Pages — no server, no backend, no database. Check the README's "Before adding any new feature" checklist if you're not sure your idea fits.
- **Data over markup.** All product definitions (ratios, presets, percentages, recipe steps) live in [`products.js`](products.js). The calculator reads that one file — never hardcode gram amounts or a new panel in HTML/JS. If a product does something the schema doesn't cover yet, start by extending the schema, then the generic renderer.

## Got a recipe? Here's how to add it

1. Open [`products.js`](products.js) and append one entry to the `PRODUCTS` array (copy an existing product as a template).
2. The new tab, calculator sliders, chips, and `recipe.html?product=<id>` page appear automatically — no HTML or JS edits.
3. **Use real numbers.** Ratios come from a recipe you've actually baked, not a guess off the internet. Tell us about it in the PR — we love hearing what worked (and what didn't).
4. Open `index.html` and poke at it until it feels right. No build, no CI, no waiting.

The schema is documented in the README under "Adding a new product".

## Sending it in

1. Fork the repo, make a branch.
2. Double-check the app still opens cleanly with no console errors.
3. Open a PR and tell us what you made and why it's good. Photos of the bake are always welcome. 🥖
