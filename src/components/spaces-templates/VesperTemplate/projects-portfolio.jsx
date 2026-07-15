import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import ImagesCarousel from "@/components/ui/templates/components/image-carousel";

export default function ProjectPortfolio({ projects }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="design-portfolio">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        Design Portfolio
      </h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
            id={`design-portfolio-${index + 1}`}
            key={index}
          >
            <h3 className="mb-4 font-semibold text-base text-zinc-100">
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

            {project?.images && (
              <>
                <div className="mb-4 hidden flex-wrap gap-3 md:flex">
                  {project.images.map((image, idx) => (
                    <ProjectImageModal
                      alt={`Project Image ${idx + 1}`}
                      className="h-[110px] w-[190px] rounded-lg border border-zinc-700 object-cover"
                      key={idx}
                      src={image}
                    />
                  ))}
                </div>
                <div className="mb-4 md:hidden">
                  <ImagesCarousel images={project.images} />
                </div>
              </>
            )}

            <MarkdownRenderer
              className="prose-sm prose break-words prose-headings:text-zinc-400 prose-strong:text-zinc-200 text-sm text-zinc-400 marker:text-zinc-600"
              config={{ exclude: ["headings"] }}
            >
              {project.description}
            </MarkdownRenderer>
          </div>
        ))}
      </div>
    </section>
  );
}
