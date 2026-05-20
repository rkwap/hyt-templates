import { isEmpty, keys } from "lodash";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Socials({ social_links }) {
  if (isEmpty(social_links)) {
    return null;
  }

  const iconMap = {
    github: (
      <Github
        className="hover:scale-125"
        fill="hsl(var(--monochrome-tertiary))"
        size={20}
        stroke="hsl(var(--monochrome-tertiary))"
      />
    ),
    linkedin: (
      <Linkedin
        className="hover:scale-125"
        fill="hsl(var(--monochrome-tertiary))"
        size={20}
        stroke="hsl(var(--monochrome-tertiary))"
      />
    ),
    twitter: (
      <Twitter
        className="hover:scale-125"
        fill="hsl(var(--monochrome-tertiary))"
        size={20}
        stroke="hsl(var(--monochrome-tertiary))"
      />
    ),
  };

  return (
    <div className="flex flex-row gap-6">
      {keys(social_links)
        ?.sort()
        ?.map((key) => {
          const link = social_links[key];
          if (!link) {
            return null;
          }

          return (
            <div key={link}>
              <Link
                aria-label={key}
                className="mt-1 flex items-center justify-center bg-transparent hover:bg-transparent"
                href={link}
                size="icon"
                target="_blank"
                variant="outline"
              >
                {iconMap[key]}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
