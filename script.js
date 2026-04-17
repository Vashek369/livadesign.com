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

// --- i18n translations ---
const TRANSLATIONS = {
  en: {
    'nav.work': 'Work', 'nav.services': 'Services', 'nav.production': 'Production', 'nav.about': 'About', 'nav.cta': "Let's talk",
    'mobile.work': 'Work', 'mobile.services': 'Services', 'mobile.production': 'Production', 'mobile.about': 'About', 'mobile.cta': "Let's talk",
    'hero.tag': 'Design Studio', 'hero.tag-sub': '(with an AI overlap)',
    'hero.headline': 'We design<br /><span class="accent">experiences</span><br />that convert.',
    'hero.sub': '<span>Branding \u00b7 UI/UX \u00b7 Web Design \u00b7 Design Systems</span><span class="hero__sub-physical">Print \u00b7 Signage \u00b7 Merch \u00b7 3D Printing</span>',
    'hero.btn-work': 'View work', 'hero.btn-project': 'Start project', 'hero.scroll': 'Scroll',
    'mq.brand-identity': 'Brand Identity', 'mq.ui-design': 'UI Design', 'mq.ux-strategy': 'UX Strategy',
    'mq.web-design': 'Web Design', 'mq.design-systems': 'Design Systems',
    'mq.3d-modeling': '3D Modeling', 'mq.3d-printing': '3D Printing', 'mq.motion': 'Motion',
    'mq.print': 'Print', 'mq.signage': 'Signage', 'mq.banners': 'Banners',
    'mq.pvc': 'PVC', 'mq.dibond': 'Dibond', 'mq.merch': 'Merch',
    'mq.screen-printing': 'Screen Printing', 'mq.dtf': 'DTF',
    'work.label': 'Selected Work',
    'work.title': 'Projects that<br /><span class="accent">define brands.</span>',
    'project.view': 'View Case',
    'project.desc-1': 'Packaging design, visual communication',
    'project.desc-2': 'Social media, visual communication',
    'project.desc-3': 'Creative direction of tour visuals for the album GOLDKIID',
    'project.desc-4': 'Full merchandise for the musical Děti ráje',
    'services.label': 'What We Do',
    'services.title': 'Services built for<br /><span class="accent">modern brands.</span>',
    'svc.01.name': 'Brand Identity', 'svc.01.desc': 'Strategy-driven visual systems \u2014 logo, typography, color, and guidelines that make your brand unmistakable.',
    'svc.02.name': 'UI / UX Design', 'svc.02.desc': 'Interfaces that feel effortless. Research-backed, pixel-perfect, and built to drive real product outcomes.',
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
    'about.p3': 'Behind every project is a well-structured, end-to-end process \u2014 combining design, development, and production into one seamless workflow. LIVA delivers complete packages, ensuring consistency, precision, and high-quality execution across every stage, regardless of project size.',
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
    'form.opt-brand': 'Brand Identity', 'form.opt-uiux': 'UI / UX Design',
    'form.opt-web': 'Web Design', 'form.opt-system': 'Design Systems',
    'form.opt-print': 'Print',
    'form.opt-signage': 'Signage & Banners',
    'form.opt-merch': 'Merch Production',
    'form.opt-3d': '3D Modeling & Printing', 'form.opt-other': 'Other',
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
    'hero.headline': 'Navrhujeme<br /><span class="accent">z\u00e1\u017eitky</span><br />kter\u00e9 konvertuj\u00ed.',
    'hero.sub': '<span>Branding \u00b7 UI/UX \u00b7 Web Design \u00b7 Design Systems</span><span class="hero__sub-physical">Tisk \u00b7 Pout\u00e1\u010de \u00b7 Merch \u00b7 3D Tisk</span>',
    'hero.btn-work': 'Na\u0161e pr\u00e1ce', 'hero.btn-project': 'Za\u010d\u00edt projekt', 'hero.scroll': 'Scroll',
    'mq.brand-identity': 'Firemn\u00ed identita', 'mq.ui-design': 'UI Design', 'mq.ux-strategy': 'UX Strategie',
    'mq.web-design': 'Web Design', 'mq.design-systems': 'Designov\u00e9 syst\u00e9my',
    'mq.3d-modeling': '3D Modelov\u00e1n\u00ed', 'mq.3d-printing': '3D Tisk', 'mq.motion': 'Motion',
    'mq.print': 'Tisk', 'mq.signage': 'Pout\u00e1\u010de', 'mq.banners': 'Bannery',
    'mq.pvc': 'PVC', 'mq.dibond': 'Dibond', 'mq.merch': 'Merch',
    'mq.screen-printing': 'S\u00edtotisk', 'mq.dtf': 'DTF',
    'work.label': 'Vybran\u00e9 projekty',
    'work.title': 'Projekty, kter\u00e9<br /><span class="accent">definuj\u00ed zna\u010dky.</span>',
    'project.view': 'Zobrazit projekt',
    'project.desc-1': 'Design obal\u016f, vizu\u00e1ln\u00ed komunikace',
    'project.desc-2': 'Soci\u00e1ln\u00ed s\u00edt\u011b, vizu\u00e1ln\u00ed komunikace',
    'project.desc-3': 'Kreativn\u00ed veden\u00ed vizu\u00e1l\u016f turn\u00e9 pro album GOLDKIID',
    'project.desc-4': 'Kompletn\u00ed merch pro muzik\u00e1l D\u011bti r\u00e1je',
    'services.label': 'Co d\u011bl\u00e1me',
    'services.title': 'Slu\u017eby pro<br /><span class="accent">modern\u00ed zna\u010dky.</span>',
    'svc.01.name': 'Firemn\u00ed identita', 'svc.01.desc': 'Strategicky utv\u00e1\u0159en\u00e9 vizu\u00e1ln\u00ed syst\u00e9my \u2014 logo, typografie, barva a\u00a0grafick\u00e1 pravidla, kter\u00e1 va\u0161i zna\u010dku ud\u011blaj\u00ed nezam\u011bnitelnou.',
    'svc.02.name': 'UI / UX Design', 'svc.02.desc': 'Rozhran\u00ed, kter\u00e1 se ovl\u00e1daj\u00ed intuitivn\u011b. Podlo\u017een\u00e1 v\u00fdzkumem, pixel-perfect a\u00a0navr\u017een\u00e1 pro re\u00e1ln\u00e9 v\u00fdsledky produktu.',
    'svc.03.name': 'Web Design', 'svc.03.desc': 'Weby zam\u011b\u0159en\u00e9 na konverze s\u00a0\u010distou estetikou, plynul\u00fdmi interakcemi a\u00a0prom\u00fd\u0161len\u00fdm layoutem.',
    'svc.04.name': 'Designov\u00e9 syst\u00e9my', 'svc.04.desc': '\u0160k\u00e1lovateln\u00e9 knihovny komponent a\u00a0dokumentace, kter\u00e9 dr\u017e\u00ed produktov\u00e9 t\u00fdmy v\u00a0souladu a\u00a0urychluj\u00ed v\u00fdvoj.',
    'prod.label': 'Co vyr\u00e1b\u00edme',
    'prod.title': 'Fyzick\u00e1 v\u00fdroba pro<br /><span class="accent">re\u00e1ln\u00fd dopad.</span>',
    'prod.01.name': 'Tisk', 'prod.01.desc': 'Vizitky, let\u00e1ky, plak\u00e1ty a\u00a0ka\u017edodenn\u00ed brandov\u00e9 materi\u00e1ly vyr\u00e1b\u011bn\u00e9 s\u00a0p\u0159esnost\u00ed a\u00a0konzistenc\u00ed.',
    'prod.02.name': 'Pout\u00e1\u010de & Bannery', 'prod.02.desc': 'PVC, dibond a\u00a0vlastn\u00ed pout\u00e1\u010dov\u00e1 \u0159e\u0161en\u00ed navr\u017een\u00e1 pro viditelnost a\u00a0odolnost.',
    'prod.03.name': 'V\u00fdroba merche', 'prod.03.desc': 'Oble\u010den\u00ed, dopl\u0148ky a\u00a0vlastn\u00ed merch v\u010detn\u011b s\u00edtotisku, DTF, digit\u00e1ln\u00edho tisku a\u00a0v\u00fd\u0161ivky.',
    'prod.04.name': '3D Modelov\u00e1n\u00ed & Tisk', 'prod.04.desc': 'Vlastn\u00ed 3D modely a\u00a0fyzick\u00e9 prototypy, od konceptu po re\u00e1lnou v\u00fdrobu.',
    'stat.projects': 'Dokon\u010den\u00fdch projekt\u016f', 'stat.clients': 'Spokojn\u00fdch klient\u016f',
    'stat.years': 'Let zku\u0161enost\u00ed', 'stat.awards': 'Z\u00edskan\u00fdch ocen\u011bn\u00ed',
    'about.label': 'O\u00a0LIVA',
    'about.title': 'P\u0159ipraveni dodat.<br /><span class="accent">V\u00a0jak\u00e9mkoli m\u011b\u0159\u00edtku.</span>',
    'about.p1': 'LIVA bylo zalo\u017eeno Liborem a\u00a0Va\u0161kem \u2014 dv\u011bma designery s\u00a0v\u00edce ne\u017e 7 lety profesion\u00e1ln\u00ed praxe. Spolupracuj\u00ed od st\u0159edn\u00ed \u0161koly a\u00a0pr\u00e1v\u011b tato dlouhodob\u00e1 spolupr\u00e1ce stoj\u00ed za konzistenc\u00ed a\u00a0d\u016fv\u011bryhodnost\u00ed studia.',
    'about.p2': 'Studio pokr\u00fdv\u00e1 cel\u00e9 spektrum \u2014 od soustředen\u00e9 brandov\u00e9 pr\u00e1ce po rozs\u00e1hl\u00e9 korporátn\u00ed projekty. Mlad\u00ed, technicky zdatn\u00ed a\u00a0v\u017edy v\u00a0obraz\u011b o\u00a0trendech v\u00a0designu i\u00a0technologi\u00edch. Pro ka\u017ed\u00fd typ klienta.',
    'about.p3': 'Za ka\u017ed\u00fdm projektem stoj\u00ed \u0161ir\u0161\u00ed s\u00ed\u0165 specialist\u016f \u2014 v\u00fdvoj\u00e1\u0159i, fotografov\u00e9, copywrite\u0159i a\u00a0produk\u010dn\u00ed partne\u0159i \u2014 d\u00edky nim\u017e LIVA zvl\u00e1d\u00e1 realizovat projekty na nejvy\u0161\u0161\u00ed \u00farovni, bez ohledu na jejich rozsah.',
    'about.role': 'Spoluzakladatel & Designer',
    'contact.label': 'Kontakt',
    'contact.title': 'P\u0159ipraveni postavit<br /><span class="accent">n\u011bco skv\u011bl\u00e9ho?</span>',
    'contact.sub': '\u0158ekn\u011bte n\u00e1m o\u00a0sv\u00e9m projektu a\u00a0ozveme se do 24 hodin.',
    'form.name-label': 'Jm\u00e9no', 'form.email-label': 'E-mail',
    'form.service-label': 'Slu\u017eba', 'form.msg-label': 'Zpr\u00e1va',
    'form.name-ph': 'Va\u0161e jm\u00e9no', 'form.email-ph': 'vas@email.com',
    'form.service-ph': 'Co pot\u0159ebujete?', 'form.msg-ph': 'Napi\u0161te n\u00e1m o\u00a0sv\u00e9m projektu...',
    'form.submit': 'Odeslat zpr\u00e1vu \u2197',
    'form.opt-digital': 'Digit\u00e1ln\u00ed slu\u017eby', 'form.opt-physical': 'Fyzick\u00e1 v\u00fdroba', 'form.opt-other-grp': 'Ostatn\u00ed',
    'form.opt-brand': 'Firemn\u00ed identita', 'form.opt-uiux': 'UI / UX Design',
    'form.opt-web': 'Web Design', 'form.opt-system': 'Designov\u00e9 syst\u00e9my',
    'form.opt-print': 'Tisk',
    'form.opt-signage': 'Pout\u00e1\u010de & Bannery',
    'form.opt-merch': 'V\u00fdroba merche',
    'form.opt-3d': '3D Modelov\u00e1n\u00ed & Tisk', 'form.opt-other': 'Ostatn\u00ed',
    'footer.copy': '\u00a9 2026 LIVA Design. V\u0161echna pr\u00e1va vyhrazena.',
    'footer.privacy': 'Ochrana osobn\u00edch\u00a0\u00fadaj\u016f',
    'footer.terms': 'Obchodn\u00ed podm\u00ednky',
    'cookie.text': 'Pou\u017e\u00edv\u00e1me cookies ke zlep\u0161en\u00ed va\u0161eho z\u00e1\u017eitku a\u00a0anal\u00fdze n\u00e1v\u0161t\u011bvnosti webu.',
    'cookie.policy': 'Ochrana osobn\u00edch \u00fadaj\u016f',
    'cookie.reject': 'Pouze nezbytn\u00e9',
    'cookie.accept': 'P\u0159ijmout v\u0161e',
  }
};

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

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

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
function animateCounter(el, target, duration = 1400) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease out cubic
    el.textContent = Math.floor(ease * target);
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
  if (name.length < 2 || name.length > 100) return;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return;
  if (message.length < 10 || message.length > 2000) return;

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
// The .hero__scroll-line is a 1px visual track that doubles as a draggable micro-scrollbar.
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

  // Map a pointer clientX to a 0–1 progress value clamped to the track width
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
if (heroGrid) {
  window.addEventListener('scroll', () => {
    heroGrid.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}


// CTA position is set by .hero__zone-bot padding-top in CSS (no JS snap needed).

// --- Electric grid web — signal propagates from cursor along grid lines ---
(function () {
  const hero = document.querySelector('.hero');
  const hGrid = document.querySelector('.hero__grid');
  if (!hero || !hGrid || !window.matchMedia('(pointer: fine)').matches) return;

  const CELL = 60;    // must match CSS background-size
  const MAX_STEPS = 11;    // max grid hops per wave
  const STEP_MS = 44;    // base ms between propagation steps
  const SEG_LIFE = 2600;  // max ms a segment stays visible
  const SPREAD = 0.68;  // probability of branching to each neighbour
  const DECAY_MU = 0.60;  // mean energy multiplier per hop
  const MAX_ALPHA = 0.65;  // peak line opacity (+30% from 0.50)

  // Canvas inside heroGrid — inherits parallax transform automatically
  const cvs = document.createElement('canvas');
  cvs.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  hGrid.appendChild(cvs);
  const ctx = cvs.getContext('2d');

  let cw, ch;
  const resize = () => { cw = cvs.width = hGrid.offsetWidth; ch = cvs.height = hGrid.offsetHeight; };
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
    if (ci * CELL < -CELL || ri * CELL < -CELL ||
      ci * CELL > cw + CELL || ri * CELL > ch + CELL) return;
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
      const x1 = c * CELL, y1 = r * CELL;
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

  /* ── Cursor tracking ──────────────────────────────────────────────── */
  let lastCI = -9999, lastRI = -9999;
  let present = false, hCI = -9999, hRI = -9999, reinjAt = 0;

  hero.addEventListener('mousemove', e => {
    // Ignore the navbar overlay zone
    if (e.clientY <= nav.getBoundingClientRect().bottom) return;

    const r = hGrid.getBoundingClientRect();
    const ci = Math.round((e.clientX - r.left) / CELL);
    const ri = Math.round((e.clientY - r.top) / CELL);
    present = true; hCI = ci; hRI = ri;

    if (ci !== lastCI || ri !== lastRI) {
      lastCI = ci; lastRI = ri;
      // Full-energy wave on intersection change
      enqueue(ci, ri, 1.0, performance.now(), 0, null, null);
    }
  });

  hero.addEventListener('mouseleave', () => {
    present = false; hCI = -9999; hRI = -9999;
  });

  /* ── RAF loop — paused when hero is off-screen ───────────────────── */
  let heroVisible = true;
  let canvasRafId = null;

  new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    if (heroVisible && !canvasRafId) canvasRafId = requestAnimationFrame(frame);
  }, { threshold: 0 }).observe(hero);

  function frame(now) {
    canvasRafId = null;
    if (!heroVisible) return;
    // Low-energy heartbeat every ~2 s when cursor is stationary
    if (present && now > reinjAt) {
      reinjAt = now + 2000;
      enqueue(hCI, hRI, 0.58, now, 0, null, null);
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
// resets by exactly loopWidth — so copy N end → copy N+1 start is a mathematically
// invisible boundary. On resize, fill() clones more if the viewport grew (zoom-out /
// fullscreen) so there is never empty space regardless of breakpoint or zoom level.
(function () {
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

  // Services carousel — forward, 140 s per loop
  initMarquee(
    document.querySelector('.marquee:not(.marquee--reverse)'),
    140000,
    false
  );

  // Clients carousel — reverse, 30 s per loop
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
//   Problem A — Chrome initiates back/forward navigation at the browser-process level
//   when side buttons are pressed. This decision is made around the pointerdown event,
//   which fires BEFORE mousedown. Putting preventDefault on pointerdown (not mousedown)
//   gives us the best chance to block it.
//
//   Problem B — Clicking nav links (<a href="#work">) pushes entries to browser history.
//   Each entry is a new target for Chrome's side-button navigation. The more entries,
//   the more often Chrome ignores our preventDefault and navigates through history.
//   Fix: intercept ALL hash anchor clicks and use replaceState instead of the default
//   pushState — URL still updates (good for bookmarking) but no new history entry is created.
(function () {
  const SECTION_IDS = ['work', 'services', 'production', 'about', 'contact', 'footer'];
  // Double-click detection: compare timestamps between consecutive presses.
  // Single-click waits SINGLE_DELAY ms before firing — if a second press arrives within
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

  // Controlled smooth scroll with ease-out cubic at a constant pixel-per-second speed.
  // Fixed duration causes asymmetry: same 1600 ms covers less distance going up (shorter)
  // than going down (longer page tail), so up looks slower. Constant speed fixes this.
  const SCROLL_SPEED = 2000; // px / s — same visual velocity regardless of direction

  let rafId = null;

  function cancelScroll() {
    // Freeze any in-progress native smooth scroll at current position.
    window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    // Also cancel any rAF-based animation.
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function smoothScrollTo(targetY) {
    cancelScroll();
    const startY = window.scrollY;
    const delta  = Math.max(0, targetY) - startY;
    if (Math.abs(delta) < 1) return;
    // Duration scales with distance so speed stays constant; clamp to a sensible range.
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
// Moved here from inline <script> blocks to allow a strict script-src CSP.
(function () {
  if (!document.getElementById('legal-en')) return; // not a legal page

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
