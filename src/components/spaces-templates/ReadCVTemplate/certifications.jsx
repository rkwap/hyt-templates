import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import { getYear } from "@/utils/dateTime";

const Certifications = ({ certifications }) => {
  if (isEmpty(certifications)) {
    return null;
  }

  return (
    <section className="my-[3.75rem] text-sm" id="certifications">
      <h2 className="mb-[0.7rem] text-zinc-100">Certifications</h2>
      <div className="mt-6 ml-4 flex flex-col gap-6 sm:ml-0">
        {certifications?.map((cert, index) => (
          <div
            className={"flex flex-col"}
            id={`certificate-${index + 1}`}
            key={index}
          >
            <div className="grid gap-1 sm:ml-0 sm:grid-cols-5">
              <div className="col-span-2 mt-1">
                <span className="text-zinc-500">
                  {`${getYear(cert.issue_date)}`}
                </span>
              </div>
              <div className="col-span-3 space-y-1">
                <CustomLink
                  className="text-zinc-100"
                  label={cert.title}
                  url={cert.certificate_url}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
