---
name: release
description: Cut a kipitidy release — bump `version` in package.json in a `chore(release): X.Y.Z` PR and merge it; the release workflow tags, publishes to npm and creates the GitHub release; then bump kipitiny. Use when the user says "release", "cut a release", "publish", or invokes /release [version|major|minor|patch].
---

# Release

A release is a chore PR that bumps `version` in `package.json`. Merging it into `main` runs
`.github/workflows/release.yml`: it tags the merged commit `X.Y.Z`, publishes `@kipit-labs/kipitidy@X.Y.Z` to npm
(trusted publishing, with provenance) and creates the GitHub release with generated notes. It refuses a version that
isn't above the last tag. `release-pr.yml` refuses a version change in a PR not titled `chore(release): X.Y.Z`.

Tags are bare semver, no `v` prefix: `0.6.0`, not `v0.6.0`.

## Steps

1. **Preflight** — stop and report if any fails:
   - on `main`, working tree clean (`git status --porcelain` empty)
   - `git fetch --tags origin` then local `main` == `origin/main`
   - there are commits since the last tag (`git describe --tags --abbrev=0`)
   - `jq -r .version package.json` equals the last tag

2. **Pick the version.** Arg may be an explicit `X.Y.Z` or `major|minor|patch`. Without one, infer from conventional
   commits since the last tag (`git log <last>..HEAD --format=%s`):
   - any `!:` or `BREAKING CHANGE` → major (while < 1.0, bump minor instead)
   - any `feat` → minor
   - otherwise → patch
   New version must be greater than the last tag and not already on npm (`npm view @kipit-labs/kipitidy versions`).

3. **Confirm with the user** before touching anything: last tag → new version, the commit subjects included, and
   every breaking change with what kipitiny must change. Wait for a yes.

4. **Commit on a branch, open the PR, auto-merge it:**
   ```sh
   git switch -c chore/release-X.Y.Z
   npm pkg set version=X.Y.Z
   pnpm build && npm pack --dry-run   # must succeed: the workflow publishes this
   git add package.json
   git commit -m "chore(release): X.Y.Z"
   git push -u origin chore/release-X.Y.Z
   gh pr create --title "chore(release): X.Y.Z" --body "Release X.Y.Z."
   gh pr merge --rebase --auto
   ```
   No AI attribution trailer on the commit or the PR. Never push a tag or run `npm publish` by hand: the workflow
   does both.

5. **Wait for the merge** (`gh pr view --json state` says `MERGED`), then
   `git switch main && git pull --ff-only origin main && git branch -d chore/release-X.Y.Z`.

6. **Check the publish:** `gh run list --workflow release.yml --limit 1`, then
   `npm view @kipit-labs/kipitidy@X.Y.Z version` and `gh release view X.Y.Z --json url`.

7. **Bump kipitiny** (ask first): in a kipitiny worktree on `fix/kipitidy-X.Y.Z` (`feat/...` when kipitiny needs code
   changes for a breaking release), `cd web && pnpm add @kipit-labs/kipitidy@X.Y.Z`, apply the breaking changes,
   `pnpm build`, then a PR `fix(deps): kipitidy X.Y.Z` (or `feat: ...`) whose body links the kipitidy release.

## If something goes wrong

- PR checks fail or it conflicts: rebase on `origin/main`, re-check the version (new commits may change it),
  force-push the branch. Nothing is tagged or published yet.
- The release run fails: fix on `main` through a PR, then `gh run rerun <id> --failed`. A re-run finds its own tag,
  skips an already published version and creates the missing release.
- npm refuses the publish (`ENEEDAUTH`, 404 on PUT): the trusted publisher on npmjs.com must name `kipit-labs/kipitidy`
  and workflow `release.yml`. Tell the user; don't add a token.
- Never move or delete a pushed tag, and never `npm unpublish`, without the user's explicit go-ahead: kipitiny's
  lockfile pins published versions. A bad release is fixed by a new one (`npm deprecate` the bad one if asked).
