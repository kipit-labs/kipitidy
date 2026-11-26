# design-sync notes

Source is this repo's `src/`, synced as the `kipitidy` design system (`window.Kipitidy`). No logo or kipitiny branding ships. Check with `grep -ri kipitiny ds-bundle/_ds_bundle.* ds-bundle/components ds-bundle/README.md` before upload.

## Known render warns

None. 27/27 render, no errors.

Previews lean on two tricks: `Tip` opens through `autoFocus` (it has no `open` prop), and `Dialog`/`Sheet` set `onOpenAutoFocus` to avoid selected text in the card.

## Re-sync risks

- `build-pkg.mjs` strips `@fontsource` imports from `theme.css` and appends a utility safelist. New font imports or utilities used by designs need that script updated.
- `pkg/index.ts` re-exports `src/index.ts`, and `config.json` lists subparts in `componentSrcMap`. A new component goes in `src/index.ts`; a new subpart in `componentSrcMap` too.
- `playwright` in `.ds-sync` is pinned to 1.64.0 for the cached chromium build.
- Keycloak and Forgejo adapters in the ops repo copy these tokens into `design-system/tokens.css` by hand, so token changes need applying there too.

## Auth

`/design-login` and `/design-consent` don't work inside Orca chat sessions (SDK entrypoint). Run `/design-login` once in a plain terminal `claude` session; Orca sessions then reuse it.
