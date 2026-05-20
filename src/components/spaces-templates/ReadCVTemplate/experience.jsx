import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getYear, sortByEndDate } from "@/utils/dateTime";

const Experience = ({ experience }) => {
  if (isEmpty(experience)) {
    return null;
  }
  const sortedExperience = sortByEndDate(experience);

  return (
    <section className="my-[3.75rem] text-sm" id="experience">
      <h2 className="mb-[0.7rem] text-readcv-primary">Experience</h2>
      <div className="mt-6 ml-4 flex flex-col gap-9 sm:ml-0">
        {sortedExperience?.map((job, index) => (
          <div
            className={"flex flex-col"}
            id={`experience-${index + 1}`}
            key={index}
          >
            <div className="grid items-start gap-1 sm:grid-cols-7">
              <div className="col-span-2">
                <span className="text-readcv-grey">
                  {`${getYear(job.duration.start_date)} — ${getYear(job.duration.end_date)}`}
                </span>
              </div>
              <div className="col-span-5 space-y-1">
                <div className="overflow-auto text-readcv-primary">
                  {job.title} at <span>{job.company}</span>
                </div>
                <MarkdownRenderer
                  className="prose-sm prose overflow-auto break-words prose-headings:text-readcv-secondary prose-headings:text-sm prose-strong:text-readcv-secondary text-readcv-secondary marker:text-readcv-secondary"
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
};

export default Experience;
