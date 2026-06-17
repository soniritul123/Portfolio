# Portfolio — iOS & Flutter Developer

A modern portfolio built with React, TypeScript, and Tailwind CSS.

**Live site:** [https://soniritul123.github.io/Portfolio/](https://soniritul123.github.io/Portfolio/)

## Project structure

```
Portfolio/
├── src/
│   ├── data/
│   │   └── portfolio.ts    ← MAIN FILE (edit all content here)
│   ├── components/         ← UI sections (no need to edit)
│   ├── App.tsx             ← Page layout
│   └── main.tsx            ← App entry point
├── public/                 ← Logos & favicon
├── docs/                   ← Built website (auto-published to GitHub Pages)
├── index.html              ← Dev server entry
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Edit your portfolio

Open **`src/data/portfolio.ts`** — this is the one main file for all your content:

| Field | What to update |
|-------|----------------|
| `personalInfo` | Name, email, phone, LinkedIn |
| `experience` | Years of experience |
| `about` | Bio paragraph |
| `skills` | Tech stack and tools |
| `services` | Services you offer |
| `projects` | Your app projects |

Also update the `<title>` and meta description in `index.html`.

## Host on GitHub Pages (main branch)

This repo is set up so GitHub Pages serves the built site from the **`docs`** folder on the **`main`** branch.

### One-time setup on GitHub

1. Push this repo to GitHub (`main` branch).
2. Go to your repo → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and **Folder** to `/docs`.
5. Click **Save**.

Your site will be live at:  
**https://soniritul123.github.io/Portfolio/**

### How updates work

Every time you push code to `main`, a GitHub Action automatically:

1. Builds the site
2. Saves the output into the `docs/` folder
3. Commits it back to `main`

So you only edit source files — the published website updates itself.

### Manual build (optional)

```bash
npm run build:pages
```

This creates/updates the `docs/` folder. Commit and push if you want to publish without waiting for the Action.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
