/* =============================================
   LIVA DESIGN — script.js
   ============================================= */

// --- Enforce HTTPS (fallback for non-Apache hosts) ---
(function () {
  if (location.protocol === 'http:' &&
    location.hostname !== 'localhost' &&
    location.hostname !== '127.0.0.1' &&
    location.hostname !== '0.0.0.0') {
    location.replace('https://' + location.host + location.pathname + location.search + location.hash);
  }
})();

// --- Reduced motion preference (checked once at load; no runtime listener needed) ---
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- i18n translations ---
const TRANSLATIONS = {
  en: {
    'nav.work': 'Work', 'nav.services': 'Services', 'nav.production': 'Production', 'nav.about': 'About', 'nav.cta': "Let's talk",
    'mobile.work': 'Work', 'mobile.services': 'Services', 'mobile.production': 'Production', 'mobile.about': 'About', 'mobile.cta': "Let's talk",
    'hero.tag': 'Design Studio', 'hero.tag-sub': '(with an AI overlap)',
    'hero.headline': 'We design<br /><span class="accent">experiences</span><br />that convert.',
    'hero.sub': '<span>Branding \u00b7 UI/UX \u00b7 Web Design \u00b7 Design Systems</span><span class="hero__sub-physical">Print \u00b7 Signage \u00b7 Merch \u00b7 3D Printing</span>',
    'hero.btn-work': 'View work', 'hero.btn-project': 'Start project', 'hero.scroll': 'Scroll',
    'mq.branding': 'Branding', 'mq.uiux': 'UI/UX', 'mq.web-design': 'Web Design', 'mq.design-systems': 'Design Systems',
    'mq.print': 'Print', 'mq.outdoor': 'Outdoor Advertising', 'mq.merch': 'Merch', 'mq.3d': '3D',
    'mq.logos': 'Logos', 'mq.wireframes': 'Wireframes', 'mq.landing-pages': 'Landing Pages', 'mq.components': 'Components',
    'mq.business-cards': 'Business Cards', 'mq.banners': 'Banners', 'mq.screen-printing': 'Screen Printing', 'mq.3d-models': '3D Models',
    'mq.brand-identity': 'Brand Identity', 'mq.ecommerce': 'E-commerce', 'mq.ui-kits': 'UI Kits', 'mq.posters': 'Posters',
    'mq.dibond': 'Dibond', 'mq.dtf': 'DTF', 'mq.3d-prototypes': '3D Prototypes', 'mq.brand-manual': 'Brand Manual',
    'mq.embroidery': 'Embroidery', 'mq.interactive': 'Interactive Prototypes', 'mq.web-interface': 'Web Interface', 'mq.flyers': 'Flyers',
    'mq.wraps': 'Wraps', 'mq.digital-print': 'Digital Print', 'mq.3d-printing': '3D Printing', 'mq.stickers': 'Stickers',
    'mq.packaging': 'Packaging', 'mq.custom-apparel': 'Custom Apparel',
    'work.label': 'Selected Work',
    'work.title': 'Projects that<br /><span class="accent">define brands.</span>',
    'project.view': 'View Case',
    'project.status': 'Preparing',
    'project.status-sub': 'Project details coming soon',
    'project.desc-1': 'Packaging design, visual communication',
    'project.desc-2': 'Social media, visual communication',
    'project.desc-3': 'Creative direction of tour visuals for the album GOLDKIID',
    'project.desc-4': 'Full merchandise for the musical Děti ráje',
    'services.label': 'What We Do',
    'services.title': 'Services built for<br /><span class="accent">modern brands.</span>',
    'svc.01.name': 'Brand Identity', 'svc.01.desc': 'Strategy-driven visual systems \u2014 logo, typography, color, and guidelines that make your brand unmistakable.',
    'svc.02.name': 'UI / UX Design', 'svc.02.desc': 'Interfaces that feel effortless. Research-driven, pixel-perfect, and built to convert.',
    'svc.03.name': 'Web Design', 'svc.03.desc': 'Conversion-focused websites with sharp aesthetics, smooth interactions, and purposeful layout.',
    'svc.04.name': 'Design Systems', 'svc.04.desc': 'Scalable component libraries and documentation that keep product teams aligned and moving fast.',
    'prod.label': 'What We Make',
    'prod.title': 'Physical production for<br /><span class="accent">real-world impact.</span>',
    'prod.01.name': 'Print', 'prod.01.desc': 'Business cards, posters, flyers, and everyday brand materials produced with precision and consistency.',
    'prod.02.name': 'Signage & Banners', 'prod.02.desc': 'PVC, dibond, and custom signage solutions designed for visibility and durability.',
    'prod.03.name': 'Merch Production', 'prod.03.desc': 'Apparel, accessories, and custom merch including screen print, DTF, digital print and embroidery.',
    'prod.04.name': '3D Modeling & Printing', 'prod.04.desc': 'Custom 3D models and physical prototypes, from concept to real-world production.',
    'stat.projects': 'Projects delivered', 'stat.clients': 'Happy clients',
    'stat.years': 'Years of craft', 'stat.awards': 'Awards won',
    'about.label': 'About LIVA',
    'about.title': 'Built to deliver.<br /><span class="accent">At any scale.</span>',
    'about.p1': 'LIVA was founded by Libor & Va\u0161ek \u2014 two designers with over 7 years of full-time, professional experience. They\u2019ve been working together since high school, and that long-term collaboration is what drives the studio\u2019s consistency and trust.',
    'about.p2': 'The studio operates across the full range \u2014 from sharp, focused brand work to large-scale corporate projects. Young, technically aware, and up-to-date with where design and technology are heading. No client type is out of scope.',
    'about.p3': 'Behind every project is a\u00a0well-structured, end-to-end process \u2014 combining design, development, and production into one seamless workflow. LIVA delivers complete packages, ensuring consistency, precision, and high-quality execution across every stage, regardless of project size.',
    'about.role': 'Co-Founder & Designer',
    'contact.label': 'Get in Touch',
    'contact.title': 'Ready to build<br /><span class="accent">something great?</span>',
    'contact.sub': "Tell us about your project and we'll get back to you within 24 hours.",
    'form.name-label': 'Name', 'form.email-label': 'Email',
    'form.service-label': 'Service', 'form.msg-label': 'Message',
    'form.name-ph': 'Your Name', 'form.email-ph': 'your@email.com',
    'form.service-ph': 'What do you need?', 'form.msg-ph': 'Tell us about your project...',
    'form.submit': 'Send message \u2197',
    'form.opt-digital': 'Digital Services', 'form.opt-physical': 'Physical Production', 'form.opt-other-grp': 'Other',
    'form.opt-brand': 'Branding', 'form.opt-uiux': 'UI/UX',
    'form.opt-web': 'Web Design', 'form.opt-system': 'Design Systems',
    'form.opt-print': 'Print',
    'form.opt-signage': 'Signage',
    'form.opt-merch': 'Merch',
    'form.opt-3d': '3D Printing', 'form.opt-other': 'Other',
    'footer.copy': '\u00a9 2026 LIVA Design. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms \u0026 Conditions',
    'cookie.text': 'We use cookies to improve your experience and analyze website traffic.',
    'cookie.policy': 'Privacy Policy',
    'cookie.reject': 'Only necessary',
    'cookie.accept': 'Accept all',
  },
  cs: {
    'nav.work': 'Pr\u00e1ce', 'nav.services': 'Slu\u017eby', 'nav.production': 'V\u00fdroba', 'nav.about': 'O\u00a0n\u00e1s', 'nav.cta': 'Spojme se',
    'mobile.work': 'Pr\u00e1ce', 'mobile.services': 'Slu\u017eby', 'mobile.production': 'V\u00fdroba', 'mobile.about': 'O\u00a0n\u00e1s', 'mobile.cta': 'Spojme se',
    'hero.tag': 'Design Studio', 'hero.tag-sub': '(s\u00a0p\u0159esahem do AI)',
    'hero.headline': 'Navrhujeme<br /><span class="accent">vizu\u00e1ly,</span><br />kter\u00e9 prod\u00e1vaj\u00ed.',
    'hero.sub': '<span>Branding \u00b7 UI/UX \u00b7 Webdesign \u00b7 Designov\u00e9 syst\u00e9my</span><span class="hero__sub-physical">Tisk \u00b7 Bannery \u00b7 Merch \u00b7 3D Tisk</span>',
    'hero.btn-work': 'Na\u0161e pr\u00e1ce', 'hero.btn-project': 'Za\u010d\u00edt projekt', 'hero.scroll': 'Scroll',
    'mq.branding': 'Branding', 'mq.uiux': 'UI/UX', 'mq.web-design': 'Webdesign', 'mq.design-systems': 'Design syst\u00e9my',
    'mq.print': 'Tisk', 'mq.outdoor': 'Outdoor reklama', 'mq.merch': 'Merch', 'mq.3d': '3D',
    'mq.logos': 'Loga', 'mq.wireframes': 'Wireframy', 'mq.landing-pages': 'Landing pages', 'mq.components': 'Komponenty',
    'mq.business-cards': 'Vizitky', 'mq.banners': 'Bannery', 'mq.screen-printing': 'S\u00edtotisk', 'mq.3d-models': '3D modely',
    'mq.brand-identity': 'Vizu\u00e1ln\u00ed identita', 'mq.ecommerce': 'E-commerce', 'mq.ui-kits': 'UI kity', 'mq.posters': 'Plak\u00e1ty',
    'mq.dibond': 'Dibond', 'mq.dtf': 'DTF', 'mq.3d-prototypes': '3D prototypy', 'mq.brand-manual': 'Brand manu\u00e1l',
    'mq.embroidery': 'V\u00fd\u0161ivky', 'mq.interactive': 'Interaktivn\u00ed prototypy', 'mq.web-interface': 'Webov\u00e9 rozhran\u00ed', 'mq.flyers': 'Let\u00e1ky',
    'mq.wraps': 'Polepy', 'mq.digital-print': 'Digit\u00e1ln\u00ed tisk', 'mq.3d-printing': '3D tisk', 'mq.stickers': 'Samolepky',
    'mq.packaging': 'Obaly', 'mq.custom-apparel': 'Oble\u010den\u00ed na m\u00edru',
    'work.label': 'Vybran\u00e9 projekty',
    'work.title': 'Projekty, kter\u00e9<br /><span class="accent">definuj\u00ed zna\u010dky.</span>',
    'project.view': 'Zobrazit projekt',
    'project.status': 'P\u0159ipravujeme',
    'project.status-sub': 'Detail projektu brzy p\u0159id\u00e1me',
    'project.desc-1': 'Design obal\u016f, vizu\u00e1ln\u00ed komunikace',
    'project.desc-2': 'Soci\u00e1ln\u00ed s\u00edt\u011b, vizu\u00e1ln\u00ed komunikace',
    'project.desc-3': 'Kreativn\u00ed veden\u00ed vizu\u00e1l\u016f turn\u00e9 pro album GOLDKIID',
    'project.desc-4': 'Kompletn\u00ed merch pro muzik\u00e1l D\u011bti r\u00e1je',
    'services.label': 'Co d\u011bl\u00e1me',
    'services.title': 'Slu\u017eby pro<br /><span class="accent">modern\u00ed zna\u010dky.</span>',
    'svc.01.name': 'Vizu\u00e1ln\u00ed identita', 'svc.01.desc': 'Navrhujeme vizu\u00e1ln\u00ed syst\u00e9my \u2014 logo, typografii, barvy a\u00a0pravidla, kter\u00e9 d\u011blaj\u00ed zna\u010dku zapamatovatelnou.',
    'svc.02.name': 'UI / UX Design', 'svc.02.desc': 'Navrhujeme rozhran\u00ed, kter\u00e1 d\u00e1vaj\u00ed smysl. Jednoduch\u00e1 na pou\u017eit\u00ed a\u00a0navr\u017een\u00e1 pro re\u00e1ln\u00e9 v\u00fdsledky.',
    'svc.03.name': 'Webdesign', 'svc.03.desc': 'Tvo\u0159\u00edme weby, kter\u00e9 prod\u00e1vaj\u00ed. \u010cist\u00fd design, plynul\u00e9 interakce a\u00a0promy\u0161len\u00fd layout.',
    'svc.04.name': 'Designov\u00e9 syst\u00e9my', 'svc.04.desc': 'Tvo\u0159\u00edme komponenty a\u00a0pravidla, kter\u00e9 dr\u017e\u00ed design konzistentn\u00ed a\u00a0zrychluj\u00ed v\u00fdvoj.',
    'prod.label': 'Co vyr\u00e1b\u00edme',
    'prod.title': 'Fyzick\u00e1 v\u00fdroba pro<br /><span class="accent">re\u00e1ln\u00fd dopad.</span>',
    'prod.01.name': 'Tisk', 'prod.01.desc': 'Vizitky, let\u00e1ky, plak\u00e1ty a\u00a0dal\u0161\u00ed materi\u00e1ly vyroben\u00e9 s\u00a0d\u016frazem na kvalitu a\u00a0detail.',
    'prod.02.name': 'Bannery a cedule', 'prod.02.desc': 'PVC, dibond a\u00a0dal\u0161\u00ed \u0159e\u0161en\u00ed navr\u017een\u00e1 pro maxim\u00e1ln\u00ed viditelnost a\u00a0odolnost.',
    'prod.03.name': 'Merch', 'prod.03.desc': 'Oble\u010den\u00ed, dopl\u0148ky a\u00a0vlastn\u00ed merch v\u010detn\u011b s\u00edtotisku, DTF, digit\u00e1ln\u00edho tisku a\u00a0v\u00fd\u0161ivky.',
    'prod.04.name': '3D modelov\u00e1n\u00ed a tisk', 'prod.04.desc': '3D modely a\u00a0fyzick\u00e9 prototypy \u2014 od konceptu a\u017e po fin\u00e1ln\u00ed v\u00fdrobu.',
    'stat.projects': 'Dokon\u010den\u00fdch projekt\u016f', 'stat.clients': 'Spokojen\u00fdch klient\u016f',
    'stat.years': 'Let zku\u0161enost\u00ed', 'stat.awards': 'Ocen\u011bn\u00ed',
    'about.label': 'O\u00a0LIVA',
    'about.title': 'P\u0159ipraveni dodat.<br /><span class="accent">V\u00a0jak\u00e9mkoli rozsahu.</span>',
    'about.p1': 'LIVA zalo\u017eili Libor a\u00a0Va\u0161ek \u2014 design\u00e9\u0159i s\u00a0v\u00edce ne\u017e 7 lety praxe. Spolupracuj\u00ed od st\u0159edn\u00ed \u0161koly a\u00a0pr\u00e1v\u011b tahle dlouhodob\u00e1 spolupr\u00e1ce stoj\u00ed za konzistenc\u00ed a\u00a0d\u016fv\u011brou, kterou si studio buduje.',
    'about.p2': 'Navrhujeme zna\u010dky, weby i\u00a0produkty \u2014 od men\u0161\u00edch projekt\u016f po rozs\u00e1hl\u00e9 realizace. Sledujeme trendy, rozum\u00edme technologi\u00edm a\u00a0v\u00edme, co dnes funguje.',
    'about.p3': 'Podle pot\u0159eby zapojujeme s\u00ed\u0165 ov\u011b\u0159en\u00fdch specialist\u016f \u2014 v\u00fdvoj\u00e1\u0159e, fotografy i\u00a0produk\u010dn\u00ed partnery. D\u00edky tomu zvl\u00e1d\u00e1me projekty na vysok\u00e9 \u00farovni, bez ohledu na jejich velikost.',
    'about.role': 'Spoluzakladatel & Designer',
    'contact.label': 'Kontakt',
    'contact.title': 'P\u0159ipraveni vytvo\u0159it<br /><span class="accent">n\u011bco skv\u011bl\u00e9ho?</span>',
    'contact.sub': 'Napi\u0161te n\u00e1m o\u00a0sv\u00e9m projektu a\u00a0ozveme se do 24 hodin.',
    'form.name-label': 'Jm\u00e9no', 'form.email-label': 'E-mail',
    'form.service-label': 'Slu\u017eba', 'form.msg-label': 'Zpr\u00e1va',
    'form.name-ph': 'Va\u0161e jm\u00e9no', 'form.email-ph': 'v\u00e1\u0161@email.cz',
    'form.service-ph': 'Vyberte slu\u017ebu', 'form.msg-ph': 'Popi\u0161te sv\u016fj projekt...',
    'form.submit': 'Odeslat zpr\u00e1vu \u2197',
    'form.opt-digital': 'Digit\u00e1ln\u00ed slu\u017eby', 'form.opt-physical': 'Fyzick\u00e1 v\u00fdroba', 'form.opt-other-grp': 'Ostatn\u00ed',
    'form.opt-brand': 'Branding', 'form.opt-uiux': 'UI/UX',
    'form.opt-web': 'Webdesign', 'form.opt-system': 'Designov\u00e9 syst\u00e9my',
    'form.opt-print': 'Tisk',
    'form.opt-signage': 'Bannery',
    'form.opt-merch': 'Merch',
    'form.opt-3d': '3D tisk', 'form.opt-other': 'Ostatn\u00ed',
    'footer.copy': '\u00a9 2026 LIVA Design. V\u0161echna pr\u00e1va vyhrazena.',
    'footer.privacy': 'Ochrana osobn\u00edch\u00a0\u00fadaj\u016f',
    'footer.terms': 'Obchodn\u00ed podm\u00ednky',
    'cookie.text': 'Pou\u017e\u00edv\u00e1me cookies ke zlep\u0161en\u00ed va\u0161eho z\u00e1\u017eitku a\u00a0anal\u00fdze n\u00e1v\u0161t\u011bvnosti webu.',
    'cookie.policy': 'Ochrana osobn\u00edch \u00fadaj\u016f',
    'cookie.reject': 'Pouze nezbytn\u00e9',
    'cookie.accept': 'P\u0159ijmout v\u0161e',
  }
};

