// ---------------------------------------------------------------------------
// Single source of truth for every product in the Sourdough Calculator.
//
// IMPORTANT: This is a JS file, NOT JSON. It declares normal JS. That keeps the
// site static (no fetch, no build step) so everything works on GitHub Pages and
// when opening index.html directly from disk.
//
// Every user-facing string is keyed per language (labels, chips, recipe text,
// comingSoon). Language-neutral data (ratios, keys, limits) lives once on the
// product. Call pLocal(p, lang) to get a product with the strings filled in for
// a given language (defined at the bottom of this file).
//
// To add a product, append one object and add its strings for each language.
// ---------------------------------------------------------------------------

const PRODUCTS = [
  {
    id: "bread",
    labels: { en: "Bread", nl: "Brood" },
    emoji: null,
    tags: { en: null, nl: null },
    disabled: false,
    accent: {
      color: "var(--amber)",
      soft: "rgba(207,159,66,0.16)",
      ring: "rgba(207,159,66,0.35)"
    },
    // Base-gram "default portion". Used in recipe/portion mode (chip presets).
    base: { starter: 100, flour: 450, water: 300, salt: 8, oil: 0, total: 858 },
    portionNames: { en: "full loaf", nl: "heel brood" },
    slider: { min: 300, max: 2600, step: 1, def: 858 },
    // "base" chips snap to the default portion scaled to the chosen weight;
    // "percent" chips just set the total weight (percent-driven).
    chipsSwitchTo: "base",
    chips: {
      en: [
        { text: "half loaf \u00B7 429 g", weight: 429 },
        { text: "full loaf \u00B7 858 g", weight: 858 },
        { text: "double loaf \u00B7 1716 g", weight: 1716 }
      ],
      nl: [
        { text: "half brood \u00B7 429 g", weight: 429 },
        { text: "heel brood \u00B7 858 g", weight: 858 },
        { text: "dubbel brood \u00B7 1716 g", weight: 1716 }
      ]
    },
// "Advanced" sliders. salt is % of total flour; hydration / starter / extras
    // are also % of total flour. Each extra adds an ingredient row.
    advanced: {
      salt: 1.6,
      hydration: { key: "hydration", min: 50, max: 90, step: 1, def: 70,
        labels: { en: "Hydration (water relative to total flour)", nl: "Hydratatie (water t.o.v. totaal bloem)" } },
      starter:   { key: "starter",   min: 10, max: 35, step: 1, def: 20,
        labels: { en: "Starter (relative to total flour)",        nl: "Starter (t.o.v. totaal bloem)" } },
      extras: []
    },
    widget: null,
    recipes: {
      en: {
        eyebrow: "bread &middot; method",
        title: "Bread: recipe &amp; method",
        tagline: "The general method in calculator form. Flour, water, salt &mdash; and time. Nothing extra, nothing missing.",
        tip: "use the calculator's total dough weight to size the loaf for your pan or banneton &mdash; the method is identical at any batch size.",
        notes: [
          { h: "Flour", p: "I use 100% whole wheat or 100% whole spelt. Prefer a lighter crumb? Mix in some white flour &mdash; start at 15% and go from there. The flour decides how much water the dough wants, and the general method's rule covers it: too dry, add a splash of water; too wet, add a little flour." },
          { h: "Water", p: "Start with the calculator's ratio, then trust your hands. The right amount shifts with your flour, your kitchen, even the weather &mdash; feel beats percentage." },
          { h: "The bake", p: "Identical to the general method: 250&deg;C with steam, straight down to 200&deg;C, 40 minutes, cool on a rack. No scoring needed &mdash; the folds do the bursting for you." }
        ]
      },
      nl: {
        eyebrow: "brood &middot; methode",
        title: "Brood: recept &amp; methode",
        tagline: "De algemene methode in calculatorvorm. Bloem, water, zout &mdash; en tijd. Niets extra, niets te veel.",
        tip: "gebruik het totale deeggewicht van de calculator om het brood op maat te maken voor je pan of rijsmandje &mdash; de methode is hetzelfde bij elk formaat.",
        notes: [
          { h: "Bloem", p: "Ik gebruik 100% volkoren tarwe of 100% volkoren spelt. Liever een luchtiger kruim? Meng er wat witte bloem door &mdash; begin bij 15% en ga van daar. Het soort bloem bepaalt hoeveel water het deeg wil, en de regel uit de algemene methode dekt het: te droog, beetje water erbij; te nat, beetje bloem." },
          { h: "Water", p: "Begin met de verhouding van de calculator en vertrouw dan op je handen. De juiste hoeveelheid verschuift met je bloem, je keuken, zelfs het weer &mdash; voelen slaat percentages." },
          { h: "Het bakken", p: "Identiek aan de algemene methode: 250&deg;C met stoom, meteen terug naar 200&deg;C, 40 minuten, afkoelen op een rooster. Geen inkervingen nodig &mdash; de vouwen zorgen zelf voor de scheuren." }
        ]
      }
    }
  },
{
    id: "pizza",
    labels: { en: "Pizza", nl: "Pizza" },
    emoji: null,
    tags: { en: null, nl: null },
    disabled: false,
    accent: {
      color: "var(--tomato)",
      soft: "rgba(193,80,46,0.16)",
      ring: "rgba(193,80,46,0.35)"
    },
    base: { starter: 100, flour: 500, water: 330, salt: 10, oil: 12, total: 952 },
    portionNames: { en: "pizza", nl: "pizza" },
    slider: { min: 300, max: 1200, step: 1, def: 952 },
    chipsSwitchTo: "percent",
    widget: { type: "balls", defaultCount: 4, defaultBallWeight: 237.5 },
    chips: {
      en: [
        { text: "2 balls", balls: 2 },
        { text: "4 balls", balls: 4 },
        { text: "6 balls", balls: 6 },
        { text: "8 balls", balls: 8 }
      ],
      nl: [
        { text: "2 ballen", balls: 2 },
        { text: "4 ballen", balls: 4 },
        { text: "6 ballen", balls: 6 },
        { text: "8 ballen", balls: 8 }
      ]
    },
    advanced: {
      salt: 2.0,
      hydration: { key: "hydration", min: 60, max: 70, step: 1, def: 65,
        labels: { en: "Hydration (water relative to total flour)", nl: "Hydratatie (water t.o.v. totaal bloem)" } },
      starter:   { key: "starter",   min: 10, max: 35, step: 1, def: 20,
        labels: { en: "Starter (relative to total flour)",        nl: "Starter (t.o.v. totaal bloem)" } },
      extras: [
        { key: "oil", min: 0, max: 8, step: 0.5, def: 3,
          names: { en: "Olive oil", nl: "Olijfolie" },
          labels: { en: "Olive oil (relative to total flour)", nl: "Olijfolie (t.o.v. totaal bloem)" } }
      ]
    },
recipes: {
      en: {
        eyebrow: "pizza &middot; method",
        title: "Pizza: recipe &amp; method",
        tagline: "The same starter, a different agenda. The general method gets the dough through its bulk ferment &mdash; then it splits into balls and bakes hot and fast.",
        tip: "use the ball weight and count on the calculator to scale this to any number of pizzas &mdash; the method doesn't change.",
        notes: [
          { h: "Flour", p: "White or strong bread flour, not the whole wheat from the general loaf &mdash; more gluten means more stretch. Whole wheat works for a heartier crust; just don't expect it to stretch as far." },
          { h: "The dough", p: "There's olive oil in this one (the calculator adds it), and the dough gets a proper knead &mdash; 5&ndash;10 minutes by hand &mdash; until it's smooth and elastic, not just combined." },
          { h: "Divide into balls", p: "After the bulk ferment, skip the bowl: divide the dough into balls and shape each one tight. Use the ball counter on the calculator to size your batch." },
          { h: "Cold proof", p: "24&ndash;72 hours, not a few hours to two days. The long fridge stay builds the flavour and makes the dough much easier to stretch. Do the full 72 if you can wait." },
          { h: "Before baking", p: "Take the balls out 2&ndash;3 hours ahead so they come to room temperature. Stretch each one by hand from the centre outward, leaving a puffy rim." },
          { h: "Bake hot", p: "As hot as your oven, steel or stone allows &mdash; ideally 280&ndash;300&deg;C. 60&ndash;90 seconds in a pizza oven, 6&ndash;9 minutes in a home oven. No steam: this crust is all heat." }
        ]
      },
      nl: {
        eyebrow: "pizza &middot; methode",
        title: "Pizza: recept &amp; methode",
        tagline: "Hetzelfde zuurdeeg, een ander plan. De algemene methode brengt het deeg door de bulkrijs &mdash; daarna splitst het in ballen en bakt het heet en snel.",
        tip: "gebruik het balgewicht en het aantal ballen op de calculator om dit recept te schalen naar eender welk aantal pizza's &mdash; de methode verandert niet.",
        notes: [
          { h: "Bloem", p: "Witte of sterke broodbloem, niet het volkorenmeel van de algemene methode &mdash; meer gluten betekent meer stretch. Volkoren kan, voor een steviger korst; alleen niet zo ver uitrekken." },
          { h: "Het deeg", p: "Hier zit olijfolie in (de calculator voegt 'm toe) en het deeg krijgt een echte kneedbeurt &mdash; 5&ndash;10 minuten met de hand &mdash; tot het glad en elastisch, niet alleen doorroering." },
          { h: "In ballen delen", p: "Na de bulkrijs sla je de kom over: verdeel het deeg in ballen en span ze strak. Gebruik de bal-teller op de calculator om je partij op maat te maken." },
          { h: "Koude rijs", p: "24&ndash;72 uur, niet een paar uur tot twee dagen. De lange koelkastfase bouwt smaak op en maakt het deeg veel gemakkelijker uit te rekken. Doe de volle 72 als je kan wachten." },
          { h: "Vóór het bakken", p: "Haal de ballen 2&ndash;3 uur van tevoren uit de koelkast zodat ze op kamertemperatuur komen. Rek elke bal van het midden naar buiten en houd een luchtige rand." },
          { h: "Heet bakken", p: "Zo heet als je oven, staalplateau of pizzasteen toelaat &mdash; ideaal 280&ndash;300&deg;C. 60&ndash;90 seconden in een pizzaoven, 6&ndash;9 minuten in een gewone oven. Geen stoom: deze korst draait puur om hitte." }
        ]
      }
    }
  },
{
    id: "focaccia",
    labels: { en: "Focaccia", nl: "Focaccia" },
    emoji: null,
    tags: { en: null, nl: null },
    disabled: false,
    accent: {
      color: "var(--olive)",
      soft: "rgba(138,154,91,0.16)",
      ring: "rgba(138,154,91,0.35)"
    },
    base: { starter: 100, flour: 440, water: 320, salt: 10, oil: 30, total: 900 },
    portionNames: { en: "standard pan", nl: "standaardpan" },
    slider: { min: 300, max: 2400, step: 1, def: 900 },
    chipsSwitchTo: "percent",
    chips: {
      en: [
        { text: "450 g", weight: 450 },
        { text: "standard pan \u00B7 900 g", weight: 900 },
        { text: "1350 g", weight: 1350 },
        { text: "1800 g", weight: 1800 }
      ],
      nl: [
        { text: "450 g", weight: 450 },
        { text: "standaardpan \u00B7 900 g", weight: 900 },
        { text: "1350 g", weight: 1350 },
        { text: "1800 g", weight: 1800 }
      ]
    },
    advanced: {
      salt: 2.0408163,
      hydration: { key: "hydration", min: 60, max: 85, step: 0.0001, def: 75.5102,
        labels: { en: "Hydration (water relative to total flour)", nl: "Hydratatie (water t.o.v. totaal bloem)" } },
      starter:   { key: "starter",   min: 10, max: 35, step: 0.0001, def: 20.4082,
        labels: { en: "Starter (relative to total flour)",        nl: "Starter (t.o.v. totaal bloem)" } },
      extras: [
        { key: "oil", min: 0, max: 10, step: 0.0001, def: 6.1224,
          names: { en: "Olive oil", nl: "Olijfolie" },
          labels: { en: "Olive oil (relative to total flour)", nl: "Olijfolie (t.o.v. totaal bloem)" } }
      ]
    },
    widget: null,
recipes: {
      en: {
        eyebrow: "focaccia &middot; method",
        title: "Focaccia: recipe &amp; method",
        tagline: "The easy one: no shaping, no scoring, no steam. Same general method up to the bulk ferment &mdash; then oil, a pan, dimples, and a hot flat bake.",
        tip: "match the dough weight to your baking sheet with the calculator, then follow the method &mdash; the dimples never change.",
        notes: [
          { h: "Olive oil, generously", p: "Oil goes in the dough, in the pan and on top. Focaccia is the one recipe where being greasy is the point &mdash; don't hold back." },
          { h: "Pan proof", p: "After the bulk ferment, no bowl: stretch the dough into a generously oiled baking sheet (30&times;40&nbsp;cm). It will try to spring back &mdash; give it a rest, then stretch again until it stays." },
          { h: "Dimple deep", p: "Oil your fingers and press all the way down to the bottom of the pan. The dimples collect the oil and crisp up the edges. Sea salt and rosemary are the classics &mdash; whatever you add, do it now." },
          { h: "Bake", p: "230&deg;C for 20&ndash;25 minutes until golden and crispy. No steam, no temperature drop &mdash; focaccia bakes flat, fast and direct." }
        ]
      },
      nl: {
        eyebrow: "focaccia &middot; methode",
        title: "Focaccia: recept &amp; methode",
        tagline: "De makkelijke: geen vorm, geen insnede, geen stoom. Dezelfde algemene methode tot aan de bulkrijs &mdash; daarna olie, een pan, kuiltjes en een hete platte bak.",
        tip: "stem het deeggewicht af op je bakplaat met de calculator en volg dan de methode &mdash; de kuiltjes veranderen nooit.",
        notes: [
          { h: "Royaal olijfolie", p: "Olie in het deeg, in de pan en er bovenop. Focaccia is het enige recept waar vet zijn het punt is &mdash; houd je niet in." },
          { h: "Rijzen in de pan", p: "Na de bulkrijs, geen kom: rek het deeg uit over een royaal ingevette bakplaat (30&times;40&nbsp;cm). Het zal terugveren &mdash; geef het rust en rek opnieuw tot het blijft liggen." },
          { h: "Diepe kuiltjes", p: "Olie je vingers en druk helemaal door tot op de bodem van de pan. De kuiltjes vangen de olie en maken de randen knapperig. Zeezout en rozemarijn zijn dé klassiekers &mdash; wat je ook toevoegt, doe het nu." },
          { h: "Bakken", p: "230&deg;C voor 20&ndash;25 minuten tot goudbruin en knapperig. Geen stoom, geen temperatuursdaling &mdash; focaccia bakt plat, snel en direct." }
        ]
      }
    }
  },
{
    id: "hotbuns",
    labels: { en: "Hot buns", nl: "Hete broodjes" },
    emoji: "\u{1FAD0}",
    tags: { en: "coming soon", nl: "binnenkort" },
    disabled: true,
    accent: {
      color: "var(--teal)",
      soft: "rgba(127,163,160,0.16)",
      ring: "rgba(127,163,160,0.35)"
    },
    base: null,
    portionNames: { en: "", nl: "" },
    slider: null,
    chipsSwitchTo: "base",
    chips: { en: [], nl: [] },
    advanced: { salt: 2, hydration: null, starter: null, extras: [] },
    widget: null,
    recipes: null,
    comingSoon: {
      en: "Ratios and the step-by-step recipe are coming soon. The calculator will work the same way &mdash; set a total dough weight and everything scales automatically.",
      nl: "De verhoudingen en het stap-voor-stap recept komen binnenkort. De calculator blijft hetzelfde werken &mdash; stel een totaal deeggewicht in en alles schaalt automatisch mee."
    }
  }
];

