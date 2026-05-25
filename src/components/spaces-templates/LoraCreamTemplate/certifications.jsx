function formatIssueDate(dateStr) {
  if (!dateStr) {
    return "";
  }
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Certifications(props) {
  const data = props.data ?? props;
  const certifications = data.certifications ?? [];
  if (!certifications.length) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-6 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Certifications
      </h2>
      <div className="space-y-4">
        {certifications.map((cert, i) => {
          const name = cert.title ?? cert.name;
          const url = cert.certificate_url ?? cert.url;
          const date = cert.issue_date
            ? formatIssueDate(cert.issue_date)
            : cert.year;

          return (
            <div className="relative pl-6" key={i}>
              {/* Gold dot marker */}
              <div className="absolute top-[5px] left-0 h-2 w-2 rounded-full border-2 border-[#C9A84C] bg-[#F6F3EE]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  {url ? (
                    <a
                      className="font-semibold text-[#1C1C1A] text-sm transition-colors duration-150 hover:text-[#C9A84C]"
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {name}
                    </a>
                  ) : (
                    <h3 className="font-semibold text-[#1C1C1A] text-sm">
                      {name}
                    </h3>
                  )}
                  {cert.issuer && (
                    <p className="mt-0.5 text-[#9E9A93] text-xs">
                      {cert.issuer}
                    </p>
                  )}
                </div>
                {date && (
                  <span className="mt-0.5 flex-shrink-0 text-[#9E9A93] text-[10px]">
                    {date}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
