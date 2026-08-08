# Ofiyat Med — website

Static, trilingual (Uzbek / Russian / English) marketing site for **Ofiyat Med**, a multi-specialty
private medical center and 24/7 inpatient hospital in Sergeli, Tashkent.

No build step, no dependencies, no backend. Open `index.html` and it works.

---

## Files

```
index.html          markup + icon sprite + JSON-LD (MedicalClinic schema)
css/styles.css      all styles
js/data.js          content: departments, doctors, diagnostics, floors, reviews, FAQ (uz/ru/en)
js/i18n.js          UI strings + per-language <title>/description
js/app.js           language switching, rendering, nav, filters, modal, scroll reveal
assets/             favicon, Open Graph image, brand mark, original logo reference
CNAME               custom domain for GitHub Pages
robots.txt          crawler rules + sitemap pointer
sitemap.xml         single-page sitemap with hreflang alternates
RESEARCH.md         where every fact on the site came from, and what still needs verifying
```

## Run locally

```bash
python3 -m http.server 5173
```

Then open <http://localhost:5173>.

## Deploy

A folder of static files with only relative links, so it runs from a domain root *or* a subpath
(`user.github.io/ofiyatmed/`) with no changes.

### GitHub Pages + ofiyatmed.uz (recommended)

Free, HTTPS is issued automatically, and updates are a `git push`.

1. Create a repo and push this folder:

   ```bash
   git init && git add . && git commit -m "Ofiyat Med website"
   git branch -M main
   git remote add origin git@github.com:<user>/ofiyatmed.git
   git push -u origin main
   ```

2. Repo **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)`.
   It goes live at `https://<user>.github.io/ofiyatmed/` within a minute.

3. Same page, **Custom domain**: enter `ofiyatmed.uz` and save. (`CNAME` in this repo already
   holds that value, so this step may be filled in for you.)

4. In the ahost DNS panel for `ofiyatmed.uz`, add these records — **verify the IPs against
   GitHub's current docs first**, they do change:

   | Type | Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<user>.github.io.` |

   Change **only** the A and `www` records. Leave `MX` and any mail-related `TXT` records alone,
   or email on the domain stops working.

5. Wait for DNS to propagate (minutes to a few hours on `.uz`), then tick **Enforce HTTPS** on the
   Pages settings screen. It stays greyed out until the certificate is issued.

### ahost hosting instead

If the ahost plan already includes hosting, upload the contents of this folder into `public_html`
via their file manager or FTP — no DNS change, and the domain already points there. Trade-off: no
version control, uploads are manual, and HTTPS may need enabling by hand. Either host is fine; the
site is identical.

### If you deploy somewhere other than ofiyatmed.uz

Four values hard-code the domain — update them together or social previews and search indexing
will point at the wrong place:

- `index.html` — `<link rel="canonical">`, `og:url`, `og:image`, and `url`/`logo`/`image` in the
  JSON-LD block
- `CNAME`
- `robots.txt` — the `Sitemap:` line
- `sitemap.xml` — every `<loc>` and `hreflang` URL

---

## How it works

### Languages
Uzbek is the default. Russian is selected automatically when the browser locale is `ru`; English is
always one click away in the top-right switcher. The choice is remembered in `localStorage`, and
`?lang=uz|ru|en` forces a language (handy for links in Instagram bios or ads).

Everything is rendered client-side from `js/data.js` + `js/i18n.js`, so there is one set of HTML for
all three languages. To change wording, edit those two files — never the markup.

### Booking
Every "book an appointment" button opens a Telegram chat with reception. One constant controls it:

```js
// js/app.js
const TELEGRAM_URL = 'https://t.me/+998951003300';
```

If reception ever moves to a `@username`, change it to `https://t.me/username` and every button on
the page follows.

### Adding a doctor
Append an entry to `DATA.doctors` in `js/data.js`:

```js
{ spec:'cardiology', exp:12, cat:'top',
  n:{uz:'Familiya Ism Otasining ismi', ru:'Фамилия Имя Отчество', en:'First Last'},
  s:{uz:'Kardiolog', ru:'Кардиолог', en:'Cardiologist'} }
```

`spec` must match an `id` in `DATA.docFilters` for the filter chips to find them. `cat` is `'top'`
(highest category), `'first'`, or omitted. `chief: true` adds the chief-physician badge.

### Adding a department
Append to `DATA.departments`. `icon` must be a symbol `id` that exists in the sprite at the bottom
of `index.html`.

---

## Before this goes live

The site is built entirely from public sources — the clinic's Instagram and Telegram, Yandex/Google/2GIS
listings, and Uzbek medical directories. Full provenance is in [RESEARCH.md](RESEARCH.md). These
items need the clinic to confirm them:

