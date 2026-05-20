import { isEmpty } from "lodash";
import { ensureArray, getYearRange, hasContent } from "./utils";

const Education = ({ education }) => {
  const safeEducation = ensureArray(education).filter(
    (edu) => hasContent(edu?.institution) || hasContent(edu?.degree)
  );

  if (isEmpty(safeEducation)) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="education">
      <h2 className="font-bold text-3xl">Education</h2>
      <ul className="mt-8 flex list-disc flex-col space-y-4 pl-4">
        {safeEducation.map((edu, index) => (
          <EducationItem edu={edu} id={`education-${index + 1}`} key={index} />
        ))}
      </ul>
    </section>
  );
};

function EducationItem({ edu, id }) {
  const yearRange = getYearRange(edu?.duration);
  const cgpa = Number(edu?.cgpa);
  const hasCgpa = Number.isFinite(cgpa) && cgpa > 0;

  return (
    <li id={id}>
      <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-center md:gap-4">
        <div className="flex-1">
          {hasContent(edu?.institution) && (
            <h3 className="font-semibold text-xl">{edu.institution}</h3>
          )}
          {hasContent(edu?.degree) && (
            <p className="font-medium text-base text-gray-600">{edu.degree}</p>
          )}
          {hasCgpa && (
            <p className="text-gray-500 text-sm">{`CGPA: ${cgpa}/10`}</p>
          )}
        </div>
        {yearRange && (
          <p className="whitespace-nowrap font-medium text-gray-500 text-sm md:text-right">
            {yearRange}
          </p>
        )}
      </div>
    </li>
  );
}

export default Education;
