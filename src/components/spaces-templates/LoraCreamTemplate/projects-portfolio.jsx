import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import ImagesCarousel from "@/components/ui/templates/components/image-carousel";

export default function ProjectPortfolio({ projects }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section
      className="mt-16 w-full border-[#DDD9D0] border-t-2 pt-8"
      id="design-portfolio"
    >
      <h2 className="mb-8 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Design Portfolio
      </h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            className="flex flex-col gap-4 border-[#DDD9D0] border-b py-6 first:pt-0 last:border-b-0"
            id={`design-portfolio-${index + 1}`}
            key={index}
          >
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

            <div className="flex flex-col gap-3">
              {project?.images && (
                <>
                  {/* Desktop: row of modals */}
                  <div className="hidden flex-row flex-wrap gap-4 md:flex md:gap-6">
                    {project.images.map((image, idx) => (
                      <ProjectImageModal
                        alt={`Project Image ${idx + 1}`}
                        className="rounded-lg border border-[#DDD9D0] shadow-sm"
                        height={120}
                        key={idx}
                        src={image}
                        width={200}
                      />
                    ))}
                  </div>
                  {/* Mobile: carousel */}
                  <div className="md:hidden">
                    <ImagesCarousel images={project.images} />
                  </div>
                </>
              )}

              <MarkdownRenderer
                className="prose-sm prose overflow-auto break-words prose-headings:text-[#9E9A93] prose-strong:text-[#1C1C1A] text-[#1C1C1A]/75 marker:text-[#9E9A93]"
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
