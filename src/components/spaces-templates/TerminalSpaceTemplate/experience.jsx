"use client";
import { formatDate, sortByEndDate } from "@/utils/dateTime";

function renderMarkdown(text = "") {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span className="block" key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong className="text-white" key={j}>
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    );
  });
}

function ExperienceCard({ job, index }) {
  return (
    <div id={`experience-${index + 1}`}>
      <div className="rounded-xl border border-zinc-700 bg-zinc-900 shadow-black/60 shadow-lg transition-all duration-700 ease-out">
        <div className="p-4 pb-2">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
            <h3 className="line-clamp-2 flex-1 font-mono font-semibold text-white text-xl">
              {job.title}
            </h3>
            <span className="whitespace-nowrap rounded-full border border-zinc-600 bg-zinc-800 px-2.5 py-0.5 font-mono text-xs text-zinc-400">
              {`${formatDate(job.duration.start_date)} - ${formatDate(job.duration.end_date)}`}
            </span>
          </div>
        </div>

        <div className="overflow-hidden transition-all duration-700 ease-out">
          <div className="px-4 pb-4">
            <p className="mb-2 font-bold font-mono text-sm text-green-400">
              @{job.company}
            </p>
            <div className="overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(job.brief)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience = ({ experience = [] }) => {
  if (!experience.length) {
    return null;
  }
  const sorted = sortByEndDate(experience);

  return (
    <section id="experience">
      <h2 className="pt-4 pb-4 font-bold font-mono text-3xl text-white">
        Experience
      </h2>

      <div className="flex flex-col gap-4 pb-8">
        {sorted.map((job, index) => (
          <ExperienceCard index={index} job={job} key={job.uuid ?? index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
