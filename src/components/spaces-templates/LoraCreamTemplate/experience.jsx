
function parseBold(text) {
  if (!text) return null;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-[#1C1C1A]">{part}</strong> : part
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
  return `${fmt(duration.start_date)} — ${fmt(duration.end_date)}`;
}

function Pill({ label }) {
  return (
    <span className="rounded-full border border-[#DDD9D0] bg-[#F6F3EE] px-2 py-0.5 text-[#9E9A93] text-[10px]">
      {label}
    </span>
  );
}

export default function Experience(props) {
  const data = props.data ?? props;
  const experience = data.experience ?? data.workExperience ?? [];
  if (!experience.length) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-8 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Work Experience
      </h2>
      <div>
        {experience.map((exp, i) => {
          const dateRange = exp.dates ?? formatDuration(exp.duration);
          const description = exp.brief ?? exp.description;
          const tags = Array.isArray(exp.tags) ? exp.tags : [];

          return (
            <div className="relative mb-10 pl-6" key={i}>
              {/* Gold timeline dot */}
              <div className="absolute top-[6px] left-0 h-2 w-2 rounded-full bg-[#C9A84C]" />
              {/* Vertical connector line (except last) */}
              {i < experience.length - 1 && (
                <div className="absolute top-4 bottom-[-32px] left-[3px] w-px bg-[#DDD9D0]" />
              )}

              <h3 className="font-semibold text-[#1C1C1A] text-base leading-snug">
                {exp.title}
              </h3>
              <p className="mt-0.5 font-medium text-[#C9A84C] text-sm">
                {exp.company}
                {dateRange && (
                  <span className="font-normal text-[#9E9A93]">
                    {" "}
                    · {dateRange}
                  </span>
                )}
              </p>
              {description && (
                <p className="mt-2 whitespace-pre-line text-[#1C1C1A]/75 text-sm leading-relaxed">
                  {parseBold(description)}
                </p>
              )}
              {tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <Pill key={tag} label={tag} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
