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
    <section>
      <h2 className="mb-6 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Education
      </h2>
      <div className="space-y-5">
        {education.map((edu, i) => {
          const school = edu.institution ?? edu.school;
          const dateRange = `${formatYear(edu.duration.start_date)} — ${formatYear(edu.duration.end_date)}`;

          return (
            <div key={i}>
              <h3 className="font-semibold text-[#1C1C1A] text-sm leading-tight">
                {edu.degree}
              </h3>
              {school && (
                <p className="mt-0.5 font-medium text-[#9E9A93] text-xs">
                  {school}
                </p>
              )}
              {dateRange && (
                <p className="mt-0.5 text-[#9E9A93]/60 text-[10px]">
                  {dateRange}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
