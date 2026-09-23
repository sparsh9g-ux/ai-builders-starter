# AI Builders Club — Website Starter Kit

A starter kit for building free one-page websites for campus clubs. Each site
is plain HTML, CSS, and JavaScript, with no framework and no build step. The
club we build for gets a fast, accessible site; we get a "Built by AI Builders
Club" credit in the footer.

## Files
| File | What it is |
|---|---|
| `README.md` | This guide |
| `AGENTS.md` | Execution standards: workflow, sourcing rules, QA checklist |
| `DESIGN.md` | Visual standards: type, spacing, tokens, palettes, motion |
| `PSI-BETA.md` | Build brief for the current project |
| `CLAUDE.md` | Loads the three files above for Claude Code users |
| `template/` | The site itself, with every club-specific value as a `{{TOKEN}}` |
| `examples.md` | Where to find reference builds |

## Build a site by hand
1. Copy the template: `cp -r template/ club-name/`
2. Open `club-name/index.html` and replace every `{{TOKEN}}` with the club's
   real information. Also fill `{{SITE_URL}}` in `robots.txt` and `sitemap.xml`.
3. Put the logo, favicon, and photos in `club-name/images/`.
4. Check nothing is left over:
   `grep -o '{{[A-Z_0-9]*}}' club-name/index.html | sort -u` must print nothing.
5. Preview locally:
   `cd club-name && python3 -m http.server 8080`, then open http://localhost:8080
6. Deploy (install the Vercel CLI once with `npm i -g vercel`, then `vercel login`):
   `vercel deploy --prod --yes`

## Using this kit with an AI coding agent
**Codex CLI.** `cd` into this folder and run `codex`. It reads `AGENTS.md`
automatically, which tells it to read `DESIGN.md` and `PSI-BETA.md` too.
To point Codex at the club's local model server, add this to
`~/.codex/config.toml` (ask Sparsh for `LAB_SERVER_URL`):
```toml
model = "lab-medium"
model_provider = "lab"

[model_providers.lab]
name = "Lab server"
base_url = "LAB_SERVER_URL/v1"
env_key = "LAB_API_KEY"
wire_api = "chat"
```
Then `export LAB_API_KEY=local` in your shell before running `codex`.

**Claude Code.** `cd` into this folder and launch it. `CLAUDE.md` pulls in
the same three files.

**Example prompts** (either tool):
- "Read PSI-BETA.md and list what intake info is still missing before we build."
- "Copy template/ into psi-beta/ and fill every token using intake.md."
- "Run the pre-deploy QA checklist from AGENTS.md on psi-beta/ and report what fails."

## Rules that never bend
- Never invent officers, events, numbers, quotes, or photos of people.
- Nothing ships with a `{{TOKEN}}` still in it.
- The footer credit stays.
