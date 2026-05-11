# raycast-claude-resume

> Native Raycast Extension to browse and resume Claude Code sessions by their first prompt.

Indexes every JSONL conversation log under `~/.claude/projects/*/*.jsonl`, surfaces the actual first user message as title, and reopens any session in iTerm2 or Terminal with `claude --resume <uuid>`.

[![CI](https://github.com/gbechtold/raycast-claude-resume/actions/workflows/ci.yml/badge.svg)](https://github.com/gbechtold/raycast-claude-resume/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![macOS](https://img.shields.io/badge/platform-macOS-blue)](https://www.raycast.com)

## Why a separate tool from `claude-sessions`?

The existing [`claude-sessions`](https://www.raycast.com/kud/claude-sessions) extension lists Claude's **project directories** (from `~/.claude.json`) and resumes them with `claude --continue` (= the most recent session in that project).

`Claude Resume` works on a **finer granularity**: each individual conversation. If you started five different chats in the same project, you see five list items here — each labeled with what you actually asked. Then you resume that exact one by UUID.

Different mental models, both useful — they live side by side.

## Features

- 🔍 **Search** across title, working directory, and session ID
- 📋 **Detail view** with the full first user message
- ⌨️ **Resume** in iTerm2 or Terminal.app
- 📎 **Copy** resume command / UUID / working directory / log path
- 📂 **Show log** in Finder or default editor
- ⚡ Cached with mtime-invalidation — warm reload < 100ms with 1000+ sessions

## Installation

### From source
```bash
git clone https://github.com/gbechtold/raycast-claude-resume.git
cd raycast-claude-resume/extension
npm install
npm run dev
```

Raycast picks up the dev extension and adds "Browse and Resume" under "Claude Resume".

### From Raycast Store
*Submission in progress.*

## Stack
- TypeScript (strict)
- React via Raycast API
- Node 22.14+
- macOS only

## License
MIT © 2026 Guntram Bechtold

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md). Issues and PRs welcome.
