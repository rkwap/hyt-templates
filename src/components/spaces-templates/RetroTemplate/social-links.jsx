import { isEmpty, keys } from "lodash";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const iconMap = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
};

const SocialLinks = ({ social_links }) => {
  if (isEmpty(social_links)) {
    return null;
  }

  return (
    <div className="mb-3 flex space-x-2">
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
                className="flex items-center justify-center rounded-sm border border-white/20 bg-transparent p-3 hover:bg-transparent"
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
};

export default SocialLinks;
