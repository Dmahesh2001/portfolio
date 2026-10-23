# Maheswar — Portfolio

React + Vite site with Framer Motion animations.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content

Everything you'd change lives in `src/data.js`: your links, résumé URL, projects, services, process steps and tool stack.
Project images are in `public/work/`. To add a project, drop its screenshots there and add an entry to `projects`.

Still to fill in (marked `TODO` in `src/data.js`):
- `resumeUrl`: put your résumé PDF in `public/` (e.g. `public/resume.pdf`) and set `resumeUrl: './resume.pdf'`
- LinkedIn and GitHub profile URLs

## Deploy

### Vercel (recommended)
1. Push this folder to a GitHub repo.
2. On vercel.com, choose **Add New → Project**, import the repo.
3. Vercel detects Vite. Keep the defaults (build `npm run build`, output `dist`) and press **Deploy**.
4. Add your own domain under **Settings → Domains**.

### Netlify
1. Run `npm run build`.
2. Drag the `dist` folder onto app.netlify.com/drop.
   (Or connect the GitHub repo: build command `npm run build`, publish directory `dist`.)

### GitHub Pages
Run `npm run build` and publish the `dist` folder. Asset paths are relative (`base: './'`), so it works from a sub-path.

## Animations

- `src/motion.jsx` holds the reusable pieces:
  - `RevealText`: headlines rise in word by word, with a blur clearing as they land
  - `LetterTitle`: project titles roll up letter by letter when they scroll into view
  - `Reveal`: blocks ease up into place on scroll
- Project cards (`ProjectCard` in `src/App.jsx`) scroll in, lift on hover, fan their phone screens out, and drift with a light parallax.
- Everything respects the visitor's "reduce motion" setting.
