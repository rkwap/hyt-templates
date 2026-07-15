"use client";

import { useEffect, useRef, useState } from "react";
import { formatDate, sortByEndDate } from "@/utils/dateTime";

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

function ExperienceCard({ job, index, total }) {
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
      id={`experience-${index + 1}`}
      ref={cardRef}
      style={{ "--sticky-top": `${stickyTop}px` }}
    >
      <div
        className={`rounded-xl border border-zinc-700 bg-zinc-900 shadow-black/60 shadow-lg transition-all duration-700 ease-out ${
          isRevealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Card top: title + date */}
        <div className="p-4 pb-2">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
            <h3 className="line-clamp-2 flex-1 font-mono font-semibold text-white text-xl">
              {job.title}
            </h3>
            <span className="whitespace-nowrap rounded-full border border-zinc-600 bg-zinc-800 px-2.5 py-0.5 font-mono text-xs text-zinc-400">
              {`${formatDate(job.duration.start_date)} - ${formatDate(job.duration.end_date)}`}
            </span>
          </div>
        </div>

        {/* Card body: company + description — revealed on scroll */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            isRevealed ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4">
            <p className="mb-2 font-bold font-mono text-sm text-green-400">
              @{job.company}
            </p>
            <div className="overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(job.brief)}
            </div>
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

const Experience = ({ experience = [] }) => {
  if (!experience.length) {
    return null;
  }
  const sorted = sortByEndDate(experience);

  return (
    <section className="mt-8 mb-8" id="experience">
      <h2 className="pt-4 pb-4 font-bold font-mono text-3xl text-white">
        Experience
      </h2>

      {/*
        Bottom padding gives the last sticky card room to fully
        release before the next section scrolls in — same fix
        as the Projects section, keeps sections from overlapping.
      */}
      <div className="flex flex-col gap-4 pb-24 md:pb-32">
        {sorted.map((job, index) => (
          <ExperienceCard
            index={index}
            job={job}
            key={job.uuid ?? index}
            total={sorted.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;