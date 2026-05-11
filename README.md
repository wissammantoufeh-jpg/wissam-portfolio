# Wissam Designs — Landing Page

Single-page mobile-first site. No build step. Just static files.

## File structure

```
.
├── index.html          ← the whole site (HTML + CSS + JS in one file)
└── assets/
    └── fonts/          ← drop MORGANITE-BOLD.TTF and MORGANITE-BLACK.TTF here
```

## Fonts

The landing-page display text uses **Morganite** (Bold + Black). The contact form
uses **Inter** as a web font.

Place these two files in `assets/fonts/`:
- `MORGANITE-BOLD.TTF`   → mapped to font-weight 700
- `MORGANITE-BLACK.TTF`  → mapped to font-weight 900

Filename case matters on Linux servers — keep the `.TTF` extension uppercase
to match the CSS. If the files are missing, the page still works; it just falls
back to Barlow Condensed.

## Test locally

Just **double-click `index.html`** — it opens in your browser. That's it.

## Deploy

Pick one of these. All three are free, all three take under 2 minutes.

### Option A — Netlify Drop (easiest, no account needed to try)
1. Go to https://app.netlify.com/drop
2. Drag the whole folder (the one containing `index.html`) onto the page.
3. Done. You get a live URL like `https://random-name.netlify.app`.

### Option B — Vercel
1. Sign up at https://vercel.com (free).
2. Click **Add New → Project → Deploy** and drag the folder, OR push to GitHub and import the repo.
3. Done. Live URL like `https://your-project.vercel.app`.

### Option C — GitHub Pages
1. Create a new public repo on github.com.
2. Upload `index.html` and the `assets/` folder.
3. Repo → **Settings → Pages → Source: Deploy from branch → main → /(root) → Save**.
4. Wait ~1 minute. Live at `https://yourusername.github.io/yourreponame/`.

## Replacing the placeholder images

The work photos and client logos are currently inline SVG illustrations. To swap them
for real images:

1. Put your real files in `assets/` (e.g. `assets/work-1.jpg`, `assets/client-wasl.svg`).
2. In `index.html`, find the `<div class="work-tile">` blocks and replace the inline
   `<svg>...</svg>` with `<img src="assets/work-1.jpg" alt="Project 1" />`.
3. Same for client logos under `<div class="clients-row">`.

Add this CSS rule once near the top of the `<style>` block to make swapped images fit:

```css
.work-tile img,
.client-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
```
