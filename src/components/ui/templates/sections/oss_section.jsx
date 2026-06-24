import { ExternalLink } from "lucide-react";
import Link from "next/link";

const OSSSection = ({ oss = [] }) => {
  if (!oss.length) {
    return null;
  }

  return (
    <section className="mt-8 w-full space-y-4" id="oss-contributions">
      <h2 className="pt-4 font-bold font-mono text-3xl text-white">
        OSS Contributions
      </h2>
      <div className="flex w-full flex-col items-start justify-between gap-3">
        {oss.map((item, index) => (
          <div
            className={`w-full rounded-lg border border-l-4 bg-zinc-900 shadow-sm ${
              index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500"
            }`}
            id={`oss-contribution-${index + 1}`}
            key={index}
          >
            <h3 className="line-clamp-2 pt-3 pl-6 font-mono font-semibold text-white text-xl">
              {item.contribution_url ? (
                <Link
                  className="inline-flex items-center gap-1 transition-colors hover:text-green-400"
                  href={item.contribution_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ) : (
                <span>{item.title}</span>
              )}
            </h3>
            {item.brief && (
              <p className="p-6 pt-2 font-mono text-sm text-zinc-300 leading-relaxed">
                {item.brief}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OSSSection;
