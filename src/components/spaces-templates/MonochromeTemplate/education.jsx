import { isEmpty } from "lodash";
import { getYear } from "@/utils/dateTime";

export default function Education({ education }) {
  if (isEmpty(education)) {
    return null;
  }

  return (
    <section
      className="mt-5 w-full border-monochrome-tertiary border-t-4 pt-5"
      id="education"
    >
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">Education</h2>
      <ul className="flex flex-col gap-3 pl-1 md:pl-4">
        {education.map((edu, index) => (
          <li
            className="flex flex-col justify-between gap-1 md:flex-row md:gap-2"
            id={`education-${index + 1}`}
            key={index}
          >
            <EducationItem edu={edu} />
            <div className="text-monochrome-secondary text-sm">
              {getYear(edu.duration.start_date)} —{" "}
              {getYear(edu.duration.end_date)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EducationItem({ edu }) {
  const cgpa = Number(edu?.cgpa);
  const hasCgpa = Number.isFinite(cgpa) && cgpa > 0;

  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-sm md:text-lg">{edu.degree}</span>
      <span className="text-monochrome-secondary text-xs md:text-sm">
        {edu.institution}
      </span>
      {hasCgpa && (
        <span className="text-monochrome-secondary text-xs md:text-sm">{`CGPA: ${cgpa}/10`}</span>
      )}
    </div>
  );
}