1. **Phone numbers.** `+998 95 100 33 00` appears consistently across all their own channels and is
   used as the main number. Three others appear only in third-party directories and may be stale:
   `+998 78 777 03 03`, `+998 71 231 05 18`, `+998 55 517 03 54`. The department direct lines shown
   in the contact section came from 2023 Telegram posts — confirm they still route correctly.
2. **Address.** `105A` is used everywhere, but one 2023 Telegram post gives `111-A` for urology.
   Separate block, or a typo?
3. **Opening hours.** 24/7 is well attested for the hospital. Outpatient hours (Mon–Sat 09:00–18:00)
   are inferred from individual doctor schedules; goldenpages.uz also claims a 13:00–14:00 lunch
   break and 2GIS says 08:30. Needs one authoritative answer.
4. **Doctor roster.** 25 names are aggregated from directories of varying freshness. Confirm who is
   still on staff and check the spellings — Uzbek names are transliterated inconsistently across
   sources. One endocrinologist is listed as "Nargiza To'xt…" because only her first name was legible
   in the Instagram post.
5. **Prices.** No public price list exists anywhere, so the FAQ says "ask reception." If the clinic
   wants prices published, a `DATA.prices` table is the natural next section.
6. **Photos.** The site currently uses no photography. Their Instagram has 328 posts of the facility,
   staff and equipment — original files (or permission plus higher-res exports) would improve the
   hero, the floors section and the doctor cards considerably.
7. **Wordmark lockup.** The symbol is now the clinic's own vector file, but the full logo also
   carries the words "OFIYAT MED" and "MEDICAL CENTER" beneath it (visible on their Instagram
   avatar). The site sets those in Manrope rather than the real typeface, which has not been
   identified — worth asking for the full lockup or the font name.

Also worth doing at launch: submit `https://ofiyatmed.uz/sitemap.xml` to Yandex Webmaster and
Google Search Console, and add the website URL to the Instagram bio, Telegram, Yandex Maps, Google
Maps and 2GIS listings — those profiles are currently the only way patients find them online. In
Uzbekistan, Yandex matters at least as much as Google.

---

## Brand

The mark is the clinic's own vector file: a crescent moon with an ECG trace running out of its
opening into a small terminal ring, in `#E2231A`.

| File | What it is |
|---|---|
| `assets/logo.svg` | **the clinic's supplied file, verbatim** — source of truth, do not edit |
| `assets/logo-mark.svg` | production version — same geometry, transparent, recolourable |
| `assets/favicon.svg` | app-icon treatment: white mark on a red tile |
| `assets/logo-source-instagram.jpg` | their Instagram avatar, showing the full wordmark lockup |

The supplied file builds its crescent by laying an opaque white disc over a red one, which only
works on a white background. `logo-mark.svg` keeps the exact same coordinates but cuts the
crescent with a mask, so the inside is transparent and the mark can sit on any colour. It uses
`currentColor` with `#E2231A` as the default, so it renders red as a standalone `<img>` and still
follows CSS `color` when inlined. The same geometry is inlined in the header of `index.html`, so a
change to the artwork means editing both.

The palette is built around the logo red:

| Token | Hex | Role |
|---|---|---|
| `--brand-600` | `#E2231A` | **the logo red** — accents, active states |
| `--brand-700` | `#BD180F` | buttons and link text (6.4:1 on white) |
| `--brand-800` | `#97130C` | tile gradients |
| `--brand-900` | `#6B0D08` | topbar, stats band |
| `--brand-950` | `#3A0705` | footer |

`#E2231A` on white is only 4.7:1, which passes AA for body text but leaves no margin, so buttons
and links use the deepened `--brand-700` while the pure logo red stays for fills and accents.

## Notes on decisions

- **Why the building gets its own section.** The 8-floor layout (lab in the basement, consultations
  on 1–2, wards on 3–6, theatres on 7, kitchen on top) is the clinic's clearest differentiator and
  nothing in their existing marketing communicates it.
- **Why Telegram is pushed so hard.** The most common complaint in public reviews is unanswered
  phone calls. Telegram gives patients a channel that leaves a written trail.
- **Why no booking form.** A form needs a backend to deliver anything, and a bot token in
  client-side JavaScript is readable by anyone. Linking straight to the reception Telegram is
  simpler, has no failure mode, and reaches a person the clinic already monitors.
- **Reviews are quoted, not invented.** The four testimonials are condensed translations of public
  reviews on 2GIS and Yandex Maps, attributed to their platform.
- **The map is pinned by Yandex organisation id**, not raw coordinates
  (`?oid=71067895021&ol=biz`), so the marker follows the clinic's own verified listing and shows
  their live rating and hours. Worth knowing: the Apple Maps link in the clinic's Taplink points
  about 10 km away from the actual building — do not trust it as a source.
