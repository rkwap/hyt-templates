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
    <section
      className="mt-16 w-full border-[#DDD9D0] border-t-2 pt-8"
      id="side-projects"
    >
      <h2 className="mb-8 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Side Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            className="flex flex-col border-[#DDD9D0] border-b py-6 first:pt-0 last:border-b-0"
            id={`side-project-${index + 1}`}
            key={index}
          >
            <div className="mb-2 flex flex-col justify-between gap-1 md:flex-row md:gap-2">
              <h3 className="font-semibold text-[#1C1C1A] text-base">
                {project.project_url ? (
                  <CustomLink
                    className="transition-colors duration-150 hover:text-[#C9A84C]"
                    label={project.title}
                    url={project.project_url}
                  />
                ) : (
                  <span className="overflow-auto">{project.title}</span>
                )}
              </h3>
              {project.duration && (
                <span className="mt-0.5 flex-shrink-0 text-[#9E9A93] text-xs">
                  {`${formatDate(project.duration.start_date)} — ${formatDate(
                    project.duration.end_date
                  )}`}
                </span>
              )}
            </div>

            <MarkdownRenderer
              className="prose-sm prose overflow-auto break-words prose-headings:text-[#9E9A93] prose-strong:text-[#1C1C1A] text-[#1C1C1A]/75 marker:text-[#9E9A93]"
              config={{ exclude: ["headings"] }}
            >
              {project.description}
            </MarkdownRenderer>

            {project?.photo && (
              <div className="mt-3">
                <ProjectImageModal
                  alt="Project Picture"
                  className="rounded-lg border border-[#DDD9D0]"
                  src={project.photo}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