// Czech typography: non-breaking space after single-letter prepositions/conjunctions.
// Runs only when lang='cs'; idempotent (NBSP after letter won't match again).
function applyTypoFix(lang) {
  if (lang !== 'cs') return;
  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'CODE', 'PRE']);
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const tag = node.parentElement && node.parentElement.tagName;
        return SKIP.has(tag) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  let node;
  while ((node = walker.nextNode())) {
    const orig = node.nodeValue;
    // Match: (start-of-node OR whitespace/NBSP) + single CZ preposition/conjunction + regular space
    const fixed = orig.replace(/(^|[ \t\n\r\u00A0])([aiouvskzAIOUVSKZ]) /g, '$1$2\u00A0');
    if (fixed !== orig) node.nodeValue = fixed;
  }
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const v = t[el.dataset.i18nLabel];
    if (v !== undefined) el.label = v;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.nav__lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  try { localStorage.setItem('liva-lang', lang); } catch (e) { }
  applyTypoFix(lang);
}

// --- Language switcher ---
const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.addEventListener('click', e => {
    const btn = e.target.closest('.nav__lang-btn');
    if (!btn) return;
    applyLang(btn.dataset.lang);
  });
}

const mobileLangSwitch = document.getElementById('mobileLangSwitch');
if (mobileLangSwitch) {
  mobileLangSwitch.addEventListener('click', e => {
    const btn = e.target.closest('.nav__lang-btn');
    if (!btn) return;
    applyLang(btn.dataset.lang);
  });
}

