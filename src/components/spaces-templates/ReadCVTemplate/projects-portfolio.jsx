import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import ImagesCarousel from "@/components/ui/templates/components/image-carousel";

export default function ProjectPortfolio({ projects }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="my-[3.75rem] text-sm" id="design-portfolio">
      <h2 className="mb-[0.7rem] text-readcv-primary">Design Portfolio</h2>
      <div className="mt-6 ml-4 flex flex-col gap-9 sm:ml-0">
        {projects?.map((project, index) => (
          <div
            className="flex flex-col"
            id={`design-portfolio-${index + 1}`}
            key={index}
          >
            <div className="grid items-start gap-1 sm:grid-cols-7">
              <div className="col-span-5 space-y-1">
                <h3>
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
                </h3>
                {project?.images && (
                  <>
                    <div className="hidden grid-cols-1 gap-4 sm:grid-cols-1 md:grid lg:grid-cols-2">
                      {project.images.map((image, idx) => (
                        <ProjectImageModal
                          alt={`Project Image ${idx + 1}`}
                          className="border-[0.8px] border-gray-300/30 shadow-sm"
                          height={100}
                          key={idx}
                          src={image}
                          width={180}
                        />
                      ))}
                    </div>
                    <div className="md:hidden">
                      <ImagesCarousel images={project.images} />
                    </div>
                  </>
                )}
                <MarkdownRenderer
                  className="prose-sm prose overflow-auto break-words prose-headings:text-readcv-secondary prose-strong:text-readcv-secondary text-readcv-secondary marker:text-readcv-secondary"
                  config={{ exclude: ["headings"] }}
                >
                  {project.description}
                </MarkdownRenderer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
