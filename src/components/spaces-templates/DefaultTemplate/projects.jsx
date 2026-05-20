import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import { ensureArray, getDateRange, hasContent } from "./utils";

const Projects = ({ projects }) => {
  const safeProjects = ensureArray(projects).filter(
    (project) => hasContent(project?.title) || hasContent(project?.description)
  );

  if (isEmpty(safeProjects)) {
    return null;
  }

  return (
    <section className="space-y-4" id="side-projects">
      <h2 className="font-bold text-3xl">Side Projects</h2>
      <div className="mt-8 rounded-xl border border-secondary/20 border-dashed">
        {safeProjects.map((project, index) => (
          <ProjectsItem
            id={`side-project-${index + 1}`}
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

function ProjectsItem({ project, id }) {
  const dateRange = getDateRange(project?.duration);

  return (
    <section
      className="relative border-secondary/20 border-b border-dashed last:border-b-0"
      id={id}
    >
      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-xl">
          {project?.project_url && project?.title ? (
            <CustomLink
              className="inline-flex items-center gap-1 hover:underline"
              iconSize={16}
              label={project.title}
              url={project.project_url}
            />
          ) : (
            project?.title || "Untitled Project"
          )}
        </h3>
        {dateRange && (
          <p className="mb-2 truncate font-medium text-secondary text-sm">
            {dateRange}
          </p>
        )}

        {hasContent(project?.description) && (
          <MarkdownRenderer config={{ exclude: ["headings"] }}>
            {project.description}
          </MarkdownRenderer>
        )}
        {project?.photo && (
          <ProjectImageModal
            alt="Project-Picture"
            className="border-[0.8px] border-gray-300 shadow-sm"
            src={project?.photo}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
