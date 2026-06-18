# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173/3d_portfolio/
npm run build     # Production build to ./dist
npm run preview   # Preview the production build locally
npm run lint      # ESLint with zero warnings allowed
```

There are no tests in this project.

## Architecture

Single-page React portfolio deployed to GitHub Pages at `/3d_portfolio/`. The router uses `basename="/3d_portfolio"` to match the GitHub Pages subpath. CI (`/.github/workflows/node.js.yml`) builds and deploys automatically on push to `main`.

### Page & routing structure

`src/App.jsx` sets up React Router v6 with four routes rendered inside a fixed `<Navbar>`:

| Route | Page | Visual style |
|---|---|---|
| `/` | `Home` | Dark (`bg-surface`) — full-screen 3D canvas |
| `/about` | `About` | Dark — skills grid + experience timeline |
| `/projects` | `Projects` | Light (`bg-[#F2F2F2]`) — project cards grid |
| `/contact` | `Contact` | Light — contact form + 3D fox |

Pages are barrel-exported from `src/pages/index.js`. All content data (skills, experiences, projects, socialLinks) lives in `src/constants/index.js`; edit that file to update portfolio content.

### 3D models

All models are in `src/models/` and load `.glb` assets from `src/assets/3d/` via `useGLTF`. Vite is configured with `assetsInclude: ['**/*.glb']` to handle binary model files.

Key interaction patterns shared across models:
- Pointer events (drag-to-rotate) are registered on `gl.domElement` inside `useEffect`, not on the mesh directly.
- `useFrame` drives per-frame animation: continuous self-rotation, inertia with `dampingFactor = 0.95`, and cursor-attraction (mouse position normalized to −1…+1, then smoothly lerped toward the cursor).
- `Earth` and `Plane` both implement cursor-attraction — the model floats toward the cursor relative to a captured `basePosition`.
- `Island` and `Earth` emit `setCurrentStage(1–4 | null)` by mapping `normalizedRotation` ranges, used to show contextual info cards.
- `Fox` uses `useAnimations` with named clips (`"idle"`, `"walk"`, `"hit"`) controlled by a `currentAnimation` prop from `Contact.jsx`.

### Styling system

Tailwind v3 with two semantic color tokens defined in `tailwind.config.js` (or via CSS):
- `bg-surface` / `text-foreground` — dark theme (Home, About)
- `bg-foreground` / `text-surface` — inverted (buttons)

Primary font is **Work Sans**; monospace decorative labels use **IBM Plex Mono** applied via inline `style={{ fontFamily: "'IBM Plex Mono', monospace" }}`. Utility classes like `.header`, `.info-box`, `.neo-btn`, `.cta` are defined in `src/index.css`.

### Contact form

`Contact.jsx` uses `@emailjs/browser`. The following environment variables must be set in `.env`:

```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_TO_EMAIL=
```

### Analytics

`App.jsx` includes a `MatomoTracker` component (placed inside `<Router>`) that calls `window._paq` on every route change. The Matomo script itself is injected via `index.html`.