// Init from localStorage
(function () {
  try {
    const saved = localStorage.getItem('liva-lang');
    if (saved && TRANSLATIONS[saved]) applyLang(saved);
  } catch (e) { }
})();

// --- Custom cursor (fine pointer / desktop only) ---
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Remove cursor element entirely on reduced motion — OS default cursor takes over
  if (prefersReducedMotion) { cursor.remove(); return; }

  const cursorSvg = cursor.querySelector('svg');

  let mx = -200, my = -200;   // raw mouse position
  let cx = -200, cy = -200;   // smoothed position
  let clickTimer = null;
  let spinAnim = null;

  // Show cursor on first mouse move
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.classList.add('cursor--visible');
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor--visible');
  });

  // Hover state on interactive elements
  const HOVER_TARGETS = 'a, button, input, textarea, select, label, [role="button"]';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER_TARGETS)) cursor.classList.add('cursor--hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER_TARGETS)) cursor.classList.remove('cursor--hover');
  });

  // Click pulse on all buttons (visual feedback only)
  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor--click');
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => cursor.classList.remove('cursor--click'), 140);
  });

  // Double-click spin trigger (left button)
  document.addEventListener('dblclick', triggerSpin);

  // Spin: 360° rotation + 1.4× bump via Web Animations API.
  // WAAPI lets us cancel-and-restart cleanly on rapid clicks.
  // CSS transition is suppressed during the animation then restored one frame
  // after finish so it doesn't re-trigger on the natural-state snap.
  function triggerSpin() {
    if (spinAnim) { spinAnim.cancel(); spinAnim = null; }
    cursorSvg.style.transition = 'none';
    void cursorSvg.offsetWidth;                // flush — ensure transition:none applies
    spinAnim = cursorSvg.animate([
      { transform: 'rotate(0deg)   scale(1)',    offset: 0    },
      { transform: 'rotate(200deg) scale(1.4)',  offset: 0.38 },
      { transform: 'rotate(330deg) scale(1.1)',  offset: 0.72 },
      { transform: 'rotate(360deg) scale(1)',    offset: 1    },
    ], {
      duration: 440,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)', // ease-out expo — snappy & spring-like
      fill: 'none',                              // element returns to natural CSS state on finish
    });
    spinAnim.onfinish = () => {
      spinAnim = null;
      requestAnimationFrame(() => { cursorSvg.style.transition = ''; }); // restore after 1 frame
    };
    spinAnim.oncancel = () => { spinAnim = null; };
  }

  // RAF loop — very slight lag (0.18) for premium smoothness
  function tick() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// --- Nav scroll effect ---
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      setTimeout(() => {
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
      }, 50);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      hamburger.focus();
    }
  });
}

