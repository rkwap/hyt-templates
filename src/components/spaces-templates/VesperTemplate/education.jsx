function formatYear(dateStr) {
  if (!dateStr) {
    return "";
  }
  return new Date(dateStr).getFullYear().toString();
}

export default function Education(props) {
  const data = props.data ?? props;
  const education = data.education ?? [];
  if (!education.length) {
    return null;
  }

  return (
    <section id="education">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        Education
      </h2>

      <ol className="space-y-6">
        {education.map((edu, i) => {
          const school = edu.institution ?? edu.school;
          const start = formatYear(edu.duration?.start_date);
          const end = formatYear(edu.duration?.end_date);
          const dateRange = start && end ? `${start} – ${end}` : start || end;

          return (
            <li className="flex gap-5" key={i}>
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/60 font-semibold text-xs text-zinc-400">
                {i + 1}
              </span>
              <div className="flex-1 border-zinc-800 border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-base text-zinc-100 leading-snug">
                    {edu.degree}
                  </h3>
                  {dateRange && (
                    <span className="whitespace-nowrap text-sm text-zinc-500">
                      {dateRange}
                    </span>
                  )}
                </div>
                {school && (
                  <p className="mt-1 text-sm text-zinc-400">{school}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
