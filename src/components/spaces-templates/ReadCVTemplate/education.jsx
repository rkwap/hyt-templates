import { isEmpty } from "lodash";
import { getYear } from "@/utils/dateTime";

const Education = ({ education }) => {
  if (isEmpty(education)) {
    return null;
  }

  return (
    <section className="my-[3.75rem] text-sm" id="education">
      <h2 className="mb-[0.7rem] text-readcv-primary">Education</h2>
      <div className="mt-6 ml-4 flex flex-col gap-9 sm:ml-0">
        {education?.map((edu, index) => (
          <EducationItem edu={edu} id={`education-${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
};

function EducationItem({ edu, id }) {
  const startYear = getYear(edu.duration.start_date);
  const endYear =
    edu.duration.end_date && edu.duration.end_date !== "Present"
      ? getYear(edu.duration.end_date)
      : "Present";
  const cgpa = Number(edu?.cgpa);
  const hasCgpa = Number.isFinite(cgpa) && cgpa > 0;

  return (
    <div className={"flex flex-col"} id={id}>
      <div className="grid items-start gap-1 sm:grid-cols-7">
        <div className="col-span-2">
          <span className="text-readcv-grey">
            {`${startYear} — ${endYear}`}
          </span>
        </div>
        <div className="col-span-5">
          <div className="overflow-auto text-readcv-primary">
            {edu.degree} <br />{" "}
            <span className="text-readcv-secondary">{edu.institution}</span>
            {hasCgpa && (
              <>
                <br />
                <span className="text-readcv-grey">{`CGPA: ${cgpa}/10`}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
