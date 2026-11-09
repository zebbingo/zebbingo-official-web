# Zebbingo Official Web — Agent Instructions

本仓继承母工作区的 `AGENTS.md`；以下是官网仓库的补充规则。

## 合并前必须更新版本

- 每个 PR 合并前，都必须在该 PR 内 bump `package.json` 的 `version`，包括纯文档和配置改动。不得合并后再补版本。
- 合并前重新核对目标分支的最新版本；PR 的版本必须严格高于该版本。若其他 PR 已占用拟用版本，先同步目标分支并递增，再完成受影响的验证和当前 head 审查。
- 同一 PR 已 bump 且仍高于最新目标分支时，无需为每个提交重复递增。默认递增 patch；用户指定的版本优先。
- tag 与被标记提交中的 `package.json` 版本一致，使用无 `v` 前缀的 `x.y.z`；不覆盖已有 tag。生产合并与发布仍遵循 [RELEASE.md](RELEASE.md) 及母仓人工门槛。

规则来源：用户于 2026-11-03 明确要求“在这个仓库里，合并前都要bump version”。这是 Agent 执行规则；不能据此宣称 GitHub 已启用机械合并拦截。

## PR 问题归属（GitHub Issues 唯一正本）

- 每个 PR（包括 Draft、文档和依赖更新）必须在正文以独立纯文本行填写 `主 Issue：完整 GitHub Issue URL`、`补充此前 PR：无或完整 PR URL`、`本次解决：具体范围`。模板中的示例或注释不算声明。
- 新工作先搜索开放及已关闭 Issues；同一根因、目标和验收范围复用原 Issue。补充此前 PR 时必须继承其主 Issue；旧 PR 没有声明则先补齐旧 PR，不能另建重复 Issue。允许引用已关闭 Issue，不为过门禁重开或新建。
- 跨仓共用协调仓的一条 Issue，不使用 H/OI 平行编号。`OPEN_ISSUE.md` / `OPEN_ISSUES.md` 只作导航和冻结历史，禁止新增台账正文；讨论、状态、证据和验收只更新 GitHub Issue。
- 创建和合并使用母仓已审查 `origin/main` 的统一 PR 策略；CI 验证当前正文、真实 Issue 和补充继承。API/权限失败即阻断，旧绿色 CI 不能代替合并前重新读取。跨仓访问使用已有只读授权，不复制个人凭据。
- 审查还需确认“本次解决”确实属于该 Issue，以及是否漏报补充关系；机械校验不能证明这些语义。多个 PR 可以对应一个 Issue；仅全部验收完成时才使用关闭关键字或关闭 Issue。

接入与验收范围：[母仓 Issue #897](https://github.com/zebbingo/zebbingo-ai-agent/issues/897)。创建、CI、合并的当前证据以该 Issue 及关联 PR 为准。

本仓尚无 `just pr-*` 便利入口。贡献者在本仓目录执行已更新母仓的可信入口：`ZEBBINGO_AGENT_ID=codex uv run --no-project python <母仓绝对路径>/scripts/check/pr_policy_main.py check`；创建使用同入口 `create --kind draft --title <标题> --body-file <UTF-8正文文件>`；经当前 head 审查和 CI 后，以 `PR_MERGE_AUTHORIZED=1` 调用 `merge <PR编号>`。入口按本仓 origin 定位，不使用 fork 上游。母仓工具只用于贡献流程，应用运行仍保持独立。生产合并及既有人工门槛优先。
