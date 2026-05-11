import { LocalStorage } from "@raycast/api";
import { Session } from "./types";

/** Bump on breaking changes to the Session schema. */
const CACHE_VERSION = "1";
const CACHE_VERSION_KEY = "cacheVersion";
const SESSION_KEY_PREFIX = "session:";

interface CachedEntry {
  session: Session;
  cachedMtime: number;
}

async function ensureCacheVersion(): Promise<void> {
  const current = await LocalStorage.getItem<string>(CACHE_VERSION_KEY);
  if (current !== CACHE_VERSION) {
    await LocalStorage.clear();
    await LocalStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
  }
}

export async function getCachedSession(uuid: string, currentMtime: number): Promise<Session | null> {
  await ensureCacheVersion();
  const raw = await LocalStorage.getItem<string>(SESSION_KEY_PREFIX + uuid);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as CachedEntry;
    if (parsed.cachedMtime !== currentMtime) return null;
    return parsed.session;
  } catch {
    return null;
  }
}

export async function setCachedSession(uuid: string, session: Session, mtime: number): Promise<void> {
  const entry: CachedEntry = { session, cachedMtime: mtime };
  await LocalStorage.setItem(SESSION_KEY_PREFIX + uuid, JSON.stringify(entry));
}

export async function clearCache(): Promise<void> {
  await LocalStorage.clear();
  await LocalStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
}
