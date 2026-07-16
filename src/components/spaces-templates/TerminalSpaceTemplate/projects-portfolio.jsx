"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

function PortfolioCard({ project, index }) {
  return (
    <div id={`design-portfolio-${index + 1}`}>
      <div className="rounded-xl border border-zinc-700 bg-zinc-900 shadow-black/60 shadow-lg transition-all duration-700 ease-out">
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

        <div className="overflow-hidden transition-all duration-700 ease-out">
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
      </div>
    </div>
  );
}

const ProjectPortfolio = ({ projects = [] }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <section id="design-portfolio">
      <h2 className="pt-4 pb-4 font-bold font-mono text-3xl text-white">
        Design Portfolio
      </h2>

      <div className="flex flex-col gap-4 pb-8">
        {projects.map((project, index) => (
          <PortfolioCard
            index={index}
            key={project.uuid ?? index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPortfolio;
