# Release Procedure

Versions and tags use `x.y.z` **without a `v` prefix**.

1. Update `package.json` in a short-lived PR before tagging. Keep dependencies and the lockfile unchanged for a version-only bump; the pnpm lockfile does not store the root package version.
2. Validate the manifest, build and diff; complete current-head review and checks.
3. A human merges the PR into `main`. Main is the Vercel production branch, so merging triggers production deployment and remains a human action.
4. Fetch the merged commit and verify its `package.json` version matches the intended tag. Confirm that tag does not exist remotely; never move or overwrite an existing version tag. Create an annotated tag at the exact merged SHA, then push only that tag:
   ```bash
   git tag -a <version> <merged-sha> -m "Zebbingo website <version>"
   git push origin refs/tags/<version>
   ```
5. Read back the remote tag target and verify the tagged manifest has the same version. A GitHub Release is optional and must be created/published by a human; the agent does not create or publish it.

Tag/deployment boundary checked on 2026-11-03: there are no tracked deployment workflows in this repository; the GitHub workflows API lists only dynamic Dependabot Updates. The configured repository webhook listens to `repository` events, not `push`. Vercel uses the existing branch integration; its [tag deployment guide](https://vercel.com/kb/guide/can-you-deploy-based-on-tags-releases-on-vercel) requires a separate Actions/CLI setup, which is absent here. A tag in this inspected setup is a version marker and performs no deployment. Recheck this boundary before tagging if deployment configuration changes.

The authorized `1.2.0` follow-up versions the merged homepage/analytics PR #9 and image replacement PR #10. See the [task plan](docs/product-introduction-2026-11.md#version-and-tag-follow-up--3-november-2026).
