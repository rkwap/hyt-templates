import { isEmpty } from "lodash";
import { formatDate } from "@/utils/dateTime";

const Education = ({ education }) => {
  if (isEmpty(education)) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="education">
      <h2 className="font-bold font-mono text-3xl">Education</h2>
      <ul className="mt-8 flex list-disc flex-col space-y-4 pl-4 marker:text-green-600">
        {education?.map((edu, index) => (
          <EducationItem edu={edu} id={`education-${index + 1}`} key={index} />
        ))}
      </ul>
    </section>
  );
};

function EducationItem({ edu, id }) {
  const startYear = formatDate(edu.duration.start_date, { year: "numeric" });
  const endYear =
    edu.duration.end_date && edu.duration.end_date !== "Present"
      ? formatDate(edu.duration.end_date, { year: "numeric" })
      : "Present";
  const cgpa = Number(edu?.cgpa);
  const hasCgpa = Number.isFinite(cgpa) && cgpa > 0;

  return (
    <li id={id}>
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h3 className="font-mono font-semibold text-xl">{edu.institution}</h3>
          <p className="font-mono font-semibold text-base text-secondary">
            {edu.degree}
          </p>
          {hasCgpa && (
            <p className="font-mono text-secondary text-sm">{`CGPA: ${cgpa}/10`}</p>
          )}
        </div>
        <p className="mt-1 whitespace-nowrap font-mono font-semibold text-secondary text-sm md:mt-0 md:text-right">
          {`${startYear} - ${endYear}`}
        </p>
      </div>
    </li>
  );
}

export default Education;
