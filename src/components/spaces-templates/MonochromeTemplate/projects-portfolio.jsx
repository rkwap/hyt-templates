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
      className="bborder-monochrome-tertiary mt-5 w-full border-t-4 pt-5"
      id="design-portfolio"
    >
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">
        Design Portfolio
      </h2>
      <div className="flex flex-col gap-2">
        {projects?.map((project, index) => (
          <div
            className="flex flex-col gap-4 border-secondary/20 border-b py-1 pl-1 last:border-b-0 md:px-4"
            id={`design-portfolio-${index + 1}`}
            key={index}
          >
            {/* <div className="py-1 pl-1 md:px-4"> */}
            <h3 className="text-lg">
              {project.project_url ? (
                <CustomLink label={project.title} url={project.project_url} />
              ) : (
                <div className="overflow-auto">{project.title}</div>
              )}
            </h3>
            <div className="flex flex-col gap-2">
              {project?.images && (
                <>
                  <div className="hidden flex-row flex-wrap gap-4 md:flex md:gap-8">
                    {project.images.map((image, idx) => (
                      <ProjectImageModal
                        alt={`Project Image ${idx + 1}`}
                        className="border-[0.8px] border-gray-300/30 shadow-sm"
                        height={120}
                        key={idx}
                        src={image}
                        width={200}
                      />
                    ))}
                  </div>
                  <div className="md:hidden">
                    <ImagesCarousel images={project.images} />
                  </div>
                </>
              )}
              <MarkdownRenderer
                className="prose-sm prose col-span-3 overflow-auto break-words prose-headings:text-monochrome-secondary prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary"
                config={{ exclude: ["headings"] }}
              >
                {project.description}
              </MarkdownRenderer>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
