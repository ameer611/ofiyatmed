/* ============================================================
   Ofiyat Med — application script
   ============================================================ */

(function () {
  'use strict';

  /* Reception Telegram — opens a chat with the number below.
     Change here if the clinic moves reception to a @username. */
  const TELEGRAM_URL = 'https://t.me/+998951003300';

  const SUPPORTED = ['uz', 'ru', 'en'];
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  let lang = pickLang();

  function pickLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(q)) return q;
    try {
      const saved = localStorage.getItem('ofiyat-lang');
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* storage blocked — fall through */ }
    // Most local visitors browse in Uzbek or Russian; an "en" device locale is
    // usually just an untouched Android default, so only ru/uz auto-switch.
    // English stays one click away in the switcher.
    const nav = (navigator.language || 'uz').slice(0, 2).toLowerCase();
    return nav === 'ru' ? 'ru' : 'uz';
  }

  const t = (key) => (I18N[lang] && I18N[lang][key]) || (I18N.uz && I18N.uz[key]) || key;
  const pick = (obj) => (obj ? (obj[lang] ?? obj.uz) : '');

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const icon = (id) => `<svg class="ico" aria-hidden="true"><use href="#${id}"></use></svg>`;

  /* ── Rendering ────────────────────────────────────────── */

  function renderServices() {
    const grid = $('#servicesGrid');
    grid.textContent = '';
    DATA.departments.forEach((d) => {
      // <article> wrapper keeps the heading a real heading; the button inside is
      // the accessible control. Clicking anywhere on the card is a mouse shortcut.
      const card = el('article', 'card reveal');
      card.dataset.id = d.id;
      card.innerHTML =
        `<span class="card__ico">${icon(d.icon)}</span>` +
        `<h3 class="card__title">${esc(pick(d.name))}</h3>` +
        `<p class="card__desc">${esc(pick(d.desc))}</p>` +
        `<button type="button" class="card__more">${esc(t('services.more'))} ${icon('i-arrow')}</button>`;
      card.addEventListener('click', () => openService(d));
      grid.appendChild(card);
    });
  }

  function renderList(sel, arr) {
    const ul = $(sel);
    ul.textContent = '';
    pick(arr).forEach((s) => ul.appendChild(el('li', null, esc(s))));
  }

  function renderFloors() {
    const wrap = $('#floors');
    wrap.textContent = '';
    DATA.floors.forEach((f) => {
      wrap.appendChild(el('article', 'floor reveal',
        `<div class="floor__n">${esc(pick(f.n))}</div>` +
        `<div class="floor__b"><span class="floor__t">${esc(pick(f.t))}</span>` +
        `<span class="floor__d">${esc(pick(f.d))}</span></div>`));
    });
  }

  function renderFeats() {
    const wrap = $('#feats');
    wrap.textContent = '';
    DATA.feats.forEach((f) => {
      wrap.appendChild(el('article', 'feat reveal',
        `<span class="feat__ico">${icon(f.icon)}</span>` +
        `<h3>${esc(pick(f.t))}</h3><p>${esc(pick(f.d))}</p>`));
    });
  }

  let activeFilter = 'all';

  function renderFilters() {
    const wrap = $('#docFilters');
    wrap.textContent = '';
    DATA.docFilters.forEach((f) => {
      const b = el('button', 'chip' + (f.id === activeFilter ? ' is-on' : ''), esc(pick(f.l)));
      b.type = 'button';
      b.setAttribute('aria-pressed', String(f.id === activeFilter));
      b.addEventListener('click', () => {
        activeFilter = f.id;
        renderFilters();
        renderDoctors();
      });
      wrap.appendChild(b);
    });
  }

  function initials(name) {
    return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  }

  function renderDoctors() {
    const grid = $('#docGrid');
    grid.textContent = '';
    const list = DATA.doctors.filter((d) => activeFilter === 'all' || d.spec === activeFilter);

    if (!list.length) {
      grid.appendChild(el('p', 'muted', esc(t('doc.empty'))));
      return;
    }

    list.forEach((d) => {
      const name = pick(d.n);
      const tags = [];
      if (d.chief) tags.push(`<span class="tag tag--top">${esc(t('doc.chief'))}</span>`);
      if (d.cat === 'top') tags.push(`<span class="tag tag--top">${esc(t('doc.catTop'))}</span>`);
      if (d.cat === 'first') tags.push(`<span class="tag">${esc(t('doc.catFirst'))}</span>`);
      if (d.exp) tags.push(`<span class="tag">${d.exp} ${esc(t('doc.years'))}</span>`);

      grid.appendChild(el('article', 'doc reveal',
        `<span class="doc__av" aria-hidden="true">${esc(initials(name))}</span>` +
        `<h3 class="doc__name">${esc(name)}</h3>` +
        `<p class="doc__spec">${esc(pick(d.s))}</p>` +
        (tags.length ? `<div class="doc__meta">${tags.join('')}</div>` : '')));
    });
    observeReveals();
  }

  function renderQuotes() {
    const wrap = $('#quotes');
    wrap.textContent = '';
    DATA.quotes.forEach((q) => {
      wrap.appendChild(el('figure', 'quote reveal',
        `<div class="quote__stars" aria-label="${q.stars}/5">${'★'.repeat(q.stars)}</div>` +
        `<blockquote class="quote__txt">${esc(pick(q.t))}</blockquote>` +
        `<figcaption class="quote__by">${esc(q.by)}` +
        `<span class="quote__src"> · ${esc(q.src)}</span></figcaption>`));
    });
  }

  function renderFaq() {
    const wrap = $('#faqList');
    wrap.textContent = '';
    DATA.faq.forEach((f) => {
      const d = el('details', null,
        `<summary>${esc(pick(f.q))}</summary><p>${esc(pick(f.a))}</p>`);
      wrap.appendChild(d);
    });
  }

  /* ── Service modal ────────────────────────────────────── */

  const modal = $('#svcModal');

  function openService(d) {
    $('#svcTitle').textContent = pick(d.name);
    $('#svcLead').textContent = pick(d.desc);
    const ul = $('#svcList');
    ul.textContent = '';
    pick(d.items).forEach((s) => ul.appendChild(el('li', null, esc(s))));
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  }

  $('#svcClose').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    // click on the backdrop (outside the dialog box) closes it
    const r = modal.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right &&
                   e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) modal.close();
  });

  /* ── Language ─────────────────────────────────────────── */

  function applyStatic() {
    $$('[data-i18n]').forEach((n) => { n.textContent = t(n.dataset.i18n); });
    document.documentElement.lang = lang;
    document.title = META[lang].t;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', META[lang].d);
    $$('.lang').forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
  }

  function renderAll() {
    applyStatic();
    renderServices();
    renderList('#diagList', DATA.diagnostics);
    renderList('#labList', DATA.lab);
    renderFloors();
    renderFeats();
    renderFilters();
    renderDoctors();
    renderQuotes();
    renderFaq();
    observeReveals();
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem('ofiyat-lang', lang); } catch (e) { /* ignore */ }
    renderAll();
  }

  $$('.lang').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ── Booking links ────────────────────────────────────── */

  $$('.js-book').forEach((a) => { a.href = TELEGRAM_URL; });

  /* ── Header behaviour ─────────────────────────────────── */

  const hdr = $('#hdr');
  const onScroll = () => hdr.classList.toggle('is-stuck', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger');
  const nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  /* Highlight the section currently in view */
  const sections = ['services', 'diagnostics', 'facility', 'doctors', 'reviews', 'contact'];
  const navLinks = new Map(sections.map((id) => [id, $(`.nav a[href="#${id}"]`)]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const link = navLinks.get(en.target.id);
      if (link) link.classList.toggle('is-active', en.isIntersecting);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  /* ── Reveal on scroll ─────────────────────────────────── */

  let revealObs = null;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((n) => n.classList.add('is-in'));
      return;
    }
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries, obs) => {
        entries.forEach((en, i) => {
          if (!en.isIntersecting) return;
          en.target.style.transitionDelay = Math.min(i * 45, 260) + 'ms';
          en.target.classList.add('is-in');
          obs.unobserve(en.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    }
    $$('.reveal:not(.is-in)').forEach((n) => revealObs.observe(n));
  }

  /* ── Boot ─────────────────────────────────────────────── */

  /* Ribbon height feeds the sticky header offset and scroll padding, and has to
     be re-measured because the notice wraps to two lines on narrow screens.
     Remove alongside the ribbon markup once the site is paid for. */
  const ribbon = $('#ribbon');
  if (ribbon) {
    const measure = () => document.documentElement.style
      .setProperty('--ribbon-h', ribbon.offsetHeight + 'px');
    measure();
    window.addEventListener('resize', measure);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(ribbon);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  }

  const year = String(new Date().getFullYear());
  $('#year').textContent = year;
  $$('.js-year').forEach((n) => { n.textContent = year; });
  renderAll();
})();
