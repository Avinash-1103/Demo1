# Electric MSCB Contractor — React + Vite + Tailwind + Framer Motion

A clean, responsive, SEO-friendly website for an Electric MSCB Contractor.

## Tech
- React + Vite
- TailwindCSS
- Framer Motion
- React Router
- react-helmet-async for SEO
- Optional Dark Mode

## Setup
```bash
npm install
npm run dev
# build
npm run build
npm run preview
```

### Tailwind Intellisense (optional)
Install the Tailwind CSS IntelliSense extension in VS Code.

## SEO
- Global meta tags in `index.html`
- Per-page titles/descriptions via `<Helmet>`
- Semantic headings and image `alt` text (add real project images under `src/assets/`).

## Customize
- Update license number, phone, email, address in `Footer.jsx` and `Contact.jsx`.
- Replace WhatsApp number in `Contact.jsx`.
- Add real project images to `ProjectCard` via `img` prop.
- Update Google Maps embed in `Contact.jsx` with your exact location.
