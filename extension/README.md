# Claude Sessions

> Browse and resume Claude Code sessions from Raycast.

Lists every Claude Code session stored under `~/.claude/projects/*/*.jsonl`, surfaces the first user prompt as a sprechender title, and resumes any session in iTerm2 or Terminal.app with one keystroke.

## Features

- 🔍 **Search** across title, working directory, and session ID
- 📋 **Detail view** with the full first user message
- ⌨️ **Resume in iTerm2 or Terminal.app** (configurable default)
- 📎 **Copy** the resume command, session ID, working directory, or log file path
- 📂 **Show log file in Finder** or open it in your default editor
- ⚡ **Cached** with mtime-based invalidation — warm reload < 2s, cold cap ~5s for 50 sessions

## How it works

Claude Code stores every session as a JSONL file under `~/.claude/projects/<encoded-cwd>/<uuid>.jsonl`. The CLI offers `claude --resume <uuid>` to pick up where you left off — but you need to know the UUID, and `~/.claude` typically holds dozens or hundreds of sessions.

This extension:

1. Recursively scans the JSONL root (configurable, default `~/.claude/projects`)
2. Streams each file and extracts the first user message with string content (skipping tool-result arrays)
3. Sorts by mtime (newest first), respects your session limit (10–500)
4. Renders a native Raycast list — search, detail panel, multiple actions per item
5. On Resume: opens iTerm2 or Terminal via AppleScript and runs `cd <cwd> && claude --resume <uuid>`

## Preferences

| Preference | Default | Notes |
|---|---|---|
| Terminal App | iTerm2 | iTerm2 or Terminal.app |
| Session Limit | 50 | Max sessions to load (10–500) |
| JSONL Root Path | `~/.claude/projects` | Custom Claude installs |

## Troubleshooting

### "Failed to open terminal"
macOS requires Automation permission for Raycast to control iTerm2/Terminal. Open:
**System Settings → Privacy & Security → Automation → Raycast → enable iTerm/Terminal**

### `claude: command not found` in the resumed session
Your shell's PATH might not include the `claude` CLI in non-login subshells. Make sure `claude` is in PATH via your shell rc-file, e.g.:
```bash
export PATH="$HOME/.claude/local/bin:$PATH"
```

### Empty list / "No Claude Sessions Found"
- Verify the JSONL root path in preferences (default `~/.claude/projects`).
- Start a session in Claude Code first — until you do, there are no JSONLs to list.
- Check that the path exists: `ls ~/.claude/projects/`.

## Limitations (v0.1)

- macOS only (Raycast itself is macOS-only)
- Loads max 500 sessions for performance — increase via preferences if needed
- Session title comes from the first user prompt with string content; tool-only sessions show "(empty session)"

## Development

```bash
git clone https://github.com/gbechtold/raycast-claude-sessions.git
cd raycast-claude-sessions/extension
npm install
npm run dev    # Hot-reload in Raycast
npm run build  # Verify build
npm run lint   # Lint + Prettier
```

## License
MIT
