# MASTER.md — Global Design System · "The Instrument"

> **Single Source of Truth.** When building any page or component of this
> project, read this file first. A page-specific override in `pages/` wins
> over this Master; otherwise these rules apply exclusively.
>
> Approved by the owner on 2026-10-31. Direction chosen: **B, "The Instrument"**
> (unanimous favorite among three mockups; A and C archived in `alternates/`).

---

## 1. Concept

The portfolio behaves like a **calibrated instrument with a personality**:
panels, borders, status semantics, and real instrument typography. A person is
still visible — warm amber accents, generous line-height, human copy — but the
visual language comes from measurement devices, test benches and terminals.

**Not** a generic dev-terminal theme: mono is reserved for *data*, never for
body copy or headlines. Instant/zero transitions are rejected in favor of
warm 200–300ms motion.

## 2. Owner decisions (Phase 0 — binding)

| Question | Decision |
|---|---|
| Audience | Tech recruiters (primary) + freelance clients + peers |
| Job of the site | Get interviews; look credible; feel like a person |
| Content | Final and real. Never invent projects/links; may tighten wording only |
| Direction | "The Instrument" (B), chosen after comparing 3 mockups |
| Hard constraint | Dark mode must survive and work identically (hook contract `useDarkMode`/`toggleDark`, `.dark` on `<html>`, `localStorage.darkMode`) |
| Scope | Full restructure + new sections where content justifies |
| Risk appetite | Distinctive > safe |

## 3. Color tokens

Two systems behind CSS custom properties in `src/index.css` (`:root` = bench
light, `.dark` = dark field). Dark is the *native* mood of the direction; the
light system is a properly designed "bench paper" variant, not an inverted
afterthought. Never hard-code hex values in components — use Tailwind
semantic classes (`bg-panel`, `text-ink-dim`, `border-edge`, …).

### Dark field (default mood)
| Token | Hex | Role |
|---|---|---|
| `--c-field` | `#101418` | Page background ("field") |
| `--c-panel` | `#171C22` | Panels/cards |
| `--c-panel-2` | `#1D242C` | Title bars / raised strips |
| `--c-edge` | `#2A323C` | 1px borders & dividers |
| `--c-edge-hi` | `#3A4552` | Hover borders, stronger rules |
| `--c-text` | `#E8E6DF` | Primary text (warm off-white) |
| `--c-text-dim` | `#9AA3AD` | Secondary text |
| `--c-text-faint` | `#5F6A75` → bumped to `#76818E` (a11y pass) | Meta/tertiary text, mono labels |
| `--c-amber` | `#E8A33D` | **Accent** — phosphor amber (CTA, data highlights, role words) |
| `--c-on-amber` | `#141414` | Text on amber (dark theme: dark text ✓) |
| `--c-ok` | `#7DBB6C` | Status: available/pass — semantic only |
| `--c-alert` | `#D2705E` | Status: errors/failure — semantic only |

### Bench light
| Token | Hex | Change vs dark |
|---|---|---|
| `--c-field` | `#F2F2EF` | Paper field |
| `--c-panel` | `#FBFBF9` / `--c-panel-2` `#ECECE7` | Panels |
| `--c-edge` | `#D9D8D0` / `--c-edge-hi` `#B9B8AE` | Borders |
| `--c-text` | `#1A1D21` / `--c-text-dim` `#5C6268` / `--c-text-faint` `#5D6461` (contrast-bumped from `#8B938F`) | Text ramp |
| `--c-amber` | `#B45309` | Deepened amber for 4.5:1+ contrast |
| `--c-on-amber` | `#FBFBF9` | Light text on amber (dark text fails contrast in light theme) |

Rules: one accent (amber). Green/red are **status semantics only** (LEDs,
validation), never decoration. No gradients as decoration anywhere.

## 4. Typography

- **IBM Plex Sans** (300–700) — all body copy, headings, UI.
- **IBM Plex Mono** (400/500/600) — data labels, meta, timestamps, tags,
  buttons, code-ish idents. Reserved: mono never sets paragraphs.
- Numbers always **tabular** (`.tabular` utility: `font-variant-numeric`).
- Scale: body 14–16px · panel titles 17px semibold · section h2 (instrument
  panels) `text-[17px]` · project titles 20–24px · h1 hero
  `clamp(2.2rem → 4.4rem)` semibold, tracking `-.025em`, `text-balance`.
- Body measure ≤ 66ch. Line-height 1.6–1.7 prose; 1.8 mono lists.

## 5. Spacing, shape, borders

- Container: `max-w-6xl` (1152px) sections; `max-w-[1240px]` hero; generous
  vertical padding `py-16 sm:py-20`.
- Radius scale: `rounded-sm` (tags) / `rounded` 6px (modules, channels) /
  `rounded-md` 8px (device windows, log). No large radius. No `rounded-full`
  except LED dots.
