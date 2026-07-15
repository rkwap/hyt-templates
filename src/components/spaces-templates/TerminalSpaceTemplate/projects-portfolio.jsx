"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function renderMarkdown(text = "") {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span className="block" key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong className="text-white" key={j}>
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    );
  });
}

const CARD_OFFSET = 12; // px gap between stacked cards
const STACK_TOP = 96; // px from top when sticky (leave room for header)

function PortfolioCard({ project, index, total }) {
  const cardRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Scroll-reveal: show details when card enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRevealed(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: "-80px 0px 0px 0px" }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stickyTop = STACK_TOP + index * CARD_OFFSET;

  return (
    <div
      className="sticky [top:var(--sticky-top)]"
      id={`design-portfolio-${index + 1}`}
      ref={cardRef}
      style={{ "--sticky-top": `${stickyTop}px` }}
    >
      <div
        className={`rounded-xl border border-zinc-700 bg-zinc-900 shadow-black/60 shadow-lg transition-all duration-700 ease-out ${
          isRevealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Card top: title */}
        <div className="p-4 pb-2">
          <h3 className="line-clamp-2 flex-1 font-mono font-semibold text-white text-xl">
            {project.project_url ? (
              <Link
                className="inline-flex items-center gap-1 transition-colors hover:text-green-400"
                href={project.project_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.title}
                <ExternalLink className="h-4 w-4" />
              </Link>
            ) : (
              project.title
            )}
          </h3>
        </div>

        {/* Card body: images + description — revealed on scroll */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            isRevealed ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4">
            {project?.images?.length > 0 && (
              <div className="mb-3 hidden flex-row flex-wrap gap-3 md:flex">
                {project.images.map((image, idx) => (
                  <div
                    className="relative h-24 w-44 overflow-hidden rounded-lg border border-zinc-700"
                    key={idx}
                  >
                    <Image
                      alt={`Portfolio image ${idx + 1}`}
                      className="scale-100 object-cover transition-transform duration-300 ease-out hover:scale-110"
                      fill
                      src={image}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
            {project.description && (
              <div className="overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
                {renderMarkdown(project.description)}
              </div>
            )}
          </div>
        </div>

        {/* Subtle progress indicator: which card in stack */}
        <div className="flex items-center gap-1.5 px-4 pb-3">
          {Array.from({ length: total }).map((_, i) => (
            <span
              className={`block h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                i === index ? "bg-green-400" : "bg-zinc-700"
              }`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectPortfolio = ({ projects = [] }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="mt-8 mb-8" id="design-portfolio">
      <h2 className="pt-4 pb-4 font-bold font-mono text-3xl text-white">
        Design Portfolio
      </h2>

      {/*
        Bottom padding gives the last sticky card room to fully
        release before the next section scrolls in — same fix
        as Projects/Experience, keeps sections from overlapping.
      */}
      <div className="flex flex-col gap-4 pb-24 md:pb-32">
        {projects.map((project, index) => (
          <PortfolioCard
            index={index}
            key={project.uuid ?? index}
            project={project}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPortfolio;