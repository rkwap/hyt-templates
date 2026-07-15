function SocialLink({ href, label }) {
  const isEmail = href.startsWith("mailto:") || !href.startsWith("http");
  const finalHref =
    isEmail && !href.startsWith("mailto:") ? `mailto:${href}` : href;

  return (
    <a
      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 font-bold text-[10px] text-white/60 uppercase tracking-widest transition-all duration-150 hover:border-[#C9A84C] hover:text-[#C9A84C]"
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
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map(({ key, href, label }) => (
        <SocialLink href={href} key={key} label={label} />
      ))}
    </div>
  );
}
