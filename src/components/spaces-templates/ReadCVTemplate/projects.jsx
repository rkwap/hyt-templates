import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import { getYear } from "@/utils/dateTime";

const Projects = ({ projects }) => {
  if (isEmpty(projects)) {
    return null;
  }

  return (
    <section className="my-[3.75rem] text-sm" id="side-projects">
      <h2 className="mb-[0.7rem] text-readcv-primary">Side Projects</h2>
      <div className="mt-6 ml-4 flex flex-col gap-9 sm:ml-0">
        {projects?.map((project, index) => (
          <div
            className="flex flex-col"
            id={`side-project-${index + 1}`}
            key={index}
          >
            <div className="grid items-start gap-1 sm:grid-cols-7">
              <div className="col-span-2">
                <span className="text-readcv-grey">
                  {`${getYear(project?.duration.start_date)} — ${getYear(
                    project?.duration.end_date
                  )}`}
                </span>
              </div>
              <div className="col-span-5 space-y-1">
                {project.project_url ? (
                  <CustomLink
                    className="text-readcv-primary"
                    label={project.title}
                    url={project.project_url}
                  />
                ) : (
                  <div className="overflow-auto text-readcv-primary">
                    {project.title}
                  </div>
                )}
                <MarkdownRenderer
                  className="prose-sm prose overflow-auto break-words prose-headings:text-readcv-secondary prose-strong:text-readcv-secondary text-readcv-secondary marker:text-readcv-secondary"
                  config={{ exclude: ["headings"] }}
                >
                  {project.description}
                </MarkdownRenderer>
                {project?.photo && (
                  <ProjectImageModal
                    alt="Project-Picture"
                    className="border-[0.8px] border-[hsla(0,0%,100%,.1)]"
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
};

export default Projects;
