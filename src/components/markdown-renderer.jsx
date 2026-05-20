import dynamic from "next/dynamic";
import React from "react";
import remarkGfm from "remark-gfm";
import siteConfig from "@/config/site";
import { cn } from "@/utils";

const Markdown = dynamic(() => import("react-markdown"), { ssr: true });

export default function MarkdownRenderer({ children, className, config = {} }) {
  const defaultClsx =
    "w-full prose prose-secondary break-words max-w-none prose-p:mt-2 prose-p:mb-4 prose-p:leading-relaxed prose-li:mt-1 prose-li:mb-1 prose-ul:mt-2 prose-ul:mb-4 marker:text-secondary/60 text-primary/90";

  const customComponents = React.useMemo(() => {
    const components = {};
    const excludeList = config?.exclude ?? [];

    if (excludeList.includes("headings")) {
      for (const tag of ["h1", "h2", "h3", "h4", "h5", "h6"]) {
        components[tag] = ({ children }) => (
          <>
            <strong>{children}</strong>
            <br />
          </>
        );
      }
    }

    components.a = ({ href, children, ...props }) => {
      const isExternal = href && !href.includes(siteConfig.domain);

      return (
        <a
          href={href}
          rel={isExternal ? "noopener noreferrer nofollow" : undefined}
          target="_blank"
          {...props}
        >
          {children}
        </a>
      );
    };

    return components;
  }, [config]);

  return (
    <Markdown
      className={cn(defaultClsx, className)}
      components={customComponents}
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
    >
      {children}
    </Markdown>
  );
}