// --- Mobile project card tap overlay ---
(function () {
  let activeCard = null;
  let dismissTimer = null;

  function closeActive() {
    if (activeCard) {
      activeCard.classList.remove('is-active');
      activeCard = null;
    }
    clearTimeout(dismissTimer);
  }

  document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('click', (e) => {
      if (window.innerWidth > 1024) return;
      e.preventDefault();
      if (activeCard === card) { closeActive(); return; }
      closeActive();
      card.classList.add('is-active');
      activeCard = card;
      dismissTimer = setTimeout(closeActive, 3500);
    });
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth > 1024) return;
    if (activeCard && !activeCard.contains(e.target)) closeActive();
  });
})();

// --- Scroll reveal ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // stagger siblings
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      siblings.forEach((el, idx) => {
        if (el === entry.target) {
          setTimeout(() => el.classList.add('visible'), idx * 80);
        }
      });
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- Counter animation ---
function animateCounter(el, target, duration = 1600) {
  if (prefersReducedMotion) { el.textContent = target; return; }
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 2.5); // ease out — gentler than cubic, ticks evenly to end
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      animateCounter(el, target);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__num[data-target]').forEach(el => statObserver.observe(el));

// --- Contact form ---
const form = document.getElementById('contactForm');
let _formLastSubmit = 0;
const _FORM_RATE_MS = 60000; // one submission per 60 s

function setFieldError(fieldId, message) {
  const input = form.querySelector('#' + fieldId);
  if (!input) return;
  const fieldWrapper = input.closest('.form__field');
  const errorDiv = fieldWrapper.querySelector('.form__error');
  if (message) {
    fieldWrapper.classList.add('form__field--error');
    errorDiv.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  } else {
    fieldWrapper.classList.remove('form__field--error');
    errorDiv.textContent = '';
    input.removeAttribute('aria-invalid');
  }
}

// Live-clear error as soon as user starts correcting a field
['name', 'email', 'message'].forEach(fieldId => {
  const input = form && form.querySelector('#' + fieldId);
  input && input.addEventListener('input', () => {
    if (input.closest('.form__field').classList.contains('form__field--error')) {
      setFieldError(fieldId, '');
    }
  });
});

form && form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Honeypot: if the hidden bot-bait field has been filled, silently drop
  const hp = form.querySelector('[name="hp_website"]');
  if (hp && hp.value !== '') return;

  // Rate limiting: one submission per minute
  const now = Date.now();
  if (now - _formLastSubmit < _FORM_RATE_MS) return;

  // Extra validation (HTML5 attributes handle the basics; this is defense-in-depth)
  const name    = (form.querySelector('#name').value    || '').trim();
  const email   = (form.querySelector('#email').value   || '').trim();
  const message = (form.querySelector('#message').value || '').trim();

  if (name.length < 2)   setFieldError('name', 'Jméno musí mít alespoň 2 znaky');
  else if (name.length > 100) setFieldError('name', 'Jméno je příliš dlouhé (max 100 znaků)');
  else setFieldError('name', '');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) setFieldError('email', 'Zadejte platnou emailovou adresu');
  else setFieldError('email', '');

  if (message.length < 10)   setFieldError('message', 'Zpráva musí mít alespoň 10 znaků');
  else if (message.length > 2000) setFieldError('message', 'Zpráva je příliš dlouhá (max 2000 znaků)');
  else setFieldError('message', '');

  // Scroll to and focus the first error field; abort submission
  const firstError = form.querySelector('.form__field--error');
  if (firstError) {
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstError.querySelector('input, select, textarea')?.focus();
    return;
  }

  _formLastSubmit = now;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Message sent!';
  btn.style.background = '#22c55e';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send message \u2197';
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// --- Scroll progress bar + drag-to-scroll ---
// The .hero__scroll-line is a\u00a01px visual track that doubles as a\u00a0draggable micro-scrollbar.
// Pointer capture keeps the drag alive even when the pointer leaves the element.
(function () {
  const scrollLine = document.querySelector('.hero__scroll-line');
  if (!scrollLine) return;

  let isDragging = false;

  // Normal scroll → update the fill position.
  // Skipped during active drag because applyProgress already sets --progress.
  window.addEventListener('scroll', () => {
    if (isDragging) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = scrollable > 0 ? window.scrollY / scrollable : 0;
    scrollLine.style.setProperty('--progress', progress);
  }, { passive: true });

  // Map a\u00a0pointer clientX to a\u00a00–1 progress value clamped to the track width
  function progressFromPointer(e) {
    const rect = scrollLine.getBoundingClientRect();
    return Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  }

  // Update both the visual fill and the real page scroll position
  function applyProgress(progress) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    scrollLine.style.setProperty('--progress', progress);
    window.scrollTo({ top: progress * scrollable, behavior: 'instant' });
  }

  scrollLine.addEventListener('pointerdown', e => {
    if (e.button !== 0) return; // left button only
    e.preventDefault();
    isDragging = true;
    scrollLine.setPointerCapture(e.pointerId); // track the pointer globally
    scrollLine.classList.add('is-dragging');   // disable CSS transition while dragging
    document.documentElement.style.userSelect = 'none'; // block text selection
    applyProgress(progressFromPointer(e));
  });

  scrollLine.addEventListener('pointermove', e => {
    if (!isDragging) return;
    applyProgress(progressFromPointer(e));
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    scrollLine.classList.remove('is-dragging');
    document.documentElement.style.userSelect = '';
    // Re-sync --progress from the real scroll position in case the pointer
    // was released outside the track bounds or while another scroll was running
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = scrollable > 0 ? window.scrollY / scrollable : 0;
    scrollLine.style.setProperty('--progress', progress);
  }

  scrollLine.addEventListener('pointerup',     endDrag);
  scrollLine.addEventListener('pointercancel', endDrag);
})();

