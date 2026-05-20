import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import { sortByEndDate } from "@/utils/dateTime";
import { ensureArray, getDateRange, hasContent, joinParts } from "./utils";

const Experience = ({ experience }) => {
  const safeExperience = ensureArray(experience).filter(
    (job) =>
      hasContent(job?.title) ||
      hasContent(job?.company) ||
      hasContent(job?.brief)
  );

  if (isEmpty(safeExperience)) {
    return null;
  }
  const sortedExperience = sortByEndDate(safeExperience);

  return (
    <section className="space-y-4" id="experience">
      <h2 className="font-bold text-3xl">Experience</h2>
      <div className="mt-8 rounded-xl border border-secondary/20">
        {sortedExperience?.map((job, index) => (
          <WorkExperienceItem
            id={`experience-${index + 1}`}
            job={job}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

function WorkExperienceItem({ job, id }) {
  const dateRange = getDateRange(job?.duration);
  const titleLine = joinParts([job?.title, job?.company]);

  return (
    <div
      className="relative border-secondary/20 border-b last:border-b-0"
      id={id}
    >
      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-xl">
          {titleLine || "Experience"}
        </h3>
        {dateRange && (
          <p className="mb-2 truncate font-medium text-secondary text-sm">
            {dateRange}
          </p>
        )}
        {hasContent(job?.brief) && (
          <MarkdownRenderer
            className="overflow-auto break-words"
            config={{ exclude: ["headings"] }}
          >
            {job.brief}
          </MarkdownRenderer>
        )}
      </div>
    </div>
  );
}

export default Experience;
