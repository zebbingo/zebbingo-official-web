# Dependency security remediation — 2026-11-02

## Scope and acceptance

The user requested all dependency security issues in official-web and confirmed this plan in the Codex conversation on 2026-11-02. Inspect the current lockfile and GitHub alerts; remediate actionable findings without changing site behavior, including any additional findings discovered during verification. Do not dismiss alerts merely to hide them.

The initial `pnpm audit --json` reported GHSA-g3hv-75wg-m249 for minimatch 3.1.5 and 10.2.6 in the ESLint dependency tree; GitHub returned no open Dependabot alerts. The advisory identifies 11.0.1 as the first patched version. Check compatibility before choosing updates or targeted overrides: minimatch 3 and 11 have different APIs. Installed modules in the original checkout differ from the lockfile, so verification must use a clean frozen-lockfile install.

## Execution and verification

1. Establish a baseline and inspect affected consumers and available fixed versions; prefer compatible upstream fixes and use a narrowly scoped override or another evidence-backed fix if needed.
2. Update dependencies and lockfile, with any necessary compatibility changes limited to this task. Repeat the audit and address remaining actionable findings.
3. Verify clean installation, `pnpm audit`, applicable ESLint checks, `pnpm build`, and critical-page smoke checks; report failures and any risk that cannot be validated. Record results and PR review evidence before merge. Production release remains a human action.

## Implementation and evidence

- Override minimatch 9/10 to 11.0.3; this affects ESLint, @eslint/config-array and @typescript-eslint/typescript-estree. Keep the 3.x dependency because its consumers require the old callable CommonJS/default export, which 11 does not provide. The override crosses a major version, so integration coverage remains important.
- The regression test invokes the advisory's globstar/parent preprocessing with a limit of one: `node --test tests/minimatch-security.test.cjs` failed on the original 10.2.6 (4 patterns) and passed on 11.0.3 (1 pattern).
- A fresh temporary-directory `pnpm install --frozen-lockfile --offline --ignore-scripts` and regression test passed. ESLint with `--no-config-lookup` detected an intentional `no-unused-vars` violation. `pnpm build` passed; local production server requests to `/`, `/about`, `/privacy_policy`, `/safety`, and `/sitemap.xml` returned 200 after redirects. These HTTP checks are not browser interaction tests.
- `pnpm exec eslint src` fails with a circular JSON configuration error. The same error occurred on a fresh installation of the original HEAD lockfile; full project lint compatibility is therefore not verified. Existing ESLint 10 peer warnings also remain.
- `pnpm audit` now reports one moderate finding for minimatch 3.1.5 via @eslint/eslintrc. The [advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) lists all versions below 11.0.1, while its described vulnerable `firstPhasePreProcess`/`secondPhasePreProcess` code and `optimizationLevel` are absent from the installed 3.1.5 source. This is evidence that the described mechanism does not apply to 3.1.5, not an authoritative correction of the published advisory or a guarantee against other defects. No suppression was added; audit remains nonzero pending an upstream correction or a compatible upstream replacement. GitHub Dependabot returned no open alerts at investigation time.
- Keep the PR Draft: full lint and a clean audit remain unresolved. No CI, independent review, merge, deployment, or UAT is claimed.
