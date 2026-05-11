# raycast-claude-sessions

> Native Raycast Extension to browse and resume Claude Code sessions.

Lists all your past Claude Code sessions from `~/.claude/projects/*/*.jsonl` with the actual first user prompt as title — search, filter, and resume any session in iTerm2 or Terminal.app with a single keystroke.

![CI](https://github.com/gbechtold/raycast-claude-sessions/actions/workflows/ci.yml/badge.svg)

## Why

Claude Code stores every session as a JSONL file under `~/.claude/projects/<encoded-cwd>/<uuid>.jsonl`. The CLI offers `claude --resume <uuid>`, but you need to know the UUID — and `~/.claude` has dozens or hundreds of sessions.

This extension surfaces all of them as a Raycast list, with:
- The first user message as a sprechender title
- Relative time + CWD as accessories
- Full first-message preview in the detail panel
- One-keystroke resume in your preferred terminal

## Features (v0.1)
- 🔍 **Search** across title, CWD, UUID
- 📋 **Detail view** with the full first user message
- ⌨️ **Resume** in iTerm2 or Terminal.app (configurable)
- 📎 **Copy** UUID or full resume command
- 📂 **Show JSONL** in Finder
- ⚡ **Cached** with mtime-invalidation — warm reload < 2s

## Installation

### From source (until Raycast Store submission lands)
```bash
git clone https://github.com/gbechtold/raycast-claude-sessions.git
cd raycast-claude-sessions/extension
npm install
npm run dev
```

Raycast will detect the dev extension and add it under "Browse Claude Sessions".

### From Raycast Store
*Coming soon — submission planned after v0.1 stabilizes.*

## Preferences

| Preference | Default | Notes |
|---|---|---|
| Terminal App | iTerm2 | iTerm2 or Terminal.app |
| Session Limit | 50 | Max sessions to load (10–500) |
| JSONL Root Path | `~/.claude/projects` | Custom Claude installations |

## Troubleshooting

### "Failed to open iTerm2"
macOS requires Automation permission for Raycast → iTerm2. Open:
**System Settings → Privacy & Security → Automation → Raycast → enable iTerm**

### `claude: command not found` in resumed session
Your shell's PATH might not include the `claude` CLI in non-login subshells. Add it to `~/.zshrc` or `~/.bash_profile`:
```bash
export PATH="$HOME/.claude/local/bin:$PATH"
```

### Empty list / "No Claude Sessions Found"
Verify the JSONL root path in Preferences. Default is `~/.claude/projects`. If you use a custom Claude Code install, update it.

## Stack
- TypeScript (strict mode)
- React via Raycast API
- Node 22.14+

## License
MIT © 2026 Guntram Bechtold

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md). Issues and PRs welcome.
