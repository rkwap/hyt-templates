import { ExternalLink } from "lucide-react";
import Link from "next/link";

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

const Freelancers = ({ freelancers_ih = [] }) => {
  if (!freelancers_ih.length) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4" id="freelance-projects">
      <h2 className="pt-4 font-bold font-mono text-3xl text-white">
        Freelance Projects
      </h2>
      <div className="flex flex-col items-start justify-between gap-3">
        {freelancers_ih.map((freelancer, index) => (
          <div
            className={`w-full rounded-lg border border-l-4 bg-zinc-900 px-5 py-5 shadow-sm ${
              index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500"
            }`}
            id={`freelance-project-${index + 1}`}
            key={index}
          >
            <h3 className="line-clamp-2 pt-0 font-mono font-semibold text-white text-xl">
              {freelancer.link ? (
                <Link
                  className="inline-flex items-center gap-1 transition-colors hover:text-green-400"
                  href={freelancer.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {freelancer.name}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ) : (
                <span>{freelancer.name}</span>
              )}
            </h3>
            <div className="mt-2 overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(freelancer.description)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freelancers;
