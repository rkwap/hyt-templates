"use client";

import { ExternalLink } from "lucide-react";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "@/utils/dateTime";

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
const STACK_TOP = 80; // px from top when sticky (leave room for header)

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
  // const [stackStyle, setStackStyle] = useState({});

  // Scroll-reveal: show details when card enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (entry.isIntersecting) setIsRevealed(true);
        setIsRevealed(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: "-80px 0px 0px 0px" }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Sticky stack: each card sticks at an increasing top offset
  const stickyTop = STACK_TOP + index * CARD_OFFSET;

  return (
    <div
      className="sticky"
      id={`side-project-${index + 1}`}
      ref={cardRef}
      style={{ top: `${stickyTop}px` }}
    >
      <div
        className={`rounded-xl border border-zinc-700 bg-zinc-900 shadow-black/60 shadow-lg transition-all duration-700 ease-out ${isRevealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Card top: title + date */}
        <div className="p-4 pb-2">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
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
            <span className="whitespace-nowrap rounded-full border border-zinc-600 bg-zinc-800 px-2.5 py-0.5 font-mono text-xs text-zinc-400">
              {`${formatDate(project.duration.start_date)} - ${formatDate(project.duration.end_date)}`}
            </span>
          </div>
        </div>

        {/* Card body: photo (if any) + description — revealed on scroll */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${isRevealed ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-4 px-4 pb-4 md:flex-row">
            {/* Project photo with hover pop-up */}
            {project.photo && (
              <button
                className="relative h-28 w-full flex-shrink-0 cursor-pointer overflow-visible rounded-lg md:w-40"
                onMouseEnter={() => setIsHoveringPhoto(true)}
                onMouseLeave={() => setIsHoveringPhoto(false)}
                type="button"
              >
                {/* biome-ignore lint/performance/noImgElement: external CDN image, next/image requires domain config */}
                <img
                  alt={project.title}
                  className={`h-full w-full rounded-lg object-cover transition-all duration-300 ease-out ${
                    isHoveringPhoto
                      ? "z-50 scale-150 rounded-xl shadow-2xl shadow-black/80"
                      : "z-0 scale-100"
                  }`}
                  height={112}
                  src={project.photo}
                  style={{
                    position: "relative",
                    zIndex: isHoveringPhoto ? 50 : "auto",
                    transformOrigin: "center center",
                  }}
                  width={160}
                />
              </button>
            )}

            {/* Description */}
            <div className="flex-1 overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(project.description)}
            </div>
          </div>
        </div>

        {/* Subtle progress indicator: which card in stack */}
        <div className="flex items-center gap-1.5 px-4 pb-3">
          {Array.from({ length: total }).map((_, i) => (
            <span
              className={`block h-0.5 flex-1 rounded-full transition-colors duration-300 ${i === index ? "bg-green-400" : "bg-zinc-700"}
              `}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Projects = ({ projects = [] }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="mt-8" id="side-projects">
      <h2 className="pt-4 pb-4 font-bold font-mono text-3xl text-white">
        Side Projects
      </h2>

      {/* Extra bottom padding so all cards can scroll into view before stacking ends */}
      <div
        className="flex flex-col gap-4"
        style={{ paddingBottom: `${projects.length * 0}px` }}
      >
        {projects.map((project, index) => (
          <ProjectCard
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

export default Projects;
