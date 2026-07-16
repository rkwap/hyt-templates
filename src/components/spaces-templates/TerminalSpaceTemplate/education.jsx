import { formatDate } from "@/utils/dateTime";

function EducationItem({ edu, id }) {
  const startYear = formatDate(edu.duration.start_date, { year: "numeric" });
  const endYear =
    edu.duration.end_date && edu.duration.end_date !== "Present"
      ? formatDate(edu.duration.end_date, { year: "numeric" })
      : "Present";
  const cgpa = Number(edu?.cgpa);
  const hasCgpa = Number.isFinite(cgpa) && cgpa > 0;

  return (
    <li className="text-zinc-300" id={id}>
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h3 className="font-mono font-semibold text-white text-xl">
            {edu.institution}
          </h3>
          <p className="font-mono font-semibold text-base text-zinc-400">
            {edu.degree}
          </p>
          {hasCgpa && (
            <p className="font-mono text-sm text-zinc-500">{`CGPA: ${cgpa}/10`}</p>
          )}
        </div>
        <p className="mt-1 whitespace-nowrap font-mono font-semibold text-sm text-zinc-400 md:mt-0 md:text-right">
          {`${startYear} - ${endYear}`}
        </p>
      </div>
    </li>
  );
}

const Education = ({ education = [] }) => {
  if (!education.length) {
    return null;
  }

  return (
    <section className="mb-8 space-y-4" id="education">
      <h2 className="font-bold font-mono text-3xl text-white">Education</h2>
      <ul className="mt-4 flex list-disc flex-col space-y-4 pl-4 marker:text-green-500">
        {education.map((edu, index) => (
          <EducationItem edu={edu} id={`education-${index + 1}`} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Education;
