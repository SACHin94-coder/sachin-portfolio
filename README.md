# Nature Portfolio — React, no backend

A single-page developer portfolio themed around a forest/grove. Projects hang
off a growing "vine" like leaves; visitors can view your code links and live
demos, and you can add new projects yourself right from the site (saved in
the browser via localStorage — no server required).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere that hosts
static sites: Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc. Since
there's no backend, drag-and-drop deploy works fine.

**One thing to watch for:** this site uses React Router, so a direct link to
something like `yoursite.com/projects/trailhead` needs the host to serve
`index.html` for every path, not just `/`. This repo already includes the
config for the two most common hosts:
- `public/_redirects` — works automatically on Netlify.
- `vercel.json` — works automatically on Vercel.

If you deploy elsewhere (GitHub Pages, Cloudflare Pages, etc.), look up that
host's "SPA fallback" or "rewrite all routes to index.html" setting.

## Pages (React Router)

- `/` — Home: hero, about, and a 3-project preview linking to the full list.
- `/projects` — every project as a clickable box in a grid, plus the
  "Plant a new project" box.
- `/projects/:id` — one project's full detail page: long description, tags,
  GitHub link, and live demo link.

- `/skills` — all your skills grouped by category (Frontend, Backend,
  Languages & CS Fundamentals, Tools & Platforms), read from
  `src/data/skills.json`.

Routing lives in `src/App.jsx`. Project data (seed projects from
`src/data/projects.json` + anything a visitor adds through the site) is
shared across all three pages through `src/context/ProjectsContext.jsx`, so
adding a project on `/projects` immediately gives it its own detail page at
`/projects/<id>`.

## What to customize before publishing

1. **Your name** — `src/components/Header.jsx` (`wordmark`) and the footer.
2. **Resume** — drop a file named `resume.pdf` into the `public/` folder.
   The "Download CV" buttons already point at `/resume.pdf`.
3. **Real projects** — edit `src/data/projects.json`. It's a plain JSON
   array, so no JavaScript knowledge needed — just fill in your own titles,
   descriptions, `longDescription` (shown on the detail page), `tags`, and
   your GitHub/demo links. A couple of rules to keep in mind:
   - Every project needs a unique `id` (used in the URL, e.g. `/projects/trailhead`).
     Use lowercase letters, numbers, and hyphens only.
   - `status` is either `"mature"` or `"growing"`.
   - JSON doesn't allow trailing commas or comments — if the site breaks
     after an edit, that's the first thing to check.
4. **Skills** — edit `src/data/skills.json`. It's grouped by category
   (`{ "category": "...", "skills": ["...", "..."] }`) — add, remove, or
   rename categories and skills freely; I filled it in with what you listed,
   so double-check it against your CV and add anything I missed.
5. **About section** — `src/components/About.jsx`, and the stats numbers.
6. **Contact links** — `src/components/Footer.jsx` (email, GitHub, LinkedIn).
7. **Colors/fonts** — all design tokens live at the top of `src/index.css`
   under `:root`, so you can retheme the whole site by changing a few
   variables.

## The "Add Project" feature

Click **"Plant a new project"** at the bottom of the grove. It opens a form
(title, description, tags, code link, demo link, growth stage). Submitted
projects are saved to the browser's `localStorage`, so they'll still be there
next time you open the site on the same device/browser — no database needed.
Each self-added project also gets an "Uproot" button so you can remove it.

Note: localStorage is per-browser/device. If you want projects you add to
show up for every visitor (not just you), that would require a small backend
or a headless CMS — happy to help set that up later if you need it.
