# kipitidy

[![npm](https://img.shields.io/npm/v/@kipit-labs/kipitidy)](https://www.npmjs.com/package/@kipit-labs/kipitidy)

The kipit-labs UI kit: compact, shadcn-based React components and their Tailwind v4 theme. Used by
[kipitiny](https://github.com/kipit-labs/kipitiny).

```sh
pnpm add @kipit-labs/kipitidy react react-dom sonner next-themes tailwindcss
```

```css
/* your app's CSS entry */
@import "tailwindcss";
@import "@kipit-labs/kipitidy/theme.css";
```

```tsx
import { Button, Card, TooltipProvider } from "@kipit-labs/kipitidy";
// or one file: import { Button } from "@kipit-labs/kipitidy/button";
```

Charts (`@kipit-labs/kipitidy/chart`) wrap your own recharts components: add `recharts` too when you use them.

Dark mode: class `dark` on `<html>` (next-themes `attribute="class"`). Wrap the app in `<TooltipProvider>`, and mount
`<Toaster />` once to use sonner's `toast`.

## Development

`pnpm install`, `pnpm build`. Releases: a `chore(release): X.Y.Z` PR bumping `version` in `package.json`; merging it
tags, publishes to npm and creates the GitHub release (`.github/workflows/release.yml`).

MIT
