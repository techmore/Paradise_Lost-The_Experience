# Paradise Lost: The Experience

A companion site for John Milton's *Paradise Lost*. It has a reader for the poem, a study companion, a gallery of the Gustave Doré illustrations, and a page of outside resources such as courses, lectures, texts, and audio.

**Live site:** https://techmore.github.io/Paradise_Lost-The_Experience/

## Run locally

The site is static HTML, CSS, and JavaScript with no build step. Serve the repo root with any static server, for example:

```sh
python3 -m http.server 8000
```

Pushing to `main` runs `.github/workflows/pages.yml`, which publishes the repo root to GitHub Pages.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `read.html`, `js/reader.js` | The reader |
| `data/paradise-lost.json` | Text of the poem used by the reader |
| `companion.html` | Study companion: guide, themes, structure, historical context |
| `gallery.html`, `assets/dore/` | Doré illustration gallery and images |
| `resources.html` | Outside courses, lectures, texts, and audio |
| `works.html`, `work.html` | Library hub for other texts; `work.html` is a placeholder detail page |
| `css/`, `js/` | Stylesheet and scripts |
| `sidebar_roadmap.md` | Plan for a contextual resources sidebar in the reader |

Part of [Techmore](https://techmore.github.io/pages/repos/).
