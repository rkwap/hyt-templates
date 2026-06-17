function parseBold(text) {
  if (!text) {
    return null;
  }
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong className="font-semibold text-zinc-200" key={i}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function formatDuration(duration) {
  if (!duration) {
    return "";
  }
  const fmt = (d) => {
    if (!d || d === "Present") {
      return "Present";
    }
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };
  return `${fmt(duration.start_date)} – ${fmt(duration.end_date)}`;
}

export default function Experience(props) {
  const data = props.data ?? props;
  const experience = data.experience ?? data.workExperience ?? [];
  if (!experience.length) {
    return null;
  }

  return (
    <section id="experience">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        Experience
      </h2>

      <ol className="space-y-8">
        {experience.map((exp, i) => {
          const dateRange = exp.dates ?? formatDuration(exp.duration);
          const description = exp.brief ?? exp.description;
          const tags = Array.isArray(exp.tags) ? exp.tags : [];

          return (
            <li className="flex gap-5" key={i}>
              {/* Number badge */}
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/60 font-semibold text-xs text-zinc-400">
                {i + 1}
              </span>

              <div className="flex-1 border-zinc-800 border-b pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-lg text-zinc-100 leading-snug">
                    {exp.title}
                    {exp.company && (
                      <span className="ml-2 font-normal text-zinc-400">
                        · {exp.company}
                      </span>
                    )}
                  </h3>
                  {dateRange && (
                    <span className="whitespace-nowrap text-sm text-zinc-500">
                      {dateRange}
                    </span>
                  )}
                </div>

                {description && (
                  <p className="mt-3 whitespace-pre-line text-sm text-zinc-400 leading-relaxed">
                    {parseBold(description)}
                  </p>
                )}

                {tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-0.5 text-xs text-zinc-400"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
