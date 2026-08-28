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
    pctOfFlour: "of the total flour",
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
    calcCta: "Set your total dough weight on the calculator &rarr;",
    /* ---- Getting Started body copy (en) ---- */
    gs_lede:
      "Sourdough sounds like a project: feeding schedules, exac" +
      "t timings, a starter you have to keep alive like a pet. I" +
      "t isn&rsquo;t. My whole method is three steps with a lot of " +
      "waiting in between &mdash; and every recipe on this site i" +
      "s just a variation on this one story. This is how I make " +
      "my sourdough loaf.",

    gs_ingredients_h: "Ingredients",
    gs_ing_starter: "Sourdough starter",
    gs_ing_flour: "(Whole wheat) flour",
    gs_ing_water: "Water",
    gs_ing_salt: "Salt",

    gs_ing_flour_p:
      "I bake my loaves with 100% whole wheat flour, or 100% who" +
      "le spelt. You can also go 85% whole grain, or mix in some " +
      "white flour. The flour you pick decides how much water the" +
      " dough wants &mdash; but you&rsquo;ll learn to feel that as " +
      "you go (too dry, too wet) and adjust. Since it&rsquo;s prac" +
      "tically the only ingredient in the loaf, I always go for t" +
      "he best organic flour I can find, from a local producer.",

    gs_ing_water_p: "I use plain tap water, straight from the tap.",
    gs_ing_salt_p:
      "And whatever salt is on hand. Coarse or fine &mdash; it di" +
      "ssolves in the dough either way.",

    gs_starter_h: "The starter",
    gs_starter_p1:
      "Try to get a starter from a friend who&rsquo;s properly int"
      + "o sourdough. Or <a href=\"making-a-starter.html\">grow yo"
      + "ur own from scratch</a> &mdash; it takes about a week and a"
      + " few feeds a day.",
    gs_starter_p2:
      "For this recipe we start from 100g of active starter: 50g " +
      "whole wheat flour and 50g water. What &ldquo;active&rdquo; m" +
      "eans exactly, you&rsquo;ll find out by doing, in the steps " +
      "below.",

    gs_method_h: "The method",
    gs_method_intro:
      "This is how I bake my sourdough loaves. I&rsquo;ve kept the " +
      "process as simple as I could. Consider it a first handhold" +
      ", not a rulebook &mdash; feel free to let go of it whenever" +
      " you like.",

    gs_step1_h: "1 &middot; Set the loaf going",
    gs_step1_p1:
      "Take a big pot with a lid, and take your active starter ou" +
      "t of the fridge (how it ended up there &mdash; see step 2)." +
      " Spoon all of the starter into the pot.",
    gs_step1_p2:
      "Now feed the starter: the jar it lived in still has some g" +
      "oo on the inside, and that goo carries more than enough mi" +
      "crobes to start a fresh colony. Add 50g whole wheat flour a" +
      "nd 50g water, and stir it through with the same spoon. The " +
      "starter is fed now, but not active yet. Put the lid back on" +
      " the jar and leave it on the counter.",
    gs_step1_p3:
      "Into the pot go 450g flour, 300g water and 8g salt &mdash;" +
      " stir with the same spoon. After a minute of stirring you " +
      "should have a proper ball of dough: no loose flour left, a" +
      "nd not too runny either. Too dry? Add a little water. Too " +
      "wet? Add a little flour. Lid on the pot, and set it on the" +
      " counter next to the starter.",
    gs_step1_p4:
      "Now the last ingredient makes its entrance: time. Wait a f" +
      "ew hours &mdash; anywhere from four to twelve, depending on" +
      " the room temperature.",

    gs_step2_h: "2 &middot; Fold",
    gs_step2_p1:
      "The dough in the pot has doubled in volume, and so has the" +
      " starter. That&rsquo;s when the starter is active. You&rsquo;" +
      "ll recognise it by the gas bubbles and that vinegary, sour " +
      "smell.",
    gs_step2_p2:
      "With an active starter you can either set a new loaf going" +
      " (step 1), or put the starter in the fridge. In the fridge" +
      " the microbes stop multiplying &mdash; the starter goes on " +
      "pause. It stays alive and ready for your next bake, and i" +
      "t&rsquo;ll survive weeks in there without any fuss.",
    gs_step2_p3:
      "Dust your work surface with flour and turn the risen dough" +
      " out onto it. Fold it like this: take the right side of th" +
      "e dough and fold it to the left, landing about two-thirds " +
      "across. Then do the same from the left. Then take the top " +
      "and fold it down, and finally the bottom and fold it up. L" +
      "ike folding a T-shirt. Repeat a few rounds &mdash; each one" +
      " gets harder as the stretch runs out. The moment you feel " +
      "the dough would tear: stop. You&rsquo;re done. I fold three " +
      "or four rounds at most, which takes under two minutes. Fli" +
      "p the ball over so all the folds end up underneath, and ro" +
      "und it into a neat ball.",
    gs_step2_p4:
      "Take a big bowl the dough fits in, in whatever shape you l" +
      "ike &mdash; round, long, whatever. It decides the final sha" +
      "pe of your loaf. A banneton works too. Line it with a kitc" +
      "hen towel, set the dough ball on top (folds still undernea" +
      "th), fold the towel over so the dough doesn&rsquo;t dry out" +
      ", and put it in the fridge. The cold proof can run anywher" +
      "e from a few hours to a full two days &mdash; and it&rsquo;s" +
      " where the loaf picks up its rich flavour.",

    gs_step3_h: "3 &middot; Bake",
    gs_step3_p1:
      "Preheat the oven to 250&deg;C and try to build up a good a" +
      "mount of steam. If your oven has a steam bake function, use" +
      " it. Otherwise, put a bowl of water in the oven, or bake t" +
      "he loaf in a cloche.",
    gs_step3_p2:
      "Once the oven is hot, take the dough out of the fridge and" +
      " tip it onto a baking sheet lined with parchment &mdash; fo" +
      "lds-side up. The bread will burst open right along those f" +
      "olds and form a delicious crust.",
    gs_step3_p3:
      "Into the oven, and immediately down to 200&deg;C. Bake for" +
      " 40 minutes. You&rsquo;ll see the loaf roughly double in the" +
      " oven &mdash; that&rsquo;s exactly why the steam matters: the" +
      " crust mustn&rsquo;t set too early.",
    gs_step3_p4: "Take the loaf out and let it cool on a rack.",

    gs_schedule_h: "Fitting it into a normal week",
    gs_schedule_intro:
      "Three steps, and a lot of time in between. It can look ove" +
      "rwhelming. It doesn&rsquo;t have to be. Here&rsquo;s how I fi" +
      "t it into a regular work week. Say we start on a Monday ev" +
      "ening.",
    gs_schedule_mon:
      "<b>Monday evening, after dinner:</b> I set my loaf going. " +
      "The starter is active and in the fridge, and flour, water " +
      "and salt are on hand &mdash; this takes literally five minu" +
      "tes. And if you were paying attention: after this step the" +
      "re&rsquo;s exactly one spoon to wash.",
    gs_schedule_tue_am:
      "<b>Tuesday morning, twelve hours later:</b> the dough has " +
      "risen and is ready to fold. Another five minutes or so, th" +
      "ough now there&rsquo;s also a work surface to wipe down. Th" +
      "e folded loaf goes in the fridge, together with the active" +
      " starter.",
    gs_schedule_tue_pm:
      "<b>Tuesday evening, after dinner:</b> I bake. This step ta" +
      "kes 40 minutes &mdash; but unless it&rsquo;s your very first" +
      " sourdough loaf, you&rsquo;re not going to spend those 40 m" +
      "inutes staring at the oven.",
    gs_schedule_wed:
      "<b>Wednesday morning:</b> you've got the loaf you started" +
      " on Monday evening.",

    gs_punchline:
      "In total, making a loaf costs a good ten minutes of actual" +
      " work.",
    /* ---- Making a starter from scratch (en) ---- */
    ms_eyebrow: "making a starter &middot; from scratch",
    ms_title: "Making a Sourdough Starter from Scratch",
    ms_sub: "No friend&rsquo;s starter handy? Grow your own. Flour, water and about a week of patience &mdash; here&rsquo;s how.",
    ms_meta_title: "Making a Sourdough Starter from Scratch &mdash; Sourdough Calculator",
    ms_meta_desc: "No friend's starter handy? Grow your own. Flour, water and about a week of patience — a day-by-day guide to making a sourdough starter from scratch.",
    ms_lede:
      "To grow a starter you don&rsquo;t need much, and it takes longe" +
      "r than people like to admit &mdash; a week at least. The good n" +
      "ews: almost none of that time is work. Here&rsquo;s how I&rsqu" +
      "o;d start one today.",
    ms_need_h: "What you&rsquo;ll need",
    ms_need_jar: "A clean jar",
    ms_need_flour: "Whole wheat flour",
    ms_need_water: "Water",
    ms_need_scale: "Kitchen scale",
    ms_need_band: "Rubber band",
    ms_how_h: "The day-by-day",
    ms_how_intro:
      "A starter is a small colony of wild yeast and bacteria. You fe" +
      "ed it, it grows, and the good microbes crowd out the bad. Each" +
      " day you&rsquo;ll do the same short chore: throw out half, add " +
      "50g flour and 50g water, stir. That&rsquo;s it.",
    ms_day1_h: "Day 1 &middot; Mix",
    ms_day1_p:
      "Put 50g whole wheat flour and 50g water in the jar and stir un" +
      "til no dry flour is left. Mark the level with the rubber band," +
      " so you can see it rise later. Lid on loosely &mdash; it needs " +
      "air, not a seal. Nothing happens today. That&rsquo;s normal.",
    ms_day2_h: "Day 2 &middot; Feeding time",
    ms_day2_p:
      "Throw away about half, then add 50g flour and 50g water and st" +
      "ir. A few bubbles may appear. The smell is still innocent, alm" +
      "ost sweet &mdash; that changes soon.",
    ms_day3_h: "Day 3 &middot; The great leap (that isn&rsquo;t)",
    ms_day3_p:
      "It may suddenly look very alive, then just as suddenly look de" +
      "ad &mdash; a flat grey mush. Both are fine. Keep feeding: disca" +
      "rd half, 50g flour, 50g water. Don&rsquo;t start over. This is " +
      "exactly the moment everyone gives up.",
    ms_day4_h: "Day 4 &middot; A rhythm",
    ms_day4_p:
      "Same sad-sounding chore: discard half, feed 50/50. Now you sta" +
      "rt to notice a rhythm, a rise and a fall after each feed. The " +
      "smell turns properly sour. That&rsquo;s the microbes talking &" +
      "mdash; it&rsquo;s good.",
    ms_day5_h: "Day 5&ndash;7 &middot; Patience",
    ms_day5_p:
      "Keep the daily 1:1:1 feed going. What you&rsquo;re after is a s" +
      "teady doubling within a few hours and a surface dotted with bu" +
      "bbles. Mine only truly clicked around day 8&ndash;10. So did l" +
      "ots of other people&rsquo;s. Yours isn&rsquo;t broken.",
    ms_ready_h: "When is it active?",
    ms_ready_p1:
      "An active starter doubles within a few hours of a feed, the to" +
      "p is foamy with bubbles, and it smells pleasantly sour &mdash;" +
      " not sharp, not like nail-polish remover. That&rsquo;s the sam" +
      "e &ldquo;active&rdquo; the <a href=\"getting-started.html\">ge" +
      "neral method</a> talks about.",
    ms_ready_p2:
      "From there you can set your first loaf going. Keep the extra s" +
      "tarter in the fridge between bakes &mdash; it pauses, stays ali" +
      "ve, and it&rsquo;ll happily wait weeks for you.",
    ms_trouble_h: "Common problems &amp; fixes",
    ms_t1_h: "No bubbles yet",
    ms_t1_p:
      "It&rsquo;s early days until about day 3, and a cold kitchen slo" +
      "ws things right down. Move it somewhere warmer and give it time" +
      " before you judge it.",
    ms_t2_h: "Smells sharp, like nail-polish remover",
    ms_t2_p:
      "It&rsquo;s hungry &mdash; the culture is bigger than what you&r" +
      "squo;re feeding it. Feed more often, or give it a slightly bigg" +
      "er feed (say 75g flour and 75g water).",
    ms_t3_h: "A grey liquid pooling on top (hooch)",
    ms_t3_p:
      "Same story: it&rsquo;s hungry. Pour the hooch off and feed as u" +
      "sual. It&rsquo;s a sign to feed more often, not a dead starter.",
    ms_t4_h: "Mould &mdash; fuzzy, coloured, on top",
    ms_t4_p:
      "That&rsquo;s the one you don&rsquo;t fix. Throw it out and star" +
      "t again. It costs two ingredients and a few days, and you&rsqu" +
      "o;ve already learned the moves.",
    ms_punchline:
      "In the end, a starter is just flour, water and a week of looki" +
      "ng after it &mdash; and it&rsquo;s the start of every loaf on t" +
      "his site.",
    ms_readMethod: "Read the general method &rarr;",

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
    pctOfFlour: "van de totale bloem",
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
    calcCta: "Stel je totale deeggewicht in op de calculator &rarr;",

    /* ---- Getting Started body copy ---- */
    gs_lede:
      "Zuurdesem klinkt als een project: voeding" +
      "sschema&rsquo;s, vaste tijden, een starter die" +
      " je in leven moet houden als een huisdier. Ni" +
      "ets van. Mijn volledige methode bestaat uit d" +
      "rie stappen met veel wachttijd tussendoor &md" +
      "ash; en elk recept op deze site is er een vari" +
      "atie op. Dit is hoe ik mijn zuurdesembrood ba" +
      "k.",

    gs_ingredients_h: "Ingrediënten",
    gs_ing_starter: "Zuurdesemstarter",
    gs_ing_flour: "(Volkoren)meel",
    gs_ing_water: "Water",
    gs_ing_salt: "Zout",

    gs_ing_flour_p:
      "Ik bak mijn broden met 100% volkoren tarwemee" +
      "l of 100% volkoren speltmeel. Je kan ook kiez" +
      "en voor bijvoorbeeld 85% volkorenmeel, of het" +
      " meel mengen met een bepaalde hoeveelheid witt" +
      "e bloem. Het soort meel dat je gebruikt heeft " +
      "invloed op de hoeveelheid water die je moet ge" +
      "bruiken, maar dit zal je al doende leren aanvo" +
      "elen (te droog of te nat) en bijstellen. Aange" +
      "zien dit quasi het enige ingrediënt is van het" +
      " brood, ga ik steeds voor de beste kwaliteit b" +
      "iologisch meel van bij een lokale producent.",

    gs_ing_water_p: "Ik gebruik gewoon ongefilterd water van de kraan.",
    gs_ing_salt_p:
      "Ik gebruik het zout dat voorhanden is. Of het " +
      "nu grof of fijn zout is, het lost toch gewoon " +
      "op in het deeg.",

    gs_starter_h: "Zuurdesemstarter",
    gs_starter_p1:
      "Tracht een portie zuurdesemstarter vast te krij" +
      "gen van een kennis die gepassioneerd is door zu" +
      "urdesembrood bakken. Of <a href=\"making-a-star" +
      "ter.html\">kweek er zelf één van nul</a> &mdash;" +
      " dat duurt ongeveer een week en een paar voedin" +
      "gen per dag.",
    gs_starter_p2:
      "Voor dit recept gaan we uit van 100g actieve z" +
      "uurdesemstarter, bestaande uit 50g volkorenmee" +
      "l en 50g water. Wat het wil zeggen dat je star" +
      "ter actief is, kom je al doende te weten in het" +
      " stappenplan hieronder.",

    gs_method_h: "Stappenplan",
    gs_method_intro:
      "In dit stappenplan leg ik uit hoe ik mijn zuur" +
      "desembroden bak. Hierbij tracht ik het proces " +
      "zo eenvoudig mogelijk te houden. Dit is slecht" +
      "s een eerste houvast, wijk er gerust van af!",

    gs_step1_h: "1 &middot; In de kweek zetten",
    gs_step1_p1:
      "Neem een grote kookpot waarvan je ook een dekse" +
      "l hebt en neem je actieve starter uit de koelka" +
      "st (zie later voor hoe die starter in de koelka" +
      "st is terechtgekomen). Doe alle starter in de " +
      "kookpot met een soeplepel.",
    gs_step1_p2:
      "Nu gaan we de starter voeden: aan de randen van" +
      " het potje waar de starter in zat hangt nog wat" +
      " smurrie, die bevat genoeg microben om terug ee" +
      "n nieuwe kolonie van microben voort te brengen." +
      " We voeden nu die starter door er 50g volkorenb" +
      "loem en 50g water aan toe te voegen en roeren " +
      "dit goed door met dezelfde soeplepel. Deze star" +
      "ter is nu gevoed, maar nog niet actief. Zet een" +
      " deksel op het potje van de starter en zet het " +
      "aan de kant op het aanrecht.",
    gs_step1_p3:
      "In de kookpot voegen we de 450g meel, 300g wat" +
      "er en 8g zout toe en roeren alles goed door me" +
      "t dezelfde lepel. Na een minuutje roeren, zou " +
      "je een consistente deegbal moeten krijgen waar " +
      "geen losse bloem meer in zit, maar die ook nie" +
      "t al te lopend is. Is het geheel te droog, voe" +
      "g dan een klein beetje water toe. Is het gehe" +
      "el te nat, voeg dan een klein beetje bloem toe" +
      ". Doe nu een deksel op de kookpot en zet deze " +
      "samen met de starter aan de kant op het aanrecht.",
    gs_step1_p4:
      "Nu komt het laatste ingrediënt op de proppen: " +
      "tijd. Wacht een aantal uur: afhankelijk van d" +
      "e kamertemperatuur tussen de vier en de twaalf" +
      " uur.",

    gs_step2_h: "2 &middot; Vouwen",
    gs_step2_p1:
      "Het deeg in de kookpot is verdubbeld in volume," +
      " net als de zuurdesemstarter. Nu is de zuurdes" +
      "emstarter actief. Je kan een actieve starter he" +
      "rkennen aan de gasbelletjes en de azijnzure ge" +
      "ur.",
    gs_step2_p2:
      "Met een actieve starter kan je nu een nieuw bro" +
      "od in de kweek zetten (zie stap 1), of je kan " +
      "je starter in de koelkast zetten. Op die manie" +
      "r gaan de microben in de starter zich niet mee" +
      "r (of veel minder) voortplanten en gaat de sta" +
      "rter dus op pauze. De starter is dus wel nog a" +
      "ctief en klaar voor te gebruiken wanneer je je" +
      " volgende brood wil bakken. De starter overlee" +
      "ft zonder problemen enkele weken in de koelkast.",
    gs_step2_p3:
      "Strooi nu wat bloem op een werkblad en stort he" +
      "t gerezen deeg erop uit. Vouw het deeg als vol" +
      "gt: neem de rechterkant van het deeg en vouw h" +
      "et naar links, eindig op 2/3de van het deeg. V" +
      "ervolgens doe je hetzelfde maar begin je links" +
      ". Daarna neem je de bovenkant van het deeg en " +
      "vouw je het naar beneden en tenslotte neem je " +
      "de onderkant van het deeg en vouw je het naar " +
      "boven. Zoals je een T-shirt zou opvouwen dus. " +
      "Deze stappen doorloop je een aantal keer, het " +
      "zou steeds lastiger moeten worden om het deeg " +
      "te vouwen, de stretch gaat eruit. Als je voelt" +
      " dat het deeg zou gaan scheuren, moet je stopp" +
      "en: dan ben je klaar. Ik vouw mijn deeg hoogst" +
      "ens drie &agrave; vier rondjes, dit duurt hoog" +
      "stens twee minuten. Vervolgens draai je de dee" +
      "gbal om zodat alle vouwen onderaan zitten. Nu " +
      "maak je er nog een mooi bolletje van (opbollen" +
      " van het deeg).",
    gs_step2_p4:
      "Neem een grote soepkom of kommetje waar het dee" +
      "g in past en met een vorm naar keuze (rond, la" +
      "ngwerpig, &hellip; dit bepaalt de uiteindelijk" +
      "e vorm van je brood). Je kan hier ook een rijsm" +
      "andje voor gebruiken. Leg er een keukenhanddoek" +
      " in en leg daarbovenop de deegbal (nog steeds m" +
      "et de vouwen aan de onderkant). Vouw de keuken" +
      "handdoek rond het deeg zodat het niet uitdroogt" +
      " en zet het in de koelkast. Nu begint de koude" +
      " rijs, die je kan laten variëren in lengte van" +
      " een paar uur tot wel twee dagen. Tijdens deze" +
      " koude rijs komt er een rijk smaakpalet vrij i" +
      "n het brood.",

    gs_step3_h: "3 &middot; Bakken",
    gs_step3_p1:
      "Verwarm de oven op 250 graden en tracht een gro" +
      "te hoeveelheid waterdamp in de oven te creëren" +
      ". Sommige ovens hebben een steam bake functie," +
      " gebruik die zeker. Alternatief kan je een kom" +
      "metje water in de oven zetten of je brood in e" +
      "en broodbakbol bakken.",
    gs_step3_p2:
      "Wanneer de oven is voorverwarmd haal je het dee" +
      "g uit de koelkast en stort je het voorzichtig o" +
      "p een bakplaat (met bakpapier), zodanig dat de" +
      " onderkant van de deegbal (waar de vouwen in z" +
      "aten) bovenaan komt te liggen. Op die vouwen z" +
      "al het brood straks openbarsten en een overheer" +
      "lijke korst vormen.",
    gs_step3_p3:
      "Doe het brood in de oven en verlaag de temperat" +
      "uur meteen naar 200 graden. Bak het brood 40 m" +
      "inuten. In de oven zal je het brood nog ongeve" +
      "er zien verdubbelen in volume (om dat mogelijk" +
      " te maken mag er niet te snel een korst ontstaa" +
      "n, daarom heb je de waterdamp in de oven nodig" +
      ").",
    gs_step3_p4:
      "Haal het brood uit de oven en laat het afkoelen" +
      " op een rooster.",

    gs_schedule_h: "Inpassen in een normale week",
    gs_schedule_intro:
      "Er zijn dus drie stappen met telkens veel tijd " +
      "tussen. Dit kan overweldigend overkomen, maar h" +
      "oeft dat helemaal niet te zijn. Ik geef een voo" +
      "rbeeld van hoe ik dit proces inbouw in een norm" +
      "ale werkweek. Ik begin in dit voorbeeld op een " +
      "maandagavond.",
    gs_schedule_mon:
      "<b>Maandagavond, na het avondeten:</b> Ik zet m" +
      "ijn brood in de kweek. Mijn starter is actief e" +
      "n staat in de koelkast, ik heb meel, water en z" +
      "out voorhanden, dus dit duurt letterlijk maar v" +
      "ijf minuten. Als je goed hebt opgelet heb je na" +
      " deze stap maar één soeplepel om af te wassen.",
    gs_schedule_tue_am:
      "<b>Dinsdagochtend, twaalf uur later:</b> Het de" +
      "eg is gerezen en kan gevouwen worden. Ook deze " +
      "stap duurt maar een vijftal minuten, al heb je " +
      "nu ook een werkblad om af te kuisen. Het gevou" +
      "wen brood gaat samen met de actieve starter in" +
      " de koelkast.",
    gs_schedule_tue_pm:
      "<b>Dinsdagavond, na het avondeten:</b> Ik bak m" +
      "ijn brood. Deze stap duurt wel 40 minuten, maa" +
      "r behalve als het de eerste keer is dat je een " +
      "zuurdesembrood bakt, ga je geen 40 minuten naa" +
      "r de oven zitten kijken.",
    gs_schedule_wed:
      "<b>Woensdagochtend:</b> Je hebt het brood waar " +
      "je maandagavond aan begonnen bent.",

    gs_punchline:
      "In totaal kost het dus maar een dikke tien minu" +
      "ten om een brood te maken.",
