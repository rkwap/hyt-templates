/**
 * Renders an array of tag strings as pill JSX elements.
 * Import and use inside any component that needs tag pills.
 */
export function renderPills(tags = []) {
  if (!tags?.length) {
    return null;
  }
  return tags.map((tag) => (
    <span
      className="cursor-default rounded-full border border-[#DDD9D0] bg-[#F6F3EE] px-2.5 py-0.5 text-[#9E9A93] text-[10px] transition-colors duration-150 hover:border-[#C9A84C] hover:text-[#C9A84C]"
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
 * Returns "YYYY — YYYY" or "YYYY — Present".
 */
export function formatDateRange(start, end) {
  if (!start) {
    return "";
  }
  return end ? `${start} — ${end}` : `${start} — Present`;
}
