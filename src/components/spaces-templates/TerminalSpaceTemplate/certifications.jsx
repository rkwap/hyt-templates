import Link from "next/link";
import { formatDate } from "@/utils/dateTime";

const Certifications = ({ certifications = [] }) => {
  if (!certifications.length) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="certifications">
      <h2 className="font-bold font-mono text-3xl text-white">
        Certifications
      </h2>
      <ol className="list-decimal space-y-3 pl-8 lg:space-y-2">
        {certifications.map((cert, index) => (
          <li id={`certificate-${index + 1}`} key={`certificate-${index + 1}`}>
            <span className="flex items-center justify-between gap-2">
              <Link
                className="inline-flex items-center gap-1 font-mono font-semibold text-zinc-300 transition-colors hover:text-green-400 md:text-lg"
                href={cert.certificate_url}
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {cert.title}
                <span className="text-sm text-zinc-400">↗</span>
              </Link>
              <span className="whitespace-nowrap text-right font-mono font-semibold text-sm text-zinc-500">
                {formatDate(cert.issue_date)}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Certifications;
