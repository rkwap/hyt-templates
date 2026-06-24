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

const Experience = ({ experience = [] }) => {
  if (!experience.length) {
    return null;
  }
  const sorted = sortByEndDate(experience);

  return (
    <section className="mt-8 space-y-4" id="experience">
      <h2 className="font-bold font-mono text-3xl text-white">Experience</h2>
      {sorted.map((job, index) => (
        <div
          className={`rounded-lg border border-l-4 bg-zinc-900 shadow-sm transition-colors ${
            index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500"
          }`}
          id={`experience-${index + 1}`}
          key={index}
        >
          <div className="p-4 pb-2">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
              <h3 className="line-clamp-2 flex-1 font-mono font-semibold text-white text-xl">
                {job.title}
              </h3>
              <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-0.5 font-mono font-semibold text-purple-300 text-xs">
                {`${formatDate(job.duration.start_date)} - ${formatDate(job.duration.end_date)}`}
              </span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <p
              className={`mb-2 font-bold font-mono text-sm ${
                index % 2 === 0 ? "text-purple-400" : "text-blue-400"
              }`}
            >
              @{job.company}
            </p>
            <div className="overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(job.brief)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
