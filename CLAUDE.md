# kipitidy

`@kipit-labs/kipitidy` on npm: the kipit-labs UI kit (shadcn-based React components + Tailwind v4 theme). Main
consumer: kipitiny (`kipit-labs/kipitiny`, `web/`).

## Rules
- One flat `src/`: one file per component, exported from `src/index.ts` (and reachable as `@kipit-labs/kipitidy/<file>`).
- Relative imports with `.js` (`"./button.js"`): tsc doesn't rewrite `@/` aliases in `dist/`. After `shadcn add`,
  turn its `@/x` imports into `./x.js`.
- No product code or branding: no kipitiny logo, API, routes or wording. Kit-level only.
- Tokens, fonts and kit CSS live in `theme.css`; `@source "./dist"` there makes the consumer's Tailwind scan the
  components. Consumers do `@import "tailwindcss"; @import "@kipit-labs/kipitidy/theme.css";`.
- `react`, `react-dom`, `sonner`, `next-themes` and `tailwindcss` are peers: they hold app-wide state (contexts, the
  toast store) and must be the app's single copy. Everything else the kit imports is a dependency.
- `recharts` is an optional peer: the app passes its own charts into `ChartContainer`, so both must share one copy;
  apps without charts don't install it.
- A renamed or removed export, prop or token is breaking: `feat!:` / `fix!:`, and the PR says what kipitiny must change.
- The Claude Design sync lives in `.design-sync/` (read its `NOTES.md` before touching it).

## Commands
`pnpm build` / `pnpm typecheck` / `pnpm design:build`. Skills: `feature`, `fix`, `release`.
