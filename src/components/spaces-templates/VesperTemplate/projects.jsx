import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import { formatDate } from "@/utils/dateTime";

export default function Projects({ projects }) {
  if (isEmpty(projects)) {
    return null;
  }

  return (
    <section id="projects">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors duration-200 hover:border-zinc-600"
            id={`project-${index + 1}`}
            key={index}
          >
            {project?.photo && (
              <div className="mb-4">
                <ProjectImageModal
                  alt="Project Picture"
                  className="h-36 w-full rounded-lg border border-zinc-800 object-cover"
                  src={project.photo}
                />
              </div>
            )}

            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-base text-zinc-100 leading-snug">
                {project.project_url ? (
                  <CustomLink
                    className="underline-offset-4 transition-colors duration-150 hover:text-zinc-300 hover:underline"
                    label={project.title}
                    url={project.project_url}
                  />
                ) : (
                  project.title
                )}
              </h3>
              {project.duration && (
                <span className="flex-shrink-0 text-xs text-zinc-600">
                  {`${formatDate(project.duration.start_date)} – ${formatDate(
                    project.duration.end_date
                  )}`}
                </span>
              )}
            </div>

            <div className="mt-2">
              <MarkdownRenderer
                className="prose-sm prose break-words prose-headings:text-zinc-400 prose-strong:text-zinc-200 text-sm text-zinc-400 marker:text-zinc-600"
                config={{ exclude: ["headings"] }}
              >
                {project.description}
              </MarkdownRenderer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
