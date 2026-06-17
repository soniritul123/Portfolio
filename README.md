# Portfolio — iOS & Flutter Developer

A modern freelancer portfolio built with React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize Your Portfolio

Edit **`src/data/portfolio.ts`** — this single file controls all your content:

| Field | What to update |
|-------|----------------|
| `personalInfo` | Name, email, GitHub, LinkedIn links |
| `experience` | Your years of experience |
| `about` | Your bio paragraph |
| `skills` | Tech stack and proficiency levels |
| `services` | Freelance services you offer |
| `projects` | Your real app projects (replace placeholders) |

Also update the `<title>` and meta description in `index.html`.

## Deploy

Build for production:

```bash
npm run build
```

Deploy the `dist` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages.

## Contact Form

The contact form currently shows a success message locally. To receive emails, connect it to:

- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- Your own backend API

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
