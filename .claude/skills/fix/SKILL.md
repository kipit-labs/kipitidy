---
name: fix
description: Fix a kipitidy bug end to end — reproduce it, fix the root cause in the kit, check it for real inside kipitiny, report in the PR. Takes a GitHub issue (number or URL) or a description. Use when the user asks to fix a UI kit bug or regression, or invokes /fix <issue or description>.
---

# Fix

Input: a GitHub issue (`gh issue view <n> --comments`) or a description of the bug.

1. **Understand.** Restate the bug: what renders or behaves wrong, what should happen (shadcn/Radix upstream behavior,
   CLAUDE.md), and the code involved. A kipitiny bug that is really in the kit is fixed here; one in how kipitiny uses
   the kit is fixed in kipitiny. Ask with AskUserQuestion only when the expected behavior is genuinely unclear.
2. **Reproduce** the bug where it shows: kipitiny demo mode or the component's design-sync preview, per the feature
   skill's phase 3 setup, with a screenshot or the exact steps. Can't reproduce: say so with what you tried, and ask
   before changing code.
3. **Fix** the root cause once, on a `fix/<short-name>` branch from `main`: grep `src/` and kipitiny's usage of what you
   change. A behavior change kipitiny relies on is breaking (`fix!:`). `pnpm build` and `pnpm design:build` green.
4. **Check in real usage** (feature skill, phase 3): the reproduction is now fixed, and the other screens using that
   component still look and behave the same, in light and dark.
5. **Report.** PR body: `Fixes #<n>` when the input was an issue, a short **What** (the bug and its root cause), and
   the feature skill's `## Testing` table. Final message: the PR link and the table summary.
