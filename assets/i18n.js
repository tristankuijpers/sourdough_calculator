// ---------------------------------------------------------------------------
// i18n.js — dictionary + tiny language engine.
//
// Covers ALL interface copy (headings, buttons, labels, share texts). Product
// copy lives in products.js, keyed per language there. Adding a language =
// add an object here and matching fields in products.js. No build step.
//
// Placeholders: %s are substituted left-to-right by t().
//
// Engine API (bottom of this file):
//   I18N.lang()          -> active code ('en' | 'nl'), resolved once:
//                          ?lang= param > localStorage > browser > 'en'
//   I18N.t(key, ...args) -> translated string, %s replaced sequentially
//   I18N.other()         -> the *other* supported language code
//   I18N.toggleLang()    -> persist other language and reload the page
//   I18N.apply([root])   -> fill every [data-i18n] / [data-i18n-html] node
// ---------------------------------------------------------------------------

const I18N = {
  en: {
    lang: "en",
    title: "Sourdough Calculator",
    metaDesc: "Set a total dough weight and every sourdough baker's percentage scales automatically — flour, water, starter, salt & oil, for bread, pizza and focaccia.",
    eyebrow: "starter 50/50 flour·water",
    sub: "Set the total dough weight &mdash; every ratio scales automatically.",
    getStarted: "Getting started with sourdough",
    footer: "Built by TK/LAB &middot; <a href=\"https://github.com/tristankuijpers/sourdough_calculator\" target=\"_blank\" rel=\"noopener\">open source on GitHub</a>",
    shareApp: "Share this app",

    totalDough: "Total dough weight",
    ingredients: "INGREDIENTS",
    recipeMethod: "📖 Recipe &amp; method",
    advanced: "Advanced",
    resetDefaults: "Reset to defaults",
    helperTotalFlour: "total flour incl. starter: <b>%s g</b>",
    doneBalls: "dough balls of",

    ing_starter: "Starter (50/50)",
    ing_flour: "Flour",
    ing_water: "Water",
    ing_salt: "Salt",
    ing_oil: "Olive oil",
    pctOfFlour: "of flour",
    hydrationPct: "hydration %s%",

    shareTitle: "Sourdough Calculator",
    shareText: "Sourdough Calculator — scale bread, pizza & focaccia dough",
    shareUnavailable: "Native sharing is unavailable on this device.",
    shareFailed: "Could not open the share sheet. Please try again.",

    back: "&larr; Back to calculator",
    generalCallout: "Every bake on this site starts from the same general method. Read it once &mdash; it applies to all of them. Below: only what differs for this one.",
    getStartedLink: "Getting started with sourdough &rarr;",
    notesFor: "Notes for %s",
    tip: "Tip:",
    recipeSuffix: " — Sourdough Calculator",
    recipeMetaSuffix: " sourdough recipe — ",

    gs_eyebrow: "getting started &middot; the general method",
    gs_title: "Getting Started with Sourdough",
    gs_sub: "One method, three steps, a lot of waiting. Read this once &mdash; every bake on this site is a variation on it.",
    gs_meta_title: "Getting Started with Sourdough &mdash; Sourdough Calculator",
    gs_meta_desc: "One general sourdough method, three steps and a lot of waiting. How to feed your starter, fold the dough and bake a 40-minute loaf — about ten minutes of actual work.",
    calcCta: "Set your total dough weight on the calculator &rarr;"
  },

  nl: {
    lang: "nl",
    title: "Zuurdesemcalculator",
    metaDesc: "Stel een totaal deeggewicht in en elke baksverhouding schaalt automatisch mee — bloem, water, starter, zout & olie, voor brood, pizza en focaccia.",
    eyebrow: "starter 50/50 bloem·water",
    sub: "Stel het totale deeggewicht in &mdash; elke verhouding schaalt automatisch mee.",
    getStarted: "Aan de slag met zuurdesem",
    footer: "Gemaakt door TK/LAB &middot; <a href=\"https://github.com/tristankuijpers/sourdough_calculator\" target=\"_blank\" rel=\"noopener\">open source op GitHub</a>",
    shareApp: "Deel deze app",

    totalDough: "Totaal deeggewicht",
    ingredients: "INGREDIËNTEN",
    recipeMethod: "📖 Recept &amp; methode",
    advanced: "Geavanceerd",
    resetDefaults: "Terug naar standaardwaarden",
    helperTotalFlour: "totaal bloem incl. starter: <b>%s g</b>",
    doneBalls: "deegballen van",

    ing_starter: "Zuurdesemstarter (50/50)",
    ing_flour: "Bloem",
    ing_water: "Water",
    ing_salt: "Zout",
    ing_oil: "Olijfolie",
    pctOfFlour: "van de bloem",
    hydrationPct: "hydratatie %s%",

    shareTitle: "Zuurdesemcalculator",
    shareText: "Zuurdesemcalculator — schaal brood-, pizza- en focacciadeeg",
    shareUnavailable: "Delen op dit apparaat wordt niet ondersteund.",
    shareFailed: "Kon het deelmenu niet openen. Probeer opnieuw.",

    back: "&larr; Terug naar calculator",
    generalCallout: "Elke bak op deze site begint met dezelfde algemene methode. Lees die één keer &mdash; hij geldt voor alle baksels. Hieronder: enkel wat er voor dit baksel afwijkt.",
    getStartedLink: "Aan de slag met zuurdesem &rarr;",
    notesFor: "Aandachtspunten voor %s",
    tip: "Tip:",
    recipeSuffix: " — Zuurdesemcalculator",
    recipeMetaSuffix: " zuurdesemrecept — ",

    gs_eyebrow: "aan de slag &middot; de algemene methode",
    gs_title: "Aan de slag met zuurdesem",
    gs_sub: "Eén methode, drie stappen, veel wachttijd. Lees dit één keer &mdash; elk baksel op deze site is een variatie erop.",
    gs_meta_title: "Aan de slag met zuurdesem &mdash; Zuurdesemcalculator",
    gs_meta_desc: "Eén algemene zuurdesemmethode, drie stappen en veel wachttijd. Hoe je je starter voedt, het deeg vouwt en in 40 minuten een brood bakt — zo'n tien minuten echt werk.",
    calcCta: "Stel je totale deeggewicht in op de calculator &rarr;"
  }
};