- Structure comes from **1px borders**, not shadows. `shadow-panel` (1px
  ambient) exists but is rarely used. Zero gradient fills.
- Section rhythm: each `.section` separated by `border-t border-edge`.

## 6. Motion

- framer-motion with `<MotionConfig reducedMotion="user">` in `App.tsx` —
  any OS "reduce motion" preference disables all translation.
- Entrance: at most one subtle fade + 8–16px rise per element group, once,
  `duration 0.3–0.4`, `easeOut`. Nothing resets on re-scroll.
- Hover/press: 200–300ms transitions on `border-color` / `color` /
  `transform` (max 3px shifts — channel links slide right).
- The **boot line** in the hero is the single orchestrated moment; no other
  page-load choreography. No `whileHover` scale on everything.

## 7. Component contracts (semantic names are stable)

| Contract | Spec |
|---|---|
| `btn` / `btn-primary` / `btn-ghost` | mono 13.5px, `px-5 py-3`, 1px edge, 6px radius; primary = amber fill + `--c-on-amber` text, hover → transparent + amber text/border |
| `chip` | mono 11px, border edge, 3px radius, `text-ink-dim`; hover border-edge-hi |
| Panel | `bg-panel border border-edge rounded-md` (+ optional `panel-2` title bar) |
| Device window (`ProjectCard`) | panel + `panel-2` title bar: 3 mini dots (first = amber), `title mono`, right-aligned `when` table-nums |
| Capability module (skills) | grid of 4 panels; per-module load dots (amber "on" vs edge-hi) replace percent bars — **percent skill bars are banned** (recruiter skepticism) |
| Status bar | global top strip, mono, **led by the AH segment-display mark** (`SegmentMark.tsx`, amber-lit vs ghosted unlit segments), then LED = `w-2 h-2 rounded-full bg-ok` + glow; shows availability/location/role/SLA — data is REAL, keep in sync with Contact data. **Single line at every width** — ≥ sm: `text-[12px]`, mark `h-[26px]`, cells `px-4`, all cells divided. ≤ sm: same one line compressed — `text-[11px]`, mark `h-[22px]`, cells `px-2 sm:px-4`, `loc` cell `flex-1 sm:flex-none min-w-0` + `truncate` so a narrow phone degrades by clipping the value, never by wrapping a second line. History: photo treatment tried and rejected (unreadable 56×28px); AH mark chosen 2026-10-31 from five SVG options in `illustrations/ah-slogan-mockups.html`; two-line ≤ sm layout tried and rejected same day (user: "one line for better view") |
| Hero operator plate | grayscale portrait **beside the h1 on ALL sizes** (`src/assets/profile_picture.jpg`): square-ish, 1px `border-edge`, 6px radius, `object-top`, mono caption `operator · amir-hamdi` UNDER the plate, ≥sm only (mobile has no room — omitting beats truncating). The plate stretches to the h1's height on every breakpoint (`items-stretch` row, `flex-1 min-h-0` image holder); mobile width `w-20`, sm `w-32`, lg `w-[9.5rem]`; h1 keeps `max-w-[18ch]` with clamp floor **1.9rem** so mobile wraps cleanly as "Amir Mohamed / Hamdi El Sayed — / Flutter Developer". No circle avatar |
| Log row (experience) | `grid grid-cols-1 md:grid-cols-[150px_1fr]`, mono timestamp column, amber mono company, ≤66ch description |
| Channel row | flex row mono-key (74px) + value; hover amber border + 3px slide-in; must have accessible name via link text |
| Footer signature strip | top block: © + LED status — one baseline row ≥ sm (© left, status right); **mobile-only centered identity column** (`flex-col items-center text-center`, AH mark `h-8` + `sm:hidden` leading, © and LED lines centered beneath, hairline divider after). Bottom block = **icon chips, not text URLs** (mail / phone / GitHub / LinkedIn inline SVG, 36px `border-edge` squares, hover → `text-amber border-amber`, `aria-label` + `title`); chips right-aligned ≥ sm, centered on mobile. The same contact data lives verbatim in Contact's channel rows |
| Hover transforms | every hover translate/transform **must be capability-guarded**: `hover:[@media(hover:hover)]:translate-x-[3px]`. On touch devices `:hover` sticks after tap — an unguarded `hover:translate-x-[3px]` permanently shifts the card past the viewport and creates the phantom "small empty space" scrollable strip (found 2026-10-31 on cert cards + contact channels) |
| Multi-column grids | **always declare an explicit mobile template** (`grid grid-cols-1 sm:grid-cols-2 …`). A bare `grid sm:grid-cols-2` creates an implicit `auto` column on mobile that sizes to an item's max-content — long titles (e.g. certificates) then overflow the viewport by up to ~65px. Found 2026-10-31 mobile audit; fixed in every section grid |

## 8. Anti-pattern register (why the old design was replaced — keep avoiding)

