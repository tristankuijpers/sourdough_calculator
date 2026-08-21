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
      tagline: "A straightforward sourdough bread timeline. Weigh ingredients with the calculator, then follow these steps.",
      tip: "use the calculator's total dough weight and slider to size the recipe for your pan or banneton, then follow this method regardless of batch size &mdash; the ratios stay the same.",
      steps: [
        { h: "Feed your starter", p: "8&ndash;12 hours before mixing, feed your starter (equal parts flour and water) so it's active and roughly doubled, with a domed top, at mixing time." },
        { h: "Mix", p: "Combine the starter and water first, then mix in the flour until no dry bits remain. Rest 30&ndash;60 minutes (autolyse) before adding salt." },
        { h: "Add salt &amp; strengthen the dough", p: "Add the salt with a splash of the mixed water, then fold or knead briefly. Over the next 2 hours, do 3&ndash;4 sets of stretch-and-folds, spaced 30 minutes apart." },
        { h: "Bulk fermentation", p: "Let the dough rise at room temperature (24&ndash;26&deg;C) until it's grown 40&ndash;60% in volume and feels airy and jiggly &mdash; typically 4&ndash;6 hours, longer if your kitchen is cooler." },
        { h: "Shape", p: "Turn the dough out gently, pre-shape into a round, rest 20&ndash;30 minutes, then shape firmly into its final form (boule or batard)." },
        { h: "Cold proof", p: "Place the shaped dough seam-side up in a floured banneton and refrigerate for 8&ndash;18 hours. A longer cold proof deepens the flavor." },
        { h: "Bake", p: "Preheat a Dutch oven at 250&deg;C for 45 minutes. Score the cold dough, bake covered for 20 minutes, then uncovered at 230&deg;C for another 20&ndash;25 minutes until deeply golden." }
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
      tagline: "A straightforward sourdough pizza dough timeline. Weigh ingredients with the calculator, then follow these steps.",
      tip: "use the ball weight and count inputs on the calculator to scale this recipe to any number of pizzas &mdash; the method stays identical.",
      steps: [
        { h: "Feed your starter", p: "8&ndash;12 hours before mixing, feed your starter so it's active and roughly doubled at mixing time." },
        { h: "Mix", p: "Dissolve the starter into the water, then mix in the flour until no dry bits remain. Rest 30 minutes (autolyse) before adding salt and oil." },
        { h: "Add salt &amp; oil", p: "Add the salt and olive oil, then knead or fold until the dough is smooth and elastic, about 5&ndash;10 minutes by hand." },
        { h: "Bulk fermentation", p: "Let the dough rise at room temperature until it's grown about 50% in volume, roughly 2&ndash;4 hours, with 2 sets of stretch-and-folds in the first hour." },
        { h: "Divide into balls", p: "Use the Pizza Ball Calculator on the main page to size your batch, then divide the dough and shape each portion into a tight ball." },
        { h: "Cold proof", p: "Place the balls in lightly oiled, covered containers and refrigerate for 24&ndash;72 hours for the best flavor and easiest stretching." },
        { h: "Bring to room temperature &amp; stretch", p: "Take the balls out 2&ndash;3 hours before baking. Stretch each one by hand from the center outward, leaving a puffy rim." },
        { h: "Bake", p: "Bake as hot as your oven/steel/stone allows (ideally 280&ndash;300&deg;C), until the crust is blistered and the base is set, usually 60&ndash;90 seconds in a pizza oven or 6&ndash;9 minutes in a home oven." }
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
      tagline: "A straightforward sourdough focaccia timeline. Weigh ingredients with the calculator, then follow these steps.",
      tip: "use the calculator's total dough weight and slider to size the recipe for your pan, then follow this method regardless of batch size &mdash; the ratios stay the same.",
      steps: [
        { h: "Feed your starter", p: "Ensure your starter is active and roughly doubled before you start mixing." },
        { h: "Mix &amp; autolyse", p: "Dissolve the starter in the water, add the flour, and mix until no dry bits remain. Rest before adding salt and oil." },
        { h: "Add salt &amp; oil", p: "Add the salt and olive oil, then knead or fold until the dough is smooth and cohesive." },
        { h: "Bulk fermentation", p: "Let the dough rise at room temperature, performing periodic stretch-and-folds during the first few hours until it's aerated and puffy." },
        { h: "Cold proof", p: "Transfer the covered dough to the refrigerator for cold fermentation." },
        { h: "Pan proof &amp; dimple", p: "Transfer the dough to a generously oiled baking sheet (30&times;40&nbsp;cm). Gently stretch it to fill the pan, dimple deeply with oiled fingers, and add toppings (sea salt, rosemary, olive oil)." },
        { h: "Bake", p: "Bake at 230&deg;C for 20&ndash;25 minutes until golden and crispy." }
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