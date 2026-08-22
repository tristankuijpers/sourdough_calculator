// ---------------------------------------------------------------------------
// Single source of truth for every product in the Sourdough Calculator.
//
// IMPORTANT: This is a JS file, NOT JSON. It declares normal JS. That keeps the
// site static (no fetch, no build step) so everything works on GitHub Pages and
// when opening index.html directly from disk. The data itself is written in a
// simple JSON-like shape and mirrors the schema in README.md.
//
// To add a product, append one more object to this array. That's the whole job.
// ---------------------------------------------------------------------------

const PRODUCTS = [
  {
    id: "bread",
    label: "Bread",
    emoji: null,
    tag: null,
    disabled: false,
    accent: {
      color: "var(--amber)",
      soft: "rgba(207,159,66,0.16)",
      ring: "rgba(207,159,66,0.35)"
    },
    // Base-gram "default portion". Used in recipe/portion mode (chip presets).
    base: { starter: 100, flour: 450, water: 300, salt: 8, oil: 0, total: 858 },
    portionName: "full loaf",
    slider: { min: 300, max: 2600, step: 1, def: 858 },
    // How a preset chip behaves: "base" snaps to the default portion scaled to
    // the chosen weight; "percent" just sets the total weight (percent-driven).
    chipsSwitchTo: "base",
    chips: [
      { text: "half loaf \u00B7 429 g", weight: 429 },
      { text: "full loaf \u00B7 858 g", weight: 858 },
      { text: "double loaf \u00B7 1716 g", weight: 1716 }
    ],
    // "Advanced" sliders. salt is % of total flour; hydration / starter / extras
    // are also % of total flour. Each extra adds an ingredient row (key becomes
    // the element-id suffix).
    advanced: {
      salt: 1.6,
      hydration: { key: "hydration", label: "Hydration (water relative to total flour)", min: 50, max: 90, step: 1, def: 70 },
      starter:   { key: "starter",   label: "Starter (relative to total flour)",        min: 10, max: 35, step: 1, def: 20 },
      extras: []
    },
    widget: null,
    recipe: {
      eyebrow: "bread &middot; method",
      title: "Bread: recipe &amp; method",
      tagline: "The general method in calculator form. Flour, water, salt &mdash; and time. Nothing extra, nothing missing.",
      tip: "use the calculator's total dough weight to size the loaf for your pan or banneton &mdash; the method is identical at any batch size.",
      // Every recipe starts from the general method (recipes/getting-started.html);
      // `notes` only lists what differs for this bake or what to keep an eye on.
      notes: [
        { h: "Flour", p: "I use 100% whole wheat or 100% whole spelt. Prefer a lighter crumb? Mix in some white flour &mdash; start at 15% and go from there. The flour decides how much water the dough wants, and the general method's rule covers it: too dry, add a splash of water; too wet, add a little flour." },
        { h: "Water", p: "Start with the calculator's ratio, then trust your hands. The right amount shifts with your flour, your kitchen, even the weather &mdash; feel beats percentage." },
        { h: "The bake", p: "Identical to the general method: 250&deg;C with steam, straight down to 200&deg;C, 40 minutes, cool on a rack. No scoring needed &mdash; the folds do the bursting for you." }
      ]
    }
  },

  {
    id: "pizza",
    label: "Pizza",
    emoji: null,
    tag: null,
    disabled: false,
    accent: {
      color: "var(--tomato)",
      soft: "rgba(193,80,46,0.16)",
      ring: "rgba(193,80,46,0.35)"
    },
    base: { starter: 100, flour: 500, water: 330, salt: 10, oil: 10, total: 950 },
    portionName: "4 dough balls",
    slider: { min: 300, max: 3000, step: 1, def: 950 },
    chipsSwitchTo: "base",
    chips: [
      { text: "2 balls", balls: 2 },
      { text: "4 balls", balls: 4 },
      { text: "6 balls", balls: 6 },
      { text: "8 balls", balls: 8 }
    ],
    advanced: {
      salt: 1.8181818,
      hydration: { key: "hydration", label: "Hydration (water relative to total flour)", min: 50, max: 85, step: 0.0001, def: 69.0909 },
      starter:   { key: "starter",   label: "Starter (relative to total flour)",        min: 10, max: 35, step: 0.0001, def: 18.1818 },
      extras: [
        { key: "oil", name: "Olive oil", label: "Olive oil (relative to total flour)", min: 0, max: 8, step: 0.0001, def: 1.8182 }
      ]
    },
    widget: { type: "balls", defaultCount: 4, defaultBallWeight: 237.5 },
    // "Reset to defaults" also snaps the weight back to the default portion.
    resetWeight: true,
    recipe: {
      eyebrow: "pizza &middot; method",
      title: "Pizza: recipe &amp; method",
      tagline: "The same starter, a different agenda. The general method gets the dough through its bulk ferment &mdash; then it splits into balls and bakes hot and fast.",
      tip: "use the ball weight and count on the calculator to scale this to any number of pizzas &mdash; the method doesn't change.",
      // Every recipe starts from the general method (recipes/getting-started.html);
      // `notes` only lists what differs for this bake or what to keep an eye on.
      notes: [
        { h: "Flour", p: "White or strong bread flour, not the whole wheat from the general loaf &mdash; more gluten means more stretch. Whole wheat works for a heartier crust; just don't expect it to stretch as far." },
        { h: "The dough", p: "There's olive oil in this one (the calculator adds it), and the dough gets a proper knead &mdash; 5&ndash;10 minutes by hand &mdash; until it's smooth and elastic, not just combined." },
        { h: "Divide into balls", p: "After the bulk ferment, skip the bowl: divide the dough into balls and shape each one tight. Use the ball counter on the calculator to size your batch." },
        { h: "Cold proof", p: "24&ndash;72 hours, not a few hours to two days. The long fridge stay builds the flavour and makes the dough much easier to stretch. Do the full 72 if you can wait." },
        { h: "Before baking", p: "Take the balls out 2&ndash;3 hours ahead so they come to room temperature. Stretch each one by hand from the centre outward, leaving a puffy rim." },
        { h: "Bake hot", p: "As hot as your oven, steel or stone allows &mdash; ideally 280&ndash;300&deg;C. 60&ndash;90 seconds in a pizza oven, 6&ndash;9 minutes in a home oven. No steam: this crust is all heat." }
      ]
    }
  },
{
    id: "focaccia",
    label: "Focaccia",
    emoji: null,
    tag: null,
    disabled: false,
    accent: {
      color: "var(--olive)",
      soft: "rgba(138,154,91,0.16)",
      ring: "rgba(138,154,91,0.35)"
    },
    base: { starter: 100, flour: 440, water: 320, salt: 10, oil: 30, total: 900 },
    portionName: "standard pan",
    slider: { min: 300, max: 2400, step: 1, def: 900 },
    chipsSwitchTo: "percent",
    chips: [
      { text: "450 g", weight: 450 },
      { text: "standard pan \u00B7 900 g", weight: 900 },
      { text: "1350 g", weight: 1350 },
      { text: "1800 g", weight: 1800 }
    ],
    advanced: {
      salt: 2.0408163,
      hydration: { key: "hydration", label: "Hydration (water relative to total flour)", min: 60, max: 85, step: 0.0001, def: 75.5102 },
      starter:   { key: "starter",   label: "Starter (relative to total flour)",        min: 10, max: 35, step: 0.0001, def: 20.4082 },
      extras: [
        { key: "oil", name: "Olive oil", label: "Olive oil (relative to total flour)", min: 0, max: 10, step: 0.0001, def: 6.1224 }
      ]
    },
    widget: null,
    recipe: {
      eyebrow: "focaccia &middot; method",
      title: "Focaccia: recipe &amp; method",
      tagline: "The easy one: no shaping, no scoring, no steam. Same general method up to the bulk ferment &mdash; then oil, a pan, dimples, and a hot flat bake.",
      tip: "match the dough weight to your baking sheet with the calculator, then follow the method &mdash; the dimples never change.",
      // Every recipe starts from the general method (recipes/getting-started.html);
      // `notes` only lists what differs for this bake or what to keep an eye on.
      notes: [
        { h: "Olive oil, generously", p: "Oil goes in the dough, in the pan and on top. Focaccia is the one recipe where being greasy is the point &mdash; don't hold back." },
        { h: "Pan proof", p: "After the bulk ferment, no bowl: stretch the dough into a generously oiled baking sheet (30&times;40&nbsp;cm). It will try to spring back &mdash; give it a rest, then stretch again until it stays." },
        { h: "Dimple deep", p: "Oil your fingers and press all the way down to the bottom of the pan. The dimples collect the oil and crisp up the edges. Sea salt and rosemary are the classics &mdash; whatever you add, do it now." },
        { h: "Bake", p: "230&deg;C for 20&ndash;25 minutes until golden and crispy. No steam, no temperature drop &mdash; focaccia bakes flat, fast and direct." }
      ]
    }
  },
{
    id: "hotbuns",
    label: "Hot buns",
    emoji: "\u{1FAD0}",
    tag: "coming soon",
    disabled: true,
    accent: {
      color: "var(--teal)",
      soft: "rgba(127,163,160,0.16)",
      ring: "rgba(127,163,160,0.35)"
    },
    base: null,
    portionName: "",
    slider: null,
    chipsSwitchTo: "base",
    chips: [],
    advanced: { salt: 2, hydration: null, starter: null, extras: [] },
    widget: null,
    recipe: null,
    comingSoon: "Ratios and the step-by-step recipe are coming soon. The calculator will work the same way &mdash; set a total dough weight and everything scales automatically."
  }
];

// Expose a tiny lookup so the standalone recipe pages can find one product.
window.PRODUCTS = PRODUCTS;
window.getProduct = (id) => PRODUCTS.find((p) => p.id === id);