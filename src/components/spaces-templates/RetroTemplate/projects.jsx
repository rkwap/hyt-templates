import MarkdownRenderer from "@/components/markdown-renderer";

const { Badge } = require("@/components/ui/badge");

import { formatDate } from "@/utils/dateTime";

const { Card, CardHeader, CardContent } = require("@/components/ui/card");

import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";

const Projects = ({ projects }) => {
  if (isEmpty(projects)) {
    return null;
  }

  return (
    <section className="mt-8 space-y-4" id="side-projects">
      <h2 className="pt-4 font-bold font-mono text-3xl">Side Projects</h2>
      {projects?.map((project, index) => (
        <Card id={`side-project-${index + 1}`} key={index}>
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
              <Badge
                className="bg-secondary/5 font-mono dark:text-black"
                variant="outline"
              >
                {`${formatDate(project.duration.start_date)} - ${formatDate(
                  project.duration.end_date
                )}`}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <MarkdownRenderer
              className="font-mono"
              config={{ exclude: ["headings"] }}
            >
              {project.description}
            </MarkdownRenderer>
            {project?.photo && (
              <ProjectImageModal
                alt="Project-Picture"
                className="border-[0.8px] border-gray-300 shadow-sm"
                src={project?.photo}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Projects;
