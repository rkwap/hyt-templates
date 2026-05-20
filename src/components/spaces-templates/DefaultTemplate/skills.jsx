import { isEmpty } from "lodash";
import { ensureArray, hasContent } from "./utils";

const Skills = ({ skills }) => {
  const safeSkills = ensureArray(skills).filter(
    (skill) => hasContent(skill?.label) || hasContent(skill?.value)
  );

  if (isEmpty(safeSkills)) {
    return null;
  }

  return (
    <section
      className="mt-2 flex flex-wrap gap-2 max-sm:items-center max-sm:justify-center"
      id="skills"
    >
      {safeSkills.slice(0, 6).map((skill, index) => (
        <span
          className="cursor-pointer rounded-xl border border-secondary/20 bg-primary px-2 py-1 font-bold text-sm text-white shadow-sm duration-100 ease-in-out hover:bg-background hover:text-primary"
          key={skill?.value || skill?.label || index}
        >
          {skill?.label || skill?.value}
        </span>
      ))}
    </section>
  );
};

export default Skills;
