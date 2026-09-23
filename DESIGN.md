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
