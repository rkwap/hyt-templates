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

const ProjectsPM = ({ projects_pm = [] }) => {
  if (!projects_pm.length) {
    return null;
  }

  return (
    <section className="mt-8 space-y-4" id="case-studies">
      <h2 className="pt-4 font-bold font-mono text-3xl text-white">
        Case Studies
      </h2>
      <div className="flex flex-col items-start justify-between gap-3">
        {projects_pm.map((project, index) => {
          const hasImages = project?.images?.length > 0;
          return (
            <div
              className={`w-full rounded-lg border border-l-4 bg-zinc-900 shadow-sm ${
                index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500"
              }`}
              id={`project-${index + 1}`}
              key={index}
            >
              <h3 className="line-clamp-2 pt-3 pl-6 font-mono font-semibold text-white text-xl">
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
                  <span>{project.title}</span>
                )}
              </h3>
              <div className="p-6 pt-2">
                {hasImages && (
                  <div className="mb-3 hidden flex-wrap gap-3 md:flex">
                    {project.images.map((image, idx) => (
                      <div
                        className="relative h-24 w-44 overflow-hidden rounded-lg border border-zinc-700"
                        key={idx}
                      >
                        <Image
                          alt="Project Image"
                          className="object-cover"
                          fill
                          src={image}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
                  {renderMarkdown(project.description)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPM;
