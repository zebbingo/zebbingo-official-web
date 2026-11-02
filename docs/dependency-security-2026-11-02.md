# Dependency security remediation — 2026-11-02

## Scope and acceptance

The user requested all dependency security issues in official-web and confirmed this plan in the Codex conversation on 2026-11-02. Inspect the current lockfile and GitHub alerts; remediate actionable findings without changing site behavior, including any additional findings discovered during verification. Do not dismiss alerts merely to hide them.

The initial `pnpm audit --json` reported GHSA-g3hv-75wg-m249 for minimatch 3.1.5 and 10.2.6 in the ESLint dependency tree; GitHub returned no open Dependabot alerts. The advisory identifies 11.0.1 as the first patched version. Check compatibility before choosing updates or targeted overrides: minimatch 3 and 11 have different APIs. Installed modules in the original checkout differ from the lockfile, so verification must use a clean frozen-lockfile install.

## Execution and verification

1. Establish a baseline and inspect affected consumers and available fixed versions; prefer compatible upstream fixes and use a narrowly scoped override or another evidence-backed fix if needed.
2. Update dependencies and lockfile, with any necessary compatibility changes limited to this task. Repeat the audit and address remaining actionable findings.
3. Verify clean installation, `pnpm audit`, applicable ESLint checks, `pnpm build`, and critical-page smoke checks; report failures and any risk that cannot be validated. Record results and PR review evidence before merge. Production release remains a human action.
