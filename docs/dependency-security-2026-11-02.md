# Dependency security remediation — 2026-11-02

## Scope and acceptance

The user requested all dependency security issues in official-web and confirmed this plan in the Codex conversation on 2026-11-02. Inspect the current lockfile and GitHub alerts; remediate actionable findings without changing site behavior, including any additional findings discovered during verification. Do not dismiss alerts merely to hide them.

The initial `pnpm audit --json` reported GHSA-g3hv-75wg-m249 for minimatch 3.1.5 and 10.2.6 in the ESLint dependency tree; GitHub returned no open Dependabot alerts. The advisory identifies 11.0.1 as the first patched version. Check compatibility before choosing updates or targeted overrides: minimatch 3 and 11 have different APIs. Installed modules in the original checkout differ from the lockfile, so verification must use a clean frozen-lockfile install.

## Execution and verification

1. Establish a baseline and inspect affected consumers and available fixed versions; prefer compatible upstream fixes and use a narrowly scoped override or another evidence-backed fix if needed.
2. Update dependencies and lockfile, with any necessary compatibility changes limited to this task. Repeat the audit and address remaining actionable findings.
3. Verify clean installation, `pnpm audit`, applicable ESLint checks, `pnpm build`, and critical-page smoke checks; report failures and any risk that cannot be validated. Record results and PR review evidence before merge. Production release remains a human action.

## Implementation and evidence

- Override minimatch 9/10 to 11.0.3 for ESLint, @eslint/config-array and @typescript-eslint/typescript-estree. The override crosses a major version, so it should be removed when compatible upstream dependencies incorporate a fix.
- The regression test invokes the advisory's globstar/parent preprocessing with a limit of one: `node --test tests/minimatch-security.test.cjs` failed on the original 10.2.6 (4 patterns) and passed on 11.0.3 (1 pattern).
- The original ESLint configuration failed even before the override. Next 16 supplies flat configs, so load these directly, replace the unused legacy config package with ESLint's compatibility adapter for plugins that do not yet declare ESLint 10 support, and move an effect below the function it calls. The existing loading behavior is preserved with a scoped rule exception. `pnpm exec eslint src` now passes; the plugin peer-version warnings remain.
- A fresh temporary-directory `pnpm install --frozen-lockfile --offline --ignore-scripts`, regression test and project lint passed. `pnpm build` passed. Local production server requests to `/`, `/about`, `/privacy_policy`, `/safety`, and `/sitemap.xml` returned 200 after redirects; these HTTP checks are not browser interaction tests.
- `pnpm audit --prod` reports no known vulnerabilities. Full `pnpm audit` still reports minimatch 3.1.5 under eslint-config-next's tooling dependencies. The [advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) currently lists all versions below 11.0.1, but the described preprocessing functions and `optimizationLevel` are absent from 3.1.5. An [open advisory-database correction](https://github.com/github/advisory-database/pull/10807) independently identifies versions before 7 as outside the described affected range; it is not yet merged. The described finding is therefore assessed as inapplicable to 3.1.5, not suppressed or claimed to be officially corrected. Its consumers require the old callable API, so forcing 11 would break them. Revisit when the upstream advisory or consumers change. GitHub Dependabot returned no open alerts at investigation time.