/* ---- Een starter maken van nul (nl) ---- */
    ms_eyebrow: "een starter maken &middot; van nul",
    ms_title: "Een zuurdesemstarter maken van nul",
    ms_sub: "Geen starter van een kennis voorhanden? Kweek er zelf één. Meel, water en ongeveer een week geduld &mdash; zo doe je dat.",
    ms_meta_title: "Een zuurdesemstarter maken van nul &mdash; Zuurdesemcalculator",
    ms_meta_desc: "Geen starter van een kennis voorhanden? Kweek er zelf één. Meel, water en ongeveer een week geduld — een dag-per-dag gids om een zuurdesemstarter van nul te maken.",
    ms_lede:
      "Om een starter te laten groeien heb je niet veel nodig, en het " +
      "duurt langer dan men graag toegeeft &mdash; minstens een week. " +
      "Het goede nieuws: bijna geen van die tijd is echt werk. Zo zou " +
      "ik er vandaag één beginnen.",
    ms_need_h: "Wat je nodig hebt",
    ms_need_jar: "Een proper jampotje",
    ms_need_flour: "Volkorenmeel",
    ms_need_water: "Water",
    ms_need_scale: "Keukenweegschaal",
    ms_need_band: "Elastiekje",
    ms_how_h: "Dag per dag",
    ms_how_intro:
      "Een starter is een kleine kolonie wilde gist en bacteriën. Je " +
      "voedt ze, ze groeien, en de goede microben verdringen de slech" +
      "te. Elke dag doe je hetzelfde karweitje: de helft weggooien, 5" +
      "0g meel en 50g water toevoegen, roeren. Dat is alles.",
    ms_day1_h: "Dag 1 &middot; Mengen",
    ms_day1_p:
      "Doe 50g volkorenmeel en 50g water in het potje en roer tot er " +
      "geen droog meel meer over is. Markeer het niveau met het elast" +
      "iekje, zodat je straks kunt zien hoe het rijst. Deksel er losj" +
      "es op &mdash; het heeft lucht nodig, geen luchtdicht deksel. V" +
      "andaag gebeurt er niets. Dat is normaal.",
    ms_day2_h: "Dag 2 &middot; Voedertijd",
    ms_day2_p:
      "Gooi ongeveer de helft weg, voeg dan 50g meel en 50g water toe" +
      " en roer. Er kunnen wat belletjes verschijnen. De geur is nog " +
      "onschuldig, bijna zoet &mdash; dat verandert snel.",
    ms_day3_h: "Dag 3 &middot; De grote sprong (die het niet is)",
    ms_day3_p:
      "Het kan nu ineens heel levendig lijken, en dan net zo ineens d" +
      "ood &mdash; een platte grijze pap. Beide zijn oké. Blijf voede" +
      "n: de helft weggooien, 50g meel, 50g water. Niet opnieuw begin" +
      "nen. Dit is precies het moment waarop iedereen opgeeft.",
    ms_day4_h: "Dag 4 &middot; Een ritme",
    ms_day4_p:
      "Hetzelfde trieste karweitje: de helft weggooien, 50/50 voeden." +
      " Nu begin je een ritme te zien, een rijzen en zakken na elke v" +
      "oeding. De geur wordt goed zuur. Dat zijn de microben die prat" +
      "en &mdash; dat is goed.",
    ms_day5_h: "Dag 5&ndash;7 &middot; Geduld",
    ms_day5_p:
      "Blijf de dagelijkse 1:1:1-voeding volhouden. Waar je naar op z" +
      "oek bent is een stabiele verdubbeling binnen een paar uur en e" +
      "en oppervlak vol belletjes. Bij mij klikte het pas echt rond d" +
      "ag 8&ndash;10. Bij heel veel anderen ook. De jouwe is niet stu" +
      "k.",
    ms_ready_h: "Wanneer is hij actief?",
    ms_ready_p1:
      "Een actieve starter verdubbelt binnen een paar uur na een voed" +
      "ing, staat bovenaan vol schuimende belletjes en ruikt aangenaa" +
      "m zuur &mdash; niet scherp, niet naar nagellakremover. Dat is " +
      "hetzelfde &ldquo;actief&rdquo; waar de <a href=\"getting-start" +
      "ed.html\">algemene methode</a> het over heeft.",
    ms_ready_p2:
      "Vanaf dan kan je je eerste brood in de kweek zetten. Bewaar de" +
      " extra starter tussen het bakken in de koelkast &mdash; hij pa" +
      "uzeert, blijft leven, en wacht gerust weken op je.",
    ms_trouble_h: "Veelvoorkomende problemen &amp; oplossingen",
    ms_t1_h: "Nog geen belletjes",
    ms_t1_p:
      "Tot ongeveer dag 3 is het nog vroeg, en een koude keuken vertr" +
      "aagt alles flink. Zet hem op een warmere plek en geef het tijd" +
      " voordat je oordeelt.",
    ms_t2_h: "Ruikt scherp, naar nagellakremover",
    ms_t2_p:
      "Hij heeft honger &mdash; de cultuur is groter dan wat je haar v" +
      "oert. Voed vaker, of geef een iets grotere voeding (zeg 75g me" +
      "el en 75g water).",
    ms_t3_h: "Een grijze vloeistof bovenaan (hooch)",
    ms_t3_p:
      "Hetzelfde verhaal: honger. Giet de hooch eraf en voed zoals ge" +
      "woonlijk. Het is een teken om vaker te voeden, geen dode start" +
      "er.",
    ms_t4_h: "Schimmel &mdash; pluizig, gekleurd, bovenaan",
    ms_t4_p:
      "Dat is het enige dat je niet oplost. Gooi het weg en begin opn" +
      "ieuw. Het kost twee ingrediënten en een paar dagen, en de bewe" +
      "gingen ken je al.",
    ms_punchline:
      "Uiteindelijk is een starter gewoon meel, water en een week ero" +
      "ver waken &mdash; en het is het begin van elk brood op deze si" +
      "te.",
    ms_readMethod: "Lees de algemene methode &rarr;",
  },
};

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