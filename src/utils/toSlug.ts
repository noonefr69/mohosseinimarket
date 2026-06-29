export function toSlug(slug: string): string {
  return slug.trim().toLowerCase().replace(/\s+/g, "-");
}
