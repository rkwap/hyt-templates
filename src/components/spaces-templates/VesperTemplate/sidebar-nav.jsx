"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills & Tools" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "indie-products", label: "Indie Products" },
  { id: "case-studies", label: "Case Studies" },
  { id: "freelance-projects", label: "Freelance" },
  { id: "design-portfolio", label: "Design Portfolio" },
  { id: "oss-contributions", label: "OSS" },
  { id: "featured-social-posts", label: "Social Posts" },
  { id: "certifications", label: "Certifications" },
  { id: "writing", label: "Featured Blogs" },
];

export default function SidebarNav({ data }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
      //{ rootMargin: "-20% 0px -40% 0px", threshold: 0.1 }
    );

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  const visibleSections = new Set(
    [
      "about",
      data?.experience?.length > 0 && "experience",
      data?.skills && "skills",
      data?.education?.length > 0 && "education",
      data?.projects?.length > 0 && "projects",
      data?.products_ih?.length > 0 && "indie-products",
      data?.projects_pm?.length > 0 && "case-studies",
      data?.freelancers_ih?.length > 0 && "freelance-projects",
      data?.project_portfolio?.length > 0 && "design-portfolio",
      data?.oss?.length > 0 && "oss-contributions",
      data?.featured_social_posts?.length > 0 && "featured-social-posts",
      data?.certifications?.length > 0 && "certifications",
      data?.blogs?.length > 0 && "writing",
    ].filter(Boolean)
  );

  const visibleItems = NAV_ITEMS.filter((item) => visibleSections.has(item.id));

  return (
    <nav className="flex flex-col gap-0.5">
      {visibleItems.map(({ id, label }) => (
        <a
          className={`rounded px-3 py-1.5 text-sm transition-colors duration-150 ${
            active === id
              ? "bg-zinc-800 font-medium text-zinc-100"
              : "text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300"
          }`}
          href={`#${id}`}
          key={id}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
