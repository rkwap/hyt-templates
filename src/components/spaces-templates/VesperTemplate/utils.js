/**
 * Renders an array of tag strings as pill JSX elements (Vesper dark style).
 */
export function renderPills(tags = []) {
  if (!tags?.length) {
    return null;
  }
  return tags.map((tag) => (
    <span
      className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-150 hover:border-zinc-500 hover:text-zinc-100"
      key={tag}
    >
      {tag}
    </span>
  ));
}

/**
 * Coerces a comma-separated string or array into a clean string[].
 */
export function toArray(value) {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.map((v) => String(v).trim()).filter(Boolean);
  }
  return String(value)
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

/**
 * Returns "YYYY – YYYY" or "YYYY – Present".
 */
export function formatDateRange(start, end) {
  if (!start) {
    return "";
  }
  return end ? `${start} – ${end}` : `${start} – Present`;
}
