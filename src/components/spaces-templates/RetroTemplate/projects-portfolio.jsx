import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import ImagesCarousel from "@/components/ui/templates/components/image-carousel";

const ProjectPortfolio = ({ projects }) => {
  if (isEmpty(projects)) {
    return null;
  }

  return (
    <section className="mt-8 space-y-4" id="design-portfolio">
      <h2 className="pt-4 font-bold font-mono text-3xl">Design Portfolio</h2>
      {projects?.map((project, index) => (
        <Card id={`design-portfolio-${index + 1}`} key={index}>
          <CardHeader className="pb-2">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
              <h3 className="line-clamp-2 flex-1 font-mono font-semibold text-xl">
                {project.project_url ? (
                  <CustomLink
                    className="inline-flex items-center gap-1 text-black hover:underline"
                    iconSize={16}
                    label={project.title}
                    url={project.project_url}
                  />
                ) : (
                  project.title
                )}
              </h3>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 p-0 md:p-6 md:pt-0">
            <div className="mt-4 hidden flex-row flex-wrap gap-4 md:flex md:gap-2">
              {project?.images?.map((image, idx) => (
                <ProjectImageModal
                  alt={`Project Image ${idx + 1}`}
                  className="border-[0.8px] border-gray-300 shadow-sm"
                  height={100}
                  key={idx}
                  src={image}
                  width={180}
                />
              ))}
            </div>
            <div className="md:hidden">
              {project?.images && <ImagesCarousel images={project.images} />}
            </div>
            {project.description && (
              <MarkdownRenderer
                className="p-6 pt-0 font-mono md:p-0"
                config={{ exclude: ["headings"] }}
              >
                {project.description}
              </MarkdownRenderer>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default ProjectPortfolio;