// Expose a tiny lookup so the standalone recipe pages can find one product.
window.PRODUCTS = PRODUCTS;
window.getProduct = (id) => PRODUCTS.find((p) => p.id === id);

// ---------------------------------------------------------------------------
// Shared-string helpers. Labels/chips/recipes stay keyed per product here;
// every *generic* interface string comes from assets/i18n.js instead of being
// duplicated in this file. tk(lang,key) looks the key up in the I18N
// dictionary without going through the page-level language state, so callers
// may pass any supported lang explicitly.
// ---------------------------------------------------------------------------
function tk(lang, key) {
  try {
    if (I18N[lang] && I18N[lang][key] != null) return I18N[lang][key];
    if (I18N.en && I18N.en[key] != null) return I18N.en[key];
  } catch (e) {}
  return key;
}

function pick(map, lang) {
  if (!map) return map;
  if (typeof map === 'string') return map;                 // plain string stays as-is
  return map[lang] != null ? map[lang] : map.en;            // localized: pick lang, else en
}

window.pLocal = function (p, lang) {
  const L = (I18N && I18N[lang]) ? lang : 'en';
  const out = Object.assign({}, p);
  out.label = pick(p.labels, L);
  out.tag   = pick(p.tags, L);
  out.portionName = pick(p.portionNames, L);
  // Chips: weight presets keep their own (mostly numeric) text; ball counts
  // render as a bare "<n> ×" since the row label carries the wording.
  const chipsRaw = pick(p.chips, L) || [];
  out.chips = chipsRaw.map(function (c) {
    if (c && c.balls != null) return Object.assign({}, c, { text: c.balls + " \u00D7" });
    return c;
  });
  out.comingSoon = pick(p.comingSoon, L);
  out.recipe = pick(p.recipes, L) || null;
  // Ingredient names shared across products -> dictionary (ing_* keys).
  const NAME_KEYS = {
    starter: "ing_starter", flour: "ing_flour", water: "ing_water",
    salt: "ing_salt", oil: "ing_oil"
  };
  const nameFor = (k) => tk(L, NAME_KEYS[k] || "");
  if (p.base) out.ingredients = Object.keys(p.base).map((k) => ({ key: k, name: nameFor(k) }));
  if (p.advanced) {
    out.advanced = Object.assign({}, p.advanced, {
      hydration: p.advanced.hydration ? Object.assign({}, p.advanced.hydration, { label: pick(p.advanced.hydration.labels, L), pctLabel: tk(L, "hydrationPct") }) : null,
      starter:   p.advanced.starter   ? Object.assign({}, p.advanced.starter,   { label: pick(p.advanced.starter.labels, L), pctOfFlour: tk(L, "pctOfFlour") }) : null,
      extras:    (p.advanced.extras || []).map(function (ex) {
        return Object.assign({}, ex, { label: pick(ex.labels, L), name: pick(ex.names, L), pctOfFlour: tk(L, "pctOfFlour") });
      })
    });
  }
  out.doneBalls = tk(L, "doneBalls");
  return out;
};