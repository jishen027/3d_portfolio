# 3D Portfolio (Three.js & React)

A single-page 3D portfolio built with React and Three.js (via React Three Fiber). It showcases my projects, skills, and experience inside an interactive 3D environment that you can navigate and explore with your mouse.

[Live Demo](https://jishen027.github.io/3d_portfolio/)

## Features

- Interactive 3D scenes powered by React Three Fiber and `@react-three/drei`
- Drag-to-rotate models with inertia and cursor-attraction effects
- Animated 3D fox on the contact page driven by named animation clips
- Contextual info cards triggered by model rotation stages
- Responsive single-page layout with React Router navigation
- Contact form powered by EmailJS
- Matomo analytics tracking on route changes

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full-screen interactive 3D scene |
| `/about` | About | Skills grid and experience timeline |
| `/projects` | Projects | Grid of project cards |
| `/contact` | Contact | Contact form with an animated 3D fox |

## Built With

- React.js
- Three.js (React Three Fiber + `@react-three/drei`)
- React Router v6
- Tailwind CSS
- Vite
- EmailJS
- JavaScript, HTML, CSS

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/jishen027/3d_portfolio.git
   ```

2. Change directory

   ```bash
   cd 3d_portfolio
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173/3d_portfolio/` in your browser

## Available Scripts

```bash
npm run dev       # Start the dev server
npm run build     # Production build to ./dist
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint (zero warnings allowed)
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root with:

```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_TO_EMAIL=
```

## Deployment

The app is deployed to GitHub Pages at the `/3d_portfolio/` subpath. CI builds and deploys automatically on every push to `main`.
