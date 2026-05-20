import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import ImagesCarousel from "@/components/ui/templates/components/image-carousel";
import { ensureArray, hasContent } from "./utils";

export default function ProjectPortfolio({ projects }) {
  const safeProjects = ensureArray(projects).filter(
    (project) =>
      hasContent(project?.title) ||
      hasContent(project?.description) ||
      ensureArray(project?.images).length > 0
  );

  if (safeProjects.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4" id="design-portfolio">
      <h2 className="font-bold text-3xl">Design Portfolio</h2>
      <div className="mt-8 rounded-xl border border-secondary/20 border-dashed">
        {safeProjects.map((project, index) => (
          <div
            className="flex flex-col gap-4 border-secondary/20 border-b border-dashed p-4 last:border-b-0"
            id={`design-portfolio-${index + 1}`}
            key={index}
          >
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
            <div className="hidden flex-wrap gap-4 md:flex md:gap-2">
              {ensureArray(project?.images).map((image, idx) => (
                <ProjectImageModal
                  alt={`Project Image ${idx + 1}`}
                  className="border-[0.8px] border-gray-300 shadow-sm transition-all duration-300 ease-in-out hover:scale-115 hover:shadow-lg"
                  height={100}
                  key={idx}
                  src={image}
                  width={180}
                />
              ))}
            </div>
            {ensureArray(project?.images).length > 0 && (
              <div className="md:hidden">
                <ImagesCarousel images={ensureArray(project.images)} />
              </div>
            )}
            {hasContent(project?.description) && (
              <MarkdownRenderer config={{ exclude: ["headings"] }}>
                {project.description}
              </MarkdownRenderer>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
