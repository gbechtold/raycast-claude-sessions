# Contributing

Thanks for considering a contribution! This project is small and focused — keep changes minimal and aligned with the existing style.

## Development setup

```bash
git clone https://github.com/gbechtold/raycast-claude-sessions.git
cd raycast-claude-sessions/extension
npm install
npm run dev    # Hot-reload in Raycast (requires Raycast installed)
```

You need:
- macOS (Raycast is macOS-only)
- Node 22.14+
- A local Raycast installation for `npm run dev`

## Workflow

1. Open or pick up an issue. For non-trivial changes, please open an issue first to discuss the approach.
2. Create a feature branch: `feature/<short-slug>` or `fix/<short-slug>`.
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `refactor:`, `perf:`, `test:`, `chore:`.
4. Run `npm run build` and `npm run lint` locally. CI will repeat these checks.
5. Open a PR with a short description and (if visual) before/after screenshots.

## Scope

This is a focused extension: **browse and resume Claude Code sessions**. Out-of-scope for v0.x:
- Multi-workspace / multi-`~/.claude` switching
- Live JSONL streaming (watching files in real time)
- Pinning / tagging / notes per session
- Non-macOS terminal integrations

Open a discussion if you want to challenge any of these — they may move in scope for v1.0.

## Style

- TypeScript strict mode, no `any` unless necessary
- Prettier formatting (`npm run lint --fix` to apply)
- Comments only when the why isn't obvious — let identifiers do the explaining
- One commit per logical change; squash trivial fixups before opening the PR

## Security / privacy

The extension reads only local files under `~/.claude/projects/` and never makes network requests. If you add any feature that changes this (telemetry, remote sync, etc.), it must be off by default and clearly documented.

## License

By contributing, you agree your contributions will be MIT-licensed.
