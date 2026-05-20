import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getYear, sortByEndDate } from "@/utils/dateTime";

export default function Experience({ experience }) {
  if (isEmpty(experience)) {
    return null;
  }
  const sortedExperience = sortByEndDate(experience);

  return (
    <section
      className="mt-5 w-full border-monochrome-tertiary border-t-4 pt-5"
      id="experience"
    >
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {sortedExperience.map((job, index) => (
          <div
            className="relative border-secondary/20 border-b last:border-b-0"
            id={`experience-${index + 1}`}
            key={index}
          >
            <div className="py-1 pl-1 md:px-4">
              <div className="mb-1 flex flex-col justify-between gap-1 md:flex-row md:gap-2">
                <h3 className="line-clamp-2 font-semibold text-lg">
                  {job.title} @ {job.company}
                </h3>
                <p className="mb-1 truncate font-medium text-monochrome-secondary text-sm">
                  {`${getYear(job.duration.start_date)} — ${getYear(job.duration.end_date)}`}
                </p>
              </div>
              <div className="prose prose-secondary prose-li:mt-1 prose-p:mt-2 prose-ul:mt-2 prose-li:mb-1 prose-p:mb-4 prose-ul:mb-4 max-w-none overflow-auto break-words text-primary/90 prose-p:leading-relaxed marker:text-secondary/60">
                <MarkdownRenderer
                  className="prose-sm prose overflow-auto break-words prose-headings:text-monochrome-secondary prose-headings:text-sm prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary"
                  config={{ exclude: ["headings"] }}
                >
                  {job.brief}
                </MarkdownRenderer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
