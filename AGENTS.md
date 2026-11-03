# Zebbingo Official Web — Agent Instructions

本仓继承母工作区的 `AGENTS.md`；以下是官网仓库的补充规则。

## 合并前必须更新版本

- 每个 PR 合并前，都必须在该 PR 内 bump `package.json` 的 `version`，包括纯文档和配置改动。不得合并后再补版本。
- 合并前重新核对目标分支的最新版本；PR 的版本必须严格高于该版本。若其他 PR 已占用拟用版本，先同步目标分支并递增，再完成受影响的验证和当前 head 审查。
- 同一 PR 已 bump 且仍高于最新目标分支时，无需为每个提交重复递增。默认递增 patch；用户指定的版本优先。
- tag 与被标记提交中的 `package.json` 版本一致，使用无 `v` 前缀的 `x.y.z`；不覆盖已有 tag。生产合并与发布仍遵循 [RELEASE.md](RELEASE.md) 及母仓人工门槛。

规则来源：用户于 2026-11-03 明确要求“在这个仓库里，合并前都要bump version”。这是 Agent 执行规则；不能据此宣称 GitHub 已启用机械合并拦截。
