import { isEmpty } from "lodash";

const Skills = ({ skills }) => {
  if (isEmpty(skills)) {
    return null;
  }

  return (
    <section className="flex flex-wrap gap-3" id="skills">
      {skills.slice(0, 6).map((skill) => (
        <span
          className="cursor-pointer font-bold text-sm hover:underline"
          key={skill.value}
        >
          #{skill.label}
        </span>
      ))}
    </section>
  );
};

export default Skills;
