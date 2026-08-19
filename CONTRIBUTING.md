# Contributing

Thanks for considering a contribution! This is a static, dependency-free HTML/CSS/JS project, so contributing is deliberately low-friction.

## Setup

There's no build step and nothing to install. Just open [index.html](index.html) in a browser, or serve it locally:

```sh
python3 -m http.server 8000
```

## Ground rules

- **Vanilla only**: plain HTML/CSS/JS. No frameworks, no build tools, no npm dependencies.
- **Static-hosting only**: this runs on GitHub Pages — no server, no backend, no database. See the README's "Before adding any new feature" checklist before proposing anything that might need one.
- **Baker's percentages go through `computeDough()`**: don't hardcode gram amounts for a new product's ratios — derive them from the shared `computeDough(W, h, s, sp, o)` function so the sliders stay consistent, the same way Bread/Pizza/Focaccia do.

## Adding a new recipe/product

Follow the README's ["Adding a new product tab"](README.md#adding-a-new-product-tab) section:

1. Add a `.tab` button + matching `.tabpanel` in [index.html](index.html).
2. Wire up sliders/JS following the Bread/Pizza/Focaccia pattern (an `updateX()` function, chip presets, reset button, `persistValue`/`restoreValue` for `localStorage`).
3. Add `recipes/<product>.html` (copy an existing one) and `recipes/<product>-content.js` for the step-by-step guide.
4. Test locally by opening `index.html` directly — no build/CI needed.

Ratios should come from a recipe you've actually tested, not a guess — mention your source/testing in the PR description.

## Submitting a PR

1. Fork the repo and create a branch for your change.
2. Make sure the app still opens and works with no console errors.
3. Open a PR against `main` describing what changed and why.
