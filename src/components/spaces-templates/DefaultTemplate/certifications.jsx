import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import { formatDate } from "@/utils/dateTime";
import { ensureArray, hasContent } from "./utils";

const Certifications = ({ certifications }) => {
  const safeCertifications = ensureArray(certifications).filter(
    (cert) => hasContent(cert?.title) || hasContent(cert?.certificate_url)
  );

  if (isEmpty(safeCertifications)) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="certifications">
      <h2 className="font-bold text-3xl">Certifications</h2>
      <ul className="space-y-4 lg:space-y-2">
        {safeCertifications.map((cert, index) => (
          <CertificationsItem
            cert={cert}
            id={`certificate-${index + 1}`}
            key={`cert-${index + 1}`}
          />
        ))}
      </ul>
    </section>
  );
};

function CertificationsItem({ cert, id }) {
  return (
    <li id={id}>
      {cert?.certificate_url ? (
        <CustomLink
          className="font-medium text-md text-zinc-700 md:text-lg"
          iconSize={15}
          label={cert?.title || cert.certificate_url}
          rel="noopener noreferrer nofollow"
          target="_blank"
          url={cert.certificate_url}
        />
      ) : (
        <span className="font-medium text-md text-zinc-700 md:text-lg">
          {cert?.title}
        </span>
      )}
      {hasContent(cert?.issue_date) && (
        <span className="text-right font-medium text-secondary text-sm">
          {formatDate(cert.issue_date)}
        </span>
      )}
    </li>
  );
}

export default Certifications;