1. Tailwind sky/blue as universal primary → replaced by amber + instrument neutrals.
2. Inter + orphaned JetBrains Mono → IBM Plex family cohesion.
3. Identical rounded-xl + shadow-lg cards regardless of hierarchy → structured panels with real borders.
4. Section header = centered h2 + `w-24 h-1 rounded underline` → instrument panel heads (`▮` + mono note), left-aligned.
5. fade-in-up on every element + `x: ±50` slides → single subtle entrance tier (§6).
6. all-caps tracked eyebrow labels → mono sentence-case data labels.
7. rounded-full pill badges everywhere → square-ish chips.
8. 👋 emoji badge, "Made with ❤" → none. No emoji as icons anywhere.
9. Percent skill progress bars → capability cluster with load dots.
10. Gradient banner fills (`primary-100→200`) → flat washes only.
11. Acid-green-on-near-black dev cliché → deliberately rejected in favor of amber phosphor.
12. AI copy clichés ("Let's create something amazing together") → plain, specific voice.

## 9. Accessibility floor (every delivery)

Text contrast ≥ 4.5:1 in **both** themes · `:focus-visible` = 2px amber
outline + 2px offset · color never sole indicator (LED + mono word) ·
decorative glyphs `aria-hidden="true"` · preferred-reduced-motion honored ·
responsive verified 375 / 768 / 1024 / 1440px · text/chips reflow without
clipping · forms keep native labels + inline validation states.

## 10. Provenance

- `frontend-design` skill (anthropics/skills): plan → anti-slop self-critique
  process; catalogue of AI tells (§8 derives from its audit of this repo on
  2026-10-31).
- `ui-ux-pro-max` skill searches (2026-10-31, v2.x dataset):
  - `--design-system "developer portfolio technical monospace dark"`
    → style *Dark Mode (OLED)*, pattern guidance, motion tier *Standard*.
  - `--domain style "dark mode developer terminal code"` → **dark-mode-oled**
    (deep field, minimal glow, 7:1 text) — adopted with amber accent instead
    of the acid-green default.
  - `--domain typography "developer technical monospace precise"` →
    **Dashboard Data: IBM Plex Sans + Fira Code** and *Developer Mono*
    (JetBrains/IBM Plex) — resolved to **IBM Plex Sans + IBM Plex Mono** for
    family cohesion.
- `redesign-existing-projects` skill: audit-first workflow, fix priority
  (fonts → palette → states → layout → components → docs), no framework
  migration.
- Mockups that earned the approval: `alternates/` holds A/C; B's spec is this
  file (its HTML mock was intentionally not archived — superseded by the
  implementation).
- **AH slogan mark** (2026-10-31): five instrument-consistent inline-SVG
  options built in `illustrations/ah-slogan-mockups.html` (id-plate,
  segment-display, gauge-needle, terminal-cursor, phosphor-trace). Owner
  chose **02 · segment-display**, now implemented as
  `src/components/ui/SegmentMark.tsx` (reuses site CSS-var tokens; re-themes
  in both directions automatically). The full page stays as reference for
  future mark/footer/OG uses.
- **Mobile (390px) overflow audit** (2026-10-31): every section verified
  through a 390px iframe harness (`dist/mobile-check.html`, re-add to `dist/`
  after each build). Two real bugs found and fixed: (a) implicit-grid
  max-content overflow — certificates pushed the document 65px past the
  viewport (fix: `grid-cols-1` in all section grids, rule added to §7);
  (b) `PanelHead` note `shrink-0` refused to shrink to a 349px line (9px
  clamp; fix: drop `shrink-0`, note wraps internally). Hero mobile layout
  finalized: plate beside headline at all widths (see §7 table). Final state:
  document `overflowX = 0`, zero off-viewport elements.
- **Follow-up mobile round** (2026-10-31, same day): status bar `≤ sm` wrap
  re-structured after the migrated-`loc` cell hung a bare left border at
  second-row start — first as an explicit two-line layout, **then compressed
  to a single line** (user: "one line for better view"; final contract §7);
  footer rebuilt (§7 signature strip — text links → icon chips) and then
  given a **mobile-only centered identity redesign** reusing the AH mark
  (user: "mobile view only, don't change other views"); sticky-hover transform
  displacement fixed with `[@media(hover:hover)]` guards (the source of the
  "small empty space" horizontal scroll on touch). Harness tidbit: the
  390×844 iframe is taller than the host window — verify tall regions with a
  shorter (390×620) iframe.

## 11. Archives & doc replacement record

- 2026-10-31: repo searched for prior design-system docs (`DESIGN.md`,
  `THEME.md`, `STYLEGUIDE.md`, tokens docs, `.bolt/` contents). **None
  existed** — the old system lived implicitly in `tailwind.config.js` and
  `src/index.css`. The implicit system is now replaced by this Master.
- `.bolt/` (template installer artifacts) is unrelated to design and left
  untouched.
- `README.md` updated where it described the old palette/fonts.

When in doubt on a future change: **this file wins over memory or habit.**
