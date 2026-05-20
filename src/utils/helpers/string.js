export function capitalizeString(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const PATTERNS = {
  linkedin: /linkedin\.com\/in\/([^/?]+)/,
  github: /github\.com\/([^/?]+)/,
  twitter: /(?:twitter\.com|x\.com)\/([^/?]+)/,
};

export function extractUsername(url) {
  for (const pattern of Object.values(PATTERNS)) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export function getNameInitials(name, charsCount = 2) {
  if (!name) {
    return "";
  }

  return name
    ?.split(" ")
    ?.map((n) => n[0])
    ?.join("")
    ?.toUpperCase()
    ?.slice(0, charsCount);
}
