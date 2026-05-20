import MarkdownRenderer from "@/components/markdown-renderer";

const { Badge } = require("@/components/ui/badge");

import { isEmpty } from "lodash";
import { formatDate, sortByEndDate } from "@/utils/dateTime";

const {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} = require("@/components/ui/card");

const Experience = ({ experience }) => {
  if (isEmpty(experience)) {
    return null;
  }
  const sortedExperience = sortByEndDate(experience);

  return (
    <section className="space-y-4" id="experience">
      <h2 className="font-bold font-mono text-3xl">Experience</h2>
      {sortedExperience?.map((job, index) => (
        <Card
          className={`border-l-4 transition-colors ${
            index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500"
          } bg-secondary/5`}
          id={`experience-${index + 1}`}
          key={index}
        >
          <CardHeader className="pb-2">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
              <CardTitle className="line-clamp-2 flex-1 font-mono">
                {job.title}
              </CardTitle>
              <Badge
                className="bg-purple-50 font-mono dark:text-black"
                variant="outline"
              >
                {`${formatDate(job.duration.start_date)} - ${formatDate(
                  job.duration.end_date
                )}`}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p
              className={`mb-1 font-bold font-mono text-sm ${
                index % 2 === 0 ? "text-purple-500" : "text-blue-500"
              }`}
            >
              @{job.company}
            </p>
            <MarkdownRenderer
              className="overflow-auto break-words font-mono"
              config={{ exclude: ["headings"] }}
            >
              {job.brief}
            </MarkdownRenderer>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Experience;
