# Agent 协作与进度记录

- 开始任务前阅读根目录 `PROGRESS.md`，并用 Git 状态与实际文件核对其中的信息。
- 每轮代码修改或调试完成后，必须更新根目录 `PROGRESS.md`；未完成或受阻时也应记录现状、阻塞原因及下一步。
- 记录本轮目标、修改文件、验证结果、提交与发布状态、待办事项。区分“本地完成”“已提交”“已推送”“线上已验证”，未执行的检查不得写成通过。
- 保持记录简洁：更新当前状态，并追加本轮交接记录。不得覆盖其他 Agent 的有效记录，不得提交与本轮无关的修改。
- 图片、文案等小改动：验证和密钥扫描后，经用户确认发布，直接推送远端 `main`，随后核验线上结果。
- 涉及支付、登录、用户数据、后台接口或较大改版：使用 `codex/` 前缀的功能分支，提交 PR、创建预览部署，经用户人工确认后才能合并 `main`。混合改动采用此流程。
- `PROGRESS.md` 不得包含密码、密钥、令牌、Cookie、用户隐私数据或任何 `.env` 文件内容。历史记录仅作线索，不替代当前授权或现场验证。

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