// ------------------------------ engine -------------------------------------
(function () {
  var KEY = 'sd_lang';

  function persist(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  function detect() {
    // 1) explicit ?lang= wins and sticks for later visits
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q && I18N[q.toLowerCase()]) { persist(q.toLowerCase()); return q.toLowerCase(); }
    } catch (e) {}
    // 2) previously chosen language
    try {
      var s = localStorage.getItem(KEY);
      if (s && I18N[s]) return s;
    } catch (e) {}
    // 3) browser preference (first match in order)
    try {
      var langs = navigator.languages || [navigator.language || ''];
      for (var i = 0; i < langs.length; i++) {
        var base = String(langs[i] || '').toLowerCase().split('-')[0];
        if (base === 'nl') return 'nl';
        if (base === 'en') return 'en';
      }
    } catch (e) {}
    return 'en';
  }

  var CUR = null;

  I18N.lang = function () {
    if (!CUR) CUR = detect();
    return CUR;
  };

  I18N.t = function (key) {
    var d = I18N[this.lang()] || I18N.en;
    var s = (d[key] != null) ? d[key] : ((I18N.en[key] != null) ? I18N.en[key] : key);
    for (var i = 1; i < arguments.length; i++) s = s.split('%s').join(String(arguments[i]));
    return s;
  };

  I18N.other = function () { return this.lang() === 'nl' ? 'en' : 'nl'; };

  I18N.switchLang = function (target) {
    persist(target);
    // Strip ?lang= from the URL before reloading, otherwise the stale param
    // would override the just-persisted choice.
    try {
      var u = new URL(location.href);
      if (u.searchParams.has('lang')) {
        u.searchParams.delete('lang');
        location.href = u.toString();
        return;
      }
    } catch (e) {}
    location.reload();
  };

  I18N.toggleLang = function () { this.switchLang(this.other()); };

  // Fill static markup: data-i18n -> textContent, data-i18n-html -> innerHTML.
  I18N.apply = function (root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = I18N.t(el.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = I18N.t(el.getAttribute('data-i18n-html'));
    });
  };

  // Wire the flag toggle: two .flag-btn buttons (data-lang="en"|"nl").
  // The flag of the ACTIVE language is highlighted; clicking the other one
  // switches (persisted) and reloads.
  I18N.wireFlags = function (root) {
    root = root || document;
    var cur = I18N.lang();
    root.querySelectorAll('.flag-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === cur);
      btn.addEventListener('click', function () {
        var target = btn.dataset.lang;
        if (target && I18N[target] && target !== cur) I18N.switchLang(target);
      });
    });
  };
})();