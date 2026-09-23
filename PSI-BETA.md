# Build Brief — Psi Beta chapter site

## Context
Psi Beta is the national psychology honor society for community and two-year
colleges. This build is the West Valley College chapter's one-page site. The
club contact is the chapter treasurer (referred to here as "the treasurer").
Everything below that is a number, a name, or a rule must come from the
treasurer or an official source; nothing is assumed.

## Section plan (mapped to the template)
| Site section | Template section | Notes |
|---|---|---|
| Hero: chapter name + one-line purpose | Hero | `CLUB_NAME` = official chapter name; `MISSION_LINE` from the chapter, not the national site |
| About the chapter | About | What the chapter does at this college; when it was chartered only if confirmed |
| Membership requirements and benefits | What We Do (renamed "Membership") | Three cards: eligibility, benefits, what members do. GPA and psych-coursework thresholds are CONFIRM items |
| Induction and how to join | How to Join | Steps: check eligibility, apply, induction. Meeting day/time/location from the treasurer |
| Events | Upcoming Events | Three confirmed events; fewer if fewer exist |
| Officers | Officers | Names, roles, photos only with consent |
| Contact | Contact | Chapter email + Instagram |

Renamed: "What We Do" becomes "Membership" (change the eyebrow, heading, and
nav label). Dropped: nothing by default; drop the hero and about photos if the
chapter has no real ones.

## Intake checklist (get all of this from the treasurer before building)
- [ ] Chapter's official name as it should appear, and charter status
- [ ] Meeting day, time, and room or location
- [ ] Eligibility requirements (GPA, psychology units, standing) in their words
- [ ] Dues, if any, and what they cover
- [ ] Officers: name, role, and written photo consent per person
- [ ] Three upcoming events: date, title, location
- [ ] Chapter Instagram handle and contact email
- [ ] Logo file (PNG or SVG, transparent background preferred)
- [ ] Any photos the chapter has permission to publish
- [ ] The URL they want: a Vercel subdomain, or a custom domain they own
- [ ] Who approves the final site before it goes live

## Palette and branding
The national Psi Beta organization has its own branding and rules about how
chapters use the name and logo. Before choosing the accent colour, check
psibeta.org for official colours and logo-use guidance and note what you
found in the handoff. Until that is confirmed, build on the kit's light preset
with the default accent and treat the accent as a single swap slot. Do not
invent hex values and call them official.

## Data sourcing (this build)
1. The chapter's Instagram
2. The West Valley College clubs directory
3. The psibeta.org chapter listing
4. The treasurer, for everything the first three do not answer

## Day-one build order
1. `cp -r template/ psi-beta/`; open the folder in your coding agent.
2. Fill identity and meta tokens: name, college, description, `SITE_URL`
   (use the planned Vercel subdomain until a domain exists), theme colour.
3. Rename "What We Do" to "Membership" in the nav, eyebrow, and heading; fill
   the three cards from the intake answers, marking any unconfirmed number
   with a `<!-- CONFIRM -->` comment.
4. Fill Join, Events, Officers, and Contact. Delete any block the intake did
   not cover rather than filling it with a guess.
5. Add the logo, favicon, and OG image to `images/`; run the two grep checks.
6. Preview with `python3 -m http.server 8080`; walk the QA checklist in
   AGENTS.md at 360 and 1440 px.
7. `vercel deploy` (preview, not production); send the preview URL to the
   treasurer with the "Still needed" list.
8. After approval from the named approver: `vercel deploy --prod --yes`.

## Footer credit for this build
`Built by <a href="{{BUILDER_URL}}">AI Builders Club at West Valley College</a>`
