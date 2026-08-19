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
- **Let the math do the math.** Don't hardcode gram amounts — pipe your ratios through the shared `computeDough(W, h, s, sp, o)` function so the sliders stay alive and scalable, same as Bread/Pizza/Focaccia.

## Got a recipe? Here's how to add it

Follow the README's ["Adding a new product tab"](README.md#adding-a-new-product-tab) section:

1. Add a `.tab` button + matching `.tabpanel` in [index.html](index.html).
2. Wire up sliders/JS following the Bread/Pizza/Focaccia pattern (an `updateX()` function, chip presets, reset button, `persistValue`/`restoreValue` for `localStorage`).
3. Add `recipes/<product>.html` (copy an existing one) and `recipes/<product>-content.js` for the step-by-step method.
4. Open `index.html` and poke at it until it feels right. No build, no CI, no waiting.

One ask: make sure the ratios come from a recipe you've actually baked, not a guess off the internet. Tell us about it in the PR — we love hearing what worked (and what didn't).

## Sending it in

1. Fork the repo, make a branch.
2. Double-check the app still opens cleanly with no console errors.
3. Open a PR and tell us what you made and why it's good. Photos of the bake are always welcome. 🥖
