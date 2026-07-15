"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const iconMap = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
};

const SocialLinks = ({ social_links = {} }) => {
  const keys = Object.keys(social_links).filter((k) => social_links[k]);
  if (!keys.length) {
    return null;
  }

  return (
    <div className="mb-3 flex gap-2">
      {keys.sort().map((key) => {
        const link = social_links[key];
        if (!link) {
          return null;
        }
        return (
          <Link
            aria-label={key}
            className="flex items-center justify-center rounded-sm border border-white/20 p-2 text-white/70 transition-colors duration-150 hover:border-green-400 hover:text-green-400"
            href={link}
            key={key}
            rel="noopener noreferrer"
            target="_blank"
          >
            {iconMap[key] ?? <span className="font-mono text-xs">{key}</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
