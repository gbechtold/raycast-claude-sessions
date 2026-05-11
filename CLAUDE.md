# 103-Raycast-Claude-Sessions

## Projektziel
Native Raycast Extension, die alle Claude Code Sessions aus `~/.claude/projects/*/*.jsonl` als suchbare Liste mit sprechenden Titeln präsentiert und per Action in iTerm2/Terminal mit `claude --resume <uuid>` wieder aufnimmt.

## Status
**v0.1 in Entwicklung** (gestartet 2026-05-11)

## Stack
- **Typ**: Raycast Extension (TypeScript/React)
- **Plattform**: macOS only
- **Node**: 22.14+
- **Lizenz**: MIT
- **Repo**: github.com/gbechtold/raycast-claude-resume (public OSS)
- **Submission**: Raycast Store geplant (nach v0.1-Stabilisierung)

## Struktur
```
103-Raycast-Claude-Sessions/
├── CLAUDE.md                   # Dieser File
├── README.md                   # Projekt-Wrapper-Doku
├── LICENSE                     # MIT
├── CONTRIBUTING.md             # Contribution Guidelines
├── .gitignore                  # Node + macOS
├── .github/workflows/ci.yml    # GitHub Actions
└── extension/                  # Raycast Extension (alles hier ist npm-package)
    ├── package.json            # Raycast Manifest + Dependencies
    ├── src/
    │   ├── browse-sessions.tsx # Hauptkommando
    │   ├── lib/                # discovery, parser, cache, terminal
    │   └── components/         # ListItem, Detail, Actions, EmptyView
    ├── assets/                 # Icon
    └── metadata/               # Store-Screenshots
```

## Quellen / Inspiration
- Bestehende Resume-Index: `~/.claude/SESSIONS.md`
- JSONL-Sample: `~/.claude/projects/-Users-guntrambechtold/e42984ed-7be6-44dd-ab61-06e01832e418.jsonl`
- Existierendes Bash-Pattern (Discovery-Logik):
  ```bash
  jq -c 'select(.type=="user" and (.message.content|type=="string"))' "$JSONL" | head -1
  ```
- Raycast Docs: https://developers.raycast.com/

## Offene Tasks
Siehe TaskList in Claude Code Session — 17 Tasks (T0-T16).

## Lokale Befehle
```bash
cd extension
npm install
npm run dev       # Raycast Dev-Mode
npm run build     # Production build
npm run lint      # Lint check
npm run publish   # Raycast Store PR (nur nach User-OK)
```

## Performance-Ziele (v0.1)
| Szenario | Limit | Cold | Warm |
|---|---|---|---|
| Default | 50 | < 5s | < 2s |
| Max | 500 | < 15s | < 3s |

## Risiken
- JSONL-Schema-Drift bei Claude Code Updates → defensive Parser
- AppleScript-Permissions auf macOS Sequoia+ → Troubleshooting-Section in README
- `claude` CLI im PATH der subshell → Fallback-Source `~/.zshrc`
