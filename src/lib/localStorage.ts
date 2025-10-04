export const ls = {
  get<T>(key: string, fallback: T): T {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  },
  set<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore, probably private mode
    }
  },
};

export function trackEvent(name: string, payload: Record<string, unknown> = {}) {
  const events = ls.get<unknown[]>("events", []);
  const entry = { ts: new Date().toISOString(), name, ...payload };
  events.push(entry);
  ls.set("events", events);
  // also console for quick inspection
  console.log("event", entry);
}