// --- Subtle parallax on hero grid ---
const heroGrid = document.querySelector('.hero__grid');
if (heroGrid && !prefersReducedMotion) {
  window.addEventListener('scroll', () => {
    heroGrid.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}


// CTA position is set by .hero__zone-bot padding-top in CSS (no JS snap needed).

// --- Electric grid web — signal propagates from cursor along grid lines ---
(function () {
  if (prefersReducedMotion) return;
  const hero = document.querySelector('.hero');
  const hGrid = document.querySelector('.hero__grid');
  if (!hero || !hGrid) return;

  const isTouch = !window.matchMedia('(pointer: fine)').matches;

  // CELL and gridOffsetY must match CSS background-size / background-position exactly.
  // Desktop: 60px fixed. Tablet (769–1024px): calc(100%/6). Mobile (≤768px): 20%, offset by --nav-h.
  let CELL = 60;
  let gridOffsetY = 0;
  function computeMetrics() {
    const w = hGrid.offsetWidth;
    if (!isTouch) {
      CELL = 60;
      gridOffsetY = 0;
    } else if (window.innerWidth >= 769) {
      CELL = Math.round(window.innerWidth / 7);
      gridOffsetY = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
    } else {
      CELL = Math.round(w * 0.20);
      gridOffsetY = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
    }
  }
  computeMetrics();
  const MAX_STEPS = 11;    // max grid hops per wave
  const STEP_MS = 44;    // base ms between propagation steps
  const SEG_LIFE = 2600;  // max ms a\u00a0segment stays visible
  const SPREAD = 0.68;  // probability of branching to each neighbour
  const DECAY_MU = 0.60;  // mean energy multiplier per hop
  const MAX_ALPHA = 0.65;  // peak line opacity (+30% from 0.50)

  // Canvas inside heroGrid — inherits parallax transform automatically
  const cvs = document.createElement('canvas');
  cvs.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  hGrid.appendChild(cvs);
  const ctx = cvs.getContext('2d');

  let cw, ch;
  const resize = () => {
    cw = cvs.width = hGrid.offsetWidth;
    ch = cvs.height = hGrid.offsetHeight;
    computeMetrics();
  };
  resize();
  new ResizeObserver(resize).observe(hGrid);

  /* ── Segment store ─────────────────────────────────────────────────────
     key: 'h{ri}:{ci}'  horizontal seg at row ri, starting col ci → ci+1
          'v{ri}:{ci}'  vertical   seg at col ci, starting row ri → ri+1
  ───────────────────────────────────────────────────────────────────── */
  const segs = new Map(); // key → { peakA, born, life, hz, phase }

  function touchSeg(key, energy) {
    const a = energy * MAX_ALPHA;
    const ex = segs.get(key);
    const now = performance.now();
    if (ex) { if (a > ex.peakA) ex.peakA = a; ex.born = now; return; }
    segs.set(key, {
      peakA: a,
      born: now,
      life: SEG_LIFE * (0.55 + Math.random() * 0.90),  // randomised lifetime
      hz: 1.0 + Math.random() * 2.8,                  // pulse frequency
      phase: Math.random() * 6.28                         // pulse phase offset
    });
  }

  /* ── Wave propagation queue ───────────────────────────────────────── */
  const queue = []; // { ci, ri, energy, fireAt, step, pci, pri }

  function enqueue(ci, ri, energy, fireAt, step, pci, pri) {
    if (step > MAX_STEPS || energy < 0.035) return;
    if (ci * CELL < -CELL || ri * CELL + gridOffsetY < -CELL ||
      ci * CELL > cw + CELL || ri * CELL + gridOffsetY > ch + CELL) return;
    queue.push({ ci, ri, energy, fireAt, step, pci, pri });
  }

  function processQueue(now) {
    let i = 0;
    while (i < queue.length) {
      const item = queue[i];
      if (item.fireAt > now) { i++; continue; }
      queue.splice(i, 1);

      const { ci, ri, energy, step, pci, pri } = item;

      // Activate the segment that leads into this intersection
      if (pci !== null) {
        if (pci === ci) {
          // came vertically
          touchSeg('v' + Math.min(pri, ri) + ':' + ci, energy);
        } else {
          // came horizontally
          touchSeg('h' + ri + ':' + Math.min(pci, ci), energy);
        }
      }

      // Branch to neighbours with jitter
      const dirs = [{ dci: 1, dri: 0 }, { dci: -1, dri: 0 }, { dci: 0, dri: 1 }, { dci: 0, dri: -1 }];
      for (const d of dirs) {
        const nci = ci + d.dci, nri = ri + d.dri;
        if (nci === pci && nri === pri) continue;              // no backtracking
        if (Math.random() > SPREAD) continue;                  // organic branching
        const e = energy * (DECAY_MU + (Math.random() - 0.5) * 0.20);
        const dt = STEP_MS * (0.4 + Math.random() * 1.4);     // jittered timing
        enqueue(nci, nri, e, now + dt, step + 1, ci, ri);
      }
    }
  }

  /* ── Draw ─────────────────────────────────────────────────────────── */
  function draw(now) {
    ctx.clearRect(0, 0, cw, ch);
    for (const [key, s] of segs) {
      const age = now - s.born;
      if (age >= s.life) { segs.delete(key); continue; }

      const t = age / s.life;
      // Fast fade-in, long organic tail
      const env = t < 0.07
        ? t / 0.07
        : Math.pow(1 - (t - 0.07) / 0.93, 1.8);
      const pulse = 0.80 + 0.20 * Math.sin(now * 0.001 * s.hz + s.phase);
      const a = s.peakA * env * pulse;
      if (a < 0.006) continue;

      // Parse key
      const isV = key[0] === 'v';
      const sep = key.indexOf(':');
      const r = +key.slice(1, sep);
      const c = +key.slice(sep + 1);
      const x1 = c * CELL, y1 = r * CELL + gridOffsetY;
      const x2 = isV ? x1 : x1 + CELL;
      const y2 = isV ? y1 + CELL : y1;

      // Gradient fades to transparent at both ends
      const g = ctx.createLinearGradient(x1, y1, x2, y2);
      g.addColorStop(0, `rgba(255,85,0,0)`);
      g.addColorStop(0.18, `rgba(255,85,0,${+(a * 0.55).toFixed(3)})`);
      g.addColorStop(0.5, `rgba(255,85,0,${+a.toFixed(3)})`);
      g.addColorStop(0.82, `rgba(255,85,0,${+(a * 0.55).toFixed(3)})`);
      g.addColorStop(1, `rgba(255,85,0,0)`);
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = g;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
  }

  /* ── Cursor tracking (desktop only) ───────────────────────────────── */
  let lastCI = -9999, lastRI = -9999;
  let present = false, hCI = -9999, hRI = -9999, reinjAt = 0;

  if (!isTouch) {
    hero.addEventListener('mousemove', e => {
      if (e.clientY <= nav.getBoundingClientRect().bottom) return;
      const r = hGrid.getBoundingClientRect();
      const ci = Math.round((e.clientX - r.left) / CELL);
      const ri = Math.round((e.clientY - r.top) / CELL);
      present = true; hCI = ci; hRI = ri;
      if (ci !== lastCI || ri !== lastRI) {
        lastCI = ci; lastRI = ri;
        enqueue(ci, ri, 1.0, performance.now(), 0, null, null);
      }
    });
    hero.addEventListener('mouseleave', () => {
      present = false; hCI = -9999; hRI = -9999;
    });
  }

  /* ── RAF loop — paused when hero is off-screen ───────────────────── */
  let heroVisible = true;
  let canvasRafId = null;

  new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    if (heroVisible && !canvasRafId) canvasRafId = requestAnimationFrame(frame);
  }, { threshold: 0 }).observe(hero);

  let nextAutoFire = 0;

  function frame(now) {
    canvasRafId = null;
    if (!heroVisible) return;
    // Low-energy heartbeat every ~2 s\u00a0when cursor is stationary
    if (present && now > reinjAt) {
      reinjAt = now + 2000;
      enqueue(hCI, hRI, 0.58, now, 0, null, null);
    }
    // Mobile: random auto-fire every 1.8–3.8 s at a random grid intersection
    if (isTouch && now > nextAutoFire) {
      nextAutoFire = now + 800 + Math.random() * 2000;
      const cols = Math.ceil(cw / CELL);
      const rows = Math.ceil((ch - gridOffsetY) / CELL);
      enqueue(
        Math.floor(Math.random() * cols),
        Math.floor(Math.random() * rows),
        0.55 + Math.random() * 0.35,
        now, 0, null, null
      );
    }
    processQueue(now);
    draw(now);
    canvasRafId = requestAnimationFrame(frame);
  }
  canvasRafId = requestAnimationFrame(frame);
})();

// --- Marquee engine (rAF pixel-based, dynamic fill — truly seamless at any viewport) ---
// Strategy: HTML holds exactly ONE copy of each track's items. JS snapshots that HTML,
// measures loopWidth (= one copy's rendered pixel width), then clones it until the total
// track is at least 4× the viewport wide. The rAF loop advances position in pixels and
// resets by exactly loopWidth — so copy N end → copy N+1 start is a\u00a0mathematically
// invisible boundary. On resize, fill() clones more if the viewport grew (zoom-out /
// fullscreen) so there is never empty space regardless of breakpoint or zoom level.
(function () {
  if (prefersReducedMotion) return;

  function initMarquee(el, durationMs, reverse) {
    if (!el) return;

    const sourceHTML = el.innerHTML;
    let loopWidth = 0;
    let pos = 0;
    let lastTime = null;
    let paused = false;
    let rafId = null;

    function fill(minPx) {
      while (el.scrollWidth < minPx) {
        el.insertAdjacentHTML('beforeend', sourceHTML);
      }
    }

    function tick(now) {
      rafId = null;
      if (paused) return;
      // First frame after start or tab-return: anchor time, skip move
      if (lastTime === null) { lastTime = now; rafId = requestAnimationFrame(tick); return; }
      const dt = Math.min(now - lastTime, 33); // cap at ~2 frames
      lastTime = now;

      const speed = loopWidth / durationMs;

      if (reverse) {
        pos += speed * dt;
        if (pos >= 0) pos -= loopWidth;
      } else {
        pos -= speed * dt;
        if (pos <= -loopWidth) pos += loopWidth;
      }

      el.style.transform = `translateX(${pos}px)`;
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      // getBoundingClientRect gives sub-pixel float precision vs scrollWidth integer
      loopWidth = el.getBoundingClientRect().width;
      fill(window.innerWidth * 4);
      pos = reverse ? -loopWidth : 0;
      rafId = requestAnimationFrame(tick);
    }

    // Pause RAF when tab is hidden; resume and reset time anchor when visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        paused = true;
      } else {
        paused = false;
        lastTime = null;
        if (!rafId) rafId = requestAnimationFrame(tick);
      }
    });

    (document.fonts ? document.fonts.ready : Promise.resolve()).then(start);

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (loopWidth > 0) fill(window.innerWidth * 4);
      }, 150);
    }, { passive: true });
  }

  // Services carousel — forward, 140 s\u00a0per loop
  initMarquee(
    document.querySelector('.marquee:not(.marquee--reverse)'),
    140000,
    false
  );

  // Clients carousel — reverse, 30 s\u00a0per loop
  initMarquee(
    document.querySelector('.marquee--reverse'),
    30000,
    true
  );
})();

