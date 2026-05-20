import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import { getYear } from "@/utils/dateTime";

export default function Certifications({ certifications }) {
  if (isEmpty(certifications)) {
    return null;
  }

  return (
    <section
      className="mt-5 w-full border-monochrome-tertiary border-t-4 pt-5"
      id="certifications"
    >
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">
        Certifications
      </h2>
      <div className="flex flex-col gap-3 pl-1 md:pl-4">
        {certifications?.map((cert, index) => (
          <div
            className="flex flex-col justify-between gap-1 md:flex-row md:gap-2"
            id={`certificate-${index + 1}`}
            key={index}
          >
            <CustomLink
              className="text-sm md:text-lg"
              label={cert.title}
              url={cert.certificate_url}
            />
            <div className="text-monochrome-secondary text-xs md:text-sm">{`${getYear(cert.issue_date)}`}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
