# The Dusketeers — Static Site (Starter)

This zip contains a professional, plug‑and‑play static site scaffold.

## Structure
```
/assets
  /css        → site styles
  /js         → site scripts
  /images     → images (includes under-construction art)
/pages
  /books      → future seasons & book pages
  /characters → future bios
  /legal      → privacy & terms placeholders
/games         → future mini-games (drop JS/Canvas games here)
/previews      → book preview PDFs (embed from /books pages)
/api           → static mocks now; later served via Cloudflare Workers/Functions
index.html     → Coming Soon landing
404.html       → Not found fallback for static hosts
robots.txt
sitemap.xml    → basic placeholder
```

## Hosting
Works on any static host (Cloudflare Pages, Netlify, GitHub Pages, S3, etc.).

- **Production build:** None needed—pure static.
- **Future API:** When adding chat or forms, use Cloudflare Pages Functions/Workers and keep static assets here.

## Local preview
Just open `index.html` in a browser, or serve with any static server.
