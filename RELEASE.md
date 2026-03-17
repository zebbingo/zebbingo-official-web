# Release Procedure

1. Merge PR to `main`
2. Bump version in `package.json` (`npm version patch/minor/major --no-git-tag-version`)
3. Commit and push the version bump
4. Create release on GitHub **without `v` prefix**:
   ```bash
   gh release create <version> --title "<version>" --notes "..."
   ```
   Example: `gh release create 1.0.10 --title "1.0.10" --notes "..."`
