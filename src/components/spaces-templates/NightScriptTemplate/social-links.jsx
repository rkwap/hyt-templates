function SocialLink({ href, label }) {
  const isEmail = href.startsWith("mailto:") || !href.startsWith("http");
  const finalHref =
    isEmail && !href.startsWith("mailto:") ? `mailto:${href}` : href;

  return (
    <a
      className="text-sm text-zinc-400 underline-offset-4 transition-colors duration-150 hover:text-zinc-100 hover:underline"
      href={finalHref}
      rel={isEmail ? undefined : "noopener noreferrer"}
      target={isEmail ? undefined : "_blank"}
    >
      {label}
    </a>
  );
}

export default function SocialLinks(props) {
  const data = props.data ?? props;
  const sl = data.social_links ?? {};

  const links = [
    data.email && { key: "email", href: data.email, label: "Email" },
    sl.linkedin && { key: "linkedin", href: sl.linkedin, label: "LinkedIn" },
    sl.github && { key: "github", href: sl.github, label: "GitHub" },
    sl.twitter && { key: "twitter", href: sl.twitter, label: "Twitter" },
    data.website && { key: "website", href: data.website, label: "Website" },
  ].filter(Boolean);

  if (!links.length) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      {links.map(({ key, href, label }, i) => (
        <span className="flex items-center gap-4" key={key}>
          <SocialLink href={href} label={label} />
          {i < links.length - 1 && (
            <span className="select-none text-zinc-700">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
