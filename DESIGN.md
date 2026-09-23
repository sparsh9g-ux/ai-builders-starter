# Visual Standards

Quiet, sharp, and specific to the club. The design should feel like a real
organization made it, not like a template. Restraint is the whole style.

## Type
- Font: Geist via Google Fonts (`family=Geist:wght@400;700`), falling back to
  the system stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', 'Noto Sans', Arial, sans-serif`.
- Weights: 400 and 700 only. Emphasis comes from size and colour, not weight.
- Scale, fluid with `clamp()`:
  - h1 `clamp(2.25rem, 5vw + 1rem, 4rem)`
  - h2 `clamp(1.6rem, 2.5vw + 1rem, 2.5rem)`
  - h3 `1.15rem`
  - lead `clamp(1.1rem, 1vw + 0.9rem, 1.35rem)`
  - body `1rem` / line-height 1.6, small `0.875rem`
- Headings: line-height 1.1, letter-spacing -0.02em, `text-wrap: balance`.
- Eyebrows: 0.75rem, uppercase, letter-spacing 0.18em, accent colour.
- Body text measure: 34–40em max.

## Spacing
- 4px base. Use multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96.
- Section padding: `clamp(64px, 9vw, 104px)` top and bottom.
- Hero padding: `clamp(56px, 10vw, 112px)`.
- Gap inside grids: 20px (cards) to 64px (two-column sections on desktop).
- Side gutter: 16px under 720px, 24px above.

## Tokens
All colour and layout values live in `:root`. Names are fixed so every club
site reads the same way:

| Token | Role |
|---|---|
| `--bg` | page background |
| `--surface` | alternating section background |
| `--card` | card background |
| `--ink` | headings, strongest text |
| `--ink-soft` | body copy |
| `--muted` | captions, meta, labels |
| `--line` | borders and dividers |
| `--accent` | the club's colour: buttons, eyebrows, step numbers, links |
| `--accent-deep` | hover state of the accent |
| `--accent-ink` | text sitting on the accent |
| `--shadow` | the one shadow used everywhere |
| `--wrap` | content max-width |
| `--font` | the font stack |

Extras the template also uses: `--radius`, `--radius-sm`, `--nav-h`.

## Palette presets
**Light (default)**
`--bg #ffffff` · `--surface #f6f6f7` · `--card #ffffff` · `--ink #111113` ·
`--ink-soft #3f3f46` · `--muted #71717a` · `--line #e4e4e7` ·
`--accent #2f5bea` · `--accent-deep #2247c2` · `--accent-ink #ffffff`

**Dark** (`<html data-theme="dark">`)
`--bg #0f0f11` · `--surface #16161a` · `--card #1a1a1f` · `--ink #f4f4f5` ·
`--ink-soft #c4c4cc` · `--muted #8b8b96` · `--line rgba(255,255,255,0.10)` ·
`--accent #6b8cff` · `--accent-deep #4f6fe6` · `--accent-ink #0f0f11`

Swap only `--accent`, `--accent-deep`, and `--accent-ink` for the club. The
neutrals stay. After a swap, re-check button text contrast and the eyebrow
text against `--bg` and `--surface`; a light accent needs a dark `--accent-ink`.
One accent per site. If the club has two brand colours, pick the one with
better contrast and let the other one live in the logo.

## Radius and shadow
- Cards and media: `--radius` (14px). Buttons and chips: `--radius-sm` (8px).
- Avatars and the logo mark: 50%.
- One shadow token, used on hover and on the meeting card. No stacked or
  coloured glows. Borders (`--line`) do the separating work, not shadows.

## Motion
- Reveal on scroll: opacity 0 → 1 with a 20px upward translate, 500ms ease-out.
- Hover: 200–300ms ease, small (1–3px lift or colour change), nothing that
  rearranges layout.
- Everything is disabled under `prefers-reduced-motion: reduce`, including
  smooth scrolling.
- No autoplay sound. No autoplay video unless the club supplied it, and then
  muted, looped, and paused when out of view.
- No parallax, no cursor effects, no animated gradients.

## Imagery
1. The club's own photos first: events, meetings, tabling, logo.
2. Pexels or Unsplash only as a clearly stated fallback for scene-setting
   images (a campus, a lecture hall), never for people who could be read as
   members. Tell the club which images are placeholders.
3. Never stock photos of fake "members". Never AI-generated people.
4. Officer photos require the officer's consent; otherwise show the neutral
   avatar circle the template provides.
5. Aspect ratios are fixed in CSS (`4/3` hero and about, `1/1` avatars), so
   crop to fit rather than letting the layout stretch.

## Layout
- Content max-width 1120px (`--wrap`), centred.
- Mobile-first. One column under 720px. Cards go 3-across at 720px+;
  officers 2-across at 720px and 4-across at 1024px.
- Hamburger navigation under 860px; full nav row above.
- Two-column sections (hero, about, join) split at 860px.
- Sticky header, 68px tall; sections have `scroll-margin-top` to match.
- Left-aligned text by default. Centre only the officer cards.
- Alternate `--bg` and `--surface` section backgrounds for rhythm.

## What generic AI sites get wrong
- Gradient on everything: headings, buttons, backgrounds, borders.
- Centring everything, so nothing has a reading order.
- Five fonts and six weights on one page.
- Purple-on-dark by default, regardless of who the site is for.
- Emoji used as icons.
- Fake testimonials, fake stats, "trusted by 500+ members".
- Glassmorphism cards floating over blurred blobs.
- Hero copy that says nothing ("Empowering students to unlock their potential").
- A form that posts nowhere.
- Forgetting the footer credit.

