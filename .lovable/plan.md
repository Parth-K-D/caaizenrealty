## Goal
Replace the TanStack Start setup with a standard Vite + React SPA built from a static `index.html`. Keep all existing pages, components, styling, and assets.

## Approach

### Remove TanStack Start
- Delete `src/routes/`, `src/router.tsx`, `src/routeTree.gen.ts`, `src/server.ts`, `src/start.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts`.
- Remove `@tanstack/react-router`, `@tanstack/react-start`, `@lovable.dev/vite-tanstack-config`, nitro deps from `package.json`.

### Add standard Vite SPA
- New `index.html` at project root with `<div id="root">`, Google Fonts `<link>`, and `<script type="module" src="/src/main.tsx">`.
- New `src/main.tsx` — React root + `BrowserRouter`.
- New `src/App.tsx` — `<Routes>` for `/`, `/the-retreat`, `/contact`, 404.
- Add `react-router-dom`.
- New minimal `vite.config.ts` with `@vitejs/plugin-react`, `@` alias to `src`, port 8080.

### Convert pages
- Move route component bodies from `src/routes/index.tsx`, `the-retreat.tsx`, `contact.tsx` into `src/pages/Home.tsx`, `TheRetreat.tsx`, `Contact.tsx`.
- Replace TanStack `<Link to=...>` / `createFileRoute` with `react-router-dom` `<Link>`.
- Move page `<title>`/meta into per-page `useEffect` setting `document.title` (simple, no extra deps).

### Update shared components
- `src/components/site-nav.tsx` and `site-footer.tsx`: swap `@tanstack/react-router` `Link` → `react-router-dom` `Link` (`to` prop is identical).

### Keep as-is
- `src/styles.css`, all `src/components/ui/*`, `reveal.tsx`, `team-grid.tsx`, asset JSON files, Tailwind v4 setup.

## Out of scope
- No backend, no SSR, no content changes.