// --- Side mouse button navigation (buttons 3 & 4) ---
//
//   button 4  =  front (closer to monitor)  single → prev section | double → page top
//   button 3  =  rear  (closer to user)     single → next section | double → page bottom
//
// WHY the two-part architecture:
//   Problem A\u00a0— Chrome initiates back/forward navigation at the browser-process level
//   when side buttons are pressed. This decision is made around the pointerdown event,
//   which fires BEFORE mousedown. Putting preventDefault on pointerdown (not mousedown)
//   gives us the best chance to block it.
//
//   Problem B — Clicking nav links (<a href="#work">) pushes entries to browser history.
//   Each entry is a\u00a0new target for Chrome's side-button navigation. The more entries,
//   the more often Chrome ignores our preventDefault and navigates through history.
//   Fix: intercept ALL hash anchor clicks and use replaceState instead of the default
//   pushState — URL still updates (good for bookmarking) but no new history entry is created.
(function () {
  const SECTION_IDS = ['work', 'services', 'production', 'about', 'contact', 'footer'];
  // Double-click detection: compare timestamps between consecutive presses.
  // Single-click waits SINGLE_DELAY ms before firing — if a\u00a0second press arrives within
  //   that window the timer is cancelled and the double-click action fires instantly with
  //   zero pre-scroll, giving the fastest possible response.
  // DBLCLICK_MS extends detection past SINGLE_DELAY for slower double-clicks (cancel+redirect).
  // DEBOUNCE_MS filters hardware switch chatter.
  const SINGLE_DELAY = 150;  // ms before single fires; double-click within this = instant, clean
  const DBLCLICK_MS  = 500;  // total detection window
  const DEBOUNCE_MS  = 60;   // hardware debounce
  const SNAP_PX      = 10;
  const lastPress    = {};   // timestamp of last accepted press per button
  const justFiredDbl = {};   // flag: next press must be single regardless of gap
  const singleTimers = {};   // pending single-click timers

  function navH() {
    const n = document.getElementById('nav');
    return n ? n.offsetHeight : 0;
  }

  // Always compute section positions fresh — no stale index state.
  function sectionTops() {
    const h = navH();
    return SECTION_IDS
      .map(id => document.getElementById(id))
      .filter(Boolean)
      .map(el => Math.round(el.getBoundingClientRect().top + window.scrollY - h));
  }

  function prevSection() {
    const cur  = window.scrollY;
    const dest = [...sectionTops()].reverse().find(t => t < cur - SNAP_PX);
    window.scrollTo({ top: Math.max(0, dest != null ? dest : 0), behavior: 'smooth' });
  }

  function nextSection() {
    const cur  = window.scrollY;
    const dest = sectionTops().find(t => t > cur + SNAP_PX);
    if (dest != null) window.scrollTo({ top: dest, behavior: 'smooth' });
  }

  // Controlled smooth scroll with ease-out cubic at a\u00a0constant pixel-per-second speed.
  // Fixed duration causes asymmetry: same 1600 ms covers less distance going up (shorter)
  // than going down (longer page tail), so up looks slower. Constant speed fixes this.
  const SCROLL_SPEED = 2000; // px / s\u00a0— same visual velocity regardless of direction

  let rafId = null;

  function cancelScroll() {
    // Freeze any in-progress native smooth scroll at current position.
    window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    // Also cancel any rAF-based animation.
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function smoothScrollTo(targetY) {
    if (prefersReducedMotion) { window.scrollTo(0, Math.max(0, targetY)); return; }
    cancelScroll();
    const startY = window.scrollY;
    const delta  = Math.max(0, targetY) - startY;
    if (Math.abs(delta) < 1) return;
    // Duration scales with distance so speed stays constant; clamp to a\u00a0sensible range.
    const ms     = Math.min(2200, Math.max(700, Math.abs(delta) / SCROLL_SPEED * 1000));
    const startT = performance.now();
    function tick(now) {
      const t    = Math.min((now - startT) / ms, 1);
      const ease = 1 - Math.pow(1 - t, 3);   // ease-out cubic
      window.scrollTo(0, startY + delta * ease);
      rafId = t < 1 ? requestAnimationFrame(tick) : null;
    }
    rafId = requestAnimationFrame(tick);
  }

  const isSide = btn => btn === 3 || btn === 4;

  function onPress(btn) {
    const now = Date.now();
    const gap = now - (lastPress[btn] || 0);

    if (gap < DEBOUNCE_MS) return;

    if (!justFiredDbl[btn] && gap < DBLCLICK_MS) {
      // ── Double-click ──────────────────────────────────────────────────────
      // Cancel pending single (may not have fired yet) → zero pre-scroll, instant start.
      clearTimeout(singleTimers[btn]);
      singleTimers[btn] = null;
      lastPress[btn]    = now;
      justFiredDbl[btn] = true;
      cancelScroll();
      if (btn === 4) smoothScrollTo(0);
      else           smoothScrollTo(document.documentElement.scrollHeight);
    } else {
      // ── Single click ──────────────────────────────────────────────────────
      lastPress[btn]    = now;
      justFiredDbl[btn] = false;
      clearTimeout(singleTimers[btn]);
      singleTimers[btn] = setTimeout(() => {
        singleTimers[btn] = null;
        if (btn === 4) prevSection();
        else           nextSection();
      }, SINGLE_DELAY);
    }
  }

  // LAYER 1 — pointerdown (earliest event, best chance to block browser navigation)
  // Logic lives here; all later events just add more prevention layers.
  window.addEventListener('pointerdown', e => {
    if (!isSide(e.button)) return;
    e.preventDefault();
    onPress(e.button);
  }, { capture: true, passive: false });

  // LAYER 2 — block every subsequent event that could trigger browser back/forward
  for (const type of ['mousedown', 'mouseup', 'pointerup', 'auxclick', 'click', 'contextmenu']) {
    window.addEventListener(type, e => {
      if (isSide(e.button)) e.preventDefault();
    }, { capture: true, passive: false });
  }

  // LAYER 3 — prevent hash anchor links from pushing history entries.
  // Uses replaceState so the URL still reflects the current section (good for UX/bookmarking)
  // but history.length stays constant, removing the browser's incentive to navigate on side clicks.
  // The mobile-menu close handlers still fire normally (preventDefault doesn't stop propagation).
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href !== '#') history.replaceState(null, '', href);
    const target = href && href !== '#' ? document.querySelector(href) : null;
    const top    = target
      ? Math.round(target.getBoundingClientRect().top + window.scrollY - navH())
      : 0;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  });

  // --- Spacebar bouncing section navigation ---
  // Space → step down through sections; on reaching footer reverse → step up;
  // on reaching top reverse → step down again. Bounces indefinitely.
  //
  // NOTE: spaceTops() uses getBoundingClientRect().top + scrollY which can yield
  // a value higher than the browser's max scrollable position (scrollHeight - innerHeight).
  // The footer is often unreachable this way because the page ends before its top.
  // Fix: treat the page as "at bottom" when scrollY >= maxScrollY - SNAP_PX, regardless
  // of what spaceTops() returns — this is the only reliable bottom-detection method.
  //
  // spaceScrollTo: same animation as smoothScrollTo but only calls cancelScroll() when a
  // rAF animation is already running. Calling cancelScroll() from rest triggers an
  // instant scrollTo(scrollY) micro-repaint that causes a 1-frame jitter on the first press.
  const SPACE_IDS = ['home', 'work', 'services', 'production', 'about', 'contact', 'footer'];
  let spaceDir    = 1;   // 1 = going down, -1 = going up
  let spaceLastAt = 0;   // timestamp of last accepted keypress (200 ms throttle)

  function spaceScrollTo(targetY) {
    if (rafId) cancelScroll();   // only cancel+freeze when something is actually animating
    const startY = window.scrollY;
    const delta  = Math.max(0, targetY) - startY;
    if (Math.abs(delta) < 1) return;
    const ms     = Math.min(2200, Math.max(700, Math.abs(delta) / SCROLL_SPEED * 1000));
    const startT = performance.now();
    function tick(now) {
      const t    = Math.min((now - startT) / ms, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      window.scrollTo(0, startY + delta * ease);
      rafId = t < 1 ? requestAnimationFrame(tick) : null;
    }
    rafId = requestAnimationFrame(tick);
  }

  function spaceTops() {
    const h = navH();
    return SPACE_IDS
      .map(id => document.getElementById(id))
      .filter(Boolean)
      .map(el => Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - h)));
  }

  document.addEventListener('keydown', e => {
    if (e.code !== 'Space') return;
    // Don't hijack when user is typing
    if (e.target.matches('input, textarea, select, [contenteditable]')) return;
    e.preventDefault();

    const now = Date.now();
    if (now - spaceLastAt < 200) return;
    spaceLastAt = now;

    const cur      = window.scrollY;
    const maxY     = document.documentElement.scrollHeight - window.innerHeight;
    const atBottom = cur >= maxY - SNAP_PX;
    const atTop    = cur <= SNAP_PX;
    const tops     = spaceTops();

    if (spaceDir === 1) {
      // ── Going down ──────────────────────────────────────────────────────
      const dest = atBottom ? null : tops.find(t => t > cur + SNAP_PX);
      if (dest != null) {
        spaceScrollTo(dest);
      } else {
        // Reached bottom — reverse and take one step up immediately
        spaceDir = -1;
        const prev = [...tops].reverse().find(t => t < cur - SNAP_PX);
        if (prev != null) spaceScrollTo(prev);
      }
    } else {
      // ── Going up ────────────────────────────────────────────────────────
      const dest = atTop ? null : [...tops].reverse().find(t => t < cur - SNAP_PX);
      if (dest != null) {
        spaceScrollTo(dest);
      } else {
        // Reached top — reverse and take one step down immediately
        spaceDir = 1;
        const next = tops.find(t => t > cur + SNAP_PX);
        if (next != null) spaceScrollTo(next);
      }
    }
  });
})();