## House patterns
These are the recipes that have held up across every site the team has built.
A model working from this kit should reach for these instead of inventing.

### Page rhythm
Sections run in this order, and each one earns its place or gets cut:
hero → trust strip → what we do (cards) → how it works (numbered steps) →
events or work → officers or people → stats band (only with real numbers) →
join or visit → closing CTA band → footer.
Alternate `--bg` and `--surface` backgrounds section by section. Never two
card grids back to back; put a full-width band or a two-column section between.

### Section head (every section starts with this)
```html
<div class="section-head">
  <p class="eyebrow">Events</p>
  <h2>What is coming up</h2>
  <p class="subline">One concrete sentence, not a slogan.</p>
</div>
```
- Eyebrow: 12–13px, 700, uppercase, letter-spacing 0.14em (0.3em on dark),
  accent colour, with a 22px horizontal rule before it (`::before`, 1px tall).
- h2: `clamp(26px, 4vw, 34px)`, max-width 30ch, letter-spacing -0.02em.
- Subline: `--ink-soft`, max 40ch. Head block margin-bottom 34–48px.
- The eyebrow names the section (noun). The h2 says what the reader gets.
  The subline says one specific, checkable thing.

### Button pair
Every hero and every CTA band uses exactly two buttons:
- `.btn-primary`: solid `--accent`, `--accent-ink` text, hover `--accent-deep`.
- `.btn-ghost`: 1px border at 50% opacity of the text colour, 10% fill,
  hover to full border and 20% fill.
- Both: 14–15px, 700, padding 12px 22px, `--radius-sm`, 200ms ease.
- Never three buttons. Never a button that only says "Learn more".

### Hero, two treatments
**Light editorial (default for clubs, food, services).** Two columns at 860px+:
text left (eyebrow, h1, one-line mission, button pair), photo or logo card
right with `--radius` and the one shadow. White `--bg`. h1 `clamp(2.25rem,
5vw + 1rem, 4rem)`.
**Dark photographic (automotive, nightlife, luxury, performance).** Full-bleed
photo with a double scrim: left-to-right `rgba(0,0,0,.74) → 0 at 72%` and
bottom-to-top `#000 → rgba(0,0,0,.18)`. Copy sits bottom-left. h1 is a brand
lockup: huge word `clamp(2.6rem, 12.5vw, 8rem)` weight 800 over a small,
widely tracked (0.4em) second line. Use `data-theme="dark"`.
Pick one per site. Do not mix a dark hero with light sections below.

### Cards
`--card` background, 1px `--line` border, `--radius`, padding 24–28px.
A small accent numeral (`01`, `02`, `03`, 12px, 700, tracked) sits top-left
before the h3. Hover: translateY(-2px) and the one shadow, 200ms. Three across
at 720px+, one column below. Card text is left-aligned; no icons, no emoji.

### Numbered steps ("how it works")
Three or four steps in a row. Each step: a giant faint numeral
`clamp(48px, 8vw, 84px)`, weight 800, `--ink` at 8% opacity, line-height 1,
above an h3 (19px) and a paragraph capped at 34ch. One column under 780px.

### Trust strip (directly under the hero)
A single row of three or four short facts with a 1px `--line` above and below:
chartered year, meeting cadence, advisor, count of something real. Each is
a bold value plus a muted 13px label. If fewer than three facts are
confirmed, drop the strip entirely.

### Stats band
Only when the club has real numbers in writing. Full-width on `--surface`
or black (dark theme), borders top and bottom, four values across
(two on mobile). Value `clamp(32px, 5vw, 52px)` weight 800, label 13px muted.
Count-up animation via IntersectionObserver, skipped under reduced motion.

### Closing CTA band
The last section before the footer is one band on `--accent` (light theme)
or a dark radial (dark theme): one h2, one line, the button pair. Nothing else.

### Nav and footer
- Nav: sticky, 64–68px, logo mark ~38px at left, text links right, and the
  primary action as a `.btn-primary` at the far right ("Join"). Hamburger
  under 860px. Links get `--ink` on hover, no underline.
- Footer: three columns (logo + one line, section links, contact), then a
  bottom bar with the copyright and the "Built by AI Builders Club" credit in
  the same size as the copyright.

### Copy rules
- Headings are sentences a person would say, in lower case except the first
  word and proper nouns. No "Empowering", "Unlock", "Journey", "Elevate".
- One idea per paragraph, 2–3 sentences, max 40ch measure.
- Numbers only when confirmed. Dates in the form "Thu, Oct 9 · 12:30 PM".
- Every CTA says what happens next: "Join the chapter", "See the events".

### Palette starting points that have worked
- Light editorial: white `--bg`, `#0a0a0a` ink, `#525252` soft, `#737373`
  muted, `#e5e5e5` line, one saturated accent with a darker hover pair.
- Dark: `#0a0a0a` bg, `#101012` surface, `#0e0e10` card, `#a1a1a1` text,
  `#737373` dim, `rgba(255,255,255,.10)` line. One accent, optional second
  tint used only inside a gradient on buttons and the eyebrow (`background-clip:
  text`), never on body text.
Clubs default to light editorial. Use dark only if the club's own material
is already dark and photographic.
