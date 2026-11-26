---
name: feature
description: Build a kipitidy feature end to end — explore, plan and ask, implement, check it for real inside kipitiny, report coverage in the PR. Use when the user asks for a new component, variant, prop or theme change, or invokes /feature <description>.
---

# Feature

Four phases, in order. Never skip the questions or the real-usage checks.

## 1. Explore and plan

- Read `CLAUDE.md`, the components the feature touches in `src/`, `theme.css`, and how kipitiny uses them
  (`grep -rn "@kipit-labs/kipitidy/<file>" ../kipitiny/web/src`).
- Write a plan: what changes where, whether it is breaking (renamed/removed export, prop, token, changed default), what
  kipitiny will need, and the real-usage check list for phase 3.
- **Ask before implementing.** List every open question and ambiguity (with CLAUDE.md, shadcn upstream, existing
  usage in kipitiny, or the request itself). Ask them with AskUserQuestion, wait for answers, then start. A plan with
  zero questions is suspicious: say why nothing is unclear.

## 2. Implement

- New shadcn component: `pnpm dlx shadcn@latest add <name>` (writes `src/<name>.tsx`), then turn its `@/x` imports into
  `./x.js`, adapt it to the kit's look (compare with a sibling component), and export it from `src/index.ts`.
- Kit CSS (tokens, keyframes) goes in `theme.css`, never in a consumer.
- Design sync: a new component gets a preview in `.design-sync/previews/<Name>.tsx`, a `docsMap` entry and its
  subparts in `componentSrcMap` (`.design-sync/config.json`); new utilities used by previews may need the safelist in
  `.design-sync/build-pkg.mjs`.
- `pnpm build` and `pnpm design:build` green.

## 3. Check in real usage

Type checks are not enough: see the change render where it is used.

- In a kipitiny worktree on a matching branch: `pnpm pack --pack-destination <scratchpad>` here, then
  `cd web && pnpm add <scratchpad>/kipit-labs-kipitidy-<version>.tgz && pnpm build`.
- Run kipitiny's UI in demo mode (`pnpm dev:demo`, no manager needed) and open the screens that use the component in a
  real browser (playwright-core with the cached Chromium): light and dark, desktop and a 390px-wide viewport, keyboard
  focus and Escape for anything interactive. Screenshots go in the scratchpad.
- New component not used by kipitiny yet: check its design-sync preview renders (`pnpm design:build`, then the
  preview through the design sync), or a throwaway page in the demo.
- Revert kipitiny's `web/package.json` and `web/pnpm-lock.yaml` afterwards unless that kipitiny branch is the
  migration PR for a breaking change (then it moves to the released version in the release skill's step 7).

For each case record: what you did, expected result, actual result. Failures are fixed and rechecked, not just
reported.

## 4. Report

PR body, under `## Testing`:

```markdown
## Testing

`pnpm build` / `pnpm design:build`: green.

Checked in kipitiny (demo mode) with the packed build of <sha>:

| # | Case | How | Expected | Result |
|---|------|-----|----------|--------|
| 1 | `Button size="xs"` | Projects list, light + dark | 24px high, icon 12px | ✅ |
| 2 | ... | ... | ... | ❌ fixed in <sha>, ✅ on recheck |

Breaking: <none | what changed and what kipitiny must change>.
Not covered: <case> — <why>.
```

✅ works, ❌ broken, ⚠️ works with a caveat. In the final message to the user, repeat only the table summary (counts +
the ⚠️/❌ rows) and the PR link.
