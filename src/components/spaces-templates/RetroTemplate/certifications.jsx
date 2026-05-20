import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import { formatDate } from "@/utils/dateTime";

const Certifications = ({ certifications }) => {
  if (isEmpty(certifications)) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="certifications">
      <h2 className="font-bold font-mono text-3xl">Certifications</h2>
      <ul className="list-decimal space-y-4 pl-8 lg:space-y-2">
        {certifications?.map((cert, index) => (
          <li id={`certificate-${index + 1}`} key={`certificate-${index + 1}`}>
            <span className="flex items-center justify-between">
              <CustomLink
                className="font-mono font-semibold text-md text-zinc-700 md:text-lg"
                iconSize={15}
                label={cert.title}
                rel="noopener noreferrer nofollow"
                target="_blank"
                url={cert.certificate_url}
              />
              <span className="text-right font-mono font-semibold text-secondary text-sm">
                {formatDate(cert.issue_date)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
