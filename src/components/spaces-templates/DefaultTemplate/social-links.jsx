import { isEmpty, keys } from "lodash";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { hasContent } from "./utils";

const SocialLinks = ({ social_links }) => {
  if (isEmpty(social_links)) {
    return null;
  }

  return (
    <div className="mt-2 flex justify-center space-x-2 md:justify-start">
      {keys(social_links)
        ?.sort()
        ?.map((key) => {
          const link = social_links[key];
          if (!hasContent(link)) {
            return null;
          }

          return (
            <div
              className="group rounded-sm border border-secondary/20 p-2 transition-transform hover:scale-105 hover:bg-accent"
              key={link}
            >
              <SocialLink href={link} name={key} />
            </div>
          );
        })}
    </div>
  );
};

function SocialLink({ href, name }) {
  const iconMap = {
    github: (
      <GithubIcon
        className="text-secondary transition-colors group-hover:text-background"
        size={20}
      />
    ),
    linkedin: (
      <LinkedinIcon
        className="text-secondary transition-colors group-hover:text-background"
        size={20}
      />
    ),
    twitter: (
      <TwitterIcon
        className="text-secondary transition-colors group-hover:text-background"
        size={18}
      />
    ),
  };

  const icon = iconMap[name.toLowerCase()];
  if (!icon) {
    return null;
  }

  return (
    <Link aria-label={name} href={href} target="_blank">
      {icon}
    </Link>
  );
}

export default SocialLinks;
