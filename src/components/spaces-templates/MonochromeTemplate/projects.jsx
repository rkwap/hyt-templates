import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import { getYear } from "@/utils/dateTime";

export default function Projects({ projects }) {
  if (isEmpty(projects)) {
    return null;
  }

  return (
    <section
      className="bborder-monochrome-tertiary mt-5 w-full border-t-4 pt-5"
      id="side-projects"
    >
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">
        Side Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects?.map((project, index) => (
          <div
            className="flex flex-col border-secondary/20 border-b last:border-b-0"
            id={`side-project-${index + 1}`}
            key={index}
          >
            <div className="py-1 pl-1 md:px-4">
              <div className="flex flex-col justify-between gap-1 md:flex-row md:gap-2">
                <h3 className="text-lg">
                  {project.project_url ? (
                    <CustomLink
                      label={project.title}
                      url={project.project_url}
                    />
                  ) : (
                    <div className="overflow-auto">{project.title}</div>
                  )}
                </h3>
                <span className="text-monochrome-secondary text-sm">
                  {`${getYear(project.duration.start_date)} — ${getYear(
                    project.duration.end_date
                  )}`}
                </span>
              </div>
              <div className="">
                <MarkdownRenderer
                  className="prose-sm prose col-span-3 overflow-auto break-words prose-headings:text-monochrome-secondary prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary"
                  config={{ exclude: ["headings"] }}
                >
                  {project.description}
                </MarkdownRenderer>
                {project?.photo && (
                  <ProjectImageModal
                    alt="Project-Picture"
                    className="border-secondary/20"
                    src={project?.photo}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