// IČO click-to-copy
document.addEventListener('click', e => {
  const num = e.target.closest('.footer__ico-num');
  if (!num) return;
  const text = num.dataset.copy || num.textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    num.classList.add('copied');
    setTimeout(() => num.classList.remove('copied'), 1400);
  });
});

// LV rain animation
(function () {
  const SVG_PATH = 'M1036.13,2287.78c193.29-338.59,360.8-412.59,477.77-417.89,291.65-13.21,434.83,393.14,793.13,416.9,207.22,13.75,384.42-107.25,498.54-207.15-104.89-47.41-267.84-134.29-430.66-286.42-145.43-135.89-448.11-418.71-415.05-737.78,22.19-214.18,177.12-265.63,177.2-497.21.05-158.54-72.51-288.91-136.3-376.35-85.84,175.53-194.87,371.62-333.4,577.44-140.97,209.44-284.17,386.89-416.58,534.2,58.04-3.69,239.24-7.83,419.62,111.54,190.84,126.29,256.08,308.31,273.17,361.95-74.03-41.78-388.68-208.31-789.16-116.86-348.67,79.62-548.77,306.02-608.69,379.49,67.43,10.7,168.16,34.84,277.37,94.33,98.48,53.64,168.34,116.67,213.04,163.8Z';

  // 23 size entries
  const SIZES = [
    { w: 18 }, { w: 18 }, { w: 18 }, { w: 18 }, { w: 18 }, { w: 18 },
    { w: 28 }, { w: 28 }, { w: 28 }, { w: 28 }, { w: 28 }, { w: 28 },
    { w: 42 }, { w: 42 }, { w: 42 }, { w: 42 }, { w: 42 },
    { w: 18 }, { w: 28 }, { w: 42 }, { w: 28 }, { w: 18 }, { w: 42 },
  ];

  const rand = (min, max) => min + Math.random() * (max - min);

  function triggerRain() {
    if (prefersReducedMotion) return;
    const overlay = document.createElement('div');
    overlay.className = 'lv-rain';

    let maxEnd = 0;

    SIZES.forEach(size => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 3351.29 2469.76');
      svg.classList.add('lv-drop');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', SVG_PATH);
      svg.appendChild(path);

      const w       = size.w;
      const h       = Math.round(w * (2469.76 / 3351.29));
      const left    = rand(1, 97);
      // all drops start at top of overlay (= nav bottom) — nav bar hides the origin
      const startPx = 0;
      const dur     = rand(1.2, 2.4);
      const delay   = rand(0, 0.7);
      const rot     = rand(-15, 15);
      const rotEnd  = rot + rand(-6, 6);
      const drift   = rand(-20, 20);
      const opacity = rand(0.42, 0.76);

      svg.style.cssText = `
        width:${w}px; height:${h}px; left:${left}%;
        --dur:${dur.toFixed(3)}s; --delay:${delay.toFixed(3)}s;
        --rot:${rot.toFixed(1)}deg; --rot-end:${rotEnd.toFixed(1)}deg;
        --drift:${drift.toFixed(1)}px;
        --peak-opacity:${opacity.toFixed(2)};
        --start-y:${startPx.toFixed(1)}px;
      `;

      overlay.appendChild(svg);
      const totalMs = (dur + delay) * 1000;
      if (totalMs > maxEnd) maxEnd = totalMs;
    });

    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), maxEnd + 150);
  }

  document.addEventListener('click', e => {
    if (e.target.closest('.hero__tag')) triggerRain();
  });
})();

