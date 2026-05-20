import { formatDate } from "@/utils/dateTime";

export function ensureArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

export function hasContent(value) {
  if (value === null || value === undefined) {
    return false;
  }
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }
  return true;
}

export function getDateRange(duration) {
  const startDate = duration?.start_date
    ? formatDate(duration.start_date)
    : null;
  const endDate = duration?.end_date ? formatDate(duration.end_date) : null;

  if (startDate && endDate) {
    return `${startDate} - ${endDate}`;
  }
  if (startDate) {
    return startDate;
  }
  if (endDate) {
    return endDate;
  }
  return null;
}

export function getYearRange(duration) {
  const startYear = duration?.start_date
    ? formatDate(duration.start_date, { year: "numeric" })
    : null;
  let endYear = null;
  if (duration?.end_date) {
    endYear =
      duration.end_date === "Present"
        ? "Present"
        : formatDate(duration.end_date, { year: "numeric" });
  }

  if (startYear && endYear) {
    return `${startYear} - ${endYear}`;
  }
  if (startYear) {
    return startYear;
  }
  if (endYear) {
    return endYear;
  }
  return null;
}

export function joinParts(parts = [], separator = " @ ") {
  return parts.filter(hasContent).join(separator);
}
