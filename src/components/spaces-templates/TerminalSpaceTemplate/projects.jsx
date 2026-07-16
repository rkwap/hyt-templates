"use client";

import { ExternalLink } from "lucide-react";

import Link from "next/link";
import { formatDate } from "@/utils/dateTime";
import Image from "next/image";

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

function ProjectCard({ project, index }) {
  return (
    <div id={`side-project-${index + 1}`}>
      <div className="rounded-xl border border-zinc-700 bg-zinc-900 shadow-black/60 shadow-lg transition-all duration-700 ease-out">
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

        <div className="overflow-hidden transition-all duration-700 ease-out">
          <div className="flex flex-col gap-4 px-4 pb-4 md:flex-row">
            {project.photo && (
              <div className="h-28 w-full flex-shrink-0 overflow-hidden rounded-lg md:w-40">
                <Image
                  alt={project.title}
                  className="h-full w-full scale-100 rounded-lg object-cover transition-transform duration-300 ease-out hover:scale-110"
                  height={112}
                  src={project.photo}
                  width={160}
                />
              </div>
            )}

            <div className="flex-1 overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(project.description)}
            </div>
          </div>
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
    <section id="side-projects">
      <h2 className="pt-4 pb-4 font-bold font-mono text-3xl text-white">
        Side Projects
      </h2>

      <div className="flex flex-col gap-4 pb-8">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.uuid ?? index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
