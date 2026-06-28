export function serializeDoc<T extends Record<string, unknown>>(doc: T) {
  return JSON.parse(JSON.stringify(doc)) as T;
}