// Cookie banner
(function () {
  const STORAGE_KEY = 'liva_cookie_consent';
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  if (localStorage.getItem(STORAGE_KEY)) {
    banner.classList.add('hidden');
    return;
  }

  function dismiss(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    banner.classList.add('hidden');
  }

  document.getElementById('cookieAccept').addEventListener('click', () => dismiss('accepted'));
  document.getElementById('cookieReject').addEventListener('click', () => dismiss('rejected'));
})();

// --- Legal page lang switcher (privacy-policy.html, terms.html) ---
// Moved here from inline <script> blocks to allow a\u00a0strict script-src CSP.
(function () {
  if (!document.getElementById('legal-en')) return; // not a\u00a0legal page

  function setLegalLang(lang) {
    document.getElementById('legal-en').hidden = (lang !== 'en');
    document.getElementById('legal-cs').hidden = (lang !== 'cs');
    document.documentElement.lang = lang;
    document.querySelectorAll('.legal-lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang)
    );
    try { localStorage.setItem('liva-lang', lang); } catch (e) { }
  }

  // Init from saved language preference
  try {
    const l = localStorage.getItem('liva-lang');
    setLegalLang(l === 'cs' ? 'cs' : 'en');
  } catch (e) { setLegalLang('en'); }

  // Wire up the EN / CS buttons
  document.querySelectorAll('.legal-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLegalLang(btn.dataset.lang));
  });
})();
