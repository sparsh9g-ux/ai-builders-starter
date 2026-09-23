# AI Builders Club — Site Build Standards

## Read first
Before doing any work in this repo, read DESIGN.md and PSI-BETA.md in full.
DESIGN.md is the visual standard. PSI-BETA.md is the brief for the current build.
This file is the execution standard. All three apply to every build.

## What this is
The club builds free one-page websites for other campus clubs. The price is a
"Built by AI Builders Club" credit in the footer. Every site starts from
`template/`, gets its `{{TOKEN}}`s filled with the club's real information,
passes the QA checklist, and deploys to Vercel.

## Stack
- Plain HTML, CSS, and JavaScript. No framework, no build step, no npm.
- One page: `index.html`. Anchor navigation between sections.
- Deploys as static files. Nothing runs on a server.

## File layout (per club site)
```
<club-slug>/
  index.html      the page
  styles.css      all styles, tokens in :root
  script.js       nav toggle, smooth scroll, reveal
  robots.txt      allow all + sitemap URL
  sitemap.xml     one URL
  images/         logo, favicon, OG image, real club photos
```
Create it with `cp -r template/ <club-slug>/`. Never edit `template/` for a
specific club; improvements to the template are a separate change.

## Token workflow
Every piece of club-specific content in the template is a `{{TOKEN}}`.
Nav labels, section eyebrows, and button text like "Join" are fixed chrome and
are not tokens; change them only if the club asks.

1. Collect the club's information (see Data sourcing).
2. Replace every token in `index.html`, `robots.txt`, and `sitemap.xml`.
3. Delete optional blocks you cannot fill honestly (hero photo, about photo,
   officer photos, extra events) instead of inventing content for them.
4. Run both checks. Nothing ships until both return nothing:
```bash
grep -o '{{[A-Z_0-9]*}}' index.html robots.txt sitemap.xml | sort -u   # no tokens left
grep -n -i "<previous club name>\|<previous club handle>" index.html    # no leaked copy
```
For the second check, use the names, handles, and slogans of every site you
built before this one. Hard-coded prose from an earlier build is the most
common leak, and the club will not catch it for you.

## Data sourcing for a campus club (in this order)
1. The club's Instagram: bio, pinned posts, event flyers, officer intros, logo.
2. The college's student clubs directory page: official name, advisor, meeting info.
3. Associated Students / Inter-Club Council listings: charter status, contact.
4. Information supplied directly by the club's officers: everything else.

Public sources first, then the club. Anything not found in those four places
is unknown, not something to guess.

## Never fabricate
- No invented officers, roles, or advisor names.
- No invented events, dates, or locations. Fewer real events beat three fake ones.
- No member counts, founding years, awards, rankings, or "official" claims
  unless the club states them in writing.
- No quotes or testimonials the club did not supply verbatim.
- No photos of real people without that person's consent, and no stock or
  AI-generated images presented as club members.
- No eligibility rules, dues, or GPA thresholds from memory. Confirm every number.
If something is missing, leave the block out and list it under "Still needed"
in your handoff.

## Accessibility minimums
- Text contrast at least 4.5:1 against its background; 3:1 for large headings.
- Every `<img>` has a real `alt`, or `alt=""` if purely decorative.
- Visible focus states on all links and buttons (the template ships them; keep them).
- Nav toggle uses `aria-expanded` and `aria-controls`; Escape closes the menu.
- Skip link is the first focusable element.
- All motion is disabled under `prefers-reduced-motion`.
- Heading order is h1 → h2 → h3 with no skips.

## Performance minimums
- Each image at or under 300 KB. Resize to the display size, export WebP or JPEG.
- Hero image is preloaded and marked `fetchpriority="high"`; everything below
  the fold uses `loading="lazy"`.
- Width and height attributes on every image to prevent layout shift.
- Only two font weights (400, 700). No icon fonts, no external scripts.

## SEO minimums
- `<title>` in the form "Club Name — College Name".
- Meta description, 120–160 characters, written for the club, not keyword-stuffed.
- Open Graph and Twitter tags with a 1200×630 OG image.
- `<link rel="canonical">` pointing at the final URL with a trailing slash.
- JSON-LD `Organization` with name, url, logo, email, sameAs, parentOrganization.
- `robots.txt` allowing all and naming the sitemap; `sitemap.xml` with one URL.
- All URLs in meta, JSON-LD, robots, and sitemap use the same `SITE_URL`.

## Footer credit (mandatory)
The footer contains exactly:
`Built by <a href="{{BUILDER_URL}}">AI Builders Club</a>`
Fill `BUILDER_URL` with the club's own site or Instagram. Do not remove,
hide, shrink below the surrounding footer text, or move it off the home page.
PSI-BETA.md may specify a longer credit line for a specific build; use that
wording when it does.

## QA checklist before deploy
Run every item. Report failures; do not deploy around them.
- [ ] Both grep checks return nothing.
- [ ] Renders at 360, 720, 1024, and 1440 px wide with no horizontal scroll.
- [ ] Hamburger opens, closes, closes on Escape, and closes after a link click.
- [ ] Browser console is clean on load and after scrolling the whole page.
- [ ] Every link resolves: anchors hit real `id`s, external links open, `mailto:` is correct.
- [ ] Any form posts to a real endpoint the club controls, or the form is removed.
- [ ] Images all load, all under 300 KB, all with alt text.
- [ ] Contrast passes after any accent swap (check buttons and the eyebrow text).
- [ ] Reduced-motion mode shows all content with no animation.
- [ ] `SITE_URL` matches in canonical, OG, JSON-LD, robots.txt, sitemap.xml.
- [ ] Footer credit present and linked.
- [ ] `node -c script.js` passes.

## Preview and deploy
```bash
cd <club-slug>
python3 -m http.server 8080          # preview at http://localhost:8080
vercel deploy --prod --yes           # production deploy after QA passes
```
Send the preview URL to the club's contact before going to production.
Custom domains are attached in the Vercel dashboard after the club provides one.

## Handoff format
End every build with: the live or preview URL, the list of tokens filled from
public sources vs. supplied by the club, blocks removed and why, and a
"Still needed" list the club can answer in one message.
