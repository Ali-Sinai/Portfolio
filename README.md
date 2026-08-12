# Portfolio

Bilingual (Persian / English) single-page portfolio site for Sina — Backend Developer (C# / .NET).

Plain HTML/CSS/JS, no build step, no dependencies.

## Structure

- `index.html` — page markup
- `style.css` — all styling (dark/light theme via CSS variables)
- `translations.js` — all copy in one dictionary, keyed by `en` / `fa`
- `config.js` — editable arrays for Projects, Work Experience, Useful Links, and Contact entries
- `script.js` — language/theme toggle logic and rendering of config-driven sections

## Editing content

- Text copy: edit `translations.js`
- Projects / experience / links / contact: edit the arrays in `config.js` (entries marked `PLACEHOLDER` are meant to be filled in)

## Running locally

Any static file server works, e.g.:

```bash
python -m http.server 5173
```

Then open http://localhost:5173

## Deployment

Static site — deploy as-is to Vercel (or any static host). No build command or output directory needed (or set output directory to `.`).
