# Claude Sessions Changelog

## [Initial Version] - {PR_MERGE_DATE}

- Browse all Claude Code sessions from `~/.claude/projects/*/*.jsonl`
- Search across session title, working directory, and session ID
- Detail view shows the full first user message + metadata (UUID, CWD, timestamp, JSONL path)
- Resume action opens iTerm2 or Terminal.app via AppleScript and runs `claude --resume <uuid>`
- Copy actions for resume command, session ID, working directory, and log file path
- Show log file in Finder; open in default editor
- mtime-based cache for warm-reload performance
- Configurable preferences: terminal app, session limit (10–500), JSONL root path
