/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Terminal App - Which terminal app to open when resuming a session. */
  "terminalApp": "iterm2" | "terminal",
  /** Session Limit - Maximum number of sessions to load (10–500). */
  "sessionLimit": string,
  /** JSONL Root Path - Where to look for Claude Code session JSONLs. Default: ~/.claude/projects. */
  "jsonlRootPath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `browse-sessions` command */
  export type BrowseSessions = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `browse-sessions` command */
  export type BrowseSessions = {}
}

