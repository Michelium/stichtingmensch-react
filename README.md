# Stichting Mensch (React + Vite)

This project runs on Vite with React and TypeScript.

## Scripts

- `npm run dev` (or `npm start`) starts the local dev server.
- `npm run build` creates a production bundle in `build/`.
- `npm run preview` serves the production bundle locally.
- `npm run test` runs Vitest tests.
- `npm run typecheck` runs TypeScript checks.

## Local Development

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Deployment

Production assets are generated in `build/`, which matches the Capistrano deploy setup (`repo_tree 'build'`).